import {elAdd, addClick, importPage} from '../../scripts/helpers.js';

function setFour(){
  let popup = 
    `<div id="Page">
      <div id="Box">
        <div id="Title">4 - Sound</div>
        <br>
        <p>When you think of the number <b>4</b> then think of the word <i>four</i>.
        The fourth letter of the word <i>four</i> is <b>r</b>.
        The sound is <b>r</b><sub>ow</sub>.</p>
      </div>
      <div id="controls">
        <button id="back">back</button>
      </div>
    </div>`
          
  elAdd('AppContent', popup);
  addClick('back', () => importPage('sounds1'));
}

export default setFour;