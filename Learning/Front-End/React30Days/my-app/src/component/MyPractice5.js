import React from 'react';
import { useEffect, useState } from 'react';

function MyPractice5() {
    const [Number, setNumber] = useState(0);
    function Button(){
        return <button onClick={handleNumber}>+1</button>
    }

    function handleNumber(){
        setNumber(Number+1);

    }

    useEffect(() => {
        console.log("Func. Component: first render"); //componentDidMount
        return() => {
            console.log("Func. Component: unmount"); //componentWillUnmount 
        };
    }, []);

    useEffect(() => {  //componentDidUpdate
        console.log("Func. Component: ",Number);
    }, [Number]);
    return (
        <div>
            <h3>Lifecycle of Function Conponent</h3>
            <div>{Number}<span><Button/></span></div>
            <hr></hr>
        </div>
    )
}




export default MyPractice5