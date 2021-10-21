import { elAdd, getId, addClick, importPage } from "../scripts/helpers.js";
import imageNum from "../data/convertorData.js";

let dataList = "";
let start = true;

function setImageSearch() {
  let searchHTML = `
    <div id="header">
      <div id="headerBox">
        <div id="headerText">
          <span id="searchBar">0</span>
        </div>
        <span id="x">X<span>
      </div>
    </div>
    <div id="ListBox">
      <div id="list"></div>
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
    </div>`;

  elAdd("AppContent", searchHTML);
  addClick("x", () => importPage("menu"));
  addClick("controls", checkInput);
  setCards(imageNum);
  elAdd("list", dataList);
}

function checkInput(e) {
  let newInput = e.target.textContent;
  if (start) {
    elAdd("searchBar", newInput);
    imagesFilter();
    start = false;
  } else {
    checkInputLength(newInput);
  }
}

function checkInputLength(input) {
  if (getInputLength() == 1) {
    elAdd("searchBar", getInput() + input);
  } else {
    elAdd("searchBar", input);
  }
  imagesFilter();
}

function getInputLength() {
  return getInput().length;
}

function getInput() {
  return getId("searchBar").textContent;
}

function setCards(cardData) {
  dataList = "";
  cardData.forEach(({ name, num }) => {
    dataList += `
        <div class="card">
          <div class="callSign">
            <div>${num}</div>
            <div>${name}</div>
          </div>
          <div class="imageContainer">
            <img src="images/${name}.webp" alt=${name} loading="lazy">
          </div>
          <div class="description"></div>
        </div>`;
  });
  return dataList;
}

function checkSearch({ num }) {
  let input = getId("searchBar");
  return num.includes(input.textContent);
}

function imagesFilter() {
  let list = setCards(imageNum.filter(checkSearch));
  elAdd("list", list);
}

export default setImageSearch;
