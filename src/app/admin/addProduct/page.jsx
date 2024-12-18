"use client"
import Image from "next/image"
import { assets } from "../../../../assets/assets"
import { useState } from "react"
import axios from "axios"
import { toast } from "react-toastify"

const page = () => {
  const [image, setImage] = useState(null);
  const [data, setData] = useState({
    title: '',
    description: '',
    category: 'Startup',
    author: 'Sara Sheikh',
    authorImage: '/author.png',

  })
  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((data) => ({ ...data, [name]: value }));
    console.log(data)
  }

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    console.log(e.target)
    if (!image) {
      toast.error('Image is required.');
      return;
    }
    try {
      const formData = new FormData();
      formData.append('titl', data.title);
      formData.append('description', data.description);
      formData.append('category', data.category);
      formData.append('image', image);
      formData.append('author', data.author);
      formData.append('authorImage', data.authorImage);


      const response = await axios.post('/api/Blogs', formData);
      console.log(response)
      if (response.data.success) {
        toast.success(response.data.msg)
        setImage(null);
        setData({
          title: '',
          description: '',
          category: 'Startup',
          author: 'Sara Sheikh',
          authorImage: '/author.png',

        })
      }
    }
    catch (error) {
      toast.error("Error");
    }

  }
  return (
    <>
      <form className="py-5 sm:pt-16 px-4 sm:pl-8" onSubmit={onSubmitHandler}>
        <h3 className="text-2xl font-medium mb-4">Upload Blog</h3>
        <label htmlFor="image">
          <Image src={!image ? assets.upload_area : URL.createObjectURL(image)} width={140} height={100} alt='upload' className="mb-6" />
          <input className="hidden" required id='image' type='file' onChange={(e) => setImage(e.target.files[0])} name="image" />
        </label>
        <p className="text-xl font-medium mb-4">Blog Title</p>
        <input required onChange={onChangeHandler} name="title" value={data.title} className="w-auto sm:w-[400px] px-4 py-3 outline-none border-2 border-black ring-0 placeholder:text-slate-400 mb-6" placeholder="blog title" />
        <p className="text-xl font-medium mb-4">Blog Description</p>
        <textarea required onChange={onChangeHandler} name="description" value={data.description} className="w-auto sm:w-[400px] px-4 py-3 outline-none border-2 border-black ring-0 placeholder:text-slate-400 mb-6 " placeholder="description"  ></textarea>
        <p className="text-xl font-medium mb-4">Select Category</p>
        <select onChange={onChangeHandler} name="category" value={data.category} className='w-auto sm:w-[400px] outline-none border-2 border-black px-4 py-3 mb-6'>
          <option value='Technology'>Technology</option>
          <option value='Lifestyle'>Lifestyle</option>
          <option value='Startup'>Startup</option>
        </select>
        <br />
        <button className='bg-black font-medium text-white px-4 py-2 '>Add Blog</button>
      </form>
    </>
  )
}

export default page
