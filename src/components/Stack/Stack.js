import React from "react";
import { StackData } from "./StackData";
import "./Stack.css";

export const Stack = () => {
  return (
    <section
      style={{
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <div className="pt-4 mt-4 mb-2 text-center">
        <h1
          style={{
            fontFamily: "Prata, sans-serif",
          }}
        >
          Stack
        </h1>
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
