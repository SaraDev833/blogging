import EmailModel from "@/lib/models/EmailModel";
import { ConnectToDB } from './../../../lib/DB/db';
import { NextResponse } from "next/server";

const LoadDB = async () => {
    try {
        await ConnectToDB();
    } catch (error) {
        console.log('Database connection failed', error)
    }
}
LoadDB();


export async function GET(request) {
    const emails = await EmailModel.find({});
    return NextResponse.json({ emails });
}

export async function POST(request) {
    const formData = await request.formData();
    const email = formData.get('email');

    const existingEmail = await EmailModel.findOne({ email });

    if (existingEmail) {
        console.log('existing:', existingEmail)
        return NextResponse.json({ msg: 'Email already exists', success: false }, { status: 400 });
    }

    const emailData = {
        email: `${formData.get('email')}`,
    }
    await EmailModel.create(emailData);
    return NextResponse.json({ msg: 'email subscribed', success: true })
}
export async function DELETE(request) {
     const id = await request.nextUrl.searchParams.get('id');
     await EmailModel.findByIdAndDelete(id)

     return NextResponse.json({msg: 'email deleted!'})
}