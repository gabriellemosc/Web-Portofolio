"use client";
import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion"; 
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import emailjs from "emailjs-com";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState(""); 


  
  const sectionRef = useRef(null);

  useEffect(() => {
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true); 
          } else {
            setIsVisible(false); 
          }
        });
      },
      { threshold: 0.2 } 
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

    const formData = new FormData(e.target);
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email || !subject || !message) {
      setAlertMessage("Please fill in all fields.");
      setTimeout(() => setAlertMessage(""), 3000); 
      return;
    }

    if (!emailRegex.test(email)) {
      setAlertMessage("Please enter a valid email address.");
      setTimeout(() => setAlertMessage(""), 3000);
      return;
    }
    
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: email,
          subject: subject,
          message: message,
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
          console.error("Error sending email", error);
          alert("Error sending email. Please try again.");
        }
      );
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >  
      {/* All inside motion.div */}
      <motion.div
        initial={{ x: "-100%", opacity: 0 }}
        animate={isVisible ? { x: 0, opacity: 1 } : { x: "-100%", opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 flex flex-col md:flex-row items-center justify-between"
      >
        {/* Animated DIv */}
        <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform scale-70 -translate-x-1/2 -translate-1/2 small-gradient"></div>

        {/* Animated Div  */}
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

      {/* Form contact */}
      <div>

         {/* Show message when necessesary */}
         {alertMessage && (
    <p className="text-red-500 text-[20px] font-bold mt-2">{alertMessage}</p>
  )}

        {emailSubmitted ? (
      <p className="text-green-500 text-[23px] mt-2">Email sent successfully!</p>



        ) : (
          <motion.form
            onSubmit={handleSubmit}
            initial={{ translateX: "100%", opacity: 1 }} 
            animate={isVisible ? { translateX: "0%", opacity: 1 } : { translateX: "20%", opacity: 1 }} 
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="flex flex-col bg-[#030B17] p-10 rounded-xl shadow-2xl space-y-6 border-2 border-[#0A1A2F] hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.01]"
            style={{ clipPath: "inset(0px 0px 0px 0px)" }} 
          >
            <h2 className="text-white text-2xl font-extrabold text-center uppercase tracking-wide drop-shadow-lg">
              Get In Touch
            </h2>

            <div className="relative box-email">
              <label htmlFor="email" className="text-white text-sm font-medium mb-2 font-sans label-custom">
                Email Address
              </label>
              <input name="email" type="email" id="email" required className="input-custom-shadow" placeholder="your.email@example.com" />
              <span className="absolute right-4 top-10 text-[#3F83F8] text-lg">
                <img src="/email.svg" alt="Email Icon" className="w-6 h-6" />
              </span>
            </div>

            <div className="relative">
              <label htmlFor="subject" className="text-white text-sm font-medium mb-2 font-sans label-custom">
                Subject
              </label>
              <input name="subject" type="text" id="subject" required className="input-custom-shadow" placeholder="Enter your subject" />
              <span className="absolute right-4 top-10 text-[#3F83F8] text-lg">
                <img src="/subjects.svg" alt="Subject Icon" className="w-6 h-6" />
              </span>
            </div>

            <div className="relative">
              <label htmlFor="message" className="text-white text-sm font-medium mb-2 font-sans label-custom">
                Your Message
              </label>
              <textarea name="message" id="message" rows="5" className="input-custom-shadow" placeholder="Write your message here..." />
              <span className="absolute right-4 top-10 text-[#3F83F8] text-lg">
                <img src="/chat.svg" alt="Chat Icon" className="w-6 h-6" />
              </span>
            </div>

            <button
              type="submit"
              disabled={emailSubmitted}
              className={`group relative inline-flex items-center justify-center px-8 py-4 font-semibold text-white rounded-full overflow-hidden botao-box ${
                emailSubmitted ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              <span className="relative z-10">{emailSubmitted ? "Email Sent" : "Send e-mail"}</span>
              <span className="absolute top-0 left-0 w-0 h-full bg-gradient-to-r from-transparent via-white/50 to-transparent transition-all duration-500 group-hover:w-full"></span>
            </button>
          </motion.form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
