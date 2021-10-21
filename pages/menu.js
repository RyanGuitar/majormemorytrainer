import { elAdd, addClick, importPage } from "../scripts/helpers.js";

function setMenu() {
  const menuHTML = `<div id="Page">
      <div id="Box">
        <div id="Heading" style="color:white;font-size:2rem">Main Menu</div>
        <br>
        <div id="introduction" class="SubTitle">Introduction</div>
        <div id="basics" class="SubTitle">The Basics</div>
        <div id="sounds1" class="SubTitle">Sounds 0 - 4</div>
        <div id="sounds2" class="SubTitle">Sounds 5 - 9</div>
        <div id="rainGame" class="SubTitle">Raining Sounds</div>
        <div id="numberConvertor" class="SubTitle">Number Convertor</div>
        <div id="imageSearch" class="SubTitle">Image Search</div>
        <div id="gameMenu" class="SubTitle">Major Game</div>
      </div>
      </div>`;

  elAdd("AppContent", menuHTML);
  addClick("introduction", () => importPage("introduction"));
  addClick("basics", () => importPage("basics"));
  addClick("sounds1", () => importPage("sounds1"));
  addClick("sounds2", () => importPage("sounds2"));
  addClick("rainGame", () => importPage("rainGame"));
  addClick("numberConvertor", () => importPage("numberConvertor"));
  addClick("gameMenu", () => importPage("majorGame"));
  addClick("imageSearch", () => importPage("imageSearch"));
}

export default setMenu;
