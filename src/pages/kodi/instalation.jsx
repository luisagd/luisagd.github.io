import React, { useState, useEffect } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import KodiTitle from "../../components/KodiTitle";

import icon from "../../images/luisagdlogo.svg";
import { Link } from "gatsby";
import instalation_1 from "../../images/kodi/instalation1.png";
import instalation_2 from "../../images/kodi/instalation2.png";
import instalation_3 from "../../images/kodi/instalation3.png";

export function Head() {
  return (
    <>
      <title>Kódi</title>
      <meta
        name="description"
        content="Kódi: Guía de instalación de python en guaraní."
      />
      <html lang="es" />
      <link rel="icon" type="image/x-icon" href={icon} />
    </>
  );
}

function kodi_instalation() {
  return (
    <div>
      <main className="min-h-screen ">
        <Navbar />
        <div className="px-10 lg:w-[1060px] m-auto">
          <KodiTitle />

          <h2 className="mt-5 h-10 text-2xl md:text-3xl lg:text-4xl">
            1-Python ñemohenda
          </h2>
          <p className="text-left  lg:text-2xl  pt-5 ">
            Eikese &nbsp;
            <a
              href="https://www.python.org/downloads/windows/"
              className="text-blue-600 underline"
            >
              python.org
            </a>
            &nbsp; ha emboguejy python versión ipyahuvéva
            <span className="italic">windows</span>
            -pe g̃uarã. Emohenda rire, ikatu eipeꞌa python IDE ha eñepyrũ ekodi.
            <img src={instalation_1} />
            <img src={instalation_2} className="mt-5 lg:mt-10" />
            <img src={instalation_3} className="mt-5 lg:mt-10 mx-auto" />
          </p>
          <div className="font-semibold lg:font-normal md:text-3xl lg:text-3xl lg:px-10 lg:w-[1000px] flex my-4 ">
            <Link
              to="../variables"
              className=" ml-auto py-4 lg:p-4 border border-blue-400 "
            >
              2-Python Variables ha Datokuéra Oĩva ➡️
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default kodi_instalation;
