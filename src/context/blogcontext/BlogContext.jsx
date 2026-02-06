"use client";

import { createContext, useContext, useState, useEffect } from "react";

const BlogContext = createContext();

// ===== DOMAIN DETECT FUNCTION (LOCALHOST + VERCEL + PRODUCTION) =====
const getDomain = () => {
  if (typeof window !== "undefined") {

    let domain = window.location.hostname;
    let path = window.location.pathname;

    console.log("Raw Path:", path);

    // LOCALHOST TEST FIX - PATH BASED
    if (domain === "localhost") {

      // Stronger check
      if (path.startsWith("/faridabad") || path.includes("/faridabad/")) {
        return "www.propertydealerinfaridabad.com";
      }

      if (path.startsWith("/hisar") || path.includes("/hisar/")) {
        return "www.propertydealerinhisar.com";
      }

      // Default fallback
      return "www.propertydealerinfaridabad.com";
    }

    // VERCEL TEST DOMAIN FIX
    if (domain === "propertydeler-gold-frontend-lp3d.vercel.app") {
      return "www.propertydealerinhisar.com";
    }

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
        `http://localhost:5000/api/blogs?domain=${domain}&page=${pageNumber}`
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
        `http://localhost:5000/api/blogs/slug/${slug}?domain=${domain}`
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
