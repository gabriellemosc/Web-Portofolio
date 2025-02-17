"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Node.js</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>Sequelize</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
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
  const [isImageVisible, setIsImageVisible] = useState(false);

  const titleRef = useRef(null);
  const textRef = useRef(null);
  const topicsRef = useRef(null);
  const imageRef = useRef(null);

  const handleTabChange = (id) => {
    setTab(id);
  };

  const useIntersectionObserver = (ref, setState) => {
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setState(entry.isIntersecting);
        },
        { threshold: 0.3 }
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
  useIntersectionObserver(imageRef, setIsImageVisible);

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        {/* Imagem com animação */}
        <Image
          ref={imageRef}
          src="/images/about-image.png"
          width={500}
          height={500}
          className={`about-image ${isImageVisible ? "animate-visible" : ""}`}
        />

        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2
            ref={titleRef}
            className={`about ${isTitleVisible ? "animate-visible" : ""}`}
          >
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
          <div className="mt-8">{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
