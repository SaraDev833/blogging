import Image from 'next/image'
import React from 'react'
import { assets, blog_data } from '../../../assets/assets'
import Link from 'next/link'

const truncateText = (text , maxlength) =>{
    return text.length >maxlength ? text.substring(0 , maxlength) + "..." : text;
}

const BlogItem = ({ description, title, image, category  , id}) => {

    return (
        <div className='w-[290px] border border-black flex flex-col gap-3 hover:shadow-[-7px_7px_0_#000000]
 '>      <Link href={`/blogs/${id}`}>
            <Image src={image} width={290} height={200} alt='blog_image' className='object-cover' />
            </Link>
            <div className='p-3 '>
                <span className='px-3 py-1 bg-black text-white text-sm '>{category}</span>
                <h2 className='text-xl font-medium my-2'>{truncateText(title , 50)}</h2>
                <p className='text-sm font-normal text-gray-600 my-2'>
                    {truncateText(description , 70)}
                </p>
                <Link href={'/'} className='flex items-baseline gap-2 mb-2'>
                    <span className='text-lg font-medium text-black'>Read More</span>
                    <Image src={assets.arrow} width={12} alt='alt' />
                </Link>
            </div>
        </div>
    )
}

export default BlogItem
