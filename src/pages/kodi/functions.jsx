import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import KodiTitle from "../../components/KodiTitle";
import icon from "../../images/luisagdlogo.svg";

import "highlight.js/styles/rainbow.css";

import loadable from "@loadable/component";
const ReactEmbedGist = loadable(() => import("react-embed-gist"));
function myGist() {
  return (
    <div>
      <ReactEmbedGist gist="luisagd/f95dbe69d8b23da40ae0e5ac00c1c616" />{" "}
    </div>
  );
}
function PageHead() {
  return (
    <Helmet htmlAttributes={{ lang: "es" }}>
      <title>Kódi</title>
      <meta
        name="description"
        content="Kódi: una guía de programación en python en el lenguaje guarani."
      />

      <link rel="icon" type="image/x-icon" href={icon} />
    </Helmet>
  );
}

function kodi_functions() {
  return (
    <>
      <PageHead />
      <div>
      <main className="min-h-screen ">
        <Navbar />
        <div className="px-10 lg:w-[1060px] m-auto">
          <KodiTitle />
          <h2 className=" mt-5 h-10 text-2xl md:text-3xl lg:text-4xl">
            5-Funcionkuéra oĩva python-pe
          </h2>
          <p className="text-left  lg:text-2xl  py-5 ">
            Funcionkuéra: reiporúramo arakaꞌeve mbohetave, térã rejapo peteĩ
            mbojoaju; añetehápe rejapo peteĩ funcion. Ogueraha hikuái argumento
            —ikatúva ha’e papapy térã oimeraẽ mba’e ikatúva eimo’ã ;— ha ome’ẽ
            jey peteĩ tembiapokue. Python-pe rejapo peteĩ función ñe’ẽ clave
            ‘def’ reheve.
            <br />
            Umi tembiaporã ojepuru kóicha: function_tera(arg)
          </p>

          <myGist />
          <div className="text-2xl md:text-3xl lg:text-3xl px-10 lg:w-[1000px] flex my-4 ">
            <a
              href="/kodi/utilities"
              className=" ml-auto p-4 border border-blue-400 "
            >
              6-Pip jeipurúvo ha script jejapo➡️
            </a>
          </div>
        </div>
      </main>
      <Footer />
      </div>
    </>
  );
}

export default kodi_functions;
