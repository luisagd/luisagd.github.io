import React, { useState, useEffect } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import KodiTitle from "../../components/KodiTitle";
import icon from "../../images/luisagdlogo.svg";
import pip1 from "../../images/kodi/cmd1.png";
import pip2 from "../../images/kodi/cmd2.png";
import pip3 from "../../images/kodi/cmd3.png";

import "highlight.js/styles/rainbow.css";

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

function kodi_utilities() {
  return (
    <div>
      <main className="min-h-screen ">
        <Navbar />
        <div className="px-10 lg:w-[1060px] m-auto">
          <KodiTitle />
          <h2 className=" mt-5 h-10 text-2xl md:text-3xl lg:text-4xl">
            6-Pip jeipurúvo ha script jejapo
          </h2>
          <p className="text-left  lg:text-2xl  py-5 ">
            Pip: pip haꞌehína pe paquete mohendaha Python-pe g̃uarã. Ikatu eipuru
            pip emohenda hag̃ua paquete Python Package Index ha ambue índice-gui.
            <br />
            Eipe'a <span className="italic">Windows Powershell</span>
            <img src={pip1} />
            Ehai: pip install <span className="italic">apytĩmby</span> --user
            <br />
            Techapyra:
            <img src={pip2} />
            Ha ipahápe, reipuru umi apytĩmby péichagua:
            <img src={pip3} />
            Ha upéva, ko’áĝa reikuaa mba’éichapa ojekodi python-pe. Vy'apavê!
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default kodi_utilities;
