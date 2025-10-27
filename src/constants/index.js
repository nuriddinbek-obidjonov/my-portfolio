import { useTranslation } from "react-i18next";

export const createProjects = () => {
  const [t, i18n] = useTranslation();
  const myProjects = [
    {
      id: 0,
      title: t("projects.p0.heading"),
      description: t("projects.p0.info"),
      subDescription: [
        t("projects.p0.text.1"),
        t("projects.p0.text.2"),
        t("projects.p0.text.3"),
        t("projects.p0.text.4"),
      ],
      href: "https://quiz-app-coral-eta.vercel.app/",
      logo: "",
      image: "/assets/projects/quiz-app.png",
      tags: [
        {
          id: 1,
          name: "React",
          path: "/assets/logos/react.svg",
        },
        {
          id: 2,
          name: "JavaScript",
          path: "/assets/logos/javascript.svg",
        },
        {
          id: 3,
          name: "API",
          path: "/assets/logos/rest-full-api.svg",
        },
        {
          id: 4,
          name: "CSS",
          path: "/assets/logos/css3.svg",
        },
      ],
    },
    {
      id: 1,
      title: t("projects.p1.heading"),
      description: t("projects.p1.info"),
      subDescription: [
        t("projects.p1.text.1"),
        t("projects.p1.text.2"),
        t("projects.p1.text.3"),
        t("projects.p1.text.4"),
      ],
      href: "https://rent-car-dubai.netlify.app/",
      logo: "",
      image: "/assets/projects/rent-cars.png",
      tags: [
        {
          id: 1,
          name: "React",
          path: "/assets/logos/react.svg",
        },
        {
          id: 2,
          name: "JavaScript",
          path: "/assets/logos/javascript.svg",
        },
        {
          id: 3,
          name: "API",
          path: "/assets/logos/rest-full-api.svg",
        },
        {
          id: 4,
          name: "Tailwind",
          path: "/assets/logos/tailwindcss.svg",
        },
      ],
    },
    {
      id: 2,
      title: t("projects.p2.heading"),
      description: t("projects.p2.info"),
      subDescription: [
        t("projects.p2.text.1"),
        t("projects.p2.text.2"),
        t("projects.p2.text.3"),
      ],
      href: "https://atabaev.netlify.app/",
      logo: "",
      image: "/assets/projects/atabaev-building.png",
      tags: [
        {
          id: 1,
          name: "i18next",
          path: "/assets/logos/i18next.svg",
        },
        {
          id: 2,
          name: "React",
          path: "/assets/logos/react.svg",
        },
        {
          id: 3,
          name: "CSS",
          path: "/assets/logos/css3.svg",
        },
        {
          id: 4,
          name: "Tailwind",
          path: "/assets/logos/tailwindcss.svg",
        },
      ],
    },
    {
      id: 3,
      title: t("projects.p3.heading"),
      description: t("projects.p3.info"),
      subDescription: [
        t("projects.p3.text.1"),
        t("projects.p3.text.2"),
        t("projects.p3.text.3"),
        t("projects.p3.text.4"),
        t("projects.p3.text.5"),
      ],
      href: "https://gamy-sigma.vercel.app/",
      logo: "",
      image: "/assets/projects/gamy-kids.png",
      tags: [
        {
          id: 1,
          name: "JavsaScript",
          path: "/assets/logos/javascript.svg",
        },
        {
          id: 2,
          name: "CSS",
          path: "/assets/logos/css3.svg",
        },
        {
          id: 3,
          name: "HTML",
          path: "/assets/logos/html5.svg",
        },
        {
          id: 4,
          name: "Git",
          path: "/assets/logos/git.svg",
        },
      ],
    },
    {
      id: 4,
      title: t("projects.p4.heading"),
      description: t("projects.p4.info"),
      subDescription: [
        t("projects.p4.text.1"),
        t("projects.p4.text.2"),
        t("projects.p4.text.3"),
        t("projects.p4.text.4"),
        t("projects.p4.text.5"),
      ],
      href: "https://bukhara-fabric.netlify.app/",
      logo: "",
      image: "/assets/projects/bukhara-fabric.png",
      tags: [
        {
          id: 1,
          name: "GitHub",
          path: "/assets/logos/github.svg",
        },
        {
          id: 2,
          name: "React",
          path: "/assets/logos/react.svg",
        },
        {
          id: 3,
          name: "Git",
          path: "/assets/logos/git.svg",
        },
        {
          id: 4,
          name: "i18next",
          path: "/assets/logos/i18next.svg",
        },
      ],
    },
    {
      id: 6,
      title: t("projects.p6.heading"),
      description: t("projects.p6.info"),
      subDescription: [
        t("projects.p6.text.1"),
        t("projects.p6.text.2"),
        t("projects.p6.text.3"),
        t("projects.p6.text.4"),
      ],
      href: "https://udevs-murex.vercel.app/",
      logo: "",
      image: "/assets/projects/udevs.png",
      tags: [
        {
          id: 1,
          name: "Vite",
          path: "/assets/logos/vitejs.svg",
        },
        {
          id: 2,
          name: "Ant Design",
          path: "/assets/logos/ant-design.svg",
        },
        {
          id: 3,
          name: "i18next",
          path: "/assets/logos/i18next.svg",
        },
        {
          id: 4,
          name: "Tailwind",
          path: "/assets/logos/tailwindcss.svg",
        },
      ],
    },
    {
      id: 7,
      title: t("projects.p7.heading"),
      description: t("projects.p7.info"),
      subDescription: [
        t("projects.p7.text.1"),
        t("projects.p7.text.2"),
        t("projects.p7.text.3"),
        t("projects.p7.text.4"),
      ],
      href: "https://my-money-theta-two.vercel.app/",
      logo: "",
      image: "/assets/projects/my-money.png",
      tags: [
        {
          id: 1,
          name: "Vite",
          path: "/assets/logos/vitejs.svg",
        },
        {
          id: 2,
          name: "Firebase",
          path: "/assets/logos/firebase.png",
        },
        {
          id: 3,
          name: "React",
          path: "/assets/logos/react.svg",
        },
        {
          id: 4,
          name: "CSS",
          path: "/assets/logos/css3.svg",
        },
      ],
    },
    {
      id: 8,
      title: t("projects.p8.heading"),
      description: t("projects.p8.info"),
      subDescription: [
        t("projects.p8.text.1"),
        t("projects.p8.text.2"),
        t("projects.p8.text.3"),
        t("projects.p8.text.4"),
      ],
      href: "https://anime-vault-rouge.vercel.app/",
      logo: "",
      image: "/assets/projects/anime.png",
      tags: [
        {
          id: 1,
          name: "Next",
          path: "/assets/logos/nextjs.svg",
        },
        {
          id: 2,
          name: "TypeScript",
          path: "/assets/logos/typescript.svg",
        },
        {
          id: 3,
          name: "API",
          path: "/assets/logos/rest-full-api.svg",
        },
        {
          id: 4,
          name: "Tailwind",
          path: "/assets/logos/tailwindcss.svg",
        },
      ],
    },
  ];
  return myProjects;
};

