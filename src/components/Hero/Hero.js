import React from "react";
import "./Hero.css";
import { Button } from "react-bootstrap";

export const Hero = () => {
  return (
    <section className="hero-div">
      <div className="hero-info py-2 px-3">
        <h1
          style={{
            fontSize: "3rem",
          }}
        >
          Agatha Ambrose
        </h1>

        <Button variant = "primary">
          <a
            href="https://drive.google.com/file/d/1wrYZzRy5Zm0NGXWlAb4NVCSTK_HVzsvn/view?usp=sharing"
            target="_blank"
            rel="noreferrer noopener"
            style={{
              color: "black",
            }}
          >
            Resume
          </a>
        </Button>
      </div>
    </section>
  );
};
