// // Import our custom CSS
import '../scss/styles.scss'
// // Import all of Bootstrap's JS
// import 'bootstrap/dist/css/bootstrap.min.css';
// Import React
import React from "react"
import ReactDOM from "react-dom/client";
import { createRoot } from 'react-dom/client';
import Test from "./test.js"

const container = document.querySelector("#root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<Test/>);