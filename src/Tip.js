import React, { useState } from "react";

function Tip() {
  const [percentage, setPercentage] = useState("");
  const [friendPercentage, setFriendPercentage] = useState("");
  const [amount, setAmount] = useState(0);
  const [totalCost, setTotalCost] = useState(0);
  const [tip, setTip] = useState(0);

  function handlePercentage(event) {
    setPercentage(Number(event.target.value));
  }

  function handleFriendPercentage(event) {
    setFriendPercentage(Number(event.target.value));
  }

  function handleCost(event) {
    const newAmount = Number(event.target.value);
    setAmount(newAmount);

    const totalTip = (percentage+friendPercentage)/2;
    const tip = newAmount * (totalTip / 100);
    setTip(tip);
    const totalCost = newAmount + tip;
    setTotalCost(totalCost);
  }

  function handleClear(){
    setAmount(0);
    setPercentage("");
    setFriendPercentage("");
    setTip(0);
    setTotalCost(0);
  }
  return (
    <div>
      <p>
        How much was the bill $<input type="text" value={amount} onChange={handleCost} />
      </p>
      <p>
        How did you like the service?{" "}
        <select onChange={handlePercentage} >
        <option value="" > Select an option</option>
          <option value={0}>Dissatisfied(0%)</option>
          <option value={5}>It was okay(5%)</option>
          <option value={10}>It was good(10%)</option>
          <option value={20}>Absolutely amaizing(20%)</option>
        </select>
      </p>
      <p>
        How did your friend like the service
        <select onChange={handleFriendPercentage}>
          <option value="" > Select an option</option>
          <option value={0}>Dissatisfied(0%)</option>
          <option value={5}>It was okay(5%)</option>
          <option value={10}>It was good(10%)</option>
          <option value={20}>Absolutely amaizing(20%)</option>
        </select>
      </p>

      {totalCost === 0 || percentage === null || friendPercentage ===null ? null : <p><em>You pay ${totalCost} (${amount} + ${tip} tip)</em></p>}
      {totalCost === 0 || percentage === null || friendPercentage ===null? null : <button onClick={handleClear}>Reset</button>}
    </div>
  );
}

export default Tip;
