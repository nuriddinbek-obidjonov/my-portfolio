import { motion, AnimatePresence } from "motion/react";

const Alert = ({ type, text }) => {
  const alertVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -50, scale: 0.8 },
  };
  return (
    <AnimatePresence>
      <motion.div
        className="right-5 bottom-5 z-50 fixed flex justify-center items-center"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={alertVariants}
        transition={{ duration: 0.3, ease: "easeInOut" }}>
        <div
          className={`${
            type === "danger" ? "bg-red-800" : "bg-royal"
          } lg:inline-flex flex items-center p-2 rounded-md lg:rounded-full text-indigo-100 leading-none`}>
          <p
            className={`flex rounded-full uppercase px-2 py-1 text-xs font-semibold mr-3 ${
              type === "danger" ? "bg-red-500" : "bg-lavender"
            }`}>
            {type === "danger" ? "Failed" : "Success"}
          </p>
          <p className="txt-left mr-2">{text}</p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Alert;
