import React from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"; // Utilizando react-icons para os ícones

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex flex-col md:flex-row justify-between items-center">
        {/* Mini Bio e Copyright */}
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-bold">Gabriel</h3>
          <p className="text-slate-400">Backend developer &amp; programming student.</p>
          <p className="text-slate-600 mt-2">© 2025 Gabriel</p>
            <p className="text-slate-600">
            Code licensed under the{" "}
            <Link 
              href="https://opensource.org/licenses/MIT" 
              target="_blank" 
              className="text-blue-500 hover:text-blue-300 hover:scale-105 transition-transform duration-200"
            >
              MIT License
            </Link>


            </p>

        </div>
        
        {/* Links de Navegação */}
        <div className="flex gap-4 mb-4 md:mb-0">
          <Link href="#about" className="hover:text-slate-300">About</Link>
          <Link href="#projects" className="hover:text-slate-300">Projects</Link>
          <Link href="#contact" className="hover:text-slate-300">Contact</Link>
        </div>
        
        {/* Redes Sociais */}
        <div className="flex gap-4">
          <Link href="https://github.com/gabriellemosc" target="_blank" rel="noopener noreferrer">
            <FaGithub size={24} className="hover:text-slate-300" />
          </Link>
          <Link href="https://www.linkedin.com/in/gabriel-lemos-cerqueira/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={24} className="hover:text-slate-300" />
          </Link>
          <Link href="https://twitter.com/seu_usuario" target="_blank" rel="noopener noreferrer">
            <FaTwitter size={24} className="hover:text-slate-300" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
  