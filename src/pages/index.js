//Confirmed. Deployment only works if using branches in config, and using actions by its own.
// import * as React from "react"
import React from "react";
// import "../styles/base.css";
import { Link, navigate } from "gatsby";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import icon from "../images/luisagdlogo.svg";
import nn from "../images/neuralnetwork.gif";
import "../styles/font.css";
import hwbomb from "../images/an_hwbomb.gif";
import hwbomb2 from "../images/computer2.gif";
import me from "../images/dog.gif";
import bark from "../sound/bark.mp3";
import under_construction from "../images/under_construction.gif";

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
	return (
		<div className="invisible lg:visible ">
			<div className="relative">
				<img src={me} alt="Clickable example" className="w-80" />
				<div
					className="bg-red-500 w-[30%] h-[12.5%] absolute top-[75%] left-[55%] cursor-pointer opacity-0"
					onClick={() => {
						var audio = new Audio(bark);
						audio.play();
					}}
				/>
			</div>
			<p className="text-white"> ps: don't touch my dog or his bone. he bites</p>
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
		<div className="bg-black ">
			<dev className="flex">
				<ClickableImage className="w-0 lg:w-80" />
				<main class="min-h-screen text-white xl:py-10">
					{/* <Navbar /> */}
					<div className="lg:border-2 lg:max-w-[1200px] mx-auto">
						<header class="items-center  min-h-fit">
							<h1
								className=" shadow-red-400 shadow-lg text-center text-green-600 font-bold text-xs lg:text-base"
								title="Cool ASCII art"
							>
								<pre alt>{ascii}</pre>
							</h1>
							<p class="my-3 lg:px-9 [font-family:_MS_PGothic,_Georgia] [text-shadow:_1px_2px_0px_rgb(255_0_0_/_60%)] aliased">
								I'm a CS student at <span className="italic bg-red-600">[coming soon]</span> with several fun projects.
								And yes, I love the 90's theme <span className="italic"> (but I can also do modern stuff!)</span>
								<br />
								<br />
								<div className="flex items-center border p-0">
									<p className="p-0 m-0 text-sm lg:text-base">
										Technical jargon: Once I loved C++ and dealing with hardware. While you won't see many things here
										written in a low-level language, I use it all the time in quick hacks for memory modification and
										linux utils. Every tool has its place, so it doesn't make sense to do webdev with C++ (though I did
										it once. I learned my lesson). But in the end, I've outgrown my love for tools. In the age of AI,
										marrying to a specific way of doing things is obsolete.
									</p>
									<img src={hwbomb2} className="h-[100px] [image-rendering:_pixelated]" />
								</div>
							</p>
						</header>
						<div className=" my-3 lg:p-10">
							<div className=" text-center">
								<a href="https://ñeerandu.com/" className="text-3xl lg:text-4xl font-press-start">
									Ñe'erandu
								</a>
								<p class="my-3 text-base lg:text-2xl">An online dictionary for Guarani - Spanish.</p>
								<SearchBar />
							</div>
							<div className="flex items-center border p-0">
								<p className="text-sm lg:text-base [font-family:_MS_PGothic,_Georgia] [text-shadow:_1px_2px_0px_rgb(255_0_0_/_60%)] aliased">
									Technical jargon: I OCR'd, sanitized and parsed the physical dictionary with a Python script. I've
									done the heavy lifting, so (hopefully) no one else has to! I used the Bible for my corpus, but I also
									incorporated other sources. The tech stack is ReactJS + Gatsby + Cloudflare. Due to limitations in the
									number of pages (20,000), I figured a workaround to make half the pages static and the rest dynamic.
									Static = Good SEO = <span className="text-green-600 font-bold">$$$</span>
								</p>
								<img src={hwbomb} className="h-[100px] [image-rendering:_pixelated]" />
							</div>
						</div>
						<div className="bg-slate-900 text-center my-3 lg:p-10">
							<div>
								<h1 className="text-3xl lg:text-4xl font-bold font-[]">Ñembohasa</h1>
								<p class="my-3 text-base lg:text-2xl">
									An OpenNMT 3 translation model based on transformers for Guarani and Spanish
									<div className="mx-auto text-xs">
										<img src={nn} className="mx-auto " />A simplified animation of the transformer model.
									</div>
								</p>
							</div>
							<div className="text-left  pl-6">
								<p className="italic ">And the paper?</p> I will write and publish my results at{" "}
								<span className="italic bg-red-600">[coming soon]</span> once I get a chance to train further my model
								with a better machine. (And also because local universities here don't let you publish as an
								undergraduate or outsider. Alas.) Meanwhile, you can access the code{" "}
								<a href="/nembohasa" className="underline text-blue-400">
									here.
								</a>
							</div>
						</div>
						<div className="bg-slate-900 my-3 p-4 lg:p-10">
							<div>
								<h1 className="text-3xl lg:text-4xl font-bold font-[]">Do you have something non-CS?</h1>
								<p class="my-3">
									I do. I conducted research at my HS, and it had to be related to the natural sciences, so I decided to
									develop a bioplastic. Here is the abstract for the research (the rest of the document is in Spanish.
									If interested, you can email me.)
								</p>
								<div className="[font-family:__Times_New_Roman,_Georgia]">
									<h2 className="font-bold text-center">ABSTRACT</h2>
									<p className="text-justify lg:w-96 mx-auto text-sm lg:text-base">
										Plastic pollution is a global problem that contributes to environmental degradation. Bioplastics
										made from gelatin and other materials are a solution to this problem. The objectives of this work
										were: to determine the feasibility of the elaboration, the uses, the organoleptic characteristics,
										and the procedures used to generate bioplastic based on gelatin and yerba mate (Ilex
										paraguariensis). For the formulation of the films, 2%, 5%, 10%, 20% (m/v) gelatin solutions were
										prepared, glycerol was added as a plasticizer at 20% and 41.6% with respect to gelatin. The material
										was optimized using a mixture with the following composition: glycerol (2 g), yerba mate (4 g),
										gelatin (20 g) in an aqueous solution to which vinegar (110 mL water and 10 mL vinegar) was added,
										with a mixing time of 3.5 min at 80 °C ± 10 °C. Based on the results, it is feasible to make
										bioplastics based on gelatin and yerba mate. <br />
										keywords: Gelatin, Ilex paraguariensis, Glycerol, Bioplastic
									</p>
								</div>
							</div>
						</div>
						<div className="bg-slate-900 my-3 p-4 lg:p-10 flex">
							<div className="pr-5">
								<h1 className="text-3xl lg:text-4xl font-bold font-[]">Found a bug?</h1>
								<p class="my-3">
									As with{" "}
									<a href="https://en.wikipedia.org/wiki/Ariane_flight_V88" className="underline text-blue-400">
										every piece of software
									</a>
									, this site is a work in progress, so mistakes can happen. If you notice any bug or mistake,{" "}
									<a href="mailto:daniel.aguerodiaz@gmail.com" className="underline text-blue-400">
										please let me know.
									</a>
								</p>
							</div>
							<img src={under_construction} />
						</div>
					</div>
				</main>
			</dev>

			<Footer />
		</div>
	);
};

export default IndexPage;
