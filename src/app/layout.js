import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { headers } from "next/headers";
import { DealerProvider } from "@/context/propertydealercontext/DealerContext";
import { GTM_IDS } from "@/lib/gtmConfig";
import GoogleTagManager from "@/console/GoogleTagManager";
import GoogleAnalytics from "@/console/GoogleAnalytics";
import { GA_TARGET_DOMAINS } from "@/lib/gaTargetDomains";
import { GOOGLE_VERIFICATION } from "@/lib/googleVerification";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata() {
  const h = await headers();
  const domain = h.get("host") || "localhost";

  return {
    title:
      "Property Dealer | Buy & Sell Residential and Commercial Properties",
    description:
      "Trusted property dealer offering residential and commercial properties for sale and rent.",
    alternates: {
      canonical: `https://${domain}`,
    },
    verification: {
      google:
        GOOGLE_VERIFICATION[domain] ||
        GOOGLE_VERIFICATION["localhost"],
    },
    icons: {
      icon: "/favicon.ico",
    },
  };
}

export default async function RootLayout({ children }) {
  const h = await headers();
  const domain = h.get("host") || "localhost";

  const gtmId = GTM_IDS[domain] || GTM_IDS["localhost"];
  const gaId =
    GA_TARGET_DOMAINS[domain] || GA_TARGET_DOMAINS["localhost"];

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* ✅ Google Tag Manager here */}
        <GoogleTagManager gtmId={gtmId} />

        {/* ✅ Google Analytics */}
        <GoogleAnalytics gaId={gaId} />

        {/* ✅ Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5533432582566809"
          crossOrigin="anonymous"
        />

        <DealerProvider>
          {children}
        </DealerProvider>
      </body>
    </html>
  );
}