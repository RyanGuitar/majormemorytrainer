function elAdd(el, add) {
  return (getId(el).innerHTML = add);
}

function getId(id) {
  return document.getElementById(id);
}

function addClick(id, fn) {
  getId(id).addEventListener("click", fn);
}

function importPage(page) {
  import(`../pages/${page}.js`)
    .then((setPage) => {
      setPage.default();
    })
    .catch((err) => err.message);
}

function importPopup(popup) {
  import(`../pages/popups/${popup}.js`)
    .then((setPopup) => {
      setPopup.default();
    })
    .catch((err) => err.message);
}

function addText(el, add) {
  return (getId(el).textContent = add);
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export { elAdd, getId, addClick, importPage, importPopup, addText, shuffle };
