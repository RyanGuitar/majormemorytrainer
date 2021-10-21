import { elAdd, addClick, importPage } from "./scripts/helpers.js";
const landingHTML =
  '<div id="Page">\n    <div id="Box">\n      <div id="Title">Major Memory Trainer</div>\n      <br>\n      <div id="SubTitle">click to start learning</div>\n    </div>\n  </div>';
elAdd("AppContent", landingHTML), addClick("Box", () => importPage("menu"));
