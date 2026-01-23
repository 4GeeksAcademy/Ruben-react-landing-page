import React from "react";

import Navbar from "./Navbar";
import Body from "./body/Body";
import Footer from "./Footer";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar/>
			<Body/>
			<Footer/>
		</div>
	);
};

export default Home;