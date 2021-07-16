import { Link } from "react-router-dom";
import "./about.css"

export const About = () => {
  return (
    <div style={{ height: "100vh" }}>
      <div
        style={{
          margin: "20px",
        }}
      >
        <Link to="/" className="home-btn">
          Home
        </Link>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px",
          // background: "rgb(255,127,80, 0.9)",
          minHeight: "80vh",
          marginTop: "30px",
          borderRadius: "10px",
          padding: "10px",
          color: "black",
        }}
        className="container"
      >
        <h2
          style={{
            fontFamily: "Prata",
            marginTop: "10px",
          }}
        >
          About Me
        </h2>
        <br />

        <div
          style={{
            fontFamily: "Poppins, sans-serif",
            textAlign: "center",
            background: "rgb(255, 120, 80, 0.1)",
            borderRadius: "10px",
            boxShadow:
              "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;",
            padding: "10px",
          }}
        >
          <p className="px-3">
            Holla! I am Agatha Ambrose and I am a Frontend Engineer with a
            background in Accounting. While at the university, I studied
            Accounting and was also a creative writer on the side. I
            successfully graduated and went on to practice for about a year and
            half at an NGO, then decided with absolute conviction that I wanted
            to be a part of the tech industry.
            <br />
            <br />
            I have always been curious about the industry. I also remember in my
            second year at the university, I learned HMTL and CSS because my
            curiosity was gaining weight. Building beautiful, responsive and
            user-friendly web applications is a delight as well as integrating
            functionalities through logic.
            <br />
            <br />
            My sole intention is to learn, grow, and contribute my current &
            future skillsets in innovative projects and firms that would
            positively change the world. Aside Frontend Enigeering, I have great
            interest in Artificial Intelligence, Robotics, Cryptocurrencies and
            Quantum computing. In the nearest future(fingers crossed), I intend
            to do a pre-masters in software engineering and then a masters in
            Artificial Intelligence/Robotics.
            <br />
            <br />
            Am I earnestly looking forward to my future in tech? Yes.
            Absolutely.
          </p>
        </div>
      </div>
    </div>
  );
};
