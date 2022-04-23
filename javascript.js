//Delete existing grid and draw new grid using current slider value
function newGrid () {
  const coloredBoxes = Array.from(document.querySelectorAll(".painted"));
  coloredBoxes.forEach(coloredBox => {coloredBox.classList.remove("painted")});
  drawGrid(slider.value);
}
function drawGrid (gridNumber){
  removeAllChildNodes(container)
  for (let i = 0; i < gridNumber*gridNumber; i++) {
    appendDiv(i, gridNumber);
}};
function removeAllChildNodes (parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild)
  }
};
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

//is mouse down?
function mouseDown () {
  mouseIsDown = true;
}

function mouseUp () {
  mouseIsDown = false;
}
//If mouse is down Generate random RGB color to paint the box,10% darker each time
function randomRGB (times) {
  const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
  const r = randomBetween(0, 255);
  const g = randomBetween(0, 255);
  const b = randomBetween(0, 255);
  return `rgb(${r-r*times/10},${g-g*times/10},${b-b*times/10})`;
}
function paintBox (e) {
  if (mouseIsDown) 
  {
    this.style.backgroundColor= `${randomRGB(this.dataset.times)}`
    this.dataset.times++;
  };
};
//Change slider value displayed on the page
function changeSliderText (e) {
  sliderText.textContent = `Number of boxes: ${slider.value}`;
}


const container = document.querySelector("#container");

//Add event listener to check if mouse is down.
const body = document.querySelector("body")
body.addEventListener("mousedown", mouseDown)
body.addEventListener("mouseup", mouseUp)
let mouseIsDown = false;

//If mouse is pressed initiate new grid
const slider = document.querySelector("#myRange");
const newButton = document.querySelector("#newgrid");
newButton.addEventListener("click", newGrid);
//Keep track of slider value
const sliderText = document.querySelector("#slidertext")
sliderText.textContent = `Number of boxes: ${slider.value}`;
slider.addEventListener("input", changeSliderText)

newGrid ();

/* Code by: Giorgi Tabatadze 
Written during learning through The Odin Project*/
