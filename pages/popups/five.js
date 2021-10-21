import {elAdd, addClick, importPage} from '../../scripts/helpers.js';

function setFive(){
  let popup = 
    `<div id="Page">
      <div id="Box">
        <div id="Title">5 - Sound</div>
        <br>
        <p>For the number <b>5</b> look at the back of your left hand (five fingers).
        Now hold your fingers together and stretch out your thumb. See how it forms a <b>L</b>-shape?
        The sound for <b>5</b> is <b>l</b><sub>ow</sub>.</p>
      </div>
      <div id="controls">
        <button id="back">back</button>
      </div>
    </div>`
          
  elAdd('AppContent', popup);
  addClick('back', () => importPage('sounds2'));
}

export default setFive;