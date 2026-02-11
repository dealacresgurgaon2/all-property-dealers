"use client";

import { createContext, useContext, useState, useEffect } from "react";

const BlogContext = createContext();

const API_BASE = process.env.NEXT_PUBLIC_API_URL;

export const BlogProvider = ({ children }) => {

  const [blogs, setBlogs] = useState([]);
  const [singleBlog, setSingleBlog] = useState(null);
  const [recentBlogs, setRecentBlogs] = useState([]);

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [domain, setDomain] = useState(null);

  const [loading, setLoading] = useState(false);

  const [listError, setListError] = useState(null);
  const [singleError, setSingleError] = useState(null);

  // ===== DOMAIN PERSIST FIX =====
  useEffect(() => {
    const savedDomain = localStorage.getItem("domain");
    if (savedDomain) {
      setDomain(savedDomain);
    }
  }, []);

  const handleDomain = (d) => {
    setDomain(d);
    localStorage.setItem("domain", d);
  };

  // ===== BLOG LIST FETCH =====
  useEffect(() => {
    if (!domain) return;

    fetchBlogs(page);
  }, [page, domain]);

  const fetchBlogs = async (pageNumber) => {
    try {
      setLoading(true);
      setListError(null);

      if (!domain) return;

      const API_URL = `${API_BASE}/api/blogs?domain=${domain}&page=${pageNumber}`;

      const res = await fetch(API_URL);

      if (!res.ok) {
        throw new Error(`Server Error: ${res.status}`);
      }

      const data = await res.json();

      if (!data.success) {
        throw new Error(data.message || "Failed to load blogs");
      }

      setBlogs(data.data);
      setTotalPages(data.totalPages || 1);

      // ===== IMPORTANT: RECENT BLOGS SET =====
      setRecentBlogs(data.data.slice(0, 5));

    } catch (error) {
      setListError(error.message);
      setBlogs([]);
      setRecentBlogs([]);
    } finally {
      setLoading(false);
    }
  };

  // ===== RECENT BLOGS FUNCTION =====
  const loadRecentBlogs = async () => {
    try {
      if (!domain) return;

      const res = await fetch(
        `${API_BASE}/api/blogs?domain=${domain}&page=1`
      );

      const data = await res.json();

      if (data.success) {
        setRecentBlogs(data.data.slice(0, 5));
      }
    } catch (error) {
      console.log("Recent Blogs Error:", error.message);
    }
  };

  // ===== FETCH SINGLE BLOG =====
  const fetchSingleBlog = async (slug) => {
    try {
      setLoading(true);
      setSingleError(null);

      const res = await fetch(
        `${API_BASE}/api/blogs/slug/${slug}`
      );

      if (!res.ok) {
        throw new Error(`Server Error: ${res.status}`);
      }

      const data = await res.json();

      if (!data.success) {
        throw new Error("Blog not found");
      }

      setSingleBlog(data.data);

      // ===== MOST IMPORTANT FIX =====
      loadRecentBlogs();

    } catch (error) {
      setSingleError(error.message);
      setSingleBlog(null);
    } finally {
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

        setDomain: handleDomain,

        loading,

        listError,
        singleError,

        loadRecentBlogs
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export const useBlogs = () => useContext(BlogContext);
