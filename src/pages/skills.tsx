import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import screenshot1 from "../images/luisagdscreenshot.png";

function SkillsPage() {
  var userLang = navigator.language;
  //   alert("The language is: " + userLang);
  return (
    <div>
      <main class=" min-h-screen">
        <title>Blog</title>
        <meta name="description" content="My own blog" />
        <Navbar />
        <header class=" mt-5 flex flex-col items-center  h-10 text-center text-2xl md:text-3xl lg:text-4xl">
          <p>Mis Proyectos</p>
        </header>
        <a href=""></a>
        <p class="text-left px-10 pt-5">
          Tenses in english as an spanish-speaking individual.
        </p>
        <ul>
          <div className="flex items-center">
            <h1 className="px-10 font-semibold">luisagd.com</h1>
            <img src={screenshot1} className="w-[700px] border" />
            <p>Aprendí los fundamentos de web development</p>
          </div>
        </ul>
      </main>
      <Footer />
    </div>
  );
}

export default SkillsPage;
