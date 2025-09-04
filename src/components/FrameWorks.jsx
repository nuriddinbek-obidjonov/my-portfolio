import { OrbitingCircles } from "./OrbitingCircles";

const Frameworks = () => {
  const skills = [
    "auth0",
    "visualstudiocode",
    "github",
    "css3",
    "git",
    "threejs",
    "html5",
    "microsoft",
    "react",
    "trello",
    "tailwindcss",
    "vitejs",
    "javascript",
    "wordpress",
  ];
  return (
    <div className="relative flex flex-col justify-center items-center w-full h-[15rem]">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {skills.reverse().map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} />
        ))}
      </OrbitingCircles>
    </div>
  );
};

const Icon = ({ src }) => (
  <img
    src={src}
    className="rounded-sm hover:scale-110 duration-200"
    alt="tool"
  />
);

export default Frameworks;
