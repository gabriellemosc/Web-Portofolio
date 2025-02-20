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
  { name: "MySQL", src: "/mysql.svg" },
  { name: "Git", src: "/git.svg" },
  { name: "Apache", src: "/apache.svg" },
  { name: "Django", src: "/django.svg" },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isTitleVisible, setIsTitleVisible] = useState(false);
  const [isTextVisible, setIsTextVisible] = useState(false);
  const [isTopicsVisible, setIsTopicsVisible] = useState(false);
  const [isIconsVisible, setIsIconsVisible] = useState(false);
  const [isCertificationsVisible, setIsCertificationsVisible] = useState(false);  //certicicado

  const titleRef = useRef(null);
  const textRef = useRef(null);
  const topicsRef = useRef(null);
  const iconsRef = useRef(null);
  const certificationsRef = useRef(null);  //certificado


  const handleTabChange = (id) => {
    setTab(id);
  };

  // Hook customizado para usar o IntersectionObserver
 // Hook customizado para usar o IntersectionObserver
const useIntersectionObserver = (ref, setState) => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setState(entry.isIntersecting); // Altera o estado quando o elemento entra ou sai da tela
      },
      { threshold: 0.5 } // Considera o elemento como visível quando 50% dele entra na tela
    );

    if (ref.current) observer.observe(ref.current); // Observa o elemento

    return () => {
      if (ref.current) observer.unobserve(ref.current); // Limpa o observador ao desmontar o componente
    };
  }, [ref, setState]);
};


  useIntersectionObserver(titleRef, setIsTitleVisible);
  useIntersectionObserver(textRef, setIsTextVisible);
  useIntersectionObserver(topicsRef, setIsTopicsVisible);
  useIntersectionObserver(iconsRef, setIsIconsVisible);
  useIntersectionObserver(certificationsRef, setIsCertificationsVisible);


  // Conteúdo dos ícones (aba Skills)
  const skillsContent = (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 mt-6">
      {TOOL_ICONS.map((tool, index) => (
        <div
          key={tool.name}
          className={`group flex flex-col items-center transition-transform duration-500 ease-out transform ${
            isIconsVisible ? "icon-visible" : "icon-hidden"
          }`}
          style={{ transitionDelay: `${index * 100}ms` }}
        >
          <div className="relative group">
            <div className="icon-container">
              <Image src={tool.src} alt={tool.name} width={50} height={50} className="icon" />
            </div>
            <span className="tool-name">{tool.name}</span> {/* Nome do ícone */}
          </div>
        </div>
      ))}
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
        <div
        ref={textRef}
        className={`text-base lg:text-lg about_text ${isTextVisible ? "animate-visible" : ""}`}
        >
        <ul className="list-disc pl-2 certificacoes">
          <li>AWS Impressionador - Hashtag Treinamentos</li>
          <li>Python Impressionador - Hashtag Treinamentos</li>
          <li>SQL - Hashtag Treinamentos</li>
          <li>Advanced Linux - Estudonauta</li>
        </ul>
      </div>
      
      
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
          <div
            ref={textRef}
            className={`text-base lg:text-lg about_text ${isTextVisible ? "animate-visible" : ""}`}
          >
            <p className="about_p">
              I am a <strong>backend developer</strong> from <i>Sao Paulo, Brazil</i>, passionate about{" "}
              <strong>technology</strong> and solving <strong>complex problems</strong>. With experience in software
              development, I focus on creating <strong>scalable, efficient, and secure</strong> systems that drive innovation.
            </p>

            <p className="about_p">
              My expertise includes <strong>C++, Python, and JavaScript</strong>, which I use to build high-performance
              applications. I also work with <strong>Docker, Linux, and Bash</strong> to create flexible environments and
              automate processes, streamlining development and infrastructure.
            </p>

            <p className="about_p">
              Leveraging <strong>AWS</strong> for cloud scalability, <strong>MySQL</strong> for database management, and{" "}
              <strong>Apache</strong> for web performance optimization, I ensure that applications run smoothly and
              efficiently.
            </p>
          </div>
          <div
            ref={topicsRef}
            className={`flex flex-row justify-start mt-8 topics_about ${isTopicsVisible ? "animate-visible" : ""}`}
          >
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
          <div ref={iconsRef} className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
