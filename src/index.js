import React from "react";
import ReactDOM from "react-dom/client"; // Correct import statement
import App from "./App";
import searchImages from "./api";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

root.render(<App />);
