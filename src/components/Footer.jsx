import React from "react";
const Footer = () => {
	const year = new Date().getFullYear();

	return <footer className="bg-gray-500 text-center mt-auto p-2">{`© ${year} Luis A.`}</footer>;
};

export default Footer;
