console.log('console della canvas');

const myCanvas = document.getElementById('my-canvas'); 

const ctx = myCanvas.getContext('2d'); //definiamo come vogliamo la tela 2D o 3D


// ctx.strokeRect(20, 20, 50, 60); // RETTANGOLO --> //(x, y, with, height)

for (let i = 0; i < 100; i++) {

    const originX = Math.random() * 500;    //create in this x area
    const originY = Math.random() * 500;    //create in this y area

    const width = Math.random() * 100;
    const height = Math.random() * 100;

    ctx.fillStyle= getRandomColor();
    ctx.fillRect(originX, originY, width, height);
}
function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color; 
  }


  console.log((Math.random()));


