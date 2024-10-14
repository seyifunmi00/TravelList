import React, { useState, useEffect } from "react";
import "./index.css";

function Accordion() {
  const faqs = [
    {
      id: 1,
      title: "Where are these chairs assembled?",
      text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
    },
    {
      id: 2,
      title: "How long do I have to return my chair?",
      text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
    },
    {
      id: 3,
      title: "Do you ship to countries outside the EU?",
      text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
    },
  ];

  // const [index, setIndex] = useState();
  const [array, setArray] = useState([]);

  const handleIndex = (id) => {
    if (array.includes(id)) {
      setArray((array) => array.filter((item) => item !== id));
    } else {
      setArray([...array, id]);
    }
  };

  return faqs.map((faq, i) => (
    <div
      className={`item ${array.includes(faq.id) ? "open" : ""}`}
      onClick={() => handleIndex(faq.id)}
    >
      <p className={`number`}>{i < 9 ? `0${i + 1}` : i + 1}</p>
      <p className="title">{faq.title}</p>
      <p className="icon">{array.includes(faq.id) ? "-" : "+"}</p>
      <p className={`content-box`}>
        {array.includes(faq.id) ? faq.text : null}
      </p>
    </div>
  ));
}

export default Accordion;
