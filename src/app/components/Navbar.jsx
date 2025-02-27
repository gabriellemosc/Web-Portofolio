"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";

const navLinks = [
  { title: "About", path: "#about", icon: "/person.svg" },
  { title: "Projects", path: "#projects", icon: "/project.svg" },
  { title: "Contact", path: "#contact", icon: "/contact.svg" },
  { title: "CV", path: "/cv", icon: "/resume.svg" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const router = useRouter();

  // Função para tratar a navegação correta
  const handleNavigation = (path) => {
    if (path.startsWith("#")) {
      if (window.location.pathname === "/") {
        document.querySelector(path)?.scrollIntoView({ behavior: "smooth" });
      } else {
        router.push("/" + path);
      }
    } else {
      router.push(path);
    }
    setNavbarOpen(false); // Fecha o menu móvel ao clicar em um link
  };

  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
        
        {/* Ícones de redes sociais e Logo */}
        <div className="logo-social-container flex items-center gap-4">
          <div className="social-link-nav flex gap-3">
            <Link href="https://www.linkedin.com" target="_blank" aria-label="LinkedIn">
              <Image src="in.svg" alt="LinkedIn" width={20} height={30} />
            </Link>
            <Link href="https://www.instagram.com" target="_blank" aria-label="Instagram">
              <Image src="instagram.svg" alt="Instagram" width={20} height={30} />
            </Link>
            <Link href="https://github.com/seu_usuario" target="_blank" aria-label="GitHub">
              <Image src="github.svg" alt="GitHub" width={20} height={24} />
            </Link>
          </div>
          <Link href="/" className="logo-link">
            <Image src="/images/logo.png" alt="Logo" width={60} height={30} />
          </Link>
        </div>

        {/* Botão do Menu Mobile */}
        <div className="mobile-menu block md:hidden">
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            aria-label="Open Menu"
          >
            {navbarOpen ? <XMarkIcon className="h-5 w-5" /> : <Bars3Icon className="h-5 w-5" />}
          </button>
        </div>  

        {/* Menu Desktop */}
        <div className="menu hidden md:block md:w-auto">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index} className="nav-item">
                <button
                  onClick={() => handleNavigation(link.path)}
                  className="text-white hover:text-gray-400 transition-all duration-200 flex items-center gap-2"
                >
         <Image
            src={link.icon}
            alt={link.title}
            width={20}
            height={20}
            className="icon-effect-nav"
          />                  <span className="text-effect">{link.title}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Menu Mobile Overlay */}
      {navbarOpen ? <MenuOverlay links={navLinks} onClose={() => setNavbarOpen(false)} /> : null}
    </nav>
  );
};

export default Navbar;
