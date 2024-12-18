'use client'
import BlogTable from '@/components/adminComponents/BlogTable'
import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify'

const page = () => {
  const [blog, setBlog] = useState([]);

  const fetchData = async () => {
    const response = await axios.get('/api/Blogs');
    console.log('response:', response)
    setBlog(response.data.blogs)

  }
  const deleteBlog = async (id) => {
    const response = await axios.delete('/api/Blogs', {
      params: {
        id: id
      }
    })
    toast.success('Blog deleted!');
    fetchData();

  }
  useEffect(() => {
    fetchData()

  }, [])

  return (
    <div className='w-full mx-auto'>
      <div className="my-5 sm:mt-16  mx-auto w-[800px]">
        <h3 className='text-2xl font-medium text-left '>All Blog List</h3>
        <table className='w-full text-sm text-gray-500 border my-6 border-slate-800'>
          <thead scope='col'>
            <tr>
              <th className='hidden sm:block px-6 py-3 text-sm text-slate-700 border-r border-slate-800 whitespace-nowrap'>
                Author Name
              </th>
              <th className=' px-6 py-3 text-sm text-slate-700 border-r border-slate-800 whitespace-nowrap' >
                Title
              </th>
              <th className=' px-6 py-3 text-sm text-slate-700 border-r border-slate-800 whitespace-nowrap'>
                Date
              </th>
              <th className=' px-6 py-3 text-sm text-slate-700  whitespace-nowrap'>
                Action
              </th>
            </tr>
          </thead>
          <tbody scope='row'>
            {blog.map((item, index) => {
              return (
                <BlogTable
                  title={item.title}
                  date={item.date}
                  key={item._id}
                  author={item.author}
                  id={item._id}
                  deleteBlog = {deleteBlog}
                />
              );
            })}


          </tbody>
        </table>

      </div>
    </div>
  )
}

export default page
