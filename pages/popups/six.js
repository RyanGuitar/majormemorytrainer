import {elAdd, addClick, importPage} from '../../scripts/helpers.js';

function setSix(){
  let popup = 
    `<div id="Page">
      <div id="Box">
        <div id="Title">6 - Sound</div>
        <br>
        <p>For the number <b>6</b> we need to get a little more creative. If you look at the number in a mirror it looks a little like a cursive <b>j</b>.
        The sounds are <b>j</b><sub>ump</sub> and it sounds like <b>ch</b><sub>urch</sub> and <b>sh</b><sub>e</sub>.</p>
      </div>
      <div id="controls">
        <button id="back">back</button>
      </div>
    </div>`
          
  elAdd('AppContent', popup);
  addClick('back', () => importPage('sounds2'));
}

export default setSix;