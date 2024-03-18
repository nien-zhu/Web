import React from 'react';
import "./myHeader.css";

function myHeader() {
  return (
    <header>
      <nav className='container'>
        <div className='d-flex justify-content-between'>
          <div id="logo" className='d-flex'><a href='/'>Dreamill</a></div>
          <Menu contents={["首頁","最新消息","人才培育","更多"]}></Menu>
          <div id="mobile-menu">
          <span>&#9776;</span>
          <div id="dropdown-menu">
            <div className='option'><a>首頁</a></div>
            <div className='option'><a>最新消息</a></div>
            <div className='option'><a>競賽辦法</a></div>
            <div className='option'><a>更多</a></div>
          </div>
          </div>
        </div>
      </nav>     
    </header>  
  );
}



function Menu(props){
  const contents = props.contents;

    let li_list = [];
    contents.forEach(content => (li_list.push(<li key={content}><a href={`${(content==="首頁") ? "/":content}`}>{content}</a></li>)))

  return(
      <ul id = 'menu' className='d-flex remove-ul-grid'>
        {li_list}
      </ul>
  );
}




export default myHeader