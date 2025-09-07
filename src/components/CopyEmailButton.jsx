import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useTranslation } from "react-i18next";

const CopyEmailButton = () => {
  const [t, i18n] = useTranslation();
  const [copied, setCopied] = useState(false);
  const email = "nuriddinbek.obidjonov@gmail.com";
  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <motion.button
      onClick={copyToClipboard}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 1 }}
      className="relative bg-primary px-1 py-4 rounded-full w-[14rem] overflow-hidden font-extralight text-sm text-center cursor-pointer">
      <AnimatePresence mode="wait">
        {copied ? (
          <motion.p
            className="flex justify-center items-center gap-2"
            key="copied"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.1, ease: "easeInOut" }}>
            <img src="assets/copy-done.svg" alt="copy icon" className="w-5" />
            {t("about.box4.btncopied")}
          </motion.p>
        ) : (
          <motion.p
            className="flex justify-center items-center gap-2"
            key="copy"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.1 }}>
            <img src="assets/copy.svg" alt="copy icon" className="w-5" />
            {t("about.box4.btncopy")}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default CopyEmailButton;
