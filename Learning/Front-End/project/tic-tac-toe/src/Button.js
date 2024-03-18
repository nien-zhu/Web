import React from "react";
import "./tic-tac-toe.css";
class Button extends React.Component{
    render(){
        return <button className="button" onClick={this.click.bind(this)}>Reset</button>;
    }
    click(e){
        console.log("reset");
    }
}

export default Button;