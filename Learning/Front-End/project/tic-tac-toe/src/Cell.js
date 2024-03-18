import React from "react";
import "./tic-tac-toe.css";

class Cell extends React.Component{
    render(){
        let text="";
        if(this.props.label==1){
            text="O"
        }
        else if(this.props.label==-1){
            text="X"
        }
        return <div className="cell" onClick={this.clickEvent.bind(this)}>{text}</div>;
    }
    clickEvent(e){
        this.props.update(this.props.index);
    }
}

export default Cell;