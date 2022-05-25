// Finish the program
function placeMines(rows, columns, mines) {
  return "x_x_\n__x_";
}

// output test
const log = msg => {
  const divElement = document.createElement("pre");
  divElement.innerText = msg;
  document.getElementById("log").append(divElement);
};
// Try uncommenting this
// log(placeMines(2, 4, 3))