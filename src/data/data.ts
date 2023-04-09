import { PostProps } from "../interfaces/PostProps";

export const posts: PostProps[] = [
  {
    id: 1,
    author: {
      name: "Gabriel Gomes",
      role: "Fullstack web Developer",
      avatar: "https://github.com/GabrielGomesFer.png",
    },
    content: [
      {
        type: "paragraph",
        text: "Fala galeraa 👋",
      },
      {
        type: "paragraph",
        text: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      {
        type: "link",
        text: "👉 jane.design/doctorcare",
      },
      {
        type: "hashtag",
        text: ["#novoprojeto", "#nlw", "#rocketseat"],
      },
    ],
    publishedAt: new Date("2023-04-07 21:51:38"),
  },
  {
    id: 2,
    author: {
      name: "Rafael Rocha",
      role: "Fullstack web Developer",
      avatar: "https://github.com/RafaelRRhocha.png",
    },
    content: [
      {
        type: "paragraph",
        text: "Fala pessoal 👋",
      },
      {
        type: "paragraph",
        text: "Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻",
      },
      {
        type: "paragraph",
        text: "Acesse e deixe seu feedback ",
      },
      {
        type: "link",
        text: "👉 devonlane.design",
      },
      {
        type: "hashtag",
        text: ["#uiux", "#userexperience"],
      },
    ],
    publishedAt: new Date("2023-04-08 01:38:22"),
  },
];