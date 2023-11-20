import React, { useState } from "react";
import "./Navbar.css";
import logo from "../images/logo.svg"; // Tell webpack this JS file uses this image
import { Link } from "gatsby";

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
				<li onClick={removeActive}>
					<Link to="diccionario" className="Navlink">
						Diccionario
					</Link>
				</li>
				<li onClick={removeActive}>
					<Link to="geometria" className="Navlink">
						Geometría Analítica y Plana
					</Link>
				</li>
				<li onClick={removeActive}>
					<Link to="fisica" className="Navlink">
						Fisica
					</Link>
				</li>
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
