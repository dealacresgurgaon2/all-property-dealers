import Home2 from "@/templates/design2/pages/home/page";

export default function FaridabadHome() {
    const domain = typeof window !== "undefined" 
    ? window.location.hostname 
    : ""; 
  return <Home2 domain={domain} />;
}
