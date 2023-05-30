import Header from "./Header.js";
import "./App.css";

function App(){
  return (
	<div className="wrapper">
		<div className="App">
      			<Header/>
            <div><img className="banner" src="/banner.jpg" alt="banner image"/></div>
    		</div>
	</div>
  );
}


export default App;
