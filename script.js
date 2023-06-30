function createGrid() {
  const container = document.getElementById("container");
  for (let i = 0; i < 16; ++i) {
    let line = document.createElement("div");
    line.classList = "line";

    for (let j = 0; j < 16; ++j) {
      let box = document.createElement("div");
      box.classList = "box";
      box.style.width = `${96 / 16}vh`;
      box.style.height = `${96 / 16}vh`;
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
}

createGrid();
