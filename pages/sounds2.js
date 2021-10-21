import {
  elAdd,
  addClick,
  importPage,
  importPopup,
} from "../scripts/helpers.js";

function setSounds2() {
  const sounds2HTML = `<div id="Page">
    <div id="Box">
      <div id="Title" class="tableTitle">Sounds 5 - 9</div>
        <br>
        <div id="TextBox">
        <p>We will now do the last 5 numbers 5 - 9. 
        And then we can get to the fun part - The Raining Sounds Game!</p>
        </div>
        <br>
      <table id="table">
         <tr>
           <th id="digits">Digit</th>
           <th colspan="3" id="sound">Sounds</th>
         </tr>
         <tr>
           <td><button id="five" class="tableBtn">5</button></td>
           <td colspan="3"><b>l</b> <sub>ow</sub></td>
        </tr>
        <tr>
          <td><button id="six" class="tableBtn">6</button></td>
          <td width="30%"><b>j</b> <sub>ump</sub></td>
          <td width="30%"><b>ch</b> <sub>urch</sub></td>
          <td width="30%"><b>sh</b> <sub>e</sub></td>
        </tr>
        <tr>
          <td><button id="seven" class="tableBtn">7</button></td>
          <td colspan="1"><b>k</b> <sub>ick</sub></td>
          <td colspan="2"><b>g</b> <sub>ood</sub></td>
        </tr>
        <tr>
          <td><button id="eight" class="tableBtn">8</button></td>
           <td colspan="1"><b>f</b> <sub>ee</sub></td>
           <td colspan="2"><b>v</b> <sub>ictor</sub></td>
        </tr>
        <tr>
          <td><button id="nine" class="tableBtn">9</button></td>
          <td colspan="1"><b>p</b> <sub>ut</sub></td>
          <td colspan="2"><b>b</b> <sub>ook</sub></td>
        </tr>
      </table>
        <div id="controls">
           <button id="back">back</button>
           <button id="play">play</button>
        </div>
        </div>
      <div>`;

  function getRow(e) {
    let number = e.target.tagName;
    if (number == "BUTTON") {
      importPopup(e.target.id);
    } else return;
  }

  elAdd("AppContent", sounds2HTML);
  addClick("table", (e) => getRow(e));
  addClick("back", () => importPage("sounds1"));
  addClick("play", () => importPage("rainGame"));
}

export default setSounds2;
