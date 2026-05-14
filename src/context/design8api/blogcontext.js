"use client";

import { createContext, useContext, useState, useEffect } from "react";

const BlogContext = createContext();

const API_BASE = "https://deal-acres-backend.onrender.com";

// ✅ STATIC DOMAIN
const STATIC_DOMAIN = "www.realestateagentsnearme.in";

export const BlogProvider = ({ children }) => {

  const [blogs, setBlogs] = useState([]);
  const [singleBlog, setSingleBlog] = useState(null);
  const [recentBlogs, setRecentBlogs] = useState([]);

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // ✅ FIXED DOMAIN (NO LOCALSTORAGE)
  const domain = STATIC_DOMAIN;

  const clearSingleBlog = () => {
    setSingleBlog(null);
  };

  const [listLoading, setListLoading] = useState(false);
  const [singleLoading, setSingleLoading] = useState(false);

  const [listError, setListError] = useState(null);
  const [singleError, setSingleError] = useState(null);

  // ===== BLOG LIST =====
  useEffect(() => {
    fetchBlogs(page);
  }, [page]);

  const fetchBlogs = async (pageNumber) => {
    try {
      setListLoading(true);
      setListError(null);

      const res = await fetch(
        `${API_BASE}/admin/blog/fetchBlogs?domain=${domain}&page=${pageNumber}&limit=30`
      );

      if (!res.ok) throw new Error("Failed to fetch blogs");

      const data = await res.json();

      if (!data.success) throw new Error(data.message);

      setBlogs(data.blogs || []);
      setRecentBlogs(data.blogs || []);
      setTotalPages(data.totalPages || 1);

    } catch (err) {
      setListError(err.message);
      setBlogs([]);
    } finally {
      setListLoading(false);
    }
  };

  // ===== SINGLE BLOG =====
  const fetchSingleBlog = async (slug) => {
    try {
      setSingleLoading(true);
      setSingleError(null);

      const res = await fetch(
        `${API_BASE}/admin/blog/getBlogBySlug/${slug}?domain=${domain}`
      );

      if (!res.ok) throw new Error("Failed to fetch blog");

      const data = await res.json();

      if (!data.success) throw new Error("Blog not found");

      setSingleBlog(data.blog);

    } catch (err) {
      setSingleBlog(null);
      setSingleError(err.message);
    } finally {
      setSingleLoading(false);
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

        listLoading,
        singleLoading,

        listError,
        singleError,
        clearSingleBlog,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export const useBlogs = () => useContext(BlogContext);