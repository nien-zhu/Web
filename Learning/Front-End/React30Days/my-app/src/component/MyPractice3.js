import React, { useState } from 'react';

const menuContent=[
    {
        name: "大麥克",
        price: null,
        img: "/"

    },
    {
        name: "薯條",
        price: 55,
        img: "/"

    },
    {
        name: "可樂",
        price: 30,
        img: "/"

    }   
]



function Menu(){
    const [menu, setMenu] = useState(menuContent)
    return(
        <div>
            {menu.map(item=>(
                <div key={item.name}>
                    <p>{item.name}</p>
                    <p>{item.price || "時價"}</p>
                </div>
            ))}
        </div>
    )
}

const articleContent = "<p>This is an article...</p>"

function Article(){
    const [article, setArticle] = useState(articleContent);
    return <div dangerouslySetInnerHTML={{__html:article}}></div>;
}

function MyPractice3() {
    return (
        <div>
            <h3>重複渲染、條件炫覽、預設值、dangerouslySetInnerHTML</h3>
            <Menu/>
            <Article/>
            <hr></hr>
        </div>
    )
}

export default MyPractice3