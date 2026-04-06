 "use client";
 import Home4 from "@/templates/design4/pages/home/page";

export default function Gurgaon() {
   const domain = typeof window !== "undefined" 
    ? window.location.hostname 
    : ""; 
  return <Home4  domain={domain}/>;
}
