// Finish the program
function placeMines(rows, columns, mines) {
    const numLineBreak = rows - 1;
    const lenghtString = (rows * columns) + numLineBreak;
    // Creation of the base of the grid
    const grid = new Array(lenghtString).fill('_');
  
    // Defined a random function to place mine in the grid
    const random = () => Math.floor(Math.random()*lenghtString);
  
    // Placing the LineBreaker in our grid
    for (let i = 0; i < numLineBreak; i++) {
      const line = i+1;
      // We want to catch every end of line by multiplying the length of colum + the letter to add the breakline caractere
      const endLine = (columns*line) + i;
      grid[endLine] = '\n';
    };
  
    // Placing the mine randomly
    while(0 < mines){
      // Storing an random number inside the placeMine
      const placeMine = random();
      // Check if it will not have a conflict with a break line or an already existing mine
      if(grid[placeMine] !== '\n' && grid[placeMine] !== 'x'){
        mines--;
        grid[placeMine] = 'x';
      };
    };
  
    // returning the string grid by joining the array with the mine place!
    return grid.join('');
  };
  
  // export the function to the test unit
  module.exports = placeMines;