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
      <ReactEmbedGist gist="luisagd/b4e8a9e4379dd261c4ab098dda8dd425" />
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

function kodi_statements() {
  return (
    <div>
      <main className="min-h-screen ">
        <Navbar />
        <div className="px-10 lg:w-[1060px] m-auto">
          <KodiTitle />
          <h2 className=" mt-5 h-10 text-2xl md:text-3xl lg:text-4xl">
            4-Mbojoja ha jerepy: if, elif, else, while, for
          </h2>
          <p className="text-left  lg:text-2xl  py-5 ">
            Nde eikuaáma mba’éichapa omba’apo umi bool. Ko'ágã jaipurúta umíva.
            <ul className="list-disc py-4 pl-10">
              <li>
                <span className="font-semibold">if (ramo):</span>
                Ojepuru ojehecha hag̃ua añetepa pe bool oñemeꞌevaꞌekue. Oiméramo
                upéicha, upéicharamo ojejapo pe mba'e oĩva iguýpe. Pe código
                ojejapovaꞌerã oguerekovaꞌerã indentación, upéva heꞌise irundy
                arapy térã peteĩ TAB.
              </li>
              <li>
                <span className="font-semibold">elif (tẽra ramo):</span>Pe bool
                mboyvegua japu ramo, upéicharõ ikatu jajapo ambue japu ramo
                añoite pe mboyvegua.
              </li>
              <li>
                <span className="font-semibold">else (tẽra):</span>
                Pe bool mboyvegua japu ramo, upéicharõ jajapota oĩva iguýpe.
              </li>
            </ul>
            Jerepykuéra:
            <ul className="list-disc py-8 pl-10">
              <li>
                <span className="font-semibold">while (jave):</span> pe bool
                añetegua aja, ojejapóta pe mba'e oĩva iguýpe.
              </li>
              <li>
                <span className="font-semibold">for (peteĩteĩme g̃uarã):</span>
                Peguerekóramo peteĩ list, ikatu pejapo peteĩ mba’e peteĩteĩ
                miembro ndive.
              </li>
              <li>
                <span className="font-semibold">break (ñesẽha):</span> osê pe
                jerepy ko’áĝaguágui
              </li>
              <li>
                <span className="font-semibold">continue (Pykúi):</span>
                embohasa pe código oĩva iguýpe ha eike iteración oúvape
              </li>
            </ul>
          </p>
          <myGist />

          <div className="text-2xl md:text-3xl lg:text-3xl px-10 lg:w-[1000px] flex my-4 ">
            <Link
              to="../functions"
              className=" ml-auto p-4 border border-blue-400 "
            >
              5-Funciones oĩva python-pe➡️
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default kodi_statements;
