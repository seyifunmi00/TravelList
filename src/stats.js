function Stats({ items }) {

    if(items.length === 0 ){
        return <p className="stats"><em>Start adding some items in your packing list🚀</em></p>
    }


    const length = items.length;
    let finished = 0;
  
    items.forEach((item) => {
      if (item.packed) finished++;
    });
  
    const percentage = (finished / length) * 100;
  
    return (
      <footer className="stats">
        {percentage === 100 ? (
          <em>You are ready to go✈️</em>
        ) : (
          <em>
            {" "}
            You have {length} items on your list, and you already packed{" "}
            {finished} ({`${length === 0 ? 0.0 : Math.round(percentage)}`}%)
          </em>
        )}
      </footer>
    );
}

export default Stats;
