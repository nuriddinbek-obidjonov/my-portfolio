"use client";
import { useScroll, useTransform, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

const Timeline = ({ data }) => {
  const [t, i18n] = useTranslation();
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="c-space section-spacing" ref={containerRef}>
      <h2 className="text-heading">{t("experiences.heading")}</h2>
      <div className="relative mt-5 pb-10">
        <p className="max-w-sm text-neutral-700 dark:text-neutral-300 text-sm md:text-base">
          {t("experiences.text")}
        </p>
      </div>
      <div ref={ref} className="relative mx-auto max-w-7xl overflow-hidden">
        {data.map((item, index) => (
          // Job experiences
          <div
            key={index}
            className="flex justify-start md:gap-10 pt-10 md:pt-40">
            {/* Desktop view */}
            <div className="top-40 z-40 sticky flex md:flex-row flex-col items-center self-start md:w-full max-w-xs lg:max-w-sm">
              <div className="-left-[15px] absolute flex justify-center items-center bg-midnight rounded-full w-10 h-10">
                <div className="bg-neutral-800 p-2 border-neutral-700 rounded-full w-4 h-4" />
              </div>
              <div className="hidden md:flex flex-col gap-2 md:pl-20 font-bold text-neutral-300 text-xl md:text-4xl">
                <h3>{item.date}</h3>
                <h3 className="text-neutral-400 text-3xl">{item.title}</h3>
                <h3 className="text-neutral-500 text-3xl">{item.job}</h3>
              </div>
            </div>

            {/* Mobile view */}
            <div className="relative pr-4 pl-10 md:pl-4 w-full">
              <div className="md:hidden block mb-4 font-bold text-neutral-300 text-4xl text-left">
                <h3>{item.date}</h3>
                <h3>{item.job}</h3>
              </div>
              {item.contents.map((content, i) => {
                return (
                  <p className="mb-3 font-normal text-neutral-300" key={i}>
                    {content}
                  </p>
                );
              })}
            </div>
          </div>
        ))}

        {/* Vertical line */}
        <div
          style={{
            height: height + "px",
          }}
          className="top-0 left-1 absolute bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-[0%] from-transparent via-neutral-700 to-[99%] to-transparent w-[2px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]">
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="top-0 absolute inset-x-0 bg-gradient-to-t from-[0%] from-purple-500 via-[10%] via-lavender/50 to-transparent rounded-full w-[2px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Timeline;
