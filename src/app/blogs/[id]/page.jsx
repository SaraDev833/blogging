"use client"
import { useState, useEffect } from "react"
import { assets, blog_data } from "../../../../assets/assets";
import Header from "@/components/header/Header";
import Image from "next/image";
import Footer from "@/components/Footer/Footer";


const page = ({ params }) => {
    const [data, setdata] = useState(null);


    const fetchBlogData = () => {
        for (let i = 0; i < blog_data.length; i++) {

            if (Number(params.id) === blog_data[i].id) {
                setdata(blog_data[i]);
                break;
            }
        }
    }


    useEffect(() => {
        fetchBlogData()
    }, [])

    return (

        <>
            {data ?
                <>
                    <div className="bg-gray-300 ">
                        <Header />
                        <div className='my-20 flex justify-center items-center flex-col pb-20'>
                            <h2 className="text-xl lg:text-3xl font-semibold  mb-6 px-3 text-center">{data.title}</h2>
                            <Image src={data.author_img} width={60} height={60} alt="author" className='rounded ' />
                            <p className='text-sm font-normal mb-100'>{data.author}</p>
                        </div>

                    </div>
                    <div className="mt-[-150px] flex justify-start items-center flex-col mb-20">
                        <Image src={data.image} height={290} width={480} className="object-cover border-4 border-white" alt="blog_image" />

                    </div>
                    <div className="container my-[100px]">
                        <p className="text-lg font-semibold mb-6">{data.description}</p>
                        <div className='flex flex-col gap-6'>
                            <div>
                                <h2 className="text-xl font-semibold text-black">
                                    Step 1: Self Learning and Reflection
                                </h2>
                                <p className="font-normal text-sm text-slate-700">
                                    After waking up to the soft golden light of the early morning sun streaming through the window, I stretched lazily, letting the warmth of the day begin to seep into my body, reminding me of the endless possibilities that lay ahead, as I reflected on the events of the previous evening, when I had spent hours contemplating the meaning of life, wondering if I was truly on the path I was meant to follow,
                                    <br />

                                </p>
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold text-black">
                                    Step 1: Self Learning and Reflection
                                </h2>
                                <p className="font-normal text-sm text-slate-700">
                                    After waking up to the soft golden light of the early morning sun streaming through the window, I stretched lazily, letting the warmth of the day begin to seep into my body, reminding me of the endless possibilities that lay ahead, as I reflected on the events of the previous evening, when I had spent hours contemplating the meaning of life, wondering if I was truly on the path I was meant to follow, <br /> or if I had been sidetracked by the distractions of everyday existence, feeling that pull of doubt that often accompanies those moments of stillness, when everything around you seems to pause, and you’re left with nothing but your thoughts, which can either inspire or overwhelm you, and I couldn’t help but notice how, despite the chaos of the world, there were still moments of profound beauty—like the laughter of a child playing in the park, or the sound of birds singing as they soared across the sky,


                                </p>
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold text-black">
                                    Step 1: Self Learning and Reflection
                                </h2>
                                <p className="font-normal text-sm text-slate-700">
                                    After waking up to the soft golden light of the early morning sun streaming through the window, I stretched lazily, letting the warmth of the day begin to seep into my body, reminding me of the endless possibilities that lay ahead, as I reflected on the events of the previous evening, when I had spent hours contemplating the meaning of life, wondering if I was truly on the path I was meant to follow, or if I had been sidetracked by the distractions of everyday existence, feeling that pull of doubt that often accompanies those moments of stillness, when everything around you seems to pause, and you’re left with nothing but your thoughts, which can either inspire or overwhelm you, and I couldn’t help but notice how, despite the chaos of the world, there were still moments of profound beauty—like the laughter of a child playing in the park, or the sound of birds singing as they soared across the sky,

                                </p>
                            </div>
                            <div>
                                <h2 className="text-xl font-semibold text-black">
                                    Conclusion
                                </h2>
                                <p className="font-normal text-sm text-slate-700">
                                    After waking up to the soft golden light of the early morning sun streaming through the window, I stretched lazily, letting the warmth of the day begin to seep into my body, reminding me of the endless possibilities that lay ahead, as I reflected on the events of the previous evening, when I had spent hours contemplating the meaning of life, wondering if I was truly on the path I was meant to follow, or if I had been sidetracked by the distractions of everyday existence, feeling that pull of doubt that often accompanies those moments of stillness, when everything around you seems to pause, and you’re left with nothing but your thoughts, which can either inspire or overwhelm you, and I couldn’t help but notice how, despite the chaos of the world, there were still moments of profound beauty—like the laughter of a child playing in the park, or the sound of birds singing as they soared across the sky,.


                                </p>
                            </div>
                            <div className="flex flex-col gap-6">
                                <h2 className="font-semibold text-black text-xl">Share this article on social media</h2>
                                <div className="flex gap-5 items-center justify-start">
                                    <Image src={assets.facebook_icon} width={40} alt="facebook" />
                                    <Image src={assets.googleplus_icon} width={40} alt="googlrPlus" />
                                    <Image src={assets.twitter_icon} width={40} alt="twitter" />
                                </div>
                            </div>


                        </div>
                    </div>
                    <Footer />
                </>
                :
                <> </>
            }
        </>

    )
}

export default page
