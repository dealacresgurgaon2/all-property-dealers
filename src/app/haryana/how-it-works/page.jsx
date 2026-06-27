import Hero from "./Hero";

export const metadata = {
  title: "How It Works | Find Trusted Property Dealers Near You in Haryana",
  
  description:
    "Learn how to find HRERA-registered property dealers in Haryana. Understand brokerage rates, document checks, Lal Dora land, mutation records & how our platform connects you safely.",

     keywords: [
  "how to find property dealer Haryana",
  "HRERA registered agent",
  "property brokerage rate",
  "property dealer near me",
  
],

  alternates: {
    canonical: "https://www.propertydealersnearme.com/how-it-works",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Property Dealers Near Me | Find Trusted Real Estate Agents & Property Dealers",
    description:
      "Connect with trusted property dealers and real estate agents near you for property buying, selling, renting, and investment opportunities.",
    url: "https://www.propertydealersnearme.com/how-it-works",
    type: "website",
  },
};

export default function Page() {
  return (
    <main>
      <Hero />
    </main>
  );
}