"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

// Array com os ícones das ferramentas de programação
const TOOL_ICONS = [
  { name: "Node.js", src: "/noda_js.svg" },
  { name: "Docker", src: "/docker.svg" },
  { name: "Python", src: "/python.svg" },
  { name: "Linux", src: "/linux.svg" },
  { name: "Bash", src: "/bash.svg" },
  { name: "AWS", src: "/aws.svg" },
  { name: "C++", src: "/cpp.svg" },
  { name: "JS", src: "/js.svg" },
  { name: "MYSQL", src: "/mysql.svg" },
  { name: "Git", src: "/git.svg" },
  { name: "Apache", src: "/apache.svg" },
  { name: "Django", src: "/django.svg" },
];

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div>
        {/* Lista de Skills */}
       

        {/* Ícones das Ferramentas */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 mt-6">
          {TOOL_ICONS.map((tool) => (
            <div key={tool.name} className="flex flex-col items-center">
              <Image src={tool.src} alt={tool.name} width={50} height={50} />
              <p className="text-sm mt-2">{tool.name}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Fullstack Academy of Code</li>
        <li>University of California, Santa Cruz</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isTitleVisible, setIsTitleVisible] = useState(false);
  const [isTextVisible, setIsTextVisible] = useState(false);
  const [isTopicsVisible, setIsTopicsVisible] = useState(false);

  const titleRef = useRef(null);
  const textRef = useRef(null);
  const topicsRef = useRef(null);

  const handleTabChange = (id) => {
    setTab(id);
  };

  const useIntersectionObserver = (ref, setState) => {
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setState(entry.isIntersecting);
        },
        { threshold: 0.5 }
      );

      if (ref.current) observer.observe(ref.current);

      return () => {
        if (ref.current) observer.unobserve(ref.current);
      };
    }, [ref, setState]);
  };

  useIntersectionObserver(titleRef, setIsTitleVisible);
  useIntersectionObserver(textRef, setIsTextVisible);
  useIntersectionObserver(topicsRef, setIsTopicsVisible);

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 ref={titleRef} className={`about ${isTitleVisible ? "animate-visible" : ""}`}>
            About Me
          </h2>
          <p ref={textRef} className={`text-base lg:text-lg about_text ${isTextVisible ? "animate-visible" : ""}`}>
            I am a full stack web developer with a passion for creating interactive and responsive 
            web applications. I have experience working with JavaScript, React, Redux, Node.js, 
            Express, PostgreSQL, Sequelize, HTML, CSS, and Git. I am a quick learner and I am 
            always looking to expand my knowledge and skill set. I am a team player and I am excited 
            to work with others to create amazing applications.
          </p>
          <div ref={topicsRef} className={`flex flex-row justify-start mt-8 topics_about ${isTopicsVisible ? "animate-visible" : ""}`}>
            <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
              Skills
            </TabButton>
            <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>
              Education
            </TabButton>
            <TabButton selectTab={() => handleTabChange("certifications")} active={tab === "certifications"}>
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
