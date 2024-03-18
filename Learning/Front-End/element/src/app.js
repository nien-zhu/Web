import "./main.css";
import React from "react";
import DropDownMenu from "./DropDownMenu";
import Test from "./test.js";
import News from "./News.js";


class app extends React.Component{
    render(){
        return (
        <div id="root">
            <header>
                <DropDownMenu/>
            </header>
            <main>
                <News/>
            </main>
            
        </div>
        );
    }
};

export default app;