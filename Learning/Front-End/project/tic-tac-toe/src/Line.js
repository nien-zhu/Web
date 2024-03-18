import React from "react";
import "./tic-tac-toe.css";
class Line extends React.Component{
    render(){
        
        let startX=this.props.startIndex%3;
        let startY=Math.floor(this.props.startIndex/3);
        let endX=this.props.endIndex%3;
        let endY=Math.floor(this.props.endIndex/3);
        return <svg className="line"><line x1={startX*100+50} y1={startY*100+50} x2={endX*100+50} y2={endY*100+50} stroke="red" strokeWidth="5"/></svg>;
    }
}

export default Line;