import React, { useState, useEffect } from "react";
// import "../styles/base.css";
// import "../styles/diccionario.css"
import "../styles/font.css";
import "../styles/autoComplete.css";

import { useLocation } from "@gatsbyjs/reach-router";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import fuzzysort from "fuzzysort";
import autoComplete from "@tarekraafat/autocomplete.js";
import icon from "../images/luisagdlogo.svg";

const dictionary = require("../json/diccionario.json");

export function Head() {
  return (
    <>
      <title>Diccionario</title>
      <meta name="description" content="" />
      <html lang="es" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
        rel="stylesheet"
      />

      <link rel="icon" type="image/x-icon" href={icon} />
    </>
  );
}
function SearchResults() {
  const location = useLocation();
  const [posts, setPosts] = useState([]);

  const fetchData = (word: string) => {
    word = word.toLowerCase().replaceAll("'", "’").replaceAll("´", "’");
    console.log("word:" + word);
    const result = fuzzysort.go(word, dictionary, { key: "word", limit: 5 });
    console.log("data:", result);
    setPosts(result);
  };

  useEffect(() => {
    // 👇️ only runs once
    const autoCompleteJS = new autoComplete({
      placeholder: "Buscar palabra...",
      data: {
        src: dictionary,
        keys: ["word"],
      },
      resultItem: {
        highlight: true,
      },
      diacritics: true,
      selector: "#query",
      searchEngine: "strict",
      wrapper: true,
      submit: true,
      events: { input: {} },
    });
    const queryParams = new URLSearchParams(location.search);
    const word = queryParams.get("q");
    if (word !== "" && word !== "/" && word !== null) {
      console.log("URL word: " + word);
      fetchData(word);
    }
  }, []); // 👈️ empty dependencies array
  return (
    <div className="SearchResults flex flex-col ">
      <div className="flex space-x-5 justify-center items-center">
        <form
          className="w-2/3 lg:w-1/2"
          onSubmit={(event) => {
            console.log("form event");
            event.preventDefault();
            // const query = document.getElementById("query").value;
            const query = event.currentTarget.elements.query.value;
            console.log("custom query: " + query);
            fetchData(query);
          }}
        >
          <label className="block mb-1 font-bold" htmlFor="query"></label>
          <input
            className="w-full text-black p-1 mb-3 border border-r-4 border-black xl:h-12"
            type="search"
            dir="ltr"
            id="query"
          />
        </form>
        <button
          className="bg-blue-700 text-white px-1 py-2 h-10 cursor-pointer"
          onClick={() => {
            const query = document.getElementById("query").value;
            console.log("query: " + query);
            fetchData(query);
          }}
        >
          Buscar
        </button>
      </div>
      {posts[0] && posts[0]._score == 0 && (
        <div className="px-80 text-left">
          <p className="text-3xl lg:text-7xl  font-montserrat">
            {posts[0].obj.word}
          </p>
          <ol>
            {posts[0].obj.meaning.map((meaning) => (
              <li className="mb-2">
                <p className="text-blue-600 text-xl lg:text-3xl">
                  {meaning.type}
                </p>
                <p className="lg:text-xl">{meaning.translation}</p>
              </li>
            ))}
          </ol>

          {/* <p className="text-blue-600 text-xl lg:text-3xl">
            {posts[0].obj.meaning[0].type}
          </p>
          <p className="lg:text-xl">{posts[0].obj.meaning[0].translation}</p> */}
        </div>
      )}
      <ul className="list-none">
        {posts.map((item) => (
          <li className="mb-2">
            {item.obj.word} [{item.obj.meaning[0].type}]:{" "}
            {item.obj.meaning[0].translation}
          </li>
        ))}
      </ul>
    </div>
  );
}
function Diccionario() {
  return (
    <div>
      <main class=" min-h-screen text-center">
        <title>Diccionario Guaraní-Español y Español-Guaraní</title>
        <meta
          name="description"
          content="El mejor diccionario Guaraní-Español y Español-Guaraní."
        />
        <Navbar />
        <header class=" my-10 flex flex-col items-center  h-10 text-center text-xl md:text-2xl lg:text-4xl">
          <p>Diccionario Guaraní-Español - Español-Guaraní</p>
        </header>
        <SearchResults />
      </main>
      <Footer />
    </div>
  );
}

export default Diccionario;
