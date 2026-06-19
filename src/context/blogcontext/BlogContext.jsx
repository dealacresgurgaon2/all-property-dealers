"use client";

import { createContext, useContext, useState, useEffect } from "react";

const BlogContext = createContext();

const API_BASE = "https://all-property-dealer-backend.onrender.com";

export const BlogProvider = ({ children }) => {

  const [blogs, setBlogs] = useState([]);
  const [singleBlog, setSingleBlog] = useState(null);
  const [recentBlogs, setRecentBlogs] = useState([]);

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  // ✅ DOMAIN FIX (instant load on refresh)
  const [domain, setDomain] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("domain");
    }
    return null;
  });

  const clearSingleBlog = () => {
  setSingleBlog(null);
};
  // ✅ Separate loading
  const [listLoading, setListLoading] = useState(false);
  const [singleLoading, setSingleLoading] = useState(false);

  // ✅ Errors
  const [listError, setListError] = useState(null);
  const [singleError, setSingleError] = useState(null);

  const handleDomain = (d) => {
    setDomain(d);
    localStorage.setItem("domain", d);
  };

  // ===== BLOG LIST =====
  useEffect(() => {
    if (!domain) return;
    fetchBlogs(page);
  }, [page, domain]);

  const fetchBlogs = async (pageNumber) => {
    try {
      setListLoading(true);
      setListError(null);

      const res = await fetch(
        `${API_BASE}/blogs/fetchBlogs?domain=${domain}&page=${pageNumber}&limit=30`
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

      if (!domain) return;

      const res = await fetch(
        `${API_BASE}/blogs/getBlogBySlug/${slug}?domain=${domain}`
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

        setDomain: handleDomain,

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