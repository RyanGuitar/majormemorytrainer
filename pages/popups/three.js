import {elAdd, addClick, importPage} from '../../scripts/helpers.js';

function setThree(){
  let popup = 
    `<div id="Page">
      <div id="Box">
        <div id="Title">3 - Sound</div>
        <br>
        <p>The number <b>3</b> turned on its side looks likes the letter <b>m</b>.
        The sound is <b>m</b><sub>e</sub>.</p>
      </div>
      <div id="controls">
        <button id="back">back</button>
      </div>
    </div>`
          
  elAdd('AppContent', popup);
  addClick('back', () => importPage('sounds1'));
}

export default setThree;