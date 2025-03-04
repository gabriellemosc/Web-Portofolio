import React from "react";
import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"; 

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container pt-16 pb-9 pl-12   flex flex-col md:flex-row justify-between items-center">
        {/*  Bio  Copyright */}
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-bold  mt-[-29px] mb-[6px]">Gabriel L. Cerqueira</h3>
          <p className="text-slate-400 mb-[19px]">Backend developer &amp; Programming student.</p>
          <p className="text-slate-600 mt-2">© 2025 Gabriel</p>
            <p className="text-slate-600">
            Code licensed under the{" "}
            <Link 
              href="https://opensource.org/licenses/MIT" 
              target="_blank" 
              className="text-lg font-bold hover:text-blue-300 hover:scale-105 transition-transform duration-200"
            >
              MIT License
            </Link>


            </p>

        </div>
        
        {/* Links  */}
        <div className="flex gap-4 mb-4 md:mb-8">
          <Link href="#about" className="hover:text-slate-300 font-bold ">About</Link>
          <Link href="#projects" className="hover:text-slate-300 font-bold">Projects</Link>
          <Link href="#contact" className="hover:text-slate-300 font-bold">Contact</Link>
        </div>
        
        {/* Socials */}
        <div className="flex gap-4 mb-8">
          <Link href="https://github.com/gabriellemosc" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} className="hover:text-slate-500" />
          </Link>
          <Link href="https://www.linkedin.com/in/gabriel-lemos-cerqueira/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} className="hover:text-slate-500" />
          </Link>
          <Link href="https://github.com/gabriellemosc" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={24} className="hover:text-slate-500" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
  