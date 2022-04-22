import i18next from "i18next";

const projects = [
  {
    name: i18next.t("nonoName"),
    fullDescription: i18next.t("nonoFullDescription"),
    description: i18next.t("nonoDescription"),
    categories: ["node", "express", "mongodb", "bootstrap", "ejs", "rest"],
    website: "https://nono-audiologia.herokuapp.com/",
    code: "https://github.com/diego-rg/nono-audiologia",
    image: "/static/img/nono.PNG",
    main: true,
  },
  {
    name: i18next.t("dictionaryName"),
    fullDescription: i18next.t("dictionaryFullDescription"),
    description: i18next.t("dictionaryDescription"),
    categories: ["react", "materialui"],
    website: "https://react-diccionario-programacion.vercel.app/",
    code: "https://github.com/diego-rg/react-diccionario-programacion",
    image: "/static/img/diccionario.PNG",
    main: true,
  },
  {
    name: "API diccionario programación",
    description:
      "API REST con términos relacionados con programación y sus definiciones.",
    categories: ["node", "express", "rest", "mongodb"],
    website: "https://api-diccionarioprogramacion.herokuapp.com/",
    code: "https://github.com/diego-rg/api-diccionario-programacion",
    image: "/static/img/api.PNG",
    main: false,
  },
  {
    name: "MetTech",
    description:
      "Página web para una empresa ficticia de fabricación de elementos metálicos.",
    categories: ["bootstrap"],
    website: "https://diego-rg.github.io/mettech-bootstrap/",
    code: "https://github.com/diego-rg/mettech-bootstrap",
    image: "/static/img/mettech.PNG",
    main: false,
  },
  {
    name: "Juego colores RGB",
    description:
      "Juego en el que el usuario debe adivinar el color que corresponde con la notación RGB generada.",
    categories: ["javascript", "css", "html"],
    website: "https://diego-rg.github.io/color-guessing-game/",
    code: "https://github.com/diego-rg/color-guessing-game",
    image: "/static/img/game.PNG",
    main: false,
  },
  {
    name: "Portfolio css/html",
    description: "Primer portfolio hecho con CSS3 y HTML5.",
    categories: ["css", "html"],
    website: "https://diego-rg.github.io/portfolio-basico-espanol/",
    code: "https://github.com/diego-rg/portfolio-basico-espanol",
    image: "/static/img/./portfolioSencillo.PNG",
    main: false,
  },
];

export default projects;
