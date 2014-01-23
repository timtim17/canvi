/*
* CANVI
* canvi.js
* Timtim Jenkins, 2014
*/

/* canvi Object Creator */
function Canvi(canvasElement){
    this.canvas = canvasElement;
    this.ctx = canvasElement.getContext('2d');

    /* FUNCTION: DRAW A BACKGROUND */
    this.fillBg = function(color){
         this.ctx.fillStyle = color;
         this.ctx.fillRect(0, 0, this.canvas.offsetWidth, this.canvas.offsetHeight);
    }
}