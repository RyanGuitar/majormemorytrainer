import { elAdd, addClick, importPage } from "../scripts/helpers.js";

function setIntroduction() {
  const introductionHTML = `<div id="Page">
  <div id="Box">
      <div id="Title">Introduction</div>
      <br>
        <p>The Major Memory System is a memory technique used to remember numbers and ordered lists. 
        The same techniques can be used to remember anything.</p>
      </div>
      <div id="controls">
        <button id="back">back</button>
        <button id="next">next</button>
      </div>
    </div>`;

  elAdd("AppContent", introductionHTML);
  addClick("back", () => importPage("menu"));
  addClick("next", () => importPage("basics"));
}

export default setIntroduction;
