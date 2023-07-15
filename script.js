function createGrid() {
  for (let i = 0; i < gridSize; ++i) {
    let line = document.createElement("div");
    line.classList = "line";

    for (let j = 0; j < gridSize; ++j) {
      let box = document.createElement("div");
      box.classList = "box";
      box.style.width = `${64 / gridSize}vh`;
      box.style.height = `${64 / gridSize}vh`;
      box.style.backgroundColor = "#FFFFFF";
      box.addEventListener("mouseover", (e) => {
        let color;
        switch (mode) {
          case "dark":
            let prev_color = e.target.style.backgroundColor;
            color = shadeColor(prev_color, 10);
            break;

          case "color":
            color = getRandRGB();
            break;
          case "pick":
            color = chosen_color;
            break;
        }
        box.style.backgroundColor = color;
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

function shadeColor(color, shade_percent) {
  color = color.split("(")[1].split(")")[0].split(",");

  let R = parseInt(color[0]);
  let G = parseInt(color[1]);
  let B = parseInt(color[2]);

  //var R = parseInt(color.substring(1, 3), 16);
  //var G = parseInt(color.substring(3, 5), 16);
  //var B = parseInt(color.substring(5, 7), 16);
  console.log(R, G, B);

  R = parseInt(R - (255 * shade_percent) / 100);
  G = parseInt(G - (255 * shade_percent) / 100);
  B = parseInt(B - (255 * shade_percent) / 100);
  console.log(R, G, B);

  R = Math.round(R > 0 ? R : 0);
  G = Math.round(G > 0 ? G : 0);
  B = Math.round(B > 0 ? B : 0);
  console.log(R, G, B);

  var RR = R.toString(16).length == 1 ? "0" + R.toString(16) : R.toString(16);
  var GG = G.toString(16).length == 1 ? "0" + G.toString(16) : G.toString(16);
  var BB = B.toString(16).length == 1 ? "0" + B.toString(16) : B.toString(16);

  return "#" + RR + GG + BB;
}

function changeGridSize() {
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
    boxes[i].style.backgroundColor = "#FFFFFF";
  }
}

let gridSize = 16;
let mode = "dark";
let chosen_color = "#FFFFFF";

const container = document.getElementById("container");
const size_but = document.getElementById("gsize");
size_but.addEventListener("click", changeGridSize);
const clear_but = document.getElementById("reset");
clear_but.addEventListener("click", resetGrid);
const dark_but = document.getElementById("dark");
dark_but.addEventListener("click", () => {
  mode = "dark";
});

const color_but = document.getElementById("color");
color_but.addEventListener("click", () => {
  mode = "color";
});

document.getElementById("pick").addEventListener("input", (e) => {
  mode = "pick";
  chosen_color = e.target.value;
});

createGrid();
