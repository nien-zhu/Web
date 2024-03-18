import React from "react";

function DropDown(props){
    return <li><a>{props.name}</a></li>;
}

function Option(props){
    if (props.DropDown == "true"){
        return (
            <li id="Option">
                <a href="#">{props.name}</a>
                <ul id="DropDown">
                    <DropDown name="danny"/>
                </ul>
            </li>
        )
    }
    else{
        return (
            <li id="Option">
                <a href="#">{props.name}</a>
            </li>
        )
    }

}

class nav extends React.Component{
    render(){
        return(
            <nav>
                <ul>
                    <Option name="Home"></Option>
                    <Option name="Introduction"></Option>
                    <Option name="Portfoliio"></Option>
                    <Option name="Contact"></Option>
                </ul>
            </nav> 
        );
    }

}
console.log("NAV");
export default nav;