import React from "react";
import { ProjectsData } from "./ProjectsData";
import Button from "react-bootstrap/Button";
import "./Projects.css";

export const Projects = () => {
  return (
    <section
      style={{
        fontFamily: "Prata",
        marginBottom: "60px",
      }}
    >
      <div className="text-center my-2 pt-5 pb-2">
        <h1>Projects</h1>
      </div>

      <div className="card__container">
        {ProjectsData.map((item) => (
          <div className="card__subcontainer" key={item.id}>
            <img
              variant="top"
              src={item.image}
              alt={"images"}
              className="card__image"
            />

            <div className="mt-5">
              <h4>{item.title}</h4>

              <p>{item.description}</p>

              <div className="card__btns">
                <a
                  href={item.github}
                  style={{ color: "black" }}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Button variant="outline-primary"  block className="mb-2">
                    Source Code
                  </Button>
                </a>

                <a
                  href={item.vercel}
                  style={{ color: "white" }}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <Button variant="primary"  block>Website</Button>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
