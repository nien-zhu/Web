import React from 'react';
import { useState } from 'react';

function MyButton() {
    let [number, setNumber] = useState(0)
    let [sec, setSec] = useState(0);
    let [stop, setStop] = useState(" start")
    
    function handleNumber(type){
        if (sec<10){
            if(type==="add"){
                // 避免直接取用Number，所以用prev
                setNumber((prev)=>(prev+1));
            }
            else if(type==="subtraction"){
                setNumber((prev)=>(prev-1));
            }
            console.log(number);
        }
    }
    
    if(sec>=10){
        window.setTimeout(()=>{
            setStop(" Stop")
        }, 0);
    }
    else{
        window.setTimeout(()=>{
            setSec(sec+1)
        }, 1000);
    }
        

    return (
        <div>
            <h3>useStart和setTimeout 練習</h3>
            <span>
                <div>時間 : <span>{sec}</span><span>{stop}</span></div>
                <button onClick={()=>handleNumber("subtraction")}>-</button>
                <span>{number}</span>
                <button onClick={()=>handleNumber("add")}>+</button>
            </span>
            <hr></hr>
        </div>
    )
}

export default MyButton