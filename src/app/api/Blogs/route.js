import { ConnectToDB } from "@/lib/DB/db";
import BlogModel from "@/lib/models/BlogModels";
import { writeFile } from 'fs/promises';
const { NextResponse } = require("next/server");

const LoadDB = async () => {
    try {
        await ConnectToDB();
    } catch (error) {
        console.error('Database connection failed:', error);
    }
}

LoadDB();


export async function GET(request) {
    console.log('api working');
    return NextResponse.json({ msg: 'api working' })
}


export async function POST(request) {
    const formData = await request.formData();
    const timeStamps = Date.now();

    const image = formData.get('image');
    const ImageByteData = await image.arrayBuffer();
    const buffer = Buffer.from(ImageByteData);
    const path = `./public/${timeStamps}_${image.name}`;
    await writeFile(path, buffer);
    const imgurl = `/${timeStamps}_${image.name}`;

    //    const authorImage = formData.get('authorImage');
    //    const authorBinaryImage = await authorImage.arrayBuffer();
    //    const imageBuffer = Buffer.from(authorBinaryImage);
    //    const  authorPath= `./public/author/${timeStamps}_${authorImage.name}`;
    //    await writeFile(authorPath , imageBuffer)
    //    const AuthorUrl = `/${timeStamps}_${authorImage.name}`
    //    console.log(AuthorUrl);


    const BlogData = {
        title: `${formData.get('title')}`,
        description: `${formData.get('description')}`,
        author: `${formData.get('author')}`,
        authorImage: `${formData.get('authorImage')}`,
        image: `${imgurl}`,
        category: `${formData.get('category')}`,

    }

    await BlogModel.create(BlogData);
    console.log(BlogModel)


    return NextResponse.json({ msg: 'api working perfectly', success: true })

}