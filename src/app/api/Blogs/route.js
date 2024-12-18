import { ConnectToDB } from "@/lib/DB/db";
import BlogModel from "@/lib/models/BlogModels";
import { writeFile } from 'fs/promises';
const { NextResponse } = require("next/server");
const fs = require('fs');

// code for db connection before staring crud operation//
const LoadDB = async () => {
    try {
        await ConnectToDB();
    } catch (error) {
        console.error('Database connection failed:', error);
    }
}

LoadDB();



// code for getting things from db//

export async function GET(request) {
    const blogId = request.nextUrl.searchParams.get("id");
    if (blogId) {
        const blog = await BlogModel.findById(blogId)
        return NextResponse.json(blog)
    }
    else {
        const blogs = await BlogModel.find({});
        return NextResponse.json({ blogs });
    }



}


// code for posting thing in db//

export async function POST(request) {

    try {

        const formData = await request.formData();
        const timeStamps = Date.now();
        const image = formData.get('image');
        const ImageByteData = await image.arrayBuffer();
        const buffer = Buffer.from(ImageByteData);
        const path = `./public/${timeStamps}_${image.name}`;
        await writeFile(path, buffer);
        const imgurl = `/${timeStamps}_${image.name}`;

        const BlogData = {
            title: `${formData.get('title')}`,
            description: `${formData.get('description')}`,
            author: `${formData.get('author')}`,
            authorImage: `${formData.get('authorImage')}`,
            image: `${imgurl}`,
            category: `${formData.get('category')}`,

        }

        await BlogModel.create(BlogData);

        return NextResponse.json({ msg: 'Blog added successfully', success: true })

    } catch (error) {
        console.log(error)
        return NextResponse.json({ msg: 'Error in adding', success: false })
    }



}


// code for deleting items from db//

export async function DELETE(request) {
    const DeleteBlogID = await request.nextUrl.searchParams.get('id');
    const blog = await BlogModel.findById(DeleteBlogID);
    fs.unlink(`./public/${blog.image}`, () => { });
    await BlogModel.findByIdAndDelete(DeleteBlogID);

    return NextResponse.json({ msg: 'blog deletes!' })

}