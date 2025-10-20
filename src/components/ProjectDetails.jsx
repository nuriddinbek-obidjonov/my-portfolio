import { motion } from "motion/react";

function ProjectDetails({
  title,
  description,
  subDescription,
  image,
  tags,
  href,
  closeModel,
}) {
  return (
    <div className="z-50 fixed inset-0 flex justify-center items-center backdrop-blur-sm w-full" onClick={closeModel}>
      <motion.div
        className="relative bg-gradient-to-l from-midnight to-navy shadow-sm border border-white/10 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-scroll"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }} onClick={(e) => e.stopPropagation()}>
          <button
          onClick={closeModel}
          className="top-5 right-5 absolute bg-midnight hover:bg-gray-500 p-2 rounded-sm duration-500">
          <img src="assets/close.svg" alt="close" className="w-6 h-6" />
          </button>
          <img src={image} alt={title} className="rounded-t-2xl w-full" />
          <div className="p-5">
            <h5 className="mb-2 font-bold text-white text-2xl">{title}</h5>
            <p className="mb-3 font-bold text-white">{description}</p>
            {subDescription.map((item, index) => (
              <p key={index} className="mb-3 font-normal text-neutral-400">
                {item}
              </p>
            ))}
            <div className="flex justify-between items-center mt-4">
              <div className="flex gap-3">
                {tags.map((tag) => (
                  <img
                    key={tag.id}
                    src={tag.path}
                    alt={tag.name}
                    className="rounded-lg size-10 hover-animation"
                  />
                ))}
              </div>
              <a
                href={href}
                className="inline-flex items-center gap-1 font-medium text-sm cursor-pointer hover-animation">
                View Project{" "}
                <img src="assets/arrow-up.svg" className="size-4" alt="arrow" />
              </a>
            </div>
          </div>
      </motion.div>
    </div>
  );
}

export default ProjectDetails;
