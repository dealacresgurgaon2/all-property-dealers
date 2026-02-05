"use client";
import Home3 from "@/templates/design3/pages/home/page";

export default function Hisar() {
  const domain = typeof window !== "undefined" 
    ? window.location.hostname 
    : "";

    console.log("reccc domain",domain);
    
  return <Home3 domain={domain} />;
}
