import BlogItem from "@/components/Blog/BlogItem";
import BlogList from "@/components/Blog/BlogList";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/header/Header";
import Banner from "@/components/HomeBanner/Banner";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Home() {

  return (
    <>
      <ToastContainer />
      <Header />
      <Banner />
      <BlogList />
      <Footer />
    </>

  );
}
