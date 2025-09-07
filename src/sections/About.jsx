import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/Globe";
import CopyEmailButton from "../components/CopyEmailButton";
import FrameWorks from "../components/FrameWorks";
import { useTranslation } from "react-i18next";

const About = () => {
  const grid2Container = useRef();
  const [t, i18n] = useTranslation();
  return (
    <section id="about" className="c-space section-spacing">
      <h2 className="text-heading">About Me</h2>
      <div className="gap-4 grid grid-cols-1 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-1 grid-default-color">
          <img
            src="assets/coding-pov.png"
            alt="image"
            className="-top-[1rem] -right-[5rem] md:left-50 absolute md:inset-y-10 scale-[1.75] md:scale-[3] lg:scale-[2.5]"
          />
          <div className="z-10">
            <p className="headtext">{t("about.box1.heading")}</p>
            <p className="subtext">{t("about.box1.text")}</p>
            <div className="absolute inset-x-0 bg-gradient-to-t from-indigo h-1/2 sm:h-1/3 pointer-events-none"></div>
          </div>
        </div>

        {/* Grid 2 */}
        <div className="grid-2 grid-default-color">
          <div
            ref={grid2Container}
            className="flex justify-center items-center w-full h-full">
            <p className="flex items-end text-gray-500 text-5xl">
              CODE IS CRAFT
            </p>
            <Card
              style={{ rotate: "75deg", top: "30%", left: "20%" }}
              text="GRASP"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "30deg", top: "60%", left: "45%" }}
              text="Design Principles"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "90deg", bottom: "30%", left: "70%" }}
              text="SOLID"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "55%", left: "0%" }}
              text="Design Patterns"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "20deg", top: "10%", left: "38%" }}
              text="SRP"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "30deg", top: "70%", left: "70%" }}
              image="assets/logos/csharp-pink.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-30deg", top: "70%", left: "25%" }}
              image="assets/logos/dotnet-pink.png"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-45deg", top: "5%", left: "10%" }}
              image="assets/logos/blazor-pink.png"
              containerRef={grid2Container}
            />
          </div>
        </div>

        {/* Grid 3 */}
        <div className="grid-3 grid-black-color">
          <div className="z-10 w-[50%]">
            <p className="headtext">{t("about.box3.heading")}</p>
            <p className="subtext">{t("about.box3.text")}</p>
          </div>
          <figure className="top-[10%] left-[30%] absolute">
            <Globe />
          </figure>
        </div>

        {/* Grid 4 */}
        <div className="grid-4 grid-special-color">
          <div className="flex flex-col justify-center items-center gap-4 size-full">
            <p className="text-center headtext">{t("about.box4.heading")}</p>
            <CopyEmailButton />
          </div>
        </div>

        {/* Grid 5 */}
        <div className="grid-5 grid-default-color">
          <div className="z-10 w-[50%]">
            <p className="headtext">{t("about.box5.heading")}</p>
            <p className="subtext">{t("about.box5.text")}</p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full md:scale-125 start-[65%] md:start-[50%]">
            <FrameWorks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
