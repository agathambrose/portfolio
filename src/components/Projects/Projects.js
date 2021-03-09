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
      className='py-5 px-5'
    >
      <div className="text-center mt-3 mb-4 pt-4">
        <h1>Projects</h1>
      </div>

      <div className="card__container mx-4">
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
                <Button variant="outline-primary" className="mb-2">
                  <a
                    href={item.github}
                    style={{ color: "black" }}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Source Code
                  </a>
                </Button>
                <Button variant="primary">
                  <a
                    href={item.vercel}
                    style={{ color: "white" }}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    Website
                  </a>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
