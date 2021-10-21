import {elAdd, addClick, importPage} from '../../scripts/helpers.js';

function setNine(){
  let popup = 
    `<div id="Page">
      <div id="Box">
        <div id="Title">9 - Sound</div>
        <br>
        <p>The number <b>9</b> when viewed in a mirror looks like the letter <b>p</b>.
        The sounds are <b>p</b><sub>ut</sub> and it sounds like <b>b</b><sub>ook</sub>.</p>
        <br>
        <p>Weldone! This is all the sounds we will need.</p>
      </div>
      <div id="controls">
        <button id="back">back</button>
      </div>
    </div>`
          
  elAdd('AppContent', popup);
  addClick('back', () => importPage('sounds2'));
}

export default setNine;