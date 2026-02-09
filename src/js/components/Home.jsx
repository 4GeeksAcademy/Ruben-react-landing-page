import React from "react";

import Navbar from "../navbar/Navbar";
import Body from "./body/Body";
import Footer from "./Footer";

//create your first component
const Home = () => {
	return (
		<>
			<Navbar brand={"Start Bootstrap"} menuLinks={["Home","About","Services","Contact"]} />
			<Body />
			<Footer />
		</>
	);
};

export default Home;