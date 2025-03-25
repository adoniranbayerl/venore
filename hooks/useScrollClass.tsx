"use client";

import { useEffect, useState } from "react";
/* Esse hook add scrolled class to <html> */
export const useScrollClass = (threshold: number = 50) => {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const onScroll = () => {
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        const isScrolled = window.scrollY > threshold;
        document.documentElement.classList.toggle("scrolled", isScrolled);
        setIsScrolled(isScrolled);
      }, 10); // Ajuste o valor para maior suavidade
    };

    window.addEventListener("scroll", onScroll);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("scroll", onScroll);
    };
  }, [threshold]);
  return isScrolled;
};
