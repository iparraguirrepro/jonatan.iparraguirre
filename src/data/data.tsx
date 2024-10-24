import { Icons } from "@/components/icons";
// import { FolderOpen, HomeIcon, Notebook } from "lucide-react";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Jonatan Iparraguirre",
  initials: "JIP",
  url: "https://jonatan.iparraguirre.pro",
  location: "Lima - Perú",
  locationLink:
    "https://www.google.com/maps/place/Bennett+University/@28.4431291,77.5873979,13.43z/data=!4m6!3m5!1s0x390cbf94deb6bc39:0x7ba6bedc9a2b537f!8m2!3d28.4506465!4d77.5841978!16s%2Fg%2F11c3wvm4q_?entry=ttu&g_ep=EgoyMDI0MTAyMC4xIKXMDSoASAFQAw%3D%3D",
  description:
    "Desarrollador de Software con 9 años de experiencia.",
  summary:
    "Me considero un artesano de la web, mis conocimientos no solo se basan en el desarrollo web, también tengo conocimientos en la creación de aplicaciones móviles y experiencia gestionando equipos digitales. Tengo la habilidad de adaptarme a cualquier proyecto y mantener una comunicación fluida con mis compañeros de trabajo.",
  avatarUrlLight: "/jonatan.jpg",
  avatarUrlDark: "/jonatan.jpg",
  skills: [
    "HTML5",
    "Angular",
    "React",
    "Typescript",
    "Javascript",
    "CSS3",
    "SCSS",
    "Bootstrap",
    "Tailwind",
    "Java",
    "Spring Boot",
    "PHP",
    "Laravel",
    "AS400",
    "DB2",
    "SQL Server",
    "Node.js",
    "Swagger",
    "Figma",
    "Devops",
  ],
  // learning: ["Remix", "Astro", "Rust", "Bun", "Deno"],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    // { href: "/projects", icon: FolderOpen, label: "Projects" },
    // { href: "/blog", icon: Notebook, label: "Blog" },
  ],
  contact: {
    email: "jonatan@iparraguirre.pro",
    tel: "+51 930 308 970",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/iparraguirrepro",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/alle0n",
        icon: Icons.linkedin,
        navbar: true,
      },
      // LeetCode: {
      //   name: "Leetcode",
      //   url: "https://leetcode.com/pathakkmehul",
      //   icon: Icons.leetcode,
      //   navbar: true,
      // },
      // X: {
      //   name: "X",
      //   url: "https://x.com/pathakkmehul",
      //   icon: Icons.x,
      //   navbar: true,
      // },
      Email: {
        name: "Enviar Mensaje",
        url: "mailto:jonatan@iparraguirre.pro",
        icon: Icons.email,
        navbar: false,
      },
    },
  },
  projects: [
    {
      title: "Grupo EBIM",
      // href: "https://z1ppie.vercel.app",
      dates: "Marzo 2024 - Actualmente",
      active: true,
      description:
        "Creación de nuevos componentes en el marketplace de Química Suiza (Catálogo), también en la implementación de la nueva plataforma para registro de establecimientos del DIGEMID, he sido encargado de resolver los errores que tenia el sistema RF de Tailoy.",
      technologies: [
        "Java",
        "Spring Boot",
        "PHP",
        "Laravel",
        "AS400",
        "DB2",
        "SQL Server",
        "Angular",
        "jQuery",
        "Typescript",
        "HTML5",
        "CSS3",
        "SCSS",
        "Bootstrap",
        "Tailwind",
        "Node.js",
        "Swagger",
        "Devops",
        "Figma",
      ],
      links: [
        // {
        //   type: "Website",
        //   href: "https://z1ppie.vercel.app",
        //   icon: <Icons.globe className="size-3" />,
        // },
      ],
      image: "",
      // video: "",
    },
    {
      title: "Métrica Andina",
      // href: "https://notezai.vercel.app",
      dates: "Setiembre 2023 - Marzo 2024",
      active: true,
      description:
        "Creación de componentes standalone para la nueva plataforma de administración, asi como la creación de la página web comercial de Condor Travel y la nueva sección de equipajes dentro del motor de vuelos de Nm Viajes.",
      technologies: [
        "Laravel",
        "SQL Server",
        "Angular",
        "Vue 2",
        "Typescript",
        "HTML5",
        "CSS3",
        "SCSS",
        "Bootstrap",
        "Tailwind",
        "Node.js",
        "Swagger",
        "Figma",
        "Devops",
      ],
      links: [
        // {
        //   type: "Website",
        //   href: "https://notezai.vercel.app",
        //   icon: <Icons.globe className="size-3" />,
        // },
      ],
      image: "",
      // video: "",
    },
    {
      title: "DevosINC",
      // href: "https://bugpa.vercel.app",
      dates: "Marzo 2021 - Setiembre 2023",
      active: true,
      description:
        "Mantenimiento y desarrollo de aplicaciones construidas con angular, react y vtex.io, desarrollando el UX para las aplicaciones planificadas por el área de UI.",
      technologies: [
        "Angular",
        "jQuery",
        "Typescript",
        "HTML5",
        "CSS3",
        "SCSS",
        "Bootstrap",
        "MongoDB",
        "Node.js",
        "Swagger",
        "Figma",
        "React",
        "Vtex.io",
      ],
      links: [
        // {
        //   type: "Website",
        //   href: "https://bugpa.vercel.app",
        //   icon: <Icons.globe className="size-3" />,
        // },
      ],
      image: "",
      // video: "",
    },
    {
      title: "Canvia",
      // href: "https://qaution.vercel.app",
      dates: "Enero 2020 - Marzo 2021",
      active: true,
      description:
        "Creación de modulos micro-front en angular para el nuevo sistema de procesos administrativos del gobierno de España, implementación de  motores reactivos para la aplicación, consumiendo microservicios desarrollados en Java Spring Boot.",
      technologies: [
        "Java",
        "Spring Boot",
        "Laravel",
        "SQL Server",
        "Angular",
        "Typescript",
        "HTML5",
        "SCSS",
        "Bootstrap",
        "Node.js",
        "Swagger",
      ],
      links: [
        // {
        //   type: "Website",
        //   href: "https://qaution.vercel.app",
        //   icon: <Icons.globe className="size-3" />,
        // },
      ],
      image: "",
      // video: "",
    },
  ],
  more_projects: [
    {
      title: "go-todo",
      href: "https://github.com/m3hu1/golang-todo-cli",
      dates: "Sept 2024",
      active: true,
      description:
        "A Go-based CLI for todo task management using Cobra. Supports adding, listing, completing, and deleting tasks with CSV persistence.",
      technologies: ["Go", "Cobra", "CRUD", "CLI"],
      links: [
        {
          type: "Repository",
          href: "https://github.com/m3hu1/golang-todo-cli",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      // video: "",
    },
    {
      title: "go-typing-test",
      href: "https://github.com/m3hu1/typing-test-golang",
      dates: "Oct 2024",
      active: true,
      description:
        "A typing test application that leverages Go for the backend. This project showcases my learning journey in Golang.",
      technologies: ["Go", "HTML", "CSS", "HTTP", "Server"],
      links: [
        {
          type: "Repository",
          href: "https://github.com/m3hu1/typing-test-golang",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      // video: "",
    },
    {
      title: "ceh-notes",
      href: "https://cehnotes.netlify.app",
      dates: "Oct 2024",
      active: true,
      description:
        "Revived study notes for the EC-Council Certified Ethical Hacker (C|EH) v12 exam originally by @findmeandkillme hosted using HonKit.",
      technologies: ["HonKit", "GitBook", "Markdown", "Notes", "Netlify"],
      links: [
        {
          type: "Website",
          href: "https://cehnotes.netlify.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Repository",
          href: "https://github.com/m3hu1/ceh-notes",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      // video: "",
    },
    {
      title: "auto-typer",
      href: "https://github.com/m3hu1/auto-typer",
      dates: "Feb 2024 - Apr 2024",
      active: true,
      description:
        "Python and C++ scripts to automate keyboard typing based on the content of a text file.",
      technologies: ["Python", "C++", "CLI"],
      links: [
        {
          type: "Repository",
          href: "https://github.com/m3hu1/auto-typer",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      // video: "",
    },
    {
      title: "perfect-circle-exploit",
      href: "https://github.com/m3hu1/perfect-circle",
      dates: "Dec 2023",
      active: true,
      description:
        "MacOS only. Exploit to draw a perfect circle (99.9%) on Neal.fun's Perfect Circle Challenge.",
      technologies: ["C++", "CLI", "Exploit"],
      links: [
        {
          type: "Repository",
          href: "https://github.com/m3hu1/perfect-circle",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      // video: "",
    },
    {
      title: "instagram-impostor",
      href: "https://github.com/m3hu1/impostor",
      dates: "Jun 2024",
      active: true,
      description:
        "A python3 script to identify Instagram accounts that don't follow you back.",
      technologies: ["Python", "CLI", "Fun"],
      links: [
        {
          type: "Repository",
          href: "https://github.com/m3hu1/impostor",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      // video: "",
    },
    {
      title: "cpp-fms",
      href: "https://github.com/m3hu1/terminalplusplus",
      dates: "Nov 2023 - Dec 2023",
      active: true,
      description:
        "A C++ based command-line interface (CLI) file management system that implements essential operations from scratch.",
      technologies: ["C++", "CLI", "Collaboration"],
      links: [
        {
          type: "Repository",
          href: "https://github.com/m3hu1/terminalplusplus",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      // video: "",
    },
  ],
};
