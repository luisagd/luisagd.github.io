//Confirmed. Deployment only works if using branches in config, and using actions by its own. 
// import * as React from "react"
import React from 'react';
import "../styles/index.css"
import "../styles/base.css"
import { navigate } from "gatsby";
import Footer from '../components/Footer';


const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const HomeHeader = {
  minHeight: '10vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 'calc(10px + 2vmin)',
  color: 'white',
};


const links = [
  {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial/getting-started/",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: "#E95800",
  },
  {
    text: "How to Guides",
    url: "https://www.gatsbyjs.com/docs/how-to/",
    description:
      "Practical step-by-step guides to help you achieve a specific goal. Most useful when you're trying to get something done.",
    color: "#1099A8",
  },
  {
    text: "Reference Guides",
    url: "https://www.gatsbyjs.com/docs/reference/",
    description:
      "Nitty-gritty technical descriptions of how Gatsby works. Most useful when you need detailed information about Gatsby's APIs.",
    color: "#BC027F",
  },
  {
    text: "Conceptual Guides",
    url: "https://www.gatsbyjs.com/docs/conceptual/",
    description:
      "Big-picture explanations of higher-level Gatsby concepts. Most useful for building understanding of a particular topic.",
    color: "#0D96F2",
  },
  {
    text: "Plugin Library",
    url: "https://www.gatsbyjs.com/plugins",
    description:
      "Add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
    color: "#8EB814",
  },
  {
    text: "Build and Host",
    url: "https://www.gatsbyjs.com/cloud",
    badge: true,
    description:
      "Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!",
    color: "#663399",
  },
]

function SearchBar() {
  return (
    <div >
      <form
        className="SearchBar"
        onSubmit={(event) => {
          event.preventDefault();
          const query = event.target.elements.query.value;
          navigate("/diccionario?q=" + query.toLowerCase());
        }}
      >
        <label htmlFor="query"> </label>
        <input type="search" id="query" placeholder='Buscar palabra en el diccionario' />
        <button className='Search-button'>Buscar</button>
      </form>
    </div>
  );
}
const IndexPage = () => {
  return (
    <main className='Main'>
      <header className="Base-header">
        <p> Bienvenido a mi página</p>
      </header>
      <SearchBar />
      <Footer />
    </main>
  )
}

export default IndexPage;

export const Head = () => <title>Home Page</title>
