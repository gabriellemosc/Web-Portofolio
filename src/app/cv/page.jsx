"use client";

import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Pre from "../components/Pre"; 

export default function CVPage() {
  const [load, updateLoad] = useState(true);
  const [hasScrolledToBottom, setHasScrolledToBottom] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  const checkIfScrolledToBottom = () => {
    const documentHeight = document.documentElement.scrollHeight;
    const currentScrollPosition = window.scrollY + window.innerHeight;
    setHasScrolledToBottom(currentScrollPosition >= documentHeight - 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", checkIfScrolledToBottom);
    return () => {
      window.removeEventListener("scroll", checkIfScrolledToBottom);
    };
  }, []);

  return (
    <>
      {/* Preloader */}
      <Pre load={load} />

      {/* Apply classes to disable or enable scrolling  */}
      <div className={load ? "no-scroll" : "scroll"}>
        <Navbar /> {/* Navbar fixo no topo */}

        <main className="relative w-full h-screen bg-[#121212]">
          {/* Show PDF */}
          <embed
            src="/cvgabriel.pdf" 
            type="application/pdf"
            className="absolute top-0 left-0 w-full h-full border-none"
            style={{
              objectFit: "contain",
              padding: 0,
              margin: 0,
              overflow: "hidden",
            }}
          />
          <div className="text-center px-4 sm:px-0 mt-4 absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2">
            <a
              href="/cvgabriel.pdf"
              download="cv_gabriel_lemos.pdf"
              className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300"
            >
              📥 Download CV
            </a>
          </div>
        </main>

        {/* Footer */}
        {hasScrolledToBottom && <Footer />}
      </div>
    </>
  );
}
