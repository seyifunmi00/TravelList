import { useState } from "react";
function PackingList ({items, remove, toggleId, handlePacked, Clear}) {
	
	const [sortOrder, setSortOrder] = useState ('description');

	const handleSort = (event) => {
		setSortOrder(event.target.value);
	}

	let sortedArray;

	if(sortOrder === "input") sortedArray = items;

	else if(sortOrder === "description") sortedArray = items.slice().sort((a, b) => a.description.localeCompare(b.description));

	else if(sortOrder === "order") sortedArray = items.slice().sort((a, b) => Number(b.packed) - Number(a.packed));
	
	return (
		
		
		<div className="list">
			<ul>
				{sortedArray.map ((item) => (
					<l1 className="list-item" key={item.id}>
						<input type="checkbox" name="" id="" value={item.packed}
						       onClick={() => toggleId (item.id)}/>
						<span
							style={item.packed ? {textDecoration: "line-through"} : {}}>
              {item.quantity} {item.description}
            </span>
						<button onClick={() => remove (item)}>❌</button>
					</l1>
				))}
			</ul>

			<div className="actions">
				<select value={sortOrder} onChange={handleSort}>
					<option value="input">Sort by input order</option>
					<option value="description">Sort by description</option>
					<option value="order">sort by packed order</option>
				</select>

				<button onClick={Clear}>Clear list</button>
			</div>
		</div>
	);
}

export default PackingList;
