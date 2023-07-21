import Header from "./components/Header.js";
import "./App.css";
import Items from "./components/Items.js";
import Footer from "./components/Footer.js";
import Banner from "./components/Banner.js";

function App(){
  return (
	<div className="App">
		<Header/>
	  	<Banner/>
	  	<Items/>
            	<Footer/>
	</div>
  );
}


export default App;
