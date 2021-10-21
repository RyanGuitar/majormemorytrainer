import {elAdd, addClick, importPage} from '../../scripts/helpers.js';

function setOne(){
  let popup = 
    `<div id="Page">
      <div id="Box">
      <div id="Title">1 - Sound</div>
        <br>
        <p>The number <b>1</b> has a single downward stroke like the letter <b>T</b>.
        The sound is <b>t</b><sub>o</sub> and it sounds like <b>d</b><sub>o</sub>.</p>
      </div>
      <div id="controls">
        <button id="back">back</button>
      </div>
    </div>`
          
  elAdd('AppContent', popup);
  addClick('back', () => importPage('sounds1'));
}

export default setOne;