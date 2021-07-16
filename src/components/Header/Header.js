import React from "react";
import { Button } from "react-bootstrap";
import "./Header.css";
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <div
      style={{
        fontFamily: "Prata",
        position: "fixed",
        height: "60px",
        width: "100%",
        background: "white",
        top: "0",
        left: "0",
        right: "0",
        zIndex: "10",
        padding: "5px 12px",
        boxShadow: "2px 0px 8px rgba(0, 0, 0, 0.2)",
      }}
      className="Header__area"
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1 className="aa-logo">A.A</h1>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "2px",
            fontFamily: "Poppins, sans-serif",
          }}
        >
          <Link to="/about" className="about-link">
            <p>About</p>
          </Link>
          <a
            href="https://drive.google.com/file/d/1Gh8OZOK4bFzVJPKmKqqxIPAMpTntYS1e/view?usp=sharing"
            target="_blank"
            rel="noreferrer noopener"
            className="resume_link"
          >
            <p
              style={{
                fontFamily: "Poppins, sans-serif",
              }}
              className="ml-4 header__btn"
            >
              Resume
            </p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
