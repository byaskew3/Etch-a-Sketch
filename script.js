// Select the elements on the page - canvas, shake button
const canvas = document.getElementById('etch-a-sketch');
const ctx = canvas.getContext('2d');
const shake = document.getElementsByClassName('shake');

// set up our canvas for drawing
const { width, height } = canvas;
console.log(width, height)
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;

// write a draw function
ctx.beginPath();
ctx.moveTo(20, 20);
ctx.lineTo(200,200);
ctx.stroke();
 
// write a handler for the keys

// clear or shake function

// listen for arrow keys