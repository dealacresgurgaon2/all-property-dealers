 "use client";
 import Home6 from "@/templates/design6/pages/home/page";

export default function Gurgaon() {
   const domain = typeof window !== "undefined" 
    ? window.location.hostname 
    : ""; 
  return <Home6  domain={domain}/>;
}
