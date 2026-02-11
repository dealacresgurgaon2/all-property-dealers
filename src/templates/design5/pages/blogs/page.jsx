"use client";

import {  useRef, useEffect } from "react";
import Pagination from "../../components/Pagination";
import BlogList from "./Bloglist";
import { useBlogs } from "../../../../context/blogcontext/BlogContext";



export default function BlogPage({domain}) {
  
  const listRef = useRef(null);

   const { page, setPage, totalPages,setDomain } = useBlogs();
  useEffect(()=>{
    if (domain)
      setDomain(domain);
    
  },[domain])

 

  const scrollToList = () => {
    listRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
  
  const handlePageChange = (p) => {
    setPage(p);
    scrollToList();
  };

  return (
    <main className="bg-[#fafafa] pb-11">
      {/* Blog List */}
      <div ref={listRef}>
        <BlogList
         
        />
      </div>

      {/* Pagination */}
      <Pagination
                  page={page}
                  totalPages={totalPages}
                  setPage={handlePageChange}
                />
      
    </main>
  );
}
