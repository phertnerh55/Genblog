"use client";
import Nav from "@/components/nav";
import HeroSingle from "@/components/HeroSingle";
import { useEffect, useState } from "react";
import Footer from "@/components/Footer";
function SingleBlog({ params }) {
  const [singleBlog, setSingleBlog] = useState();
  const url = `http://127.0.0.1:8000/api/blogs/${params.id}`;
  useEffect(() => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setSingleBlog(data);
        console.log(data)
      });
  });
  return (
    <div>
        <Nav/>
      <HeroSingle/>
      <Footer/>
    </div>
  );
}
export default SingleBlog;
