import {useState} from "react";

function Form ({addItem}) {
	const [description, setDescription] = useState ("");
	const [quantity, setQuantity] = useState (1);
	const id = Date.now () + Math.random ().toString (36).substr (2, 9);
	
	function handleChange (event) {
		setDescription (event.target.value);
	}
	
	function handleQuantity (e) {
		setQuantity (Number (e.target.value));
	}
	
	function handleSubmit (event) {
		event.preventDefault ();
		
		
		const newItem = {
			id: id,
			description: description,
			quantity: quantity,
			packed: false,
		};
		
		if (description !== "") {
			addItem (newItem);
		}
		
		setDescription ("");
		setQuantity (quantity);
		
	}
	
	return (
		<form className="add-form" onSubmit={handleSubmit}>
			<h3>What do you need for your trip 😍</h3>
			<select value={quantity} onChange={handleQuantity}>
				{Array.from ({length: 20}, (_, i) => i + 1).map ((num) => (
					<option key={num} value={num}>
						{num}
					</option>
				))}
			</select>
			<input
				placeholder="item..."
				value={description}
				onChange={handleChange}
			/>
			<button>Add</button>
		</form>
	);
}

export default Form;
