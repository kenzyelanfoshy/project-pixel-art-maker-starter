/*
the colour of function is colorpicker
*/
function changeColor() {
    const color = document.getElementById("colorPicker").value;
    this.style.background = color;
}


/*
the width and height of the table from inputs
*/
function makeGrid() {
    const gridHeight = document.getElementById("input_height").value;
    const gridWidth = document.getElementById("input_width").value;
    const pixelCanvas = document.getElementById("pixel_canvas"); 
    pixelCanvas.innerText=""; // empty table   
    
    for (let h=0; h<gridHeight; ++h) {
        const row = pixelCanvas.insertRow(-1); // insert new row at the last position
        for (let w=0; w<gridWidth; ++w) {
            const cell = row.insertCell(-1); //insert new cell at the last position
            cell.onclick = changeColor;
        }
    }
    event.preventDefault();
}
