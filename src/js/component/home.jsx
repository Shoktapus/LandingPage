import React from "react";
import {Navbar} from "../Pages/navbar.jsx"
//include images into your bundle
import {Jumbotron} from "../Pages/jumbotron.jsx"

//create your first component Component names must be capitalized.
//Components must be called in the order that you want them to appear on the page.
//This function is used to call each new component added to the project. There is no need to rewrite 
//the function each time for each individual component.
const Home = () => {
	return (
		<div className="text-center">
			<Navbar/>
			<Jumbotron/>
		</div>
	);
};

export default Home;
