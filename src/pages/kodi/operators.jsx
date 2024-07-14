import React, { useState, useEffect } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import KodiTitle from "../../components/KodiTitle";
import icon from "../../images/luisagdlogo.svg";
import { Link } from "gatsby";

import "highlight.js/styles/rainbow.css";
import ReactEmbedGist from "react-embed-gist";

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

function kodi_operators() {
  return (
    <div>
      <main className="min-h-screen ">
        <Navbar />
        <div className="px-10 lg:w-[1060px] m-auto">
          <KodiTitle />
          <h2 className=" mt-5 h-10 text-2xl md:text-3xl lg:text-4xl">
            3-Operador-kuéra Python-pe
          </h2>
          <p className="text-left  lg:text-2xl  py-5 ">
            Python-pe oĩ operador iñambuéva:
            <ul className="list-disc pt-8 pl-10">
              <li>
                <span className="font-semibold">+ (mbojoaju):</span>
                ojeporu oñembojoajuhaguã. Oguerekova’erã +
              </li>
              <li>
                <span className="font-semibold">- (hekýi):</span>ojeporu
                oñembohekýihaguã. Oguerekova’erã -
              </li>
              <li>
                <span className="font-semibold">* (mbohetave):</span>
                ojeporu oñembohetavehaguã. Oguerekova’erã *
              </li>
              <li>
                <span className="font-semibold">/ (mbovo):</span> ojeporu
                oñembovohaguã. Oguerekova’erã /
              </li>
              <li>
                <span className="font-semibold">% (modulo):</span> ojeporu
                ojejuhu hagua hembýva peteĩ división oñeme evagui.
                Oguerekova’erã %
              </li>
              <li>
                <span className="font-semibold">** (papy mopu'ā):</span> ojeporu
                oñemopu'āhaguã. Oguerekova’erã moköi *
              </li>
            </ul>
            Operador-kuéra ombojojáva rehegua: Kóva operador-kuéra omeꞌe peteĩ
            bool añetegua térã japu.
            <ul className="list-disc pt-8 pl-10">
              <li>
                <span className="font-semibold">== (ombojoja):</span>
                pe asu gotyogua valor ojoja ramo akatúa rehe, ome’ẽ añetegua.
              </li>
              <li>
                <span className="font-semibold">!=(ndaha’éi peteĩchagua):</span>
                pe asu gotyogua valor ojoja NDAHA’ÉIramo akatúa rehe, ome’ẽ
                añetegua.
              </li>
              <li>
                <span className="font-semibold">&gt; (tuichavéva):</span>
                pe asu gotyogua valor rehegua hetave ramo pe akatúagui, ome’ẽ
                añetegua.
              </li>
              <li>
                <span className="font-semibold">&lt; (michĩvéva):</span> pe asu
                gotyogua valor rehegua michĩvé ramo pe akatúagui, ome’ẽ
                añetegua.
              </li>
              <li>
                <span className="font-semibold">
                  &gt;= (tuichavéva térã ojojavéva):
                </span>
                pe asu gotyogua valor rehegua hetave térã ojoja ramo pe
                akatúagui, ome’ẽ añetegua.
              </li>
              <li>
                <span className="font-semibold">
                  &lt;= (michĩvéva térã ojojavéva):
                </span>
                pe asu gotyogua valor rehegua michĩvé térã ojoja ramo pe
                akatúagui, ome’ẽ añetegua.
              </li>
            </ul>
          </p>
          <ReactEmbedGist
            gist="luisagd/64c0b07a4993f71987e5211e921558f4"
            className="my-10"
          />

          <div className="text-2xl md:text-3xl lg:text-3xl px-10 lg:w-[1000px] flex my-4 ">
            <Link
              to="../statements"
              className=" ml-auto p-4 border border-blue-400 "
            >
              4-Mbojoja ha jerepy: if, elif, else, while, for➡️
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default kodi_operators;
