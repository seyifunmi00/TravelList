import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Flashcard from "./Flashcard";
import Accordion from "./Accordion";
import Tip from "./Tip";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <Flashcard /> */}
    {/* <Accordion /> */}
    <Tip />
  </React.StrictMode>
);
