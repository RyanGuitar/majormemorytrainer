import {elAdd, addClick, importPage} from '../../scripts/helpers.js';

function setSeven(){
  let popup = 
    `<div id="Page">
      <div id="Box">
        <div id="Title">7 - Sound</div>
        <br>
        <p>For the number <b>7</b> we will need to rely on our creativity once more.
        If you look at the letter <b>k</b> see how it is made up of two <b>7</b>s? Can you see it?
        The sounds are <b>k</b><sub>ick</sub> and <b>g</b><sub>ood</sub>.</p>
      </div>
      <div id="controls">
        <button id="back">back</button>
      </div>
    </div>`
          
  elAdd('AppContent', popup);
  addClick('back', () => importPage('sounds2'));
}

export default setSeven;