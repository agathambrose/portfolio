import React from "react";
import { Button } from "react-bootstrap";
import "./Header.css";

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
        <a
          href="https://drive.google.com/file/d/15b0Ndw5Xtut9Qn9r4l_c821a5QOkC5H0/view?usp=sharing"
          target="_blank"
          rel="noreferrer noopener"
          style={{
            color: "black",
          }}
        >
          <Button
            variant="outline-primary"
            size="lg"
            style={{
              fontFamily: "Prata",
            }}
            className="header__btn mb-3 py-2 px-3 outline-none"
          >
            Resume
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Header;
