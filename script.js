const MOVE_AMOUNT = 6;

// Select the elements on the page - canvas, shake button
const canvas = document.querySelector('#etch-a-sketch');
const ctx = canvas.getContext('2d');
const shakebtn = document.querySelector('.shake');

// set up our canvas for drawing
const { height, width } = canvas;
let x = Math.floor(Math.random()*width);
let y = Math.floor(Math.random()*height);
ctx.lineJoin = 'round';
ctx.lineCap = 'square';
ctx.lineWidth = MOVE_AMOUNT;

ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x, y);

let hue = 0;
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`

// write a draw function
function draw({ key }) {
    // starting path
    hue += 2;
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`
    ctx.beginPath();
    ctx.moveTo(x, y);
    // listen for arrow keys
    switch(key) {
        case 'ArrowUp':
            y -= MOVE_AMOUNT
            break;
        case 'ArrowDown':
            y += MOVE_AMOUNT
            break;
        case 'ArrowLeft':
            x -= MOVE_AMOUNT
            break;
        case 'ArrowRight':
            x += MOVE_AMOUNT
            break;
        default:
            break;
    }
    ctx.lineTo(x, y);
    ctx.stroke();
}
 
// write a handler for the keys
function handleKey(e){
    if (e.key.includes('Arrow')) {
          e.preventDefault();
          draw({ key: e.key })
          console.log(e.key);
          console.log('Handling Key!');
    }
}

window.addEventListener('keydown', handleKey);

// clear or shake function
function clearCanvas() {
    canvas.classList.add('shake');
    ctx.clearRect(0, 0, width, height);
    canvas.addEventListener('animationend', function() {
        console.log('Animation has ended!');
        canvas.classList.remove('shake');
    },
    { once: true }
    )
}

shakebtn.addEventListener('click', clearCanvas);