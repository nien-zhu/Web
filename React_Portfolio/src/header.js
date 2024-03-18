import React from "react";
import Nav from "./nav.js"
import Logo from "./logo.js"

class header extends React.Component{
    render(){
        return(
            <header>
                <Logo/>
                <Nav/>
            </header>    
        );
    }
}

export default header;
