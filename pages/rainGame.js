import { addClick, elAdd, getId, importPage } from "../scripts/helpers.js";
import rainData from "../data/rainData.js";

let score = 0;
let time = 2000;
let sound = "";
let timer = "";
let wrong = "";
let speed = "slow";

function setRainGame() {
  time = 2000;
  speed = "slow";
  score = 0;

  let rainGameHTML = `<div id="container">
    <div id="header">
      <div id="headerBox">
        <div id="headerText"><span id="newScore">0</span></div>
        <span id="x">X<span>
      </div>
    </div>
    <div id="sounds"></div>
    <div id="wrongBox" class="hide">
      <div id="wrong">Wrong</div>
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

  elAdd("AppContent", rainGameHTML);
  addClick("x", returnToMenu);
  addClick("controls", checkSound);
  addToSoundArray();
}

function returnToMenu() {
  clearTimeout(timer);
  importPage("menu");
}

function removeSound() {
  sound[sound.length - 1].remove();
}

function toggleWrong() {
  getId("wrongBox").classList.toggle("hide");
  clearTimeout(wrong);
}

function checkSound(e) {
  sound = getId("sounds").children;
  if (sound[sound.length - 1].className[0] == e.target.textContent) {
    removeSound();
    score = score + 10;
    if (score == 200) {
      speed = "medium";
      time = 1500;
    }
    if (score == 400) {
      speed = "fast";
      time = 1000;
    }
    elAdd("newScore", score);
  } else {
    score = score - 10;
    elAdd("newScore", score);
    toggleWrong();
    let wrong = setTimeout(toggleWrong, 1000);
  }
}

function lose() {
  return importPage("lose");
}

function checkHeight() {
  if (getId("sounds").offsetHeight > window.innerHeight - 50) {
    clearTimeout(timer);
    lose();
  } else {
    timer = setTimeout(addToSoundArray, time);
  }
}

function addToSoundArray() {
  checkHeight();
  let randomSound = Math.floor(Math.random() * 16);
  let position = Math.floor(Math.random() * 90);
  let addedSounds = document.getElementById("sounds").innerHTML;
  let addSound = `<div class='${rainData[randomSound][1]}' style="margin-left:${position}%;">${rainData[randomSound][0]}</div>`;
  let soundGroup = addSound + addedSounds;
  elAdd("sounds", soundGroup);
  rainSpeed(speed);
}

function rainSpeed(speed) {
  let newSound = getId("sounds").children;
  newSound[0].classList.add(speed);
}

export default setRainGame;