//Confirmed. Deployment only works if using branches in config, and using actions by its own.
// import * as React from "react"
import React from "react";
import "../styles/base.css";
import { Link, navigate } from "gatsby";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import icon from "../images/luisagdlogo.svg";
import nn from "../images/neuralnetwork.gif";
import "../styles/font.css";
import hwbomb from "../images/an_hwbomb.gif";
import hwbomb2 from "../images/computer2.gif";
import me from "../images/me.jpg";
import bark from "../sound/bark.mp3";

import wordlist_gn from "../json/wordlist_gn.json";
import wordlist_es from "../json/wordlist_es.json";
function SearchBar({ func }) {
	const diacritics = ["’", "ñ", "ã", "ẽ", "ĩ", "õ", "ũ", "á", "é", "í", "ó", "ú", "ý"];
	var url;
	if (typeof window !== `undefined`) {
		url = new URL(window.location.href);
	}
	const use_query = (query) => {
		if (wordlist_gn.includes(query)) {
			//TODO: Fix the preference of gn over es
			window.location.href = "https://ñeerandu.com/diccionario/" + query;
		} else if (wordlist_es.includes(query)) {
			window.location.href = "https://ñeerandu.com/diccionario/?q=" + query;
		} else {
			window.location.href = "https://ñeerandu.com/error/?q=" + query;
		}
	};
	return (
		<div className="SearchResults flex flex-col lg:px-8">
			<div className="my-5 px-16">
				{diacritics.map((char) => (
					<button
						className="border w-7 lg:w-10 py-1 border-blue-500 text-white bg-blue-600 m-1 text-lg lg:text-2xl rounded"
						onClick={() => {
							document.getElementById("query").value = document.getElementById("query").value + char;
							document.getElementById("query")?.focus();
						}}
					>
						{char}
					</button>
				))}
			</div>
			<div className="flex space-x-5 justify-center items-center">
				<form
					// className="w-2/3 lg:w-1/2"
					className="grow px-4"
					onSubmit={(event) => {
						event.preventDefault();
						const query = event.currentTarget.elements.query.value;
						console.log("custom querys: " + query);
						use_query(query.trim());
					}}
				>
					<label className="block mb-1 font-bold">
						<input
							className="w-full text-black p-1 border border-blue-300 rounded-3xl h-12 max-w-80 lg:max-w-[40rem] outline-blue-600 px-4 lg:px-10"
							type="search"
							dir="ltr"
							id="query"
							spellCheck="false"
							autoCorrect="off"
							autoComplete="off"
							autoCapitalize="off"
							placeholder="Try it out! Search 'sol' "
						/>
					</label>
				</form>
			</div>
		</div>
	);
}
const ClickableImage = () => {
	// Example function to handle click events
	const handleImageClick = (event) => {
		// Get the bounding box of the image
		const rect = event.target.getBoundingClientRect();
		// Calculate the click position relative to the image
		const size_x = rect.right - rect.left;
		const size_y = rect.bottom - rect.top;
		console.assert(size_x == size_y, "WHAT!! The image is not a square anymore. Please fix this!");
		let x = Math.round(((event.clientX - rect.left) * 512) / size_x);
		let y = Math.round(((event.clientY - rect.top) * 512) / size_y);

		// Call different functions based on the clicked position
		if (x > 320 && x < 440 && y > 380 && y < 450) {
			var audio = new Audio(bark);
			audio.play();
			// alert("GRRRRRRRRRRRR!");
		} else {
			// alert("Clicked somewhere else!");
		}
	};

	return (
		<div style={{ position: "relative", display: "inline-block" }}>
			{/* The image */}
			<img
				src={me}
				alt="Clickable example"
				// style={{ display: "block", width: "100%", height: "auto" }}
				className="fixed w-0 2xl:w-80 top-10 "
				onClick={handleImageClick}
			/>
		</div>
	);
};
export function Head() {
	return (
		<>
			<title>luisagd</title>
			<meta name="description" content="Luisagd: my personal website" />
			<html lang="es" />
			<link rel="icon" type="image/x-icon" href={icon} />
		</>
	);
}
const IndexPage = () => {
	let ascii = String.raw`
  __  __         _____           _           _       
 |  \/  |       |  __ \         (_)         | |      
 | \  / |_   _  | |__) | __ ___  _  ___  ___| |_ ___ 
 | |\/| | | | | |  ___/ '__/ _ \| |/ _ \/ __| __/ __|
 | |  | | |_| | | |   | | | (_) | |  __/ (__| |_\__ \
 |_|  |_|\__, | |_|   |_|  \___/| |\___|\___|\__|___/
          __/ |                _/ |                  
         |___/                |__/                   
`;
	return (
		<div className="bg-black">
			{/* <img src={me} className="fixed w-0 lg:w-80 top-10 " /> */}
			<ClickableImage className="fixed w-0 lg:w-80 top-10 " />
			<main class="min-h-screen text-white lg:py-10">
				{/* <Navbar /> */}
				<div className="lg:border-2 lg:max-w-[1200px] mx-auto">
					<header class="items-center  min-h-fit">
						<h1
							className=" shadow-red-400 shadow-lg text-center text-green-600 font-bold text-xs lg:text-base"
							title="Cool ASCII art"
						>
							<pre alt>{ascii}</pre>
						</h1>
						<p class="my-3 lg:px-9 [font-family:_MS_PGothic,_Georgia] [text-shadow:_1px_2px_0px_rgb(255_0_0_/_60%)] [font-smoothing:_none] [text-rendering:_optimizeSpeed] [-webkit-font-smoothing:_none]">
							I'm a CS student at <span className="italic bg-red-600">[coming soon]</span> with several fun projects.
							And yes, I love the 90's theme <span className="italic"> (but I can also do modern stuff!)</span>
							<br />
							<br />
							<div className="flex items-center border p-0">
								<p className="p-0 m-0 text-sm lg:text-base">
									Technichal jargon: Once I loved C++ and dealing with hardware. While you won't see many things here
									written in in a low-level language, I use it all the time in quick hacks for memory modification and
									linux utils. Every tool has its place, so it doesn't make sense to do webdev with C++ (though I did it
									once. I learned my lesson). But in the end, I've outgrown my love for tools. In the age of AI,
									marrying to a specific way of doing things is obsolete.
								</p>
								<img src={hwbomb2} className="h-[100px] [image-rendering:_pixelated]" />
							</div>
						</p>
					</header>
					<div className=" my-3 py-2">
						<div className=" text-center">
							<h1 className="text-3xl lg:text-4xl font-press-start">Ñe'erandu</h1>
							<p class="my-3 text-base lg:text-2xl">An online dictionary for Guarani - Spanish.</p>
							<SearchBar />
						</div>
						<div className="flex items-center border p-0 m-1 lg:m-9 ">
							<p className="text-sm lg:text-base [font-family:_MS_PGothic,_Georgia] [text-shadow:_1px_2px_0px_rgb(255_0_0_/_60%)] aliased">
								Technichal jargon: I OCR'd, sanitized and parsed the physical dictionary with a python script. I've done
								the heavy lifting so (hopefully) no one else has to! I used the Bible for my corpus, but I also
								incorporated other sources. The tech stack is ReactJS + Gatsby + Cloudflare. Due to limitations in the
								number of pages (20.000), I figured a workaround to make half the pages static and the rest dynamic.
								Static = Good SEO = <span className="text-green-600 font-bold">$$$</span>
							</p>
							<img src={hwbomb} className="h-[100px] [image-rendering:_pixelated]" />
						</div>
					</div>
					<div className="bg-slate-900 text-center my-3 py-2">
						<div>
							<h1 className="text-3xl lg:text-4xl font-bold font-[]">Ñembohasa</h1>
							<p class="my-3 text-base lg:text-2xl">
								An OpenNMT 3 translation model based on transformers for Guarani and Spanish
								<img src={nn} className="mx-auto" />
							</p>
						</div>
						<div className="text-left  pl-6">
							<p className="italic ">And the paper?</p> I will publish my results at{" "}
							<span className="italic bg-red-600">[coming soon]</span> once I get a chance to train further my model
							with a better machine. (And also because local universities here don't let you publish as an undergraduate
							or outsider. Alas.)
						</div>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
};

export default IndexPage;
