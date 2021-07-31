import Img1 from "../../assets/quiz-app.png";
import Img2 from "../../assets/Ambrosia.png";
import Img3 from "../../assets/klasha.png";
import Img4 from "../../assets/formplus.png";

export const ProjectsData = [
  {
    id: 1,
    image: Img1,
    title: "Quiz-App",
    description:
      "This was was built with React, Formik, Redux Toolkit, Bootstrap and React-Bootstrap. It has a backend-generated login for admin only while users register(if new) and login (if account already exists).",
    github: "https://github.com/agathambrose/AgathAmbrose-Quiz-App",
    vercel: "https://quizafrica.vercel.app/",
  },

  {
    id: 2,
    image: Img2,
    title: "Spa Website",
    description:
      "This is a single page website for a spa company in Lagos, Nigeria. It was built with React JS, Tailwind CSS, Tailwind CSS animations, Google maps API, wave and GSAP",
    github: "https://github.com/agathambrose/ambrosia-spa",
    vercel: "https://ambrosiaspa.life",
  },

  {
    id: 3,
    image: Img3,
    title: "Klasha UI",
    description:
      "This was built with ReactJS, TailwindCSS and React Icons. I created this also with yarn, CRA, and husky for pre-commit linting",
    github: "https://github.com/agathambrose/klasha-ui",
    vercel: "https://klasha-ui.vercel.app/",
  },

  {
    id: 4,
    image: Img4,
    title: "FormPlus",
    description:
      "This was built with ReactJS, TailwindCSS, Redux-Toolkit, React-Redux, yarn, git, React-Icons, axios.",
    github: "https://github.com/agathambrose/formplus",
    vercel: "https://formplus-task.vercel.app/",
  },
];
