import React from "react";
import "./tic-tac-toe.css";
import Cell from "./Cell.js";
import Line from "./Line.js";

class Board extends React.Component{
    constructor(props){
        super(props);
        this.state={
            turn:1,
            labels:[0,0,0,0,0,0,0,0,0],
            winner:null
        }
    }
    
    render(){
        let label;
        if(this.state.turn%2==1){
            label=1;
        }
        else{
            label=-1;
        }
        let cells=[];
        for(let i=0; i<9; i++){
            cells.push(<Cell key={i} index={i} label={this.state.labels[i]}  update={this.updateLabel.bind(this)}/>);
        }


        if(this.state.winner!==null){
            console.log(this.state.winner);
            cells.push(<Line key={9} startIndex={this.state.winner.startIndex}
                endIndex={this.state.winner.endIndex}/>)
        }
        return <div className="board">{cells}</div>;
    }

    updateLabel(index){
        let currentLabel=this.state.labels[index];
        if (currentLabel===0&&this.state.winner===null){
            this.setState((preState)=>{
                let label=preState.turn%2;
                if (label==0){
                    label=-1;
                }
                preState.labels[index]=label;

                if (preState.turn>=5){
                    let winner=this.checkWinner(preState.labels);
                    if (winner!=null){
                        preState.winner=winner;
                    }
                }
                
                return{
                    turn:preState.turn+1,
                    labels:preState.labels
                };
            });
        }
    }

    checkWinner(labels){
        for(let i=0; i<9; i+=3){
            // console.log("row"+i);
            if(labels.slice(i, i+3).reduce((a, b) => a + b, 0)==3){return {side:"O", startIndex:i, endIndex:i+2};}
            else if (labels.slice(i, i+3).reduce((a, b) => a + b, 0)==-3){return {side:"X", startIndex:i, endIndex:i+2};};
        }
        
        for (let i=0; i<=2; i++){
            // console.log("column");
            if((labels[i]+labels[i+3]+labels[i+6]) == 3){return {side:"O", startIndex:i, endIndex:i+6};}
            else if((labels[i]+labels[i+3]+labels[i+6]) == -3){return {side:"X", startIndex:i, endIndex:i+6};};
        }
        let leftLine=labels[0]+labels[4]+labels[8];
        let rightLine=labels[2]+labels[4]+labels[6];

        if (rightLine==-3 || rightLine==3){if (rightLine>0){return {side:"O", startIndex:2, endIndex:6};}else{return {side:"X", startIndex:2, endIndex:6};}}
        else if (leftLine==-3 || leftLine==3){if (leftLine>0){return {side:"O", startIndex:0, endIndex:8};}else{return{side:"X", startIndex:0, endIndex:8};}}
    }
}

export default Board;