
var container = document.getElementById("grid-container");
let column = 5;
let grid_dimensions = column * column;
for (let i = grid_dimensions; i > 0; i--) {
    var newDiv = document.createElement("div");
    newDiv.classList.add("grid-item");
    container.appendChild(newDiv);
}

var squares = document.querySelectorAll(".grid-item");
// finding the width of squares
// 490,000 is 700x700
let temp = 490000 / grid_dimensions;
let side = (Math.sqrt(temp) - 2);
let sideInPixels = side + "px";
squares.forEach(function(square) {
    square.style.minWidth = sideInPixels;
});