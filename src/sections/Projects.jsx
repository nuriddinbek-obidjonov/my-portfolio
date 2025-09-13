import { useTranslation } from "react-i18next";
import Project from "../components/Project";
import { createProjects } from "../constants";
import { motion, useMotionValue, useSpring } from "motion/react";
import { useState } from "react";

function Projects() {
  const [t, i18n] = useTranslation();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 10, stiffness: 50 });
  const springY = useSpring(y, { damping: 10, stiffness: 50 });
  const handleMouseMove = (event) => {
    x.set(event.clientX + 20);
    y.set(event.clientY + 20);
  };
  const [preview, setPreview] = useState(null);
  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative c-space section-spacing">
      <h2 className="text-heading">{t("projects.heading")}</h2>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 w-full h-[1px]" />
      {createProjects().map((project) => (
        <Project key={project.id} {...project} setPreview={setPreview} />
      ))}
      {preview && (
        <motion.img
          src={preview}
          alt=""
          className="top-0 left-0 z-49 fixed shadow-lg rounded-lg w-80 h-56 object-cover pointer-events-none"
          style={{ x: springX, y: springY }}
        />
      )}
    </section>
  );
}

export default Projects;
