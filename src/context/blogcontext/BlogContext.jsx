"use client";

import { createContext, useContext, useState, useEffect } from "react";

const BlogContext = createContext();

export const BlogProvider = ({ children }) => {

  const [blogs, setBlogs] = useState([]);
  const [singleBlog, setSingleBlog] = useState(null);
  const [recentBlogs, setRecentBlogs] = useState([]);

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [loading, setLoading] = useState(false);

  // Fetch blog list with pagination
  useEffect(() => {
    fetchBlogs(page);
  }, [page]);

  const fetchBlogs = async (pageNumber) => {
    try {
      setLoading(true);

      const res = await fetch(
        `https://propertydealerbackend.onrender.com/api/blogs?page=${pageNumber}`
      );

      const data = await res.json();

      setBlogs(data.data);
      setTotalPages(data.totalPages);

      // sidebar ke liye recent blogs
      setRecentBlogs(data.data.slice(0, 5));

      setLoading(false);

    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // Fetch single blog
  const fetchSingleBlog = async (slug) => {
    try {
      setLoading(true);

      const res = await fetch(
        `https://propertydealerbackend.onrender.com/api/blogs/slug/${slug}`
      );

      const data = await res.json();

      setSingleBlog(data.data);

      setLoading(false);

    } catch (error) {
      console.log(error);
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
