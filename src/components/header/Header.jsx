

import Image from "next/image";

import Link from "next/link";
import { assets } from './../../../assets/assets';
const Header = () => {
    return (
        
        <div className="py-4 flex justify-between items-center container">
<Link href={'/'}>
            <div>
                <Image src={assets.logo} width={142} alt="logo" />
            </div>
            </Link>
            <div className="flex justify-center items-center">
                <Link href="/">
                    <span className="flex justify-center gap-1 items-center sm:gap-4 font-medium  sm:text-lg sm:px-5 sm:py-2 border-2 border-black px-4 py-1 text-sm text-gray-900" style={{ boxShadow: '-7px 7px 0px #000000' }}>
                        Get Started
                        <Image src={assets.arrow} width={16} height={16} alt="arrow" className='w-3' />
                    </span>
                </Link>

            </div>
        </div>
    )
}

export default Header
