console.log('ciao');

const myCanvas = document.getElementById('my-canvas');

const ctx = myCanvas.getContext('2d');


// ctx.strokeRect(20, 20, 50, 60); // RETTANGOLO --> //(x, y, with, height) //(cordinataX, cordinataY, Lunghezza, Altezza)

for (let i = 0; i < 100; i++) {

    const originX = Math.random() * 600;
    const originY = Math.random() * 600;

    const width = Math.random() * 100;
    const height = Math.random() * 100;

    ctx.strokeStyle= getRandomColor();
    ctx.strokeRect(originX, originY, width, height);
}
function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color; 
  }