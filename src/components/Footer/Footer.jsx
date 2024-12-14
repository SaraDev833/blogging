import Image from 'next/image'
import React from 'react'
import { assets } from '../../../assets/assets'

const Footer = () => {
  return (
    <div className='bg-black w-full mt-20'>
       <div className='py-4 container flex justify-between items-center sm:flex-row flex-col gap-4 sm:gap-0'>
                <Image src={assets.logo_light} width={130} className='object-cover 'alt='logo_light' />
                <p className='text-sm font-semibold text-white whitespace-nowrap text-center'>All rights reserved .Copyright@blogger</p>
                <div className='flex gap-2'>
                    <Image src={assets.facebook_icon} width={40} alt='facebook'/>
                    <Image src={assets.googleplus_icon} width={40} alt='googlePlus'/>
                    <Image src={assets.twitter_icon} width={40} alt='twitter'/>

                </div>
       </div>
    </div>
  )
}

export default Footer
