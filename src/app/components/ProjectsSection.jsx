"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Portfolio Website",
    description: "A Portfolio Terminal built with Javascript that tells a little more about me",
    image: "/images/projects/terminal_portfolio.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/gabriellemosc/Porfolio-Terminal",
    previewUrl: "https://gabriellemosc.github.io/Porfolio-Terminal/",
  },
  {
    id: 2,
    title: "Photography Portfolio Website",
    description: "Project 2 description",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "Project 3 description",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Food Ordering Application",
    description: "Project 4 description",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "React Firebase Template",
    description: "Authentication and CRUD operations",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Full-stack Roadmap",
    description: "Project 5 description",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

  const ProjectItem = ({ project, index }) => {
    const itemRef = useRef(null);
    const itemInView = useInView(itemRef, { amount: 0.3 });

    return (
      <motion.li
        ref={itemRef}
        initial={{ y: 50, opacity: 0 }}
        animate={itemInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
        transition={{ duration: 0.3, delay: index * 0.2 }}
      >
        <ProjectCard
          title={project.title}
          description={project.description}
          imgUrl={project.image}
          gitUrl={project.gitUrl}
          previewUrl={project.previewUrl}
          className="project-image"
          descriptionClass="project-description" // Agora a classe CSS será aplicada!

        />
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
