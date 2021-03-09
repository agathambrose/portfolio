import Img1 from "../../assets/quiz-app.png";
import Img2 from "../../assets/Ecommerce.png";
import Img3 from "../../assets/hex-clock.png";
import Img4 from "../../assets/welcome-pg.png";

export const ProjectsData = [
  {
    id: 1,
    image: Img1,
    title: "Quiz-App",
    description:
      "This was my second React Project. It was built with React, Formik, Redux Toolkit, Bootstrap and React-Bootstrap. It has a backend-generated login for admin only while users register(if new) and login (if account exists).",
    github: "https://github.com/agathambrose/AgathAmbrose-Quiz-App",
    vercel: "https://quiz-app-six-rho.vercel.app/",
  },

  {
    id: 2,
    image: Img2,
    title: "E-commerce",
    description:
      "This was built was my first React project. It was built with React, Bootstrap and React-Bootstrap. It has a sign in and log in page, product details page and also a cart.",
    github: "https://github.com/agathambrose/agathambrose-hasob-ecommerce",
    vercel: "https://agathambrose-hasob-ecommerce.vercel.app/",
  },

  {
    id: 3,
    image: Img3,
    title: "Realtime Hex-Clock",
    description: "This was built with HTML 5, CSS 3 and Javascript. It is a real-time clock that makes use of random values to generate random hex background colors.",
    github: "https://github.com/agathambrose/realtime-hexclock",
    vercel: "https://realtime-hexclock.vercel.app/",
  },

  {
    id: 4,
    image: Img4,
    title: "Form with JSON",
    description:
      "This was built with HTML 5, CSS 3, Javascript, JSON and JQUERY. On submit, it renders a JSON data of values input into the form",
    github:
      "https://github.com/agathambrose/welcome-form/tree/main/hasob_project",
    vercel: "https://hasob-project.vercel.app/",
  },
];
