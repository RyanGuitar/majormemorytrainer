import {elAdd, addClick, importPage} from '../../scripts/helpers.js';

function setEight(){
  let popup = 
    `<div id="Page">
      <div id="Box">
        <div id="Title">8 - Sound</div>
        <br>
        <p>The number <b>8</b> is like our cursive friend number 6. 
        Notice how the number looks like a cursive <b>f</b>. 
        The sounds are <b>f</b><sub>ee</sub> and <b>v</b><sub>ictor</sub>.
      </div>
      <div id="controls">
        <button id="back">back</button>
      </div>
    </div>`
          
  elAdd('AppContent', popup);
  addClick('back', () => importPage('sounds2'));
}

export default setEight;