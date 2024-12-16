import Image from 'next/image'
import React from 'react'
import { assets } from '../../../assets/assets'
import Link from 'next/link'

const Sidebar = () => {
  
  return (
    <div className='flex flex-col pl-8 py-7 border-r border-black w-auto sm:w-[300px] h-[100vh]'>
      <Image src={assets.logo} width={140} alt='logo' />
      <div className='mt-16'>
        <Link href='/admin/addProduct' className='cursor-pointer flex items-center bg-white border border-black shadow-[-5px_5px_0px_#000000]  px-3 py-2 w-fit'>
          <Image src={assets.add_icon} width={40} alt='icon' />
          <span className='whitespace-nowrap font-bold text-black '>
            Add Products
          </span>
        </Link>
        <Link href='/admin/blogList' className='cursor-pointer flex items-center bg-white border my-6 border-black shadow-[-5px_5px_0px_#000000]  px-3 py-2 w-fit'>
          <Image src={assets.add_icon} width={40} alt='icon' />
          <span className='whitespace-nowrap font-bold text-black '>
            Blog List
          </span>
        </Link>
        <Link href='/admin/subscriptions' className='cursor-pointer flex items-center bg-white border border-black shadow-[-5px_5px_0px_#000000]  px-3 py-2 w-fit'>
          <Image src={assets.add_icon} width={40} alt='icon' />
          <span className='whitespace-nowrap font-bold text-black '>
            Subscriptions
          </span>
        </Link>
      </div>

    </div>
  )
}

export default Sidebar
