const etch = document.querySelector(".etch-container");
const newBoard = document.querySelector("form");
const numInput = document.querySelector("input[type=number]");
let rows = 16;

const drawBoard = (dim) => {
    etch.innerHTML = "";
    const cellDim = 960 / dim;
    const newRow = document.createElement("div");
    const newCell = document.createElement("div");
    newRow.setAttribute("class", "etch-row");
    newCell.setAttribute("class", "etch-cell");
    for (let i = 0; i < dim; i++)
        etch.appendChild(newRow.cloneNode(true)); 
    for (let i = 0; i < dim; i++)
        document.querySelectorAll(".etch-row").forEach(element => element.appendChild(newCell.cloneNode(true)));
    document.querySelectorAll(".etch-cell").forEach(element => element.setAttribute("style", `width: ${cellDim}px; height: ${cellDim}px`));
}

newBoard.addEventListener("submit", event => {
    event.preventDefault();
    drawBoard(numInput.value);
});

window.addEventListener("load", drawBoard(rows));