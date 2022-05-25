// Finish the program
function placeMines(rows, columns, mines) {
  var numLineBreak = rows - 1;
  var numMines = mines;
  var lenghtString = (rows * columns) + numLineBreak;
  // Creation of the base of the grid
  var grid = new Array(lenghtString).fill('_');
  return grid.join('');
}

// export the function to the test unit
module.exports = placeMines;

// output test
const log = msg => {
  const divElement = document.createElement("pre");
  divElement.innerText = msg;
  document.getElementById("log").append(divElement);
};
// Try uncommenting this
// log(placeMines(2, 4, 3))

// console.log(placeMines(2, 4, 3))