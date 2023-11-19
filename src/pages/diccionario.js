import React, { useState, useEffect } from 'react';
import "../styles/base.css"

const dictionary = require("../json/diccionario.json")

function SearchResults() {
    const [posts, setPosts] = useState([]);

    const fetchData = (word) => {
        if (!word || typeof word !== 'string') return null;
        console.log("word:" + word);

        // Simulate fetching data locally from the imported JSON file
        const filteredPosts = dictionary.filter(item =>
            item.word.toLowerCase().includes(word.toLowerCase())
        );

        console.log("data:", filteredPosts);
        setPosts(filteredPosts);
    };

    useEffect(() => {
        // 👇️ only runs once
        const url = window.location.pathname.replace("/diccionario", "");
        if (url !== "" && url !== "/") {
            const word = url.replace("/", "");
            console.log("URL word: " + word);
            fetchData(word);
        }
    }, []); // 👈️ empty dependencies array

    return (
        <div className="SearchResults">
            <form
                onSubmit={(event) => {
                    event.preventDefault();
                    const query = event.target.elements.query.value;
                    console.log("query: " + query);
                    fetchData(query);
                }}
            >
                <label htmlFor="query"></label>
                <input type="search" id="query" />
                <button>Buscar</button>
            </form>
            <ul>
                {posts.map((item) => (
                    <li key={item.word}>{item.word}:{item.definition}</li>
                ))}
            </ul>
        </div>
    );
}
function Diccionario() {
    return (
        <main className="Main">
            <header className="App-header">
                <p>Diccionario Guaraní-Español - Español-Guaraní</p>
                <SearchResults />
            </header>
        </main>
    );
}

export default Diccionario;