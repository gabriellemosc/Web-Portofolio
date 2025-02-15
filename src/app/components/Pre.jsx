"use client";

import { useEffect, useState } from "react";

export default function Pre() {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div id="preloader" className={`fixed top-0 left-0 w-full h-full bg-[#121212] flex items-center justify-center z-50 transition-opacity duration-500 ${fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
    </div>
  );
}
