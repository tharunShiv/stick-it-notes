var itemList = document.getElementById("notes");

itemList.addEventListener("click", removeItem);

let createNote = () => {
  var li = document.createElement("li");
  var a = document.createElement("a");
  var h2 = document.createElement("h2");
  var p = document.createElement("p");
  var ul = document.getElementById("notes");

  var noteTitle = document.getElementById("new-note-title-input").value;
  var noteBody = document.getElementById("new-note-body-input").value;

  let count = Number(window.localStorage.getItem("count"));
  if (!count) {
    window.localStorage.setItem("count", "0");
  }

  window.localStorage.setItem(noteTitle, noteBody);
  count += 1;
  window.localStorage.setItem("count", count);

  for (i = 0; i < count; i++) {
    console.log(window.localStorage.key(i));
  }

  if (!noteTitle || !noteBody) {
    alert("The note Title and Body are necessary");
    return;
  }

  let xButton = document.createElement("button");
  xButton.classList.add("delete");
  let xText = document.createTextNode("X");
  let h2TN = document.createTextNode(noteTitle);
  let pTN = document.createTextNode(noteBody);

  h2.appendChild(h2TN);
  p.appendChild(pTN);
  xButton.appendChild(xText);

  a.appendChild(h2);
  a.appendChild(p);
  a.appendChild(xButton);
  a.setAttribute("href", "#");

  li.appendChild(a);
  ul.appendChild(li);
};

function removeItem(e) {
  //console.log('2');
  if (e.target.classList.contains("delete")) {
    console.log(e);
    if (
      confirm(
        "Are you sure to delete the " +
          e.target.previousElementSibling.innerText +
          " note?"
      )
    ) {
      //grab the parent
      // console.log(e.target.previousSibling.data);
      var li = e.target.parentElement.parentElement;

      itemList.removeChild(li);
    }
  }
}
