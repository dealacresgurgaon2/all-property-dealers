"use client";

import Home1 from "@/templates/design1/pages/home/page";

export default function Gurgaon() {
  const domain = typeof window !== "undefined" 
    ? window.location.hostname 
    : "";

  return <Home1 domain={domain} />;
}

