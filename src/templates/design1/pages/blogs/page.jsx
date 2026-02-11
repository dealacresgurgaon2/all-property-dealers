"use client";

import {useEffect, useRef } from "react";
import Pagination from "../../components/Pagination";

import BlogList from "./Bloglist";
import { useBlogs } from "../../../../context/blogcontext/BlogContext";

export default function BlogPage({domain}) {

  const listRef = useRef(null);

  // CONTEXT se data lo
 const { page, setPage, totalPages, setDomain } = useBlogs();
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
    <main>
      <div ref={listRef} className="bg-[#f8fafc] pb-9">

        <BlogList domain="www.propertydealerinhisar.com" />

        <div className="">
          <Pagination
            page={page}
            totalPages={totalPages}
            setPage={handlePageChange}
          />
        </div>

      </div>
    </main>
  );
}
