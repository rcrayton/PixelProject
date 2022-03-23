//DOM Elements -- elements from the HTML that need to be manipulated by the JS
// Select color input
const colorPicker= document.getElementById("colorPicker");
// Select size input
const rowNumber = document.getElementById("inputHeight");
const columnNumber = document.getElementById("inputWidth");
const pixelCanvas = document.getElementById("pixelCanvas");
const grid = document.getElementById("sizePicker");

// Creation of the actual grid table
grid.addEventListener("submit", function(event){
    event.preventDefault();
    makeGrid();
});
//Print the color in the grid when color is chosen
pixelCanvas.addEventListener('click', function(event){
    event.target.style.backgroundColor = colorPicker.value;
});


function makeGrid() {
   for (let i = 0; i < rowNumber.value; i++) {
       const row = pixelCanvas.insertRow(0);
       for (let j = 0; j < columnNumber.value; j++){
           row.insertCell(0);       
        }
   }

// Your code goes here!


}
