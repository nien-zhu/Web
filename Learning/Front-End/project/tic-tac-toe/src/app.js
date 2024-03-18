import React from "react";
import "./tic-tac-toe.css";
import Title from "./Title.js";
import Board from "./Board.js";
import Button from "./Button.js";
import { createRoot } from 'react-dom/client';



window.addEventListener("load", ()=>{
    
    let container = document.getElementById('title');
    let root = createRoot(container); // createRoot(container!) if you use TypeScript
    root.render(<Title/>);

    container = document.getElementById('content');
    root = createRoot(container); // createRoot(container!) if you use TypeScript
    root.render(<Board/>);
    
    container = document.getElementById('button');
    root = createRoot(container); // createRoot(container!) if you use TypeScript
    root.render(<Button/>);
});

