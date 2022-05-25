// Finish the program
function placeMines(rows, columns, mines) {
  var numLineBreak = rows - 1;
  var numMines = mines;
  var lenghtString = (rows * columns) + numLineBreak;
  // Creation of the base of the grid
  var grid = new Array(lenghtString).fill('_');
  console.log(lenghtString)
  // Defined a random function to place mine in the grid
  const random = (lenghtString) => Math.floor(Math.random()*lenghtString);

  // Placing the LineBreaker in our grid
  for (let index = 0; index < numLineBreak; index++) {
    var line = index+1;
    var length = (columns*line) + index;
    grid[length] = '\n';
    //console.log(line)
    //console.log(length)
  };

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

 //console.log(placeMines(5, 5, 5))
 //placeMines(3, 4, 3)