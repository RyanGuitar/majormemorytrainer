import {elAdd, addClick, importPage} from '../../scripts/helpers.js';

function setZero(){
  let popup = 
    `<div id="Page">
      <div id="Box">
        <div id="Title">0 - Sound</div>
        <br>
        <p>When you see the number <b>0</b> think of the word <i>zero</i>.
        The sound <b>z</b><sub>ero</sub> sounds like <b>s</b><sub>o</sub>.</p>
      </div>
      <div id="controls">
        <button id="back">back</button>
      </div>
    </div>`
          
  elAdd('AppContent', popup);
  addClick('back', () => importPage('sounds1'));
}

export default setZero;