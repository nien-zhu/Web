// import lib from "./lib.js";

/*載入外部模組*/

//載入CSS樣式表
import "./style.css";
//加入標題模組
import title from "./title.js"
//加入列表模組
import list from "./list.js"

/*建立主畫面*/

//加入標題
document.body.appendChild(title);
//加入列表
document.body.appendChild(list);