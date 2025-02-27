"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion"; // Importando o Framer Motion
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import emailjs from "emailjs-com";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Cria uma ref para observar a seção inteira
  const sectionRef = useRef(null);

  useEffect(() => {
    // Configura o Intersection Observer para detectar quando a seção entra ou sai de view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true); // Quando entra na tela
          } else {
            setIsVisible(false); // Quando sai da tela
          }
        });
      },
      { threshold: 0.2 } // Aciona quando 20% do elemento estiver visível
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: data.email,
          subject: data.subject,
          message: data.message,
          to_name: "Gabriel",
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        (response) => {
          console.log("Message sent successfully", response);
          setEmailSubmitted(true);
        },
        (error) => {
          console.error("Failed to send message", error);
        }
      );
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      {/* Tudo dentro de um único motion.div */}
      <motion.div
        initial={{ x: "-100%", opacity: 0 }}
        animate={isVisible ? { x: 0, opacity: 1 } : { x: "-100%", opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 flex flex-col md:flex-row items-center justify-between"
      >
        {/* Div de background animada */}
        <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform scale-70 -translate-x-1/2 -translate-1/2 small-gradient"></div>

        {/* Bloco de texto animado */}
        <div className="z-10">
          <h5 className="text-xl font-bold text-white my-2 lets-connect">Let&apos;s Connect</h5>
          <p className="text-[#ADB7BE] mb-4 max-w-md text-email-section">
  <span className="span-text-email-section">Let's Talk.</span> I'm always open to new connections, whether it's for career opportunities or a tech discussion, feel free to reach out. If you’re interested and liked it, I'd like to have an opportunity to chat!
</p>

      <div className="socials flex flex-row gap-2">
        <Link href="https://github.com/gabriellemosc" target="_blank" rel="noopener noreferrer">
          <Image src={GithubIcon} alt="Github Icon" />
        </Link>
        <Link href="https://www.linkedin.com/in/gabriel-lemos-cerqueira/" target="_blank" rel="noopener noreferrer">
          <Image src={LinkedinIcon} alt="Linkedin Icon" />
        </Link>
      </div>

        </div>
      </motion.div>

      {/* Formulário de contato */}
      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">Email sent successfully!</p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="joao@gmail.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Just saying hi"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
              />
            </div>
            <button
              type="submit"
              className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
