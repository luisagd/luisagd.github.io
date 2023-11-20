import React, { useState, useEffect } from 'react';
import "../styles/base.css";
import "../styles/diccionario.css"
import Fuse from 'fuse.js';
import diacritics from 'diacritics'
import { useLocation } from '@gatsbyjs/reach-router';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';


const dictionary = require("../json/diccionario.json");

function removeAccents(obj) {
    if (typeof obj === 'string' || obj instanceof String) {
        // return obj.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/'/g, '');
        //fix ñ
        return diacritics.remove(obj).replace(/'/g, '');
    }
    return obj
}
function getFn(obj, path) {
    var value = Fuse.config.getFn(obj, path);
    if (Array.isArray(value)) {
        return value.map(el => removeAccents(el));
    }
    return removeAccents(value);
}
const fuseOptions = {
    // isCaseSensitive: false,
    // includeScore: false,
    // shouldSort: true,
    // includeMatches: false,
    // findAllMatches: false,
    // minMatchCharLength: 1,
    // location: 0,
    // threshold: 0.6,
    // distance: 100,
    // useExtendedSearch: false,
    // ignoreLocation: false,
    // ignoreFieldNorm: false,
    // fieldNormWeight: 1,`
    getFn: getFn,
    keys: [
        'word',
        'definition'
    ]
};
const fuse = new Fuse(dictionary, fuseOptions);

function SearchResults() {
    const location = useLocation();
    const [posts, setPosts] = useState([]);

    const fetchData = (word) => {
        if (!word || typeof word !== 'string') return null;
        console.log("word:" + word);

        // Simulate fetching data locally from the imported JSON file
        word = word.toLowerCase().replaceAll("'", "’");
        const result = fuse.search(word).slice(0, 5);
        // const result = dictionary.filter(item =>
        //     item.word.toLowerCase().includes(word.toLowerCase())
        // );
        console.log("data:", result);
        setPosts(result);
    };

    useEffect(() => {
        // 👇️ only runs once
        const queryParams = new URLSearchParams(location.search);
        const word = queryParams.get('q');
        if (word !== "" && word !== "/") {
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
                    <li>{item.item.word}:{item.item.definition}</li>
                ))}
            </ul>
        </div>
    );
}
function Diccionario() {
    return (
        <div>
            <main className="Main">
                <title>Diccionario Guaraní-Español y Español-Guaraní</title>
                <meta name='description' content='El mejor diccionario Guaraní-Español y Español-Guaraní.' />
                <Navbar />
                <header className="Base-header">
                    <p>Diccionario Guaraní-Español - Español-Guaraní</p>
                    <SearchResults />
                </header>
            </main>
            <Footer />
        </div>

    );
}

export default Diccionario;