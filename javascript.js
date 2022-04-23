/*create grid which will divide div equally among 16 divs*/

const container = document.querySelector("#container");

function randomRGB (times) {
  const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
  const r = randomBetween(0, 255);
  const g = randomBetween(0, 255);
  const b = randomBetween(0, 255);
  return `rgb(${r-r*times/10},${g-g*times/10},${b-b*times/10})`;
}

function paintBox (e) {
  this.style.backgroundColor= `${randomRGB(this.dataset.times)}`
  this.dataset.times++;
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
  div.setAttribute("data-times", 0);
  div.addEventListener("mouseover", paintBox)
  container.appendChild(div);
};

function newGrid () {
  const coloredBoxes = Array.from(document.querySelectorAll(".painted"));
  coloredBoxes.forEach(coloredBox => {coloredBox.classList.remove("painted")});
  drawGrid(slider.value);
}

function changeSliderText (e) {
  sliderText.textContent = `Number of boxes: ${slider.value}`;
}


const slider = document.querySelector("#myRange");
const newButton = document.querySelector("#newgrid");
newButton.addEventListener("click", newGrid);

const sliderText = document.querySelector("#slidertext")
sliderText.textContent = `Number of boxes: ${slider.value}`;
slider.addEventListener("input", changeSliderText)


drawGrid (slider.value);