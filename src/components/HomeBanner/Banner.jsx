

const Banner = () => {
    return (
        <div className="flex justify-center items-center gap-6 flex-col">
            <h2 className="lg:text-3xl font-medium text-gray text-lg sm:text-2xl text-center">Latest Blogs</h2>
            <p className="text-lg text-gray-700 font-normal text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius,  perferendis. lorem jshuf iusn </p>
            <form className="relative">
               <input className="sm:w-[400px] w-auto bg-white border-2 border-black placeholder:text-slate-700 py-[5px] px-4" placeholder="Enter your email"/>
               <button type="submit" className="absolute top-0 border-2 border-black py-[5px] px-3 right-[0px] active:border-gray-500 active:bg-gray-500">Subscribe</button>
            </form>
        </div> 
    )
}

export default Banner
