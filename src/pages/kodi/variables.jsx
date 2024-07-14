import React, { useState, useEffect } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import KodiTitle from "../../components/KodiTitle";

import icon from "../../images/luisagdlogo.svg";
import { Link } from "gatsby";

import "highlight.js/styles/rainbow.css";

import loadable from "@loadable/component";
const ReactEmbedGist = loadable(() => import("react-embed-gist"));
function myGist() {
  return (
    <div>
      <ReactEmbedGist gist="luisagd/6a18fea0bfcd7db9d493a43ff9d23ec7" />{" "}
    </div>
  );
}

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

function kodi_variables() {
  return (
    <div>
      <main className="min-h-screen ">
        <Navbar />
        <div className="px-10 lg:w-[1060px] m-auto">
          <KodiTitle />
          <h2 className=" mt-5 h-10 text-2xl md:text-3xl lg:text-4xl">
            2-Python Variables ha Datokuéra Oĩva
          </h2>
          <p className="text-left  lg:text-2xl  py-5 ">
            <span className="font-semibold">Variablekuéra: </span>
            ñaimo’ã hesekuéra caja ramo - mba’e ikatúva oñongatu papapy, ñe’ẽ,
            ta’ãngamýi jepe. Python-pe oĩ heta variable: <br />
            <ul className="list-disc pt-8 pl-10">
              <li>
                <span className="font-semibold">
                  str (kuatia ha ñe'ẽkuéra):
                </span>
                ojepuru oñeñongatu hag̃ua ñe’ẽ, ñe’ẽjoaju ha hetave mba’e.
                Oguerekova’erã ""
              </li>
              <li>
                <span className="font-semibold">int (papaha vo’Ȳ):</span> ha’e
                papaha 0,1,2...
              </li>
              <li>
                <span className="font-semibold">float (papaha vorepy):</span>
                ha’e umi papaha oguerekóva ".". Techapyrã: 0.1, 1.5.
              </li>
              <li>
                <span className="font-semibold">bool:</span> ikatu añete térã
                japu.
              </li>
            </ul>
            <ul>
              <li>
                <span className="font-semibold"> list (tysýi):</span> Ohechauka
                peteĩ valor ñembyaty oñembohekopyréva ha oñemoambuéva.
                Oguerekova’erã []
              </li>
              <li>
                <span className="font-semibold"> tuple: </span>
                Ohechauka peteĩ mbaꞌekuaarã ñemonoꞌo oñembohekopyréva ha
                iñambueꞌeỹva. Oguerekova’erã ()
              </li>
              <li>
                <span className="font-semibold"> dict (ñe’ẽryru): </span>
                Ohechauka peteĩ ñemono’õ noñemohendapáiva umi par clave-valor
                rehegua. Oguerekova’erã &#123; &#125; ha ""
              </li>
            </ul>
          </p>
          <myGist />

          <div className="text-2xl md:text-3xl lg:text-3xl px-10 lg:w-[1000px] flex my-4 ">
            <Link
              to="../operators"
              className=" ml-auto p-4 border border-blue-400 "
            >
              3-Operador-kuéra Python-pe ➡️
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default kodi_variables;
