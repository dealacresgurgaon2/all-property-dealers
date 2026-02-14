import Home5 from "@/templates/design5/pages/home/page";

export default function Ambala() {
   const domain = typeof window !== "undefined" 
    ? window.location.hostname 
    : "";

  return <Home5 domain={domain} />;
}
