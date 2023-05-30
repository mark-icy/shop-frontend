import Header from "./Header.js";
import "./App.css";
import Item from "./Item.js";

function App(){
  return (
	<div className="wrapper">
		<div className="App">
      			<Header/>
            <div><img className="banner" src="/banner.jpg" alt="banner image"/></div>
            <div className ="placeholders">
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
                <Item/>
    
            </div>
    		</div>
	</div>
  );
}


export default App;
