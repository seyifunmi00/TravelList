import Logo from "./logo";
import Form from "./form";
import PackingList from "./PackingList";
import Stats from "./stats";
import {useState} from "react";

function App () {
	const [array, setArray] = useState ([]);
	
	const addItem = (newItem) => {
		setArray ([...array, newItem]);
	};
	
	const remove = (deletingItem) => {
		const newArray = array.filter ((item) => item.id !== deletingItem.id);
		setArray (newArray);
	};
	
	const toggleId = (id) => {
		const updatedArray = array.map ((item) =>
			item.id === id ? {...item, packed: !item.packed} : item
		)
		
		
		setArray (updatedArray);
	}
	
const Clear = () =>{

	setArray([]);
}


	return (
		<div className="app">
			<Logo/>
			<Form addItem={addItem}/>
			<PackingList items={array} remove={remove} toggleId={toggleId} Clear={Clear}/>
			<Stats items={array}/>
		</div>
	);
}

export default App;
