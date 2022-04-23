/*create grid which will divide div equally among 16 divs*/

const container = document.querySelector("#container");

function paintBox (e) {
  this.classList.add("painted");
};

function removeAllChildNodes (parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild)
  }
};

function drawGrid (gridNumber){
  removeAllChildNodes(container)
  for (let i = 0; i < gridNumber*gridNumber; i++) {
    appendDiv(i, gridNumber);
}};

function appendDiv (id, gridNumber) {
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
  drawGrid(slider.value);
}



const slider = document.querySelector("#myRange");
const newButton = document.querySelector("#newgrid");
newButton.addEventListener("click", newGrid);

const sliderText = document.querySelector("#slidertext")
sliderText.textContent = `Number of boxes: ${slider.value}`;
slider.addEventListener("input", changeSliderText)

function changeSliderText (e) {
  sliderText.textContent = `Number of boxes: ${slider.value}`;
}

drawGrid (16);