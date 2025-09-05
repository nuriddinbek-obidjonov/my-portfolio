import React from "react";
import { motion } from "motion/react";
import Languages from "../components/Languages";
import { useTranslation } from "react-i18next";

const Navigation = ({ isOpen, setIsOpen }) => {
  const [t, i18n] = useTranslation();
  return (
    <ul className="nav-ul">
      <li className="nav-li" onClick={() => setIsOpen(!isOpen)}>
        <a className="nav-link" href="/">
          {t("navbar.home")}
        </a>
      </li>
      <li className="nav-li" onClick={() => setIsOpen(!isOpen)}>
        <a className="nav-link" href="#about">
          {t("navbar.about")}
        </a>
      </li>
      <li className="nav-li" onClick={() => setIsOpen(!isOpen)}>
        <a className="nav-link" href="#work">
          {t("navbar.work")}
        </a>
      </li>
      <li className="nav-li" onClick={() => setIsOpen(!isOpen)}>
        <a className="nav-link" href="#contact">
          {t("navbar.contact")}
        </a>
      </li>
      <li className="nav-li">
        <Languages />
      </li>
    </ul>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="z-50 fixed inset-x-0 bg-primary/40 backdrop-blur-lg w-full">
      <div className="mx-auto max-w-7xl c-space">
        <div className="flex justify-between items-center py-2 sm:py-0">
          <a
            href="/"
            className="font-bold text-neutral-400 hover:text-white text-xl transition-colors">
            Nuriddinbek
          </a>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="sm:hidden flex focus:outline-none text-neutral-400 haver:text-white cursor-pointer">
            <img
              src={isOpen ? "assets/close.svg" : "assets/menu.svg"}
              alt="menu"
              className="w-6 h-6"
            />
          </button>
          <nav className="hidden sm:flex">
            <Navigation />
          </nav>
        </div>
      </div>
      {isOpen && (
        <motion.div
          className="sm:hidden block overflow-hidden text-center"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          style={{ maxHeight: "100vh" }}
          transition={{ duration: 1 }}>
          <nav className="pb-5">
            <Navigation isOpen={isOpen} setIsOpen={setIsOpen} />
          </nav>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;
