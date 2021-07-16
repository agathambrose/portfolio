import React from "react";
import "./Hero.css";
import Typical from "react-typical";

export const Hero = () => {
  return (
    <section className="hero-div">
      <div className="px-3 py-2 mt-5 hero-info">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          <h2
            style={{
              fontWeight: "500",
            }}
            className='name-div'
          >
            Agatha Ambrose
          </h2>
        </div>
        <p
          style={{
            fontFamily: "Poppins, sans-serif",
          }}
          className='typical-div'
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
