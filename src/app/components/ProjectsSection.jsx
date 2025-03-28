"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const projectsData = [
  {
    id: 1,
    title: "Portfolio Website",
    description: "My Personal Portfolio where I show my projects, resume, professional contacts and a little about myself and my skills.",
    image: "/images/projects/portfolio_home.png",
    previewImage: "/images/projects/web_portfolio.png", 
    previewImgEye:"/images/projects/portfolio_url_pre.png", 
    tag: ["All", "Web"],
    gitUrl: "https://github.com/gabriellemosc/Web-Portofolio",
    previewUrl: "/",
  },
  {
      id: 2,
      title: "E-commerce Project",
      description: 'An e-commerce inspired by a Brazilian web store called "Reserva", with payment and login system.',
      image: "/images/projects/reserva_project.png",
      previewImage: "/images/projects/Code_Git/reserva_project.png", 
      tag: ["All", "Web"],
      gitUrl: "https://github.com/gabriellemosc/Ecommerce_Project",
      previewUrl: null,
    },


  {
    id: 3,
    title: "Terminal Portfolio",
    description: "A Portfolio Terminal made with JavaScript, where I tell a little more about myself and my interests.",
    image: "/images/projects/terminal_portfolio.png",
    previewImage: "/images/projects/Code_Git/code_terminal.png", 
    previewImgEye:"/images/projects/terminal_pre_url.png", 
    tag: ["All", "Web"],
    gitUrl: "https://github.com/gabriellemosc/Porfolio-Terminal",
    previewUrl: "https://gabriellemosc.github.io/Porfolio-Terminal/",
  },
  {
    id: 4,
    title: "Netflix Project",
    description: "A website made with Django, with an interface inspired by Netflix, with a recommendation system and management of films and TV series.",
    image: "/images/projects/netflix_project.png",
    previewImage: "/images/projects/Code_Git/netflix_project.png", 
    tag: ["All", "Web"],
    gitUrl: "https://github.com/gabriellemosc/Netflix_Copy",
    previewUrl: null,
  },
  {
    id: 5,
    title: "Flappy Bird Game",
    description: "The classic FlappyBird game, recreated in Python using the Pygame library, featuring smooth physics and engaging gameplay.",
    image: "/images/projects/flappybird_project.webp",
    previewImage: "/images/projects/Code_Git/flappy_project.png", 
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/gabriellemosc/Flappy-Bird",
    previewUrl: null,
  },
  {
    id: 6,
    title: "Sales App",
    description: "Sales management system, seller tracking, user profile customization and API integration using Firebase DB.",
    image: "/images/projects/app_kivy.png",
    previewImage: "/images/projects/Code_Git/app_kivy.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/gabriellemosc/App-de-Vendas-",
    previewUrl: null, 
  },
];

const ProjectItem = ({ project, index }) => {
  const itemRef = useRef(null);
  const itemInView = useInView(itemRef, { amount: 0.3 });
  const [isHovered, setIsHovered] = useState(false);
  const [isEyeHovered, setIsEyeHovered] = useState(false); 

  const handleMouseEnter = (type) => {
    if (type === "preview") setIsHovered(true);
    if (type === "eye") setIsEyeHovered(true);
  };

  const handleMouseLeave = (type) => {
    if (type === "preview") setIsHovered(false);
    if (type === "eye") setIsEyeHovered(false);
  };

  return (
    <motion.li
      ref={itemRef}
      initial={{ y: 50, opacity: 0 }}
      animate={itemInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
      transition={{ duration: 0.3, delay: index * 0.2 }}
      className="relative"
    >
        <ProjectCard
        title={project.title}
        description={project.description}
        imgUrl={project.image}
        previewImg={project.previewImage} 
        previewImgEye={project.previewImgEye} 
        gitUrl={project.gitUrl}
        previewUrl={project.previewUrl}
        className="project-image"
        descriptionClass="project-description"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />

      {/* Show preview when o CodeBracketIcon hoovered */}
      {isHovered && !isEyeHovered && (
       <div className="preview-box">
       <Image 
         src={project.previewImage || project.image} 
         alt={project.title} 
         width={300}  
         height={200} 
         className="w-full h-auto" 
       />
     </div>
      )}

      {/* Show preview when the EyeIcon hoover */}
      {isEyeHovered && !isHovered && (
      <div className="preview-box">
      <Image 
        src={project.previewImgEye || project.image} 
        alt={project.title} 
        width={300} 
        height={200} 
        className="w-full h-auto" 
      />
    </div>
      )}
    </motion.li>
  );
};

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5, triggerOnce: false });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <section id="projects">
      <motion.h2
        ref={ref}
        className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12 myprojectsh1 animate-title"
        initial={{ y: 50, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        My Projects
      </motion.h2>

      <div ref={ref} className="overflow-hidden">
        <motion.div
          className="text-white flex flex-row justify-center items-center gap-10 py-10 button_projects"
          initial={{ x: "-100%", opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: "-100%", opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"} />
          <ProjectTag onClick={handleTagChange} name="Web" isSelected={tag === "Web"} />
          <ProjectTag onClick={handleTagChange} name="Mobile" isSelected={tag === "Mobile"} />
        </motion.div>
      </div>

      <ul className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <ProjectItem key={project.id} project={project} index={index} />
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
