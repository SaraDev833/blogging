import BlogItem from "@/components/Blog/BlogItem";
import BlogList from "@/components/Blog/BlogList";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/header/Header";
import Banner from "@/components/HomeBanner/Banner";




export default function Home() {

  return (
    <>
  <Header/>
  <Banner/>
  <BlogList/>
  <Footer/>
    </>
   
  );
}
