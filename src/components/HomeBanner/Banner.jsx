'use client';
import axios from "axios";
import { useState } from "react"
import { toast } from "react-toastify";



const Banner = () => {

    const [email, setEmail] = useState("");

    const submitHandler = async (e) => {
        try {
            e.preventDefault();
            const formData = new FormData();
            formData.append('email', email);
            const response = await axios.post('/api/email', formData);

            if (response.data.success) {
                toast.success(response.data.msg);
                setEmail("")
            }
        } 
      catch (error) {
          if(error.response){
            toast.error(error.response.data.msg)
          }
          else{
            toast.error('Network error, please try again later');
          }
        
    }




}
return (
    <div className="flex justify-center items-center gap-6 flex-col">
        <h2 className="lg:text-3xl font-medium text-gray text-lg sm:text-2xl text-center">Latest Blogs</h2>
        <p className="text-lg text-gray-700 font-normal text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius,  perferendis. lorem jshuf iusn </p>
        <form className="relative" onSubmit={submitHandler}>
            <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} className="sm:w-[400px] w-auto bg-white border-2 border-black placeholder:text-slate-700 py-[5px] px-4" placeholder="Enter your email" />
            <button type="submit" className="absolute top-0 border-2 border-black py-[5px] px-3 right-[0px] active:border-gray-500 active:bg-gray-500">Subscribe</button>
        </form>
    </div>
)
}

export default Banner
