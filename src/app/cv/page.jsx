"use client";

import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Pre from "../components/Pre"; // Componente Preloader

export default function CVPage() {
  const [load, updateLoad] = useState(true);
  const [hasScrolledToBottom, setHasScrolledToBottom] = useState(false);

  // Simula o tempo de carregamento (1.2 segundos)
  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  // Função para verificar se o usuário rolou até o final da página
  const checkIfScrolledToBottom = () => {
    const documentHeight = document.documentElement.scrollHeight;
    const currentScrollPosition = window.scrollY + window.innerHeight;
    if (currentScrollPosition >= documentHeight - 100) {
      setHasScrolledToBottom(true);
    } else {
      setHasScrolledToBottom(false);
    }
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

      {/* Aplica classes para desativar ou ativar a rolagem conforme o estado do preloader */}
      <div className={load ? "no-scroll" : "scroll"}>
        <Navbar /> {/* Navbar fixo no topo */}

        <main className="relative w-full h-screen bg-[#121212]">
          {/* Exibe o PDF */}
          <embed
            src="/cvgabriel.pdf" // O PDF deve estar na pasta public
            type="application/pdf"
            className="absolute top-0 left-0 w-full h-full border-none"
            style={{
              objectFit: "fill", // Faz o PDF preencher a tela
              padding: 0,
              margin: 0,
              overflow: "hidden",
            }}
          />
          <div className="text-center mt-4 absolute bottom-10 left-1/2 transform -translate-x-1/2">
            <a
              href="/cvgabriel.pdf" // Link para download do PDF
              download="cv_gabriel_lemos.pdf"
              className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300"
            >
              📥 Download CV
            </a>
          </div>
        </main>

        {/* Footer aparece quando o usuário rola até o final */}
        {hasScrolledToBottom && <Footer />}
      </div>
    </>
  );
}
