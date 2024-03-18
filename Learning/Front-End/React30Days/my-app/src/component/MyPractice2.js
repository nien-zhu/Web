import React from 'react'
import { useState } from 'react';

function MyPractice2() {
    const [ParentData, setParentData] = useState("來自父元件建立的資料")
    return (
        <div>
            <h3>Prop 練習</h3>
            <div> 
            父元件的資料 : <span>{ParentData}</span>
            </div>
            <div>
            子元件的資料 : <MyPractice2_1 data={ParentData} setParentData={setParentData}/>
            </div>
            <hr></hr>
        </div>
    )
}

function MyPractice2_1(props){
    const [childData, setChildData]=useState(props.data);
    

    function Change(){
        props.setParentData("來自子元件建立的資料");
    }

    return (
        <span>
            {props.data}
            <button onClick={Change}>Change</button>
        </span>
    );
}

export default MyPractice2