//Confirmed. Deployment only works if using branches in config, and using actions by its own. 
// import * as React from "react"
import React from 'react';
import "../styles/base.css"
import { Link, navigate } from "gatsby";
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

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
        <input class="text-black h-12 w-1/2 text-base px-5" type="search" id="query" placeholder='Buscar palabra en el diccionario' />
        <button class="h-12 w-32 text-base bg-blue-500 ml-1 box-border">Buscar</button>
      </form>
    </div>
  );
}
const IndexPage = () => {
  return (
    <div>
      <main class="bg-gray-800 min-h-screen text-white">
        <Navbar />
        <header class="items-center text-center text-4xl min-h-fit my-10">
          <h1> Bienvenido a mi página personal.</h1>
          <p class="my-3 text-2xl">Un testimonio de lo que puede hacer Javascript, React, Gatsby y Tailwind.</p>
        </header>
        <div class="grid grid-rows-5 grid-flow-col gap-4 ">
          <div class="row-span-1 lg:row-span-5 col-span-1 text-center">
            <SearchBar />
            <h1>Buscar palabra en el diccionario Español-Guarani,<br /> utilizando
              serverless queries.
            </h1>
          </div>
          {/* <div class="col-span-1"><Link to="/aritmetica-y-algebra"><button class="h-12 w-11/12 text-base border-blue-900 border-solid border ml-1 box-border">Aritmética y Álgebra</button></Link></div>
          <div class="col-span-1"><Link to="/geometria-y-trigonometria"><button class="h-12 w-11/12 text-base border-blue-900 border-solid border ml-1 box-border">Geometría plana y Trigonometría</button></Link></div>
          <div class="col-span-1"><Link to="/geometria-analitica-y-calculo"><button class="h-12 w-11/12 text-base border-blue-900 border-solid border ml-1 box-border">Geometría Anaílica y Cálculo</button></Link></div>
          <div class="col-span-1"><Link to="/fisica"><button class="h-12 w-11/12 text-base border-blue-900 border-solid border ml-1 box-border">Física</button></Link></div> */}

        </div >
      </main >
      <Footer />
    </div >


  )
}

export default IndexPage;

export const Head = () => <title>Home Page</title>
