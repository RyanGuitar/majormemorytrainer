import {elAdd, addClick, importPage} from '../../scripts/helpers.js';

function setTwo(){
  let popup = 
    `<div id="Page">
      <div id="Box">
        <div id="Title">2 - Sound</div>
        <br>
        <p>The number <b>2</b> has a two downward strokes like the letter <b>n</b>.
        The sound is <b>n</b><sub>o</sub>.</p>
      </div>
      <div id="controls">
        <button id="back">back</button>
      </div>
    </div>`
          
  elAdd('AppContent', popup);
  addClick('back', () => importPage('sounds1'));
}

export default setTwo;