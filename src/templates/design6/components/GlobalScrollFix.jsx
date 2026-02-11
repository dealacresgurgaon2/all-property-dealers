"use client";

import { useEffect } from "react";

export default function ScrollRestorationFix() {

  useEffect(() => {

    const forceManual = () => {
      if ("scrollRestoration" in history) {
        history.scrollRestoration = "manual";
      }
    };

    // Har possible jagah par force karo
    forceManual();

    window.addEventListener("load", forceManual);
    window.addEventListener("beforeunload", forceManual);
    window.addEventListener("popstate", forceManual);

    // Interval se bhi force kar do
    const interval = setInterval(forceManual, 50);

    // Hard force top on load
    window.scrollTo(0, 0);

    return () => {
      clearInterval(interval);
      window.removeEventListener("load", forceManual);
      window.removeEventListener("beforeunload", forceManual);
      window.removeEventListener("popstate", forceManual);
    };

  }, []);

  return null;
}
