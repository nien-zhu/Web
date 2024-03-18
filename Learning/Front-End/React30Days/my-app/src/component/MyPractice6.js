import React from 'react'
import { useEffect, useState } from 'react'
import useFetch from '../hooks/useFetch';

// API: json-server --watch data/db.json --port 8000

function MyPractice6() {
  const {menu} = useFetch("http://localhost:8000/menu");
  
  
  return (
    <div>
        <h3>Hook介紹</h3>
        <h4>注意事項</h4>
        <ul>
            <li>要用use開頭</li>
            <li>除了自製Hook,其他都只能在React Function 中呼叫</li>
            <li>不能在迴圈、條件式、巢狀函式中呼叫</li>
            <li>ex. useEffect(), useState()</li>
        </ul>
        <div id="Menu-Container">
          {menu&&menu.map((item) => ( //要確認menu有資料再抓取
            <div key={item.title}>
              <span><img id="Food-Img" src={item.img}/></span>
              <div id="Menu-Option-Container">
                <span>{item.id}. </span>
                <span>{item.title} : </span>
                <span>{item.price}元</span>
              </div>
            </div>
            
          ))}
        </div>
        <Form></Form>
        <BackendSimulater/>
        <hr></hr>
    </div>
  )
}

function Form(){

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  // useEffect(() => {console.log(name)}, [name]);

  function handleSubmit(e){
    e.preventDefault();
    const data = {
      name,
      email,
      msg,
    };
    fetch("http://localhost:8000/feedback", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data)
    }).then(() => {
      setName("");
      setEmail("");
      setMsg("");
      console.log("submit success");
      document.getElementById("Contact-List-Container").reset()
    })
  }

  return(
    <form id="Contact-List-Container" onSubmit={handleSubmit}>
      <div>聯繫我們</div>
      <div><hr></hr></div>
      <div>姓名</div>
      <div><input id="Name-Input" onChange={(e) => (setName(e.target.value))}></input></div>
      <div>電子信箱</div>
      <div><input id="Email-Input" onChange={(e) => (setEmail(e.target.value))}></input></div>
      <div>意見</div>
      <div><textarea id="Feedback-Input" onChange={(e) => (setMsg(e.target.value))}></textarea></div>
      <div><button>送出</button></div>
    </form>
  )
}

function BackendSimulater(){

    const {data} = useFetch("http://localhost:8000/feedback");


  function deleteData(id){
    fetch(`http://localhost:8000/feedback/${id}`,{
      method: "DELETE",
    }).then(() => {
      console.log(`delete data id = ${id}`);
      document.getElementById("backend").reset();
    })
  }

  return(
    <form id="backend">
      <div>模擬後台</div>
      <div>
        {data&&data.map((item) => (
          <div key={item.id}>
            <p>姓名 : {item.name}</p>
            <p>電子郵件 : {item.email}</p>
            <p>意見 : {item.msg}</p>
            <button onClick={() => deleteData(item.id)}>刪除</button>
          </div>
        ))}
      </div>
    </form>
    
  )
}

export default MyPractice6