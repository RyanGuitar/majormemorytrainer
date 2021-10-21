import {
  elAdd,
  addClick,
  importPage,
  importPopup,
  getId
} from "../scripts/helpers.js";

function setSounds1() {
  const sounds1HTML = `<div id="Page">
      <div id="Box">
        <div id="Title" class="tableTitle">Sounds 0 - 4</div>
        <br>
        <div id="TextBox">
        <p>We will start with the first 5 sounds: 0 - 4. The important thing to note here is that we are working with the sounds of words and not the spelling.         
        So the sound will be given like <b>z</b> <sub>ero</sub> which means the z-sound in the word zero.</p>
        <br>
        </div>
        <br>
      <table id="table">
         <tr>
           <th id="digits">Digits</th>
           <th colspan="2" id="sound">Sounds</th>
         </tr>
         <tr>
           <td><button id="zero" class="tableBtn">0</button></td>
           <td width="25vw"><b>s</b> <sub>o</sub></td>
           <td width="25vw"><b>z</b> <sub>ero</sub></td>
        </tr>
        <tr>
          <td><button id="one" class="tableBtn">1</button></td>
          <td><b>t</b> <sub>o</sub></td>
          <td><b>d</b> <sub>o</sub></td>
        </tr>
        <tr>
          <td><button id="two" class="tableBtn">2</button></td>
          <td colspan="2"><b>n</b> <sub>o</sub></td>
        </tr>
        <tr>
          <td><button id="three" class="tableBtn">3</button></td>
          <td colspan="2"><b>m</b> <sub>e</sub></td>
        </tr>
        <tr>
          <td><button id="four" class="tableBtn">4</button></td>
          <td colspan="2"><b>r</b> <sub>ow</sub></td>
        </tr>
      </table>
      
          <div id="controls">
            <button id="back">back</button>
            <p>Click on a number for more information</p>
            <button id="next">next</button>  
          </div>
        </div>
      </div>`;

  function getRow(e) {
    let number = e.target.tagName;
    if(number == 'BUTTON'){
      importPopup(e.target.id);
    } else return;
  }

  elAdd("AppContent", sounds1HTML);
  addClick("table", (e) => getRow(e));
  addClick("back", () => importPage("menu"));
  addClick("next", () => importPage("sounds2"));
}

export default setSounds1;