import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

const root = document.getElementById("root");

const reactDomRoot = ReactDOM.createRoot(root);
console.log(reactDomRoot);

reactDomRoot.render(<App />);

// ReactDOM.createRoot(document.getElementById("root")).render(<App />);
