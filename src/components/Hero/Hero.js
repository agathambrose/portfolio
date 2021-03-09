import React from "react";
import "./Hero.css";
import Typical from "react-typical";

export const Hero = () => {
  return (
    <section className="hero-div">
      <div className="hero-info mt-5 py-2 px-3">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            fontFamily: "Prata",
          }}
        >
          <h2
            style={{
              fontSize: "1.8rem",
              fontWeight: "500",
            }}
          >
            Agatha Ambrose
          </h2>
        </div>
        <p
          style={{
            fontSize: "1.2rem",
            fontFamily: "Prata",
          }}
        >
          <Typical
            steps={[
              "A Frontend Developer",
              800,
              "A Writer",
              800,
              "An Accountant",
              800,
            ]}
            loop={Infinity}
            wrapper="p"
          />
        </p>
      </div>
    </section>
  );
};
