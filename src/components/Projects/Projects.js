import React from "react";
import { ProjectsData } from "./ProjectsData";
import "./Projects.css";

export const Projects = () => {
  return (
    <section
      style={{
        fontFamily: "Prata",
        marginBottom: "60px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className="pt-5 pb-2 my-2 text-center">
        <h1>Projects</h1>
      </div>

      <div className="container card__container">
        {ProjectsData.map((item) => (
          <div className="card__subcontainer" key={item.id}>
            <img
              variant="top"
              src={item.image}
              alt={"images"}
              className="card__image"
            />

            <div className="mt-5" style={{ fontFamily: "Poppins, sans-serif" }}>
              <h4>{item.title}</h4>

              <p style={{ fontFamily: "Poppins, sans-serif" }}>
                {item.description}
              </p>

              <div className="card__btns">
                <a
                  href={item.github}
                  style={{ color: "black" }}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <button className="mb-2 sourcecode-btn">Source Code</button>
                </a>

                <a
                  href={item.vercel}
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <button block className="website-btn">
                    Website
                  </button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mx-auto d-flex">
        <a href="https://github.com/agathambrose" className="more_project_link">
          More Projects{" "}
        </a>
      </div>
    </section>
  );
};
