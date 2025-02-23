"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import Image from "next/image";

const navLinks = [
  {
    title: "About",
    path: "#about",
    icon: "/person.svg", // Adicionamos um ícone apenas no About

  },
  {
    title: "Projects",
    path: "#projects",
    icon: "/project.svg", // Adicionamos um ícone apenas no About

  },
  {
    title: "Contact",
    path: "#contact",
    icon: "/contact.svg", // Adicionamos um ícone apenas no About

  },
  {
    title: "CV",
    path: "/cv", // Rota para a página do currículo
    icon: "/resume.svg", // Adicionamos um ícone apenas no About

  }
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed mx-auto border border-[#33353F] top-0 left-0 right-0 z-10 bg-[#121212] bg-opacity-100">
      <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">

   

           {/* Ícones de redes sociais */}
      {/* Container para logo + ícones sociais */}
<div className="logo-social-container">


  <div className="social-link-nav">
    <Link href="https://www.linkedin.com" target="_blank">
      <Image src="in.svg" alt="LinkedIn" width={20} height={30} />
    </Link>

    <Link href="https://www.linkedin.com/in/seu_perfil" target="_blank">
      <Image src="instagram.svg" alt="Instagram" width={20} height={30} />
    </Link>

    <Link href="https://github.com/seu_usuario" target="_blank">
      <Image src="github.svg" alt="GitHub" width={20} height={24} />
    </Link>

    <Link href="/" className="logo-link">
    <Image src="/images/logo.png" alt="Logo" width={60} height={30} />
  </Link>
  </div>
</div>




        <div className="mobile-menu block md:hidden">
          {!navbarOpen ? (
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <Bars3Icon className="h-5 w-5" />
            </button>
          ) : (
            <button
              onClick={() => setNavbarOpen(false)}
              className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} icon={link.icon} />
              </li>
            ))}
          </ul>
        </div>
      </div>
      {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  );
};

export default Navbar;
