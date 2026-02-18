import React from "react";

import Navbar from "./navbar/Navbar";
import Body from "./body/Body";
import Footer from "./Footer";


const Home = () => {


	function idGeneration() {
		let part1 = Date.now().toString(30);
		let part2 = Math.random().toString(30).substring(2);

		return part1 + part2;
	}

	const menuLinks = [
		{ "name": "Home", "href": "#", "id": idGeneration() },
		{ "name": "About", "href": "#about", "id": idGeneration() },
		{ "name": "Services", "href": "#services", "id": idGeneration() },
		{ "name": "Contact", "href": "#contact", "id": idGeneration() }
	];

	const cardList = [
		{
			"title": "First Card",
			"text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo unde molestiae atque repellendus eum sequi ex maiores facilis voluptatibus",
			"buttonText": "Vamos a conseguirlo",
			"id" : idGeneration()
		},
		{ 
			"title": "Second Card", 
			"text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo unde molestiae atque repellendus eum sequi ex maiores facilis voluptatibus Lorem ipsum dolor sit amet, consectetur adipisicing elit.", 
			"buttonText": "Vamos a ello" ,
			"id" : idGeneration()
		},
		{ 
			"title": "Third Card", 
			"text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo unde molestiae atque repellendus eum sequi ex maiores facilis voluptatibus", 
			"buttonText": "Vamos a por todas" ,
			"id" : idGeneration()
		},
		{ 
			"title": "Fourth Card", 
			"text": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo unde molestiae atque repellendus eum sequi ex maiores facilis voluptatibus Lorem ipsum dolor sit amet, consectetur adipisicing elit.", 
			"buttonText": "Here we go" ,
			"id" : idGeneration()
		}
	]

	return (
		<>
			<Navbar brand={"Start Bootstrap"} menuLinks={menuLinks} />
			<Body cards={cardList} />
			<Footer />
		</>
	);
};

export default Home;