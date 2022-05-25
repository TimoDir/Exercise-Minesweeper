// Finish the program
function placeMines(rows, columns, mines) {
  var numLineBreak = rows - 1;
  var lenghtString = (rows * columns) + numLineBreak;
  // Creation of the base of the grid
  var grid = new Array(lenghtString).fill('_');

  // Defined a random function to place mine in the grid
  const random = () => Math.floor(Math.random()*lenghtString);

  // Placing the LineBreaker in our grid
  for (let i = 0; i < numLineBreak; i++) {
    var line = i+1;
    // We want to catch every end of line by multiplying the length of colum + the letter to add the breakline caractere
    var endLine = (columns*line) + i;
    grid[endLine] = '\n';
  };

  // Placing the mine randomly
  while(0 < mines){
    // Storing an random number inside the placeMine
    var placeMine = random();
    // Check if it will not have a conflict with a break line or an already existing mine
    if(grid[placeMine] !== '\n' && grid[placeMine] !== 'x'){
      mines--;
      grid[placeMine] = 'x';
    };
  };

  return grid.join('');
};

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

 //console.log(placeMines(10, 10, 10))
 //placeMines(3, 4, 3)