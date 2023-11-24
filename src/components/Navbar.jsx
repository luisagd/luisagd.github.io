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
		<nav class="bg-slate-100 flex px-3 py-5 justify-between items-center gap-10 w-full top-0 sticky">
			<Link to="/">
				<img src={logo} class="h-12" alt="" />
			</Link>
			<ul className={`NavMenu${isActive ? "-active" : ""}`}>
				{links.map((link) => (
					<li key={link.url} onClick={removeActive}>
						<Link class="p-4 text-black text-lg" to={`${link.url}`}>
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
