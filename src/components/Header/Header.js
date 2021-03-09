import React from "react";
import { Button } from "react-bootstrap";
import './Header.css';


const Header = () => {
  return (
    <div
      style={{
        fontFamily: "Prata",
        fontSize: "3rem",
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
        <h1
          style={{
            fontSize: "3rem",
          }}
        >
          A.A
        </h1>

        <Button
          variant="outline-primary"
          style={{
            fontFamily: "Prata",
            fontSize: "1rem",
          }}
          className="header-btn mb-3 py-2 px-3"
        >
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
    </div>
  );
};

export default Header;
