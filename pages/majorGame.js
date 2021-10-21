import {
  shuffle,
  addText,
  getId,
  addClick,
  elAdd,
  importPage,
} from "../scripts/helpers.js";
import images from "../data/majorData.js";

let filteredImages = "";
let popped = "";
let filteredCopy = [];
let shuffledSet = [];
let imagesHTML = "";
let mode = true;
let wrong = "";
let step = 0;

function setMajorGame() {
  const majorHTML = `<div id="container">
      <div id="header">
        <div id="headerBox">
          <div id="headerText">0</div>
          <span id="x">X<span>
        </div>
      </div>
      <div id="wrongBox" class="hide">
        <div id="wrong">Wrong</div>
      </div>
      <div id="images"></div>
      <div id="controls">
        <button id="back">Back</button>
        <button id="mode">Mode</button>
        <button id="next">Next</button>
      </div>
    </div>`;

  elAdd("AppContent", majorHTML);

  gameInit();
  addClick("x", () => importPage("menu"));
}

function gameInit() {
  addImageSet();
  selectImage();
  addClick("controls", (e) => changeSet(e.target.id));
  addClick("images", checkMatch);
}

function addImageSet() {
  imagesHTML = "";
  setFilteredImages();
  filteredImages.forEach(({ name, num }) => {
    imagesHTML += `<img src='images/${name}.webp' class="stickers ${num}" alt='${name}' loading="lazy">`;
  });
  elAdd("images", imagesHTML);
  copyShuffle();
}

function changeMode() {
  if (mode) {
    getId("headerText").textContent = popped.name;
    mode = false;
  } else {
    getId("headerText").textContent = popped.num;
    mode = true;
  }
}

function checkMatch(e) {
  if (e.target.tagName == "IMG") {
    let clicked = e.target.classList[1];
    if (clicked == popped.num) {
      e.target.classList.add("fade");
      selectImage();
    } else {
      toggleWrong();
      wrong = setTimeout(toggleWrong, 1000);
    }
  }
}

function changeSet(pressed) {
  if (pressed == "back") {
    stepDown();
  }
  if (pressed == "next") {
    stepUp();
  }
  if (pressed == "mode") {
    changeMode();
  }
}

function stepUp() {
  ++step;
  if (step == 10) {
    step = 0;
  }
  addImageSet();
  selectImage();
}

function stepDown() {
  --step;
  if (step == -1) {
    step = 9;
  }
  addImageSet();
  selectImage();
}

function selectImage() {
  if (shuffledSet.length) {
    popped = shuffledSet.pop();
    if (mode) {
      addText("headerText", popped.num);
    } else {
      addText("headerText", popped.name);
    }
  } else {
    stepUp();
  }
}

function setFilteredImages() {
  filteredImages = images.filter(({ type }) => type == step);
}

function copyShuffle() {
  filteredCopy = [...filteredImages];
  shuffledSet = shuffle(filteredCopy);
}

function toggleWrong() {
  getId("wrongBox").classList.toggle("hide");
  clearTimeout(wrong);
}

export default setMajorGame;