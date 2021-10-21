import { importPage, elAdd, addClick } from "../scripts/helpers.js";
import imageNum from "../data/convertorData.js";

let clicked = "";
let numberList = "";
let addImages = "";

function setNumberConvertor() {
  numberList = "";
  addImages = "";

  let convertorHTML = `
    <div id="container">
      <div id="header">
          <div id="headerBox">
            <div id="headerText"><div id="numbers">0</div></div>
            <span id="x">X<span>
          </div>
      </div>
        <div id="ConvertorBox">
          <div id="numImages"><p id="desc">Enter 10 digits to see the associated images.</p></div>
          <br>
          <div id="numCheck">0</div>
        </div>
      <div id="controls">
        <button>0</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
      </div>
    </div>`;

  elAdd("AppContent", convertorHTML);
  addClick("controls", updateNumbers);
  addClick("x", () => importPage("menu"));
}

function updateNumbers(e) {
  clicked += e.target.textContent;
  elAdd("numCheck", clicked);
  if (numberList) {
    if (numberList.length > 20) {
      numberList = "";
      addImages = "";
    }
  }
  if (clicked.length == 2) {
    displayImage(getImage());
    if (numberList.length < 20) {
      numberList += clicked + " - ";
    } else {
      numberList += clicked;
    }
    clicked = "";
    elAdd("numbers", numberList);
  }
}

function displayImage(image) {
  addImages += `
    <div id="imageBox">
      <img src=images/${image[0].name}.webp alt=${image[0].name}>
    </div>`;
  elAdd("numImages", addImages);
}

function getImage() {
  return imageNum.filter(({ num }) => num == clicked);
}

export default setNumberConvertor;
