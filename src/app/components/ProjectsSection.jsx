"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Terminal Portfolio Website",
    description: "A Portfolio Terminal built with Javascript that tells a little more about me",
    image: "/images/projects/portfolio_home.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/gabriellemosc/Porfolio-Terminal",
    previewUrl: "https://gabriellemosc.github.io/Porfolio-Terminal/",
  },
  {
    id: 2,
    title: "React Terminal Portfolio Website",
    description: "A Portfolio Terminal built with Javascript that tells a little more about me",
    image: "/images/projects/terminal_portfolio.png",
    previewImage: "/images/projects/Code_Git/code_terminal.png", // Imagem de preview personalizada
    tag: ["All", "Web"],
    gitUrl: "https://github.com/gabriellemosc/Porfolio-Terminal",
    previewUrl: "https://gabriellemosc.github.io/Porfolio-Terminal/",
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: 'A e-commerce inspire by a Brazilian web store called "Reserva" ',
    image: "/images/projects/reserva_project.png",
    previewImage: "/images/projects/Code_Git/reserva_project.png", // Imagem de preview personalizada
    tag: ["All", "Web"],
    gitUrl: "https://github.com/gabriellemosc/Ecommerce_Project",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Netflix Project",
    description: "Project 4 description",
    image: "/images/projects/netflix_project.png",
    previewImage: "/images/projects/Code_Git/netflix_project.png", // Imagem de preview personalizada
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/gabriellemosc/Netflix_Copy",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Flappy Bird Project",
    description: "Authentication and CRUD operations",
    image: "/images/projects/flappybird_project.webp",
    previewImage: "/images/projects/Code_Git/flappy_project.png", // Imagem de preview personalizada
    tag: ["All", "Web"],
    gitUrl: "https://github.com/gabriellemosc/Flappy-Bird",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Appy Kivy",
    description: "Project 5 description",
    image: "/images/projects/app_kivy.png",
    previewImage: "/images/projects/Code_Git/app_kivy.png", // Imagem de preview personalizada
    tag: ["All", "Web"],
    gitUrl: "https://github.com/gabriellemosc/App-de-Vendas-",
    previewUrl: "/",
  },
];

const ProjectItem = ({ project, index }) => {
  const itemRef = useRef(null);
  const itemInView = useInView(itemRef, { amount: 0.3 });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.li
      ref={itemRef}
      initial={{ y: 50, opacity: 0 }}
      animate={itemInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
      transition={{ duration: 0.3, delay: index * 0.2 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative"
    >
      <ProjectCard
        title={project.title}
        description={project.description}
        imgUrl={project.image}
        previewImg={project.previewImage} // Passando a nova imagem para preview
        gitUrl={project.gitUrl}
        previewUrl={project.previewUrl}
        className="project-image"
        descriptionClass="project-description"
      />
      {isHovered && (
        <div className="preview-box">
          <img src={project.image} alt={project.title} />
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
