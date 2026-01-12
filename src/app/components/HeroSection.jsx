"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16 px-21 sm:px-21">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
         <h1 className="text-white mb-6 text-4xl sm:text-5xl lg:text-8xl sm:leading-tight lg:leading-snug font-extrabold">
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
              className="text-3xl sm:text-5xl lg:text-8xl whitespace-nowrap min-w-[200px]"

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
              href="/Gabriel_Lemos_Cerqueira_Curriculo.pdf"
              download="Gabriel_Lemos_Cerqueira_Curriculo.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
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
          <div className="rounded-full w-[200px] h-[200px] lg:w-[550px] lg:h-[550px] relative">
            <Image
              src="/images/me.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={450}
              height={350}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
