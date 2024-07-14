import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import icon from "../images/luisagdlogo.svg";
import KodiTitle from "../components/KodiTitle";

import { Link } from "gatsby";

const links = [
  { url: "instalation", text: "Python ñemboguapy" },
  { url: "variables", text: "Python Variables ha Datokuéra Tipo" },
  { url: "operators", text: "Operador-kuéra Python-pe" },
  { url: "statements", text: "Mbojoja ha jerepy: if, elif, else, while, for" },
  { url: "functions", text: "Funciones oĩva python-pe" },
  { url: "utilities", text: "Pip jeipurúvo ha script jejapo" },
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

        <div className="px-10 lg:w-[1060px] m-auto">
          <KodiTitle />
          <p className="text-left  lg:text-2xl  pt-5 ">
            Umi komputadóra añetehápe ikatu ojapo heta tembiapo: ñemboheta guive
            papa peve, koꞌã tembipuru ojapo heta mbaꞌe. Che tembipota ha´e
            tosãmbyhy ndéve ha pombo’e haĝua kódi. Kódi ohejáta ndéve remopuꞌa
            tembipuru pyahu, página web koꞌaichagua, jepe rejapo ambue mbaꞌe
            pyahu.
          </p>
          <ol className="list-decimal">
            {links.map((link) => (
              <li className="pt-5 text-lg lg:text-2xl" key={link.url}>
                <Link class="  underline" to={`${link.url}`}>
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
