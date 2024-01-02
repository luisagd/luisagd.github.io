import React, { useState, useEffect } from 'react';
// import "../styles/base.css";
// import "../styles/diccionario.css"
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
        <div className="SearchResults flex flex-col ">
            <div className='flex space-x-5 justify-center'>
                <form
                    className="mb-5 w-1/3"
                    onSubmit={(event) => {
                        event.preventDefault();
                        const query = document.getElementById('query').value;
                        console.log("query: " + query);
                        fetchData(query);
                    }}
                >
                    <label className="block mb-1 font-bold" htmlFor="query"></label>
                    <input className="w-full text-black p-1 mb-3 border border-r-4 border-slate-100" type="search" id="query" />
                </form>
                <button
                    className="bg-blue-700 text-white px-1 py-2 h-10 cursor-pointer"
                    onClick={() => {
                        const query = document.getElementById('query').value;
                        console.log("query: " + query);
                        fetchData(query);
                    }}
                >
                    Buscar
                </button>
            </div>
            <ul className="list-none">
                {posts.map((item) => (
                    <li className="mb-2">{item.item.word}:{item.item.definition}</li>
                ))}
            </ul>
        </div>
    );
}
function Diccionario() {
    return (
        <div>
            <main class="bg-gray-800 min-h-screen text-white text-center">
                <title>Diccionario Guaraní-Español y Español-Guaraní</title>
                <meta name='description' content='El mejor diccionario Guaraní-Español y Español-Guaraní.' />
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