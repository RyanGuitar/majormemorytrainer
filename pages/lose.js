import { elAdd, addClick, importPage } from "../scripts/helpers.js";

function setLose() {
  const loseHTML = `<div id="Page">
      <div id="Box">
        <div id="Title">You Lose!!</div>
        <br>
        <p>Click Back to return to main menu or Continue to play again.</p>
      </div>
      <div id="controls">
        <button id="back">back</button>
        <button id="continue">Play</button>
      </div>
    </div>`;

  elAdd("AppContent", loseHTML);
  addClick("back", () => importPage("menu"));
  addClick("continue", () => importPage("rainGame"));
}

export default setLose;
