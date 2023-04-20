const myCanvas = document.getElementById('my-canvas');
const ctx = myCanvas.getContext('2d');


//--- Creation Point/pixel
const point ={
    x: 300,
    y:300
}

setInterval(() => {
    
    const randomX = (Math.random()*4)-2;
    const randomY = (Math.random()*4)-2;


    ctx.fillStyle='red' // pennarello rosso
    ctx.fillRect(point.x,point.y, 2,2);

    point.x += randomX;
    point.y += randomY;
    
}, 100);
 
for (let i = 0; i < ; i++) {

    
}

// function getRandomColorRGB(){
//     const red = Math.floor(Math.random()* 256);
//     const green = Math.floor(Math.random()* 256);
//     const blue = Math.floor(Math.random()* 256);
//     const alpha = Math.random();
//     ctx.strokeStyle = 
//   }