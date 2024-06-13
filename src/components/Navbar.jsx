import React, { useState } from "react";
import icon from "../images/luisagdlogo.svg";

import { Link } from "gatsby";
const links = [
  { url: "/diccionario", text: "Diccionario" },
  { url: "/about", text: "Acerca" },
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
    <nav class="bg-blue-600 flex px-3 py-2 justify-between items-center gap-10 w-full top-0 sticky">
      <Link to="/">
        <img src={icon} class="h-12" alt="" />
      </Link>
      <ul>
        {links.map((link) => (
          <li className="lg:inline" key={link.url} onClick={removeActive}>
            <Link
              class="p-4 text-black text-lg"
              to={`${link.url}`}
              activeStyle={{
                color: "black",
                "font-weight": "bold",
                padding: "1rem",
              }}
            >
              {link.text}
            </Link>
          </li>
        ))}
      </ul>
      <div className="" onClick={toggleActiveClass}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
}

export default Navbar;
