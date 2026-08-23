import { useLoaderData } from "react-router-dom";
import Hero from "../components/header/Hero";
import Footer from "../components/footer/Footer";
import BlogDetails from "../components/blogDetails/BlogDetails";

export default function Blog() {
    const blog = useLoaderData()

    return (
        <div>
            <Hero title={blog.title} />
            <main>
                <BlogDetails blog={blog}/>
            </main>
            <Footer />
        </div>
    )

}