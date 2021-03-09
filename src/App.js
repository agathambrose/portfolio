import "./App.css";
import React from "react";
import Header from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Projects } from "./components/Projects/Projects";
import { Stack } from "./components/Stack/Stack";
import { ContactCard } from "./components/ContactCard/ContactCard";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Stack />
      <Projects />
      <ContactCard />
    </div>
  );
};

export default App;
