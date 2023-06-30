function createGrid() {
  for (let i = 0; i < gridSize; ++i) {
    let line = document.createElement("div");
    line.classList = "line";

    for (let j = 0; j < gridSize; ++j) {
      let box = document.createElement("div");
      box.classList = "box";
      box.style.width = `${96 / gridSize}vh`;
      box.style.height = `${96 / gridSize}vh`;
      box.addEventListener("mouseover", () => {
        box.style.backgroundColor = getRandRGB();
      });
      line.appendChild(box);
    }
    container.appendChild(line);
  }
}

function getRandRGB() {
  const r = Math.random;
  const rgb = 256;
  const color =
    "rgb(" +
    Math.round(r() * rgb) +
    "," +
    Math.round(r() * rgb) +
    "," +
    Math.round(r() * rgb) +
    ")";
  return color;
}

function changeGridSize(grid) {
  const s = prompt("Enter the new grid size");
  if (s > 0) {
    gridSize = s;
  }
  //stylesheet.insertRule(`.box { width: ${96 / gridSize}vh;}`, 0);
  container.innerHTML = "";
  createGrid();
}
function resetGrid() {
  const boxes = Array.from(document.getElementsByClassName("box"));
  for (let i = 0; i < boxes.length; ++i) {
    boxes[i].style.backgroundColor = "white";
  }
}

let gridSize = 16;
const container = document.getElementById("container");
document.getElementById("gsize").addEventListener("click", changeGridSize);
document.getElementById("reset").addEventListener("click", resetGrid);
createGrid();
