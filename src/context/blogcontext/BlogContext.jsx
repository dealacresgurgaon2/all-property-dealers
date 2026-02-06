"use client";

import { createContext, useContext, useState, useEffect } from "react";

const BlogContext = createContext();

// ===== DOMAIN DETECT FUNCTION (LOCALHOST + VERCEL + PRODUCTION) =====
const getDomain = () => {
  if (typeof window !== "undefined") {
    let domain = window.location.hostname;

    // LOCALHOST TEST FIX
    if (domain === "localhost") {
      return "www.propertydealerinhisar.com";
    }

    // VERCEL TEST DOMAIN FIX
    if (domain === "propertydeler-gold-frontend-lp3d.vercel.app") {
      return "www.propertydealerinhisar.com";
    }
    // if (domain === "localhost") {
    //   return "www.propertydealerinfaridabad.com";
    // }

    return domain;
  }
  return "";
};

export const BlogProvider = ({ children }) => {

  const [blogs, setBlogs] = useState([]);
  const [singleBlog, setSingleBlog] = useState(null);
  const [recentBlogs, setRecentBlogs] = useState([]);

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [loading, setLoading] = useState(false);

  // ===== Fetch blog list with pagination =====
  useEffect(() => {
    fetchBlogs(page);
  }, [page]);

  const fetchBlogs = async (pageNumber) => {
    try {
      setLoading(true);

      const domain = getDomain();

      console.log("Current Domain:", domain);

      const res = await fetch(
        `https://propertydealerbackend.onrender.com/api/blogs?domain=${domain}&page=${pageNumber}`
      );

      const data = await res.json();

      if (data.success) {
        setBlogs(data.data || []);
        setTotalPages(data.totalPages || 1);

        // sidebar ke liye recent blogs
        setRecentBlogs((data.data || []).slice(0, 5));
      } else {
        setBlogs([]);
        setRecentBlogs([]);
        setTotalPages(1);
      }

      setLoading(false);

    } catch (error) {
      console.log("Blog Fetch Error:", error);
      setLoading(false);
    }
  };

  // ===== Fetch single blog =====
  const fetchSingleBlog = async (slug) => {
    try {
      setLoading(true);

      const domain = getDomain();

      console.log("Fetching Single Blog for Domain:", domain);

      const res = await fetch(
        `https://propertydealerbackend.onrender.com/api/blogs/slug/${slug}?domain=${domain}`
      );

      const data = await res.json();

      if (data.success) {
        setSingleBlog(data.data);
      } else {
        setSingleBlog(null);
      }

      setLoading(false);

    } catch (error) {
      console.log("Single Blog Fetch Error:", error);
      setLoading(false);
    }
  };

  return (
    <BlogContext.Provider
      value={{
        blogs,
        page,
        setPage,
        totalPages,

        singleBlog,
        fetchSingleBlog,

        recentBlogs,

        loading
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export const useBlogs = () => useContext(BlogContext);
