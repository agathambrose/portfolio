import React from "react";
import { StackData } from "./StackData";
import "./Stack.css";

export const Stack = () => {
  return (
    <section
      style={{
        fontFamily: "Prata",
      }}
    >
      <div className="text-center mt-4 mb-2 pt-4">
        <h1>Skill Set</h1>
      </div>

      <div className="container stack_logo_container">
        {StackData.map((item) => (
          <div className="stack_logo" key={item.id}>
            <img className="stack__image" src={item.img} alt="images" />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
