const etch = document.querySelector(".etch-container");
let rows = 16;

const drawBoard = (dim) => {
    const cellDim = 960 / rows;
    const newRow = document.createElement("div");
    const newCell = document.createElement("div");
    newRow.setAttribute("class", "etch-row");
    newCell.setAttribute("class", "etch-cell");
    for (let i = 0; i < rows; i++)
        etch.appendChild(newRow.cloneNode(true)); 
    for (let i = 0; i < rows; i++)
        document.querySelectorAll(".etch-row").forEach(element => element.appendChild(newCell.cloneNode(true)));
    document.querySelectorAll(".etch-cell").forEach(element => element.setAttribute("style", `width: ${cellDim}px; height: ${cellDim}px`));
}

window.addEventListener("load", drawBoard(rows));