/*create grid which will divide div equally among 16 divs*/

const container = document.querySelector("#container");
let gridNumber = 16;

function paintBox (e) {
  this.classList.add("painted");
};

function removeAllChildNodes (parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild)
  }
};

function drawGrid (){
  removeAllChildNodes(container)
  for (let i = 0; i < gridNumber*gridNumber; i++) {
    appendDiv(i);
}};

function appendDiv (id) {
  const div = document.createElement("div");
  div.style.width = `${600/gridNumber}px`
  div.style.height = `${600/gridNumber}px`
  div.classList.toggle("box");
  div.setAttribute('id', `${id}`);        
  div.addEventListener("mouseover", paintBox)
  container.appendChild(div);
};

function newGrid () {
  const coloredBoxes = Array.from(document.querySelectorAll(".painted"));
  coloredBoxes.forEach(coloredBox => {coloredBox.classList.remove("painted")});
  takeNumber = parseInt(prompt("enter the new grid number: "));
  if (takeNumber > 100) {
    gridNumber = 100;
    alert("100 is the maximum")
  }
  else if (takeNumber <= 0) {
    alert("should be more than 0")
  }
  else if (isNaN(takeNumber)) {
    alert("must be a number!")
  }
  else {
    gridNumber = takeNumber
  }
  drawGrid();
}

const newButton = document.querySelector("#newgrid");
newButton.addEventListener("click", newGrid);

drawGrid ();