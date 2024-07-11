import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import icon from "../images/luisagdlogo.svg";

export function Head() {
  return (
    <>
      <title>Acerca del sitio</title>
      <meta
        name="description"
        content="Descripción del propósito de este sitio web."
      />
      <html lang="es" />
      <link rel="icon" type="image/x-icon" href={icon} />
    </>
  );
}

function About() {
  return (
    <div>
      <main class="min-h-screen">
        <Navbar />
        <header class=" mt-5 px-20 lg:px-36 h-10 text-2xl md:text-3xl lg:text-4xl">
          <p>Acerca del sitio</p>
        </header>
        <p class="text-left px-10 lg:px-40 pt-5">
          Este es mi proyecto personal, a fin de experimentar con herramientas
          como ReactJS, Tailwind, Python y Javascript. El sitio está hosteado en
          Github Pages, de tal manera a asegurar una experiencia confiable y
          segura.
          <h1 className="font-semibold text-xl lg:text-2xl pt-5">Ñe’ẽrandu</h1>
          Una herramienta fiable con la cual contar al momento de necesitar
          traducir una palabra. La metodología de la elaboración del diccionario
          fue la siguiente: <br />
          1. Búsqueda de fuentes fiables de información. <br />
          2. Digitalización de los distintos libros a formato .pdf. <br />
          3. Conversión y saneamiento de formato .pdf a .txt. <br />
          4. Conversión de .txt a .json mediante un script de python. <br />
          5. Elaboración de la UI y conexión al backend de github. <br />
          Para la implementación de la página se ha optimizado el tiempo de
          respuesta y la responsividad así como se ha disminuido el tamaño de la
          página. De esta manera se pretende la utilización desde cualquier
          medio, sin importar la ubicación geográfica o el medio utilizado.
        </p>
      </main>
      <Footer />
    </div>
  );
}

export default About;