export const mySocials = [
  {
    name: "Telegram",
    href: "https://t.me/nuriddinbek_1/",
    icon: "/assets/socials/telegram.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/nuriddinbek/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/_nuriddinbek__/",
    icon: "/assets/socials/instagram.svg",
  },
];

export const createExperiences = () => {
  const [t, i18n] = useTranslation();
  const experiences = [
    {
      title: "Mentor",
      job: "MARS IT School",
      date: "2025/09 - present",
      contents: [
        t("experiences.exp1.1"),
        t("experiences.exp1.2"),
        t("experiences.exp1.3"),
      ],
    },
    {
      title: "Software Engineer",
      job: "SOS uz",
      date: "2025/01-2025/09",
      contents: [
        t("experiences.exp2.1"),
        t("experiences.exp2.2"),
        t("experiences.exp2.3"),
        t("experiences.exp2.4"),
        t("experiences.exp2.5"),
      ],
    },
    {
      title: "Frontend Developer",
      job: "LIMSA",
      date: "2024/03-2024/12",
      contents: [
        t("experiences.exp3.1"),
        t("experiences.exp3.2"),
        t("experiences.exp3.3"),
      ],
    },
  ];
  return experiences;
};

export const createReviews = () => {
  const [t, i18n] = useTranslation();
  const reviews = [
    {
      name: "Oybek",
      username: "o_oybek1",
      body: t("testimonials.oybek"),
      img: "https://robohash.org/jack",
    },
    {
      name: "Sardorbek",
      username: "SardorbekPahlavonovv",
      body: t("testimonials.sardorbek"),
      img: "https://robohash.org/jill",
    },
    {
      name: "Navro'za",
      username: "moychechak21",
      body: t("testimonials.navruza"),
      img: "https://robohash.org/john",
    },
    {
      name: "Javohir",
      username: "Ooo122112",
      body: t("testimonials.javohir"),
      img: "https://robohash.org/alice",
    },
    {
      name: "Zulfiya",
      username: "ZULFIYA_007",
      body: t("testimonials.zulfiya"),
      img: "https://robohash.org/bob",
    },
    {
      name: "Rustambek",
      username: "the_rustambek",
      body: t("testimonials.rustambek"),
      img: "https://robohash.org/charlie",
    },
    {
      name: "Muhammadkarim",
      username: "Hrafford",
      body: t("testimonials.muhammadkarim"),
      img: "https://robohash.org/dave",
    },
    {
      name: "Shohruz",
      username: "wzuzb",
      body: t("testimonials.shohruz"),
      img: "https://robohash.org/eve",
    },
  ];
  return reviews;
};
