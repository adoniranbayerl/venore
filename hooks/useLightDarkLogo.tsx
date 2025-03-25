"use client";
import { useEffect, useState } from "react";

export const useLightDarkLogo = () => {
  const [logoPath, setLogoPath] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const updateLogoPath = () => {
      const html = document.documentElement;

      if (html.classList.contains("scrolled")) {
        // Scrolled
        setLogoPath(
          html.classList.contains("dark") ? "/logo-dark.svg" : "/logo-dark.svg"
        );
      } else {
        // Não scrolled
        setLogoPath(
          html.classList.contains("dark") ? "/logo-dark.svg" : "/logo-light.svg"
        );
      }
    };

    updateLogoPath();

    const observer = new MutationObserver(updateLogoPath);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return logoPath;
};
