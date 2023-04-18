import "./App.css";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "./context/AppContext";
import { Route, Routes, useSearchParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import BlogPage from "./Pages/BlogPage";
import TagPage from "./Pages/TagPage";
import CategoryPage from "./Pages/CategoryPage";
import Hero from './components/Hero';

export default function App() {
  const { fetchBlogPosts } = useContext(AppContext);

  const [searchParams, setSearchParams] = useSearchParams();
  const [slide, setSlide] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const page =  searchParams.get("page") ?? 1;

    if(location.pathname.includes("tags")) {
      //iska matlab tag wala page show krna h 
      const tag = location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchBlogPosts(Number(page), tag);
    }
    else if(location.pathname.includes("categories")) {
      const category = location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchBlogPosts(Number(page), null, category);
    }
    else {
      fetchBlogPosts(Number(page));
    }
  }, [location.pathname, location.search]);

  useEffect( () => {
    // setSlide(true);
  },[setTimeout(() => {
    setSlide(false);
  },6500)])
  return (
    <div>
    {
      slide ? (<Hero slide={slide}/>):
      (
        <Routes>
          <Route path="/" element = {<Home/>}   />
          <Route path="/blog/:blogId" element = {<BlogPage/>}   />
          <Route path="/tags/:tag" element = {<TagPage/>}   />
          <Route path="/categories/:category" element = {<CategoryPage/>}   />
        </Routes>
      )
    }
    </div>
  );
}
