"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumb({ property }) {
  const pathname = usePathname();

  const pathParts = pathname.split("/").filter(Boolean);

  const formatTitle = (text = "") =>
    text.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

  const baseClass = "text-gray-700 hover:underline";

  // ================= BLOG =================
  if (pathname.startsWith("/blogs")) {
    if (pathname === "/blogs") {
      return (
        <div className="text-xs flex gap-2 text-gray-700">
          <Link href="/" className={baseClass}>Home</Link>
          <span>›</span>
          <span className="font-semibold">Blog</span>
        </div>
      );
    }

    const slug = pathParts[pathParts.length - 1];

    return (
      <div className="text-xs flex gap-2 flex-wrap text-gray-700">
        <Link href="/" className={baseClass}>Home</Link>
        <span>›</span>
        <Link href="/blogs" className={baseClass}>Blog</Link>
        <span>›</span>
        <span className="font-semibold">{formatTitle(slug)}</span>
      </div>
    );
  }

  // ================= DEALER PAGE =================
  // ================= DEALER PAGE =================
if (pathname.startsWith("/estate-agent")) {
  const slug = pathParts[pathParts.length - 1];

  const words = slug.split("-");

  // 🔥 remove ID (last part)
  const cleanWords = words.slice(0, -1);

  const title = cleanWords.join(" ");

  return (
    <div className="text-xs flex gap-2 flex-wrap text-gray-700">

      <Link href="/" className={baseClass}>Home</Link>

      {/* ❌ City hata diya */}
      
      <span>›</span>
      <span className="font-semibold">
        {formatTitle(title)}
      </span>

    </div>
  );
}

  // ================= PROPERTY =================
  if (property) {
    const city = property?.city || "";

    return (
      <div className="text-xs flex gap-2 flex-wrap text-gray-700">

        <Link href="/" className={baseClass}>Home</Link>

        {city && (
          <>
            <span>›</span>
            <Link href={`/${city.toLowerCase()}`} className={baseClass}>
              {formatTitle(city)}
            </Link>
          </>
        )}

        <span>›</span>
        <span className="font-semibold">
          {property?.title || "Property"}
        </span>

      </div>
    );
  }

  // ================= LISTING =================
  const filteredParts = pathParts.filter((p) => p !== "listing");
  const lastPart = filteredParts[filteredParts.length - 1];

  let city = "";
  let title = "";

  if (lastPart) {
    const words = lastPart.split("-");
    city = words[words.length - 1] || "";
    title = words.join(" ");
  }

  return (
    <div className="text-xs flex gap-2 flex-wrap text-gray-700">

      <Link href="/" className={baseClass}>Home</Link>

      {city && (
        <>
          <span>›</span>
          <Link href={`/${city}`} className={baseClass}>
            {formatTitle(city)}
          </Link>
        </>
      )}

      {title && (
        <>
          <span>›</span>
          <span className="font-semibold">
            {formatTitle(title)}
          </span>
        </>
      )}

    </div>
  );
}