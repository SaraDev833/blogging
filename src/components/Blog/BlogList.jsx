"use client"

import { useState } from "react"
import BlogItem from "./BlogItem"
import { blog_data } from "../../../assets/assets"

const BlogList = () => {
    const [tab , setTab] = useState("All")
  return (
    <div>
    <div className="mt-16 flex justify-center items-center gap-4 mb-12">
      <button className={tab === 'All' ? `text-sm text-white px-3 py-1 bg-black` : ``} onClick={()=>setTab('All')}>All</button>
      <button className={tab=== 'Technology'? `text-sm text-white px-3 py-1 bg-black`: ``} onClick={()=>setTab("Technology")}>Technology</button>
      <button className={tab==='Startup' ? `text-sm text-white px-3 py-1 bg-black` : ``} onClick={()=>setTab("Startup")}>Startup</button>
      <button className={tab==='Lifestyle'? `text-sm text-white px-3 py-1 bg-black` : ``} onClick={()=>setTab("Lifestyle")}>Lifestyle</button>
    </div>
    <div className="flex justify-center items-center flex-wrap gap-10">
      {blog_data.filter((item )=> tab==="All"? true : item.category === tab).map((item , index)=>{
        return <BlogItem key={index} category ={item.category} title={item.title} description={item.description} image={item.image} id={item.id}/>
      })}
    </div>
    </div>
  )
}

export default BlogList