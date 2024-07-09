//Confirmed. Deployment only works if using branches in config, and using actions by its own.
// import * as React from "react"
import React from "react";
import "../styles/base.css";
import { Link, navigate } from "gatsby";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function SearchBar() {
  return (
    <div class="items-center text-center">
      <form
        class="my-5"
        onSubmit={(event) => {
          event.preventDefault();
          const query = event.target.elements.query.value;
          navigate("/diccionario?q=" + query.toLowerCase());
        }}
      >
        <label htmlFor="query"> </label>
        <input
          class="text-black h-12 lg:h-14 md:w-2/3 lg:w-1/2 text-base px-5 border-blue-400 rounded-2xl border-2"
          type="search"
          id="query"
          placeholder="Buscar palabra en el diccionario"
        />
        <button class="bg-blue-200 text-blue-600 font-bold px-1 py-2 cursor-pointer rounded-2xl border-blue-500 border mx-2 h-12 lg:h-16 w-24">
          Buscar
        </button>
      </form>
    </div>
  );
}
export function Head() {
  return (
    <>
      <title>Luisagd: Bienvenido a mi página personal.</title>
      <meta name="description" content="Luisagd. M" />
      <html lang="es" />
      {/* <link rel="icon" type="image/x-icon" href={icon} /> */}
    </>
  );
}
const IndexPage = () => {
  return (
    <div>
      <main class="min-h-screen">
        <Navbar />
        <header class="items-center text-center min-h-fit my-10">
          <h1 className="text-2xl lg:text-4xl">
            Bienvenido a mi página personal.
          </h1>
          <p class="my-3 text-base lg:text-2xl">
            Un testimonio de lo que puede hacer Javascript, React, Gatsby y
            Tailwind.
          </p>
        </header>
        <div class="grid grid-rows-5 grid-flow-col gap-4 ">
          <div class="row-span-1 lg:row-span-5 col-span-1 text-center">
            <SearchBar />
            <h1>
              Buscar palabra en el diccionario Español-Guarani,
              <br /> utilizando serverless queries.
            </h1>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default IndexPage;
