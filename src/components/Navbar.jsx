import React, { useState } from "react";
import icon from "../images/luisagdlogo.svg";
import closeicon from "../images/close.svg";
import burgericon from "../images/burger.svg";

const links = [
  { url: "/diccionario", text: "Diccionario" },
  { url: "/about", text: "Acerca" },
  { url: "/kodi", text: "Kódi" },
  // { url: "/skills", text: "Skills y Proyectos" },
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
    <>
      <nav className="bg-blue-600 flex px-3 lg:py-2 justify-between items-center gap-10 w-full top-0 sticky z-40">
        <a href="/">
          <img src={icon} class="h-12" alt="" />
        </a>
        <ul className="invisible lg:visible">
          {links.map((link) => (
            <li className="lg:inline" key={link.url} onClick={removeActive}>
              <a className="p-4 text-black text-lg active:bg-white" href={link.url}>
                {link.text}
              </a>
            </li>
          ))}
        </ul>

        {/* <div className="flex invisible lg:visible">
          <p className="px-2">🇺🇸</p>
          <p className="px-2">🇵🇾</p>
        </div> */}
        <div
          className="lg:invisible block cursor-pointer"
          onClick={toggleActiveClass}
        >
          {isActive && <img src={closeicon} className="h-6" />}
          {!isActive && <img src={burgericon} className="h-6" />}
        </div>
      </nav>
      {isActive && (
        <nav className=" ml-auto top-20 bg-blue-600 w-60 sticky min-h-full z-50 ">
          <div
            className=" cursor-pointer float-right"
            onClick={toggleActiveClass}
          >
            {isActive && <img src={closeicon} className="h-6" />}
            {!isActive && <img src={burgericon} className="h-6" />}
          </div>
          <ul>
            {links.map((link) => (
              <li className="" key={link.url} onClick={removeActive}>
                <a className="p-4 text-black text-xl" href={link.url}>
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
}

export default Navbar;
