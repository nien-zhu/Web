import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app.js";
import { createRoot } from 'react-dom/client';

const container = document.querySelector("body");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App/>);