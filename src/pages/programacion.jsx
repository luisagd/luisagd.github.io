import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import icon from "../images/luisagdlogo.svg";
import { Link } from "gatsby";

const links = [
  { url: "instalation", text: "Python ñemboguapy" },
  { url: "variables", text: "Python Variables ha Datokuéra Tipo" },
  { url: "operators", text: "Operador-kuéra Python-pe" },
  { url: "functions", text: "Funciones oĩva python-pe" },
];

export function Head() {
  return (
    <>
      <title>Kódi</title>
      <meta
        name="description"
        content="Kódi: una guía de programación en python en el lenguaje guarani."
      />
      <html lang="es" />
      <link rel="icon" type="image/x-icon" href={icon} />
    </>
  );
}

function Programacion() {
  return (
    <div>
      <main className="min-h-screen ">
        <Navbar />
        <header className=" mt-5 px-20 lg:px-72 h-10 text-2xl md:text-3xl lg:text-4xl">
          <p>Kódi</p>
        </header>
        <div className="px-10 lg:w-[1060px] m-auto">
          <p className="text-left  lg:text-2xl  pt-5 ">
            Umi komputadóra añetehápe ikatu ojapo heta tembiapo: ñemboheta guive
            papa peve, koꞌã tembipuru ojapo heta mbaꞌe. Che tembipota ha´e
            tosãmbyhy ndéve ha pombo’e haĝua kódi. Kódi ohejáta ndéve remopuꞌa
            tembipuru pyahu, página web koꞌaichagua, jepe rejapo ambue mbaꞌe
            pyahu.
          </p>
          <ol className="list-decimal">
            {links.map((link) => (
              <li className="pt-3" key={link.url}>
                <Link class=" text-lg lg:text-xl underline" to={`${link.url}`}>
                  {link.text}
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Programacion;
