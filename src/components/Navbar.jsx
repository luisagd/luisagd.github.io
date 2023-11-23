import React, { useState } from "react";
import "./Navbar.css";
import logo from "../images/logo.svg"; // Tell webpack this JS file uses this image
import { Link } from "gatsby";
const links = [
	{ url: "/diccionario", text: "Diccionario" },
	{ url: "/aritmetica-y-algebra", text: "Aritmetica y Algebra" },
	{
		url: "/geometria-y-trigonometria",
		text: "Geometría Plana y Trigonometria",
	},
	{
		url: "/geometria-analitica-y-calculo",
		text: "Geometría Analítica y Calculo",
	},
	{ url: "/fisica", text: "Fisica" },
];

function Navbar() {
	// adding the states
	const [isActive, setIsActive] = useState(false);

	//add the active class
	const toggleActiveClass = () => {
		setIsActive(!isActive);
	};

	//clean up function to remove the active class
	const removeActive = () => {
		setIsActive(false);
	};

	return (
		<nav className="Navbar">
			<Link to="/" className="Navbar-logo">
				<img src={logo} className="Navbar-logo" alt="" />
			</Link>
			<ul className={`NavMenu${isActive ? "-active" : ""}`}>
				{/* <li onClick={removeActive}>
					<Link to="/diccionario" className="Navlink">
						Diccionario
					</Link>
				</li>
				<li onClick={removeActive}>
					<Link to="/aritmetica-y-algebra" className="Navlink">
						Aritmetica y Algebra
					</Link>
				</li>
				<li onClick={removeActive}>
					<Link to="/geometria-y-trigonometria" className="Navlink">
						Geometría Plana y Trigonometria
					</Link>
				</li>
				<li onClick={removeActive}>
					<Link to="/geometria-analitica-y-calculo" className="Navlink">
						Geometría Analítica y Calculo
					</Link>
				</li>
				<li onClick={removeActive}>
					<Link to="/fisica" className="Navlink">
						Fisica
					</Link>
				</li> */}
				{links.map((link) => (
					<li key={link.url} onClick={removeActive}>
						<Link className="Navlink" to={`${link.url}`}>
							{link.text}
						</Link>
					</li>
				))}
			</ul>
			<div
				className={`hamburger${isActive ? "-active" : ""}`}
				onClick={toggleActiveClass}
			>
				<span className="bar"></span>
				<span className="bar"></span>
				<span className="bar"></span>
			</div>
		</nav>
	);
}

export default Navbar;
