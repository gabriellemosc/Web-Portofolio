"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 welcome_h1">
              Welcome, I&apos;m{" "}
            </span>
            <br></br>
            <span className="animacao_h1"> 
            <TypeAnimation
              sequence={[
                "Gabriel Lemos",
                5000,
                "Backend Developer",
                5000,
              ]}
              wrapper="span"
              speed={60}
              repeat={Infinity}
            />
            </span>
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl welcome_p">
          Welcome to my Web Portfolio, I created this website with the intention of showing a little about myself, projects and technologies that I use in development.
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block  botoes_inicio"
            >
              Contact Me
            </Link>
            <Link
              href="/cvgabriel.pdf"
              download="cv_gabriel_lemos.pdf" // Força o download com esse nome
              target="_blank" // Abre em nova aba para garantir compatibilidade
              rel="noopener noreferrer" // Segurança adicional
              className="px-1 inline-block botoes_inicio"
            >
              <span className="rounded-full px-5 py-2">
                Download CV 
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full w-[250px] h-[250px] lg:w-[600px] lg:h-[600px] relative">
            <Image
              src="/images/home-main.svg"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={550}
              height={500}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
