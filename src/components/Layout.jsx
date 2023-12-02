import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "gatsby";

const Layout = ({ children, pageTitle, pageSubtitle, links }) => {
	return (
		<div className="min-h-screen flex bg-gray-800 text-white">
			<div className="flex-grow">
				<Navbar />
				<main className="container mx-auto">
					<header className="text-center py-10">
						<h1 className="text-4xl">{pageTitle}</h1>
						{pageSubtitle && <p className="text-2xl my-3">{pageSubtitle}</p>}
						<p>
							Este sitio ostenta ser una fuente fiable de información con
							respecto a las áreas de Aritmética, Álgebra, Geometría Plana y
							Anaílica, Trigonometría, Cálculo y Física. La información presente
							en el sitio es una recopolación de distintas fuentes,
							principalmente Baldor.
						</p>
					</header>
					<ul>
						{links.map((link) => (
							<li
								key={link.url}
								class="border-blue-900 border-solid border ml-1 py-3 pl-3"
							>
								<Link to={link.url}>{link.text}</Link>
							</li>
						))}
					</ul>
					{children}
				</main>
				<Footer />
			</div>
		</div>
	);
};

export default Layout;
