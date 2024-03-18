import React from "react";
import "./main.css";

function change(){
    let elem = document.querySelector("#question");
    elem.className="change"
}

function MyButton(){
    return <button onClick={change}>Click Me</button>;
}

function test(){
    return(
        <div>
            <div id="question">
            Who are you?
            </div>
            <div id="response"></div>
            <MyButton/>
        </div>
        );
}

export default test;