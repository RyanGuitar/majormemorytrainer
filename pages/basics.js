import {elAdd, addClick, importPage} from '../scripts/helpers.js';

function setBasics(){
  
  const basicsHTML =
    `<div id="Page">
      <div id="Box">
        <div id="Title">The Basics</div>
        <br>
          <p>The Major Memory System works by giving a digit a specific sound.
          These sounds are then combined with vowels to make up a word. 
          The word will be something you can picture in your mind, like a person, animal or object.
          It is these pictures that you will use to remember numbers.</p>
      </div>
      <div id="controls">
        <button id="back">back</button>
        <button id="next">next</button>
      </div>
    </div>`
  
elAdd('AppContent', basicsHTML);
addClick('back', () => importPage('menu'));
addClick('next', () => importPage('sounds1'));
}



export default setBasics;