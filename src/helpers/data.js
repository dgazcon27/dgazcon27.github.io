import {
  faPenNib,
  faLaptopCode,
  faTasks,
} from "@fortawesome/free-solid-svg-icons";

import koalaHome from "../assets/images/Web_PANTALLA_1.jpg";
import koalaLogo from "../assets/images/Web_PC_inicial_2.jpg";

export const posts = () => [
  {
    id: 1,
    title: "Responsive",
    icon: faPenNib,
    content: "Adaptable layout to any screen or mobile device.",
  },
  {
    id: 2,
    title: "Develop",
    icon: faLaptopCode,
    content: "Intuitive and easy to use interface with a clean UI/UX",
  },
  {
    id: 3,
    title: "Focus on",
    icon: faTasks,
    content:
      "Attention to details and requirement make a organic and efficient development.",
  },
];

export const projects = [
  {
    title: "Delete Productions Dashboard",
    lang: "React/Redux",
    subtitle: "Manage events dashboard",
    content: `Delete Productions Dashboard was a web app for manages resources, products, stages and reservations in music events.`,
    img: require("../assets/images/logo-delete.png"),
    images: [
      require("../assets/images/delete1.jpg"),
      require("../assets/images/delete2.jpg"),
    ],
    link: "",
    repo: "https://github.com/dgazcon27/delete-backoffice",
  },
  {
    title: "5 Tenedores",
    lang: "React Native/Firebase",
    subtitle: "Social App",
    content: `5 Tenedores offers to users add restaurants and rank it, add to favorites, comment and see the top 5 five of popular restaurants`,
    img: require("../assets/images/5tenedores.png"),
    images: [require("../assets/images/5tenedores.png")],
    link: "",
    repo: "https://github.com/dgazcon27/5-tenedores",
  },
  {
    title: "AduanaLibre",
    lang: "Angular/Loopback",
    subtitle: "Dashboard and Landing Page",
    content: `Aduanalibre is an e-commerce B2B that group and index all companies what work in free zone around the world`,
    img: require("../assets/images/aduanalibre.png"),
    images: [require("../assets/images/aduanalibre.png")],
    link: "",
    repo: "https://gitlab.com/aduanalibre/frontend",
  },
  {
    title: "AWKoala Play",
    lang: "React/ExpressJs",
    subtitle: "Interactive Game",
    content: `AWKoala Play is an interactive game where children between 4 and 7 years old, with supervision of theirs parents can play and learn their first words`,
    img: koalaLogo,
    images: [require("../assets/images/aduanalibre.png")],
    link: "http://awkoala.azurewebsites.net/",
    repo: "",
  },
];
// una plataforma e-commerce B2B que funciona como un
// directorio e indexa las empresas que hacen vida dentro de las zonas francas.

export const socialNetworks = {
  twitter: "https://twitter.com/dgazcon",
  ig: "https://www.instagram.com/dgazcon/",
  linkedin: "https://www.linkedin.com/in/dgazcon/",
};

export const skills = [
  {
    name: "JavaScript",
    level: 70,
    label: "",
    initial: 0,
  },
  {
    name: "React",
    level: 65,
    label: "",
    initial: 0,
  },
  {
    name: "VueJs",
    level: 50,
    label: "",
    initial: 0,
  },
  {
    name: "React-Native",
    level: 40,
    label: "",
    initial: 0,
  },
  {
    name: "Nodejs",
    level: 50,
    label: "",
    initial: 0,
  },
  {
    name: "CSS",
    level: 70,
    label: "",
    initial: 0,
  },
  {
    name: "SASS",
    level: 55,
    label: "",
    initial: 0,
  },
  {
    name: "Git",
    level: 70,
    label: "",
    initial: 0,
  },
];
