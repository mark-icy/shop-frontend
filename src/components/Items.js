import "./Items.css"
import Item from "./Item.js"

function Items(){
	const arr = [];
	for (let i = 0; i < 5; i++) {
		arr.push(
			<Item/>
		)
	}

	return (
		<div className="items">
			{arr}
		</div>

	);

}

export default Items
