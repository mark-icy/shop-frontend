import Header from "./components/Header.js";
import "./App.css";
import Items from "./components/Items.js";
import Footer from "./components/Footer.js";
import Banner from "./components/Banner.js";
import Login from "./components/Login.js";
import React, { useState } from "react";


function App(){
	//pseudocode
	const[login, setLogin] = useState("none");

  return (
	<div className="App">
		<Header setLogin={setLogin} login={login}/>
	  	<Banner/>
		<Login login={login}/>
	  	<Items/>
		
            	<Footer/>
	</div>
  );
}


export default App;
