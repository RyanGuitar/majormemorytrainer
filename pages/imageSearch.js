import{elAdd,getId,addClick,importPage}from"../scripts/helpers.js";import imageNum from"../data/convertorData.js";let dataList="",start=!0;function setImageSearch(){elAdd("AppContent",'\n    <div id="header">\n      <div id="headerBox">\n        <div id="headerText">\n          <span id="searchBar">0</span>\n        </div>\n        <span id="x">X<span>\n      </div>\n    </div>\n    <div id="ListBox">\n      <div id="list"></div>\n    </div>\n    <div id="controls">\n      <button>0</button>\n      <button>1</button>\n      <button>2</button>\n      <button>3</button>\n      <button>4</button>\n      <button>5</button>\n      <button>6</button>\n      <button>7</button>\n      <button>8</button>\n      <button>9</button>\n    </div>'),addClick("x",()=>importPage("menu")),addClick("controls",checkInput),setCards(imageNum),elAdd("list",dataList)}function checkInput(t){let n=t.target.textContent;start?(elAdd("searchBar",n),imagesFilter(),start=!1):checkInputLength(n)}function checkInputLength(t){1==getInputLength()?elAdd("searchBar",getInput()+t):elAdd("searchBar",t),imagesFilter()}function getInputLength(){return getInput().length}function getInput(){return getId("searchBar").textContent}function setCards(t){return dataList="",t.forEach(({name:t,num:n})=>{dataList+=`\n        <div class="card">\n          <div class="callSign">\n            <div>${n}</div>\n            <div>${t}</div>\n          </div>\n          <div class="imageContainer">\n            <img src="images/${t}.webp" alt=${t} loading="lazy">\n          </div>\n          <div class="description"></div>\n        </div>`}),dataList}function checkSearch({num:t}){let n=getId("searchBar");return t.includes(n.textContent)}function imagesFilter(){let t=setCards(imageNum.filter(checkSearch));elAdd("list",t)}export default setImageSearch;