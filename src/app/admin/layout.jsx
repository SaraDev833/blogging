import Sidebar from "@/components/adminComponents/Sidebar";
import Image from "next/image";
import { assets } from "../../../assets/assets";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Layout({ children }) {
    return (
        <>
            <div className="flex ">
                <ToastContainer />
                <Sidebar />
                <div className="flex flex-col w-full">
                    <div className="flex justify-between py-4 border-b-2 border-black w-full px-4 items-center">
                        <p className="text-2xl font-medium text-black m-0">Admin Panel</p>
                        <Image src={assets.profile_icon} width={70} height={70} alt="Profile Icon" />
                    </div>
                    <div className="flex-1">{children}</div>
                </div>
            </div>
        </>
    );
}
