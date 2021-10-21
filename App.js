import { elAdd, addClick, importPage } from "./scripts/helpers.js";

const landingHTML = `<div id="Page">
    <div id="Box">
      <div id="Title">Major Memory Trainer</div>
      <br>
      <div id="SubTitle">click to start learning</div>
    </div>
  </div>`;

elAdd("AppContent", landingHTML);
addClick("Box", () => importPage("menu"));
