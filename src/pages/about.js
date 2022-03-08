import { Link } from "react-router-dom";
import "./about.css";

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
					boxShadow:
						"box-shadow: rgba(240, 46, 170, 0.4) -5px 5px, rgba(240, 46, 170, 0.3) -10px 10px, rgba(240, 46, 170, 0.2) -15px 15px, rgba(240, 46, 170, 0.1) -20px 20px, rgba(240, 46, 170, 0.05) -25px 25px;",
					backgroundColor: "#ee9617",
					backgroundImage: "linear-gradient(315deg, #ee9617 0%, #fe5858 74%)",
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
						background: "rgb(255, 255, 255, 0.5)",
						borderRadius: "10px",
						boxShadow:
							"rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;",
						padding: "10px",
					}}
				>
					<p className="px-10">
						My sole intention is to learn, grow, and contribute my current &
						future skillsets in innovative projects and firms that would
						positively change the world. Aside building beautiful user-centered products, I'm heavily
						interested in People management, Artificial Intelligence, Robotics, Cryptocurrencies
						and Quantum computing.
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
