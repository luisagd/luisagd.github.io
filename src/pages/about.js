import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function About() {
  return (
    <div>
      <main class="bg-gray-800 min-h-screen text-white text-center">
        <title>Acerca del sitio</title>
        <meta
          name="description"
          content="El mejor diccionario Guaraní-Español y Español-Guaraní."
        />
        <Navbar />
        <header class=" mt-5 flex flex-col items-center  h-10 text-center text-2xl md:text-3xl lg:text-4xl">
          <p>Acerca del sitio</p>
        </header>
        <p class="text-left px-10 pt-5">
          Este sitio fue creado con el prospósito de proporcionar un sitio
          fiable con el cual contar al momento de necesitar traducir una
          palabra. El sitio está hosteado en Github Pages, de tal manera a
          asegurar una experiencia confiable y segura. La metodología de la
          elaboración del diccionario fue la siguiente: <br />
          1. Búsqueda de fuentes fiables de información. <br />
          2. Digitalización de los distintos libros a formato .pdf. <br />
          3. Conversión y saneamiento de formato .pdf a .txt. <br />
          4. Conversión de .txt a .json mediante un script de python. <br />
          5. Elaboración de la UI y conexión al backend de github. <br />
          La única limitación es la ausencia de ciertos grafemas, debido a que
          los modelos de machine learning se encuentran limitados a los
          caracteres de ASCII con algunos grafemas comunes entre las lenguas
          romance. Es por ello que algunas palabras pueden hallarse incompletas.
          En el futuro se espera la incorporación de otros grafemas a los
          modelos de visión. <br />
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
