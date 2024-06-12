import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Blog() {
  return (
    <div>
      <main class="bg-gray-800 min-h-screen text-white text-center">
        <title>Blog</title>
        <meta name="description" content="My own blog" />
        <Navbar />
        <header class=" mt-5 flex flex-col items-center  h-10 text-center text-2xl md:text-3xl lg:text-4xl">
          <p>Blogs</p>
        </header>
        <a href=""></a>
        <p class="text-left px-10 pt-5">
          Tenses in english as an spanish-speaking individual.
        </p>
      </main>
      <Footer />
    </div>
  );
}

export default Blog;
