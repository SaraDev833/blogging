import React from 'react'

const BlogTable = ({ title, author, date }) => {
    return (
        <tr className='border border-slate-800 '>
            <td className='text-center px-6 py-3 text-slate-700 border-r border-slate-800 whitespace-nowrap' border-r border-slate-800 whitespace-nowrap>{author ? author : 'no author'}</td>
            <td className='text-center px-6 py-3 text-slate-700 border-r border-slate-800 whitespace-nowrap'>{title ? title : 'no title'}</td>
            <td className='text-center px-6 py-3 text-slate-700 border-r border-slate-800 whitespace-nowrap'>{date ? date : 'no post'}</td>
            <td className='text-center px-6 py-3 text-red-700 border-r border-slate-800  whitespace-nowrap'>x</td>

        </tr>
    )
}

export default BlogTable
