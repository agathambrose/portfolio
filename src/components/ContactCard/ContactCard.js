import React from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { AiFillLinkedin } from "react-icons/ai";
import undraw from "../../assets/undraw_Modern_woman_lxh7.svg";
import "./ContactCard.css";

export const ContactCard = () => {
  return (
    <section
      style={{
        fontFamily: "Prata",
        
      }}
    >
      <div className="mt-3 mb-4 text-center">
        <h1>Contact Me</h1>
      </div>

      <div className="contact__sect">
        <img className="contact__img" src={undraw} alt="images" />

        <div className="contact__icons d-flex">
          <a
            href="https://github.com/agathambrose/"
            style={{ color: "black" }}
            target="_blank"
            rel="noreferrer noopener"
          >
            <AiOutlineGithub className="icon_img" />
          </a>
          <a
            href="mailto:agathambrose@gmail.com"
            style={{ color: "black" }}
            target="_blank"
            rel="noreferrer noopener"
          >
            <SiGmail className="icon_img" />
          </a>
          <a
            href="https://linkedin.com/in/agatha-ambrose-352639175/"
            style={{ color: "black" }}
            target="_blank"
            rel="noreferrer noopener"
          >
            <AiFillLinkedin className="icon_img" />
          </a>
        </div>
      </div>
    </section>
  );
};
