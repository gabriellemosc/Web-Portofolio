"use client";

import { useState, useEffect } from "react";
import Preloader from "@/app/components/Pre";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import Particle from "./components/Particle"; // ⬅ Importando o componente de partículas


export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200); // Tempo do preloader antes de desaparecer

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading && <Preloader />}
      {!loading && (
<main className="flex min-h-screen flex-col relative bg-transparent">
       <Particle /> {/* ⬅ Adicionando o fundo de partículas */}

          <Navbar />
          <div className="container mt-24 mx-auto px-12 py-4">
            <HeroSection />
            <AchievementsSection />
            <AboutSection />
            <ProjectsSection />
            <EmailSection />
          </div>
          <Footer />
        </main>
      )}
    </>
  );
}
