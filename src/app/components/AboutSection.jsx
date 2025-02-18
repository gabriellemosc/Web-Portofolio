"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

// Array com os ícones das ferramentas de programação
const TOOL_ICONS = [
  { name: "", src: "/noda_js.svg" },
  { name: "", src: "/docker.svg" },
  { name: "", src: "/python.svg" },
  { name: "", src: "/linux.svg" },
  { name: "", src: "/bash.svg" },
  { name: "", src: "/aws.svg" },
  { name: "", src: "/cpp.svg" },
  { name: "", src: "/js.svg" },
  { name: "", src: "/mysql.svg" },
  { name: "", src: "/git.svg" },
  { name: "", src: "/apache.svg" },
  { name: "", src: "/django.svg" },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isTitleVisible, setIsTitleVisible] = useState(false);
  const [isTextVisible, setIsTextVisible] = useState(false);
  const [isTopicsVisible, setIsTopicsVisible] = useState(false);
  const [isIconsVisible, setIsIconsVisible] = useState(false);

  const titleRef = useRef(null);
  const textRef = useRef(null);
  const topicsRef = useRef(null);
  const iconsRef = useRef(null);

  const handleTabChange = (id) => {
    setTab(id);
  };

  // Hook customizado para usar o IntersectionObserver
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
  useIntersectionObserver(iconsRef, setIsIconsVisible);

  // Conteúdo dos ícones (aba Skills)
  const skillsContent = (
    <div>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 mt-6">
        {TOOL_ICONS.map((tool, index) => (
          <div
            key={tool.name}
            className={`flex flex-col items-center transition-transform duration-500 ease-out transform ${
              isIconsVisible ? "icon-visible" : "icon-hidden"
            }`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            <Image src={tool.src} alt={tool.name} width={50} height={50} />
            <p className="text-sm mt-2">{tool.name}</p>
          </div>
        ))}
      </div>
    </div>
  );

  // Dados das abas
  const TAB_DATA = [
    {
      title: "Skills",
      id: "skills",
      content: skillsContent,
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

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 ">
      <Image
            src="/images/about-image.png"
            width={500}
            height={500}
            className={`about-image ${isTitleVisible ? "animate-visible" : ""}`}
          />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 ref={titleRef} className={`about ${isTitleVisible ? "animate-visible" : ""}`}>
            About Me
          </h2>
          <p
            ref={textRef}
            className={`text-base lg:text-lg about_text ${isTextVisible ? "animate-visible" : ""}`}
          >
            I am a full stack web developer with a passion for creating interactive and responsive
            web applications. I have experience working with JavaScript, React, Redux, Node.js,
            Express, PostgreSQL, Sequelize, HTML, CSS, and Git. I am a quick learner and I am
            always looking to expand my knowledge and skill set. I am a team player and I am excited
            to work with others to create amazing applications.
          </p>
          <div
            ref={topicsRef}
            className={`flex flex-row justify-start mt-8 topics_about ${
              isTopicsVisible ? "animate-visible" : ""
            }`}
          >
            <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
              Skills
            </TabButton>
            <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div ref={iconsRef} className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
