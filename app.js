console.log('ciao');

const myCanvas = document.getElementById('my-canvas');

const ctx = myCanvas.getContext('2d');


ctx.fillRect(20, 20, 50, 60); // RETTANGOLO --> //(x, y, with, height) //(cordinataX, cordinataY, Lunghezza, Altezza)

for (let i = 0; i < 100; i++) {

    const originX = Math.random() * 600;
    const originY = Math.random() * 600;

    const width = Math.random() * 100;
    const height = Math.random() * 100;

    ctx.fillRect(originX, originY, width, height);
}