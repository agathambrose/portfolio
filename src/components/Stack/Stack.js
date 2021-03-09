import React from "react";
import { StackData } from "./StackData";
import "./Stack.css";

export const Stack = () => {
  return (
    <section
      style={{
        fontFamily: "Prata",
      }}
      className="py-5 px-5"
    >
      <div className="text-center mt-3 mb-4 pt-4">
        <h1>Stack</h1>
      </div>

      <div className="stack_logo_container mx-4">
        {StackData.map((item) => (
          <div className="stack_logo" key={item.id}>
            <img className="stack__image" src={item.img} alt="images" />
          </div>
        ))}
      </div>
    </section>
  );
};
