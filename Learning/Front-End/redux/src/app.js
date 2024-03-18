import React from "react"
import ReactDOM from "react-dom/client";
import Redux from "react-redux";
import "./app.css";

console.log("hello");
class Myhead extends React.Component{
    render(){
        return <div className="title">Hello world</div>;
    }
}

let store;
let reducer=function(state, action){
    //無論狀態是否有改變，都一定要會傳狀態物件，新的狀態會完全取代舊的狀態物件
    switch(action.type){
        case "UPDATE_SWITCH":
            return {on:!state.on};
        default:
            return state;
    }
}

window.addEventListener("load", ()=>{
    store=Redux.createStore(reducer, {on:false});
    document.addEventListener("click",()=>{
        store.dispatch({
            type:"UPDATE_SWITCH"
        });
        console.log(store.getState());
    });
});