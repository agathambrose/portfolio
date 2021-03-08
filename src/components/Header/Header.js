import React from "react";


const Header = () => {
  return (
    <section
      style={{
        fontFamily: "Titilium Web",
        fontSize: "3rem",
      }}
      className="mx-4 my-2"
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

      </div>
    </section>
  );
};

export default Header;
