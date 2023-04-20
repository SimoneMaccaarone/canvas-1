console.log('console della canvas');

const myCanvas1 = document.getElementById('my-canvas1');
const myCanvas2 = document.getElementById('my-canvas2');


const ctx1 = myCanvas1.getContext('2d'); //definiamo come vogliamo la tela 2D o 3D
const ctx2 = myCanvas2.getContext('2d');

// ctx.strokeRect(20, 20, 50, 60); // RETTANGOLO --> //(x, y, with, height)
ctx1.fillStyle = getRandomColor();
const backGroundColor = ctx1.fillRect(0,0,500,500);  

for (let i = 0; i < 100; i++) {

    const originX = Math.random() * 500;    //create in this x area
    const originY = Math.random() * 500;    //create in this y area

    const width = Math.random() * 100;
    const height = Math.random() * 100;

    ctx1.fillStyle= getRandomColor();
    ctx1.fillRect(originX, originY, width, height);

}

ctx2.strokeStyle= getRandomColor();
creatCrossWithLine();

function creatCrossWithLine(){
ctx2.moveTo(0,0);
ctx2.lineTo(500,500);
ctx2.stroke();
ctx2.moveTo(0, 500);
ctx2.lineTo(500,0);
ctx2.stroke();
}

function createCircleInMIddleCross(){
  ctx2.beginPath();
  ctx2.arc(95, 50, 40, 0, 2 * Math.PI)
  ctx2.strokeStyle()
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


