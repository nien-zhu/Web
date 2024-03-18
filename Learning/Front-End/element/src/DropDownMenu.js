import React from "react";
import "./DropDownMenu.css";

function DropDownOption(props){
    return <li><a href={props.link}>{props.name}</a></li>;
}

function Options(props){
    let l=props.ddoptions;
    // if (l != undefined){
    //     console.log(l.length);
    // }
        let ddo="ddo";
        let DDOptions=[];
        for(let i=0;i<l?.length;i++){
            let d=l[i];
            DDOptions.push(<DropDownOption key={i} name={d} link={props.link}/>);
        }
        return (
            <li id="option">
                <div><a href={props.link}>{props.name}</a></div>
                <ul id="DropDownContent">
                    {DDOptions}
                </ul>
            </li>
        );
}



class DropDownMenu extends React.Component{
    render(){
        return (
            <nav id="navigation-bar">
                <div id="title"><a>田間機器人競賽</a></div>
                <ul id="menu">
                    <Options name="最新消息" link="#"/>
                    <Options name="活動辦法" link="#" 
                    ddoptions={["參賽資格", "參賽時程", "參賽辦法", "活動獎項", "其他說明"]}/>
                    <Options name="活動辦法" link="#" 
                    ddoptions={["入選名單", "錄取名單", "得獎名單"]}/>
                    <Options name="住宿與交通" link="#"/>
                    <Options name="學會資訊" link="#"/>
                </ul>
            </nav>
  
        );
    }
}

export default DropDownMenu;