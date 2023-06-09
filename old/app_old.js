console.log('la mia canvas');

const myCanvas = document.getElementById('my-canvas');

const ctx = myCanvas.getContext('2d');


for (let i = 0; i < 100; i++) {
    
    const originX = Math.random() * 600;
    //0.1 * 600 = 60
    const originy = Math.random() * 600;
    //0.3 * 600 = 180
    const width = Math.random() * 100;
    //0.01 * 100 = 1
    const height = Math.random() * 100;
    //0.9 * 100 = 90
    
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const alpha = Math.random();

    ctx.fillStyle = `rgba(${red},${green},${blue},${alpha})`

    ctx.fillRect(originX,originy,width,height);
}
//▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬

//----- Random Color -----
function getRandomColorESA() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color; 
  }

  function getRandomColorRGB(){
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const alpha = Math.random();

    return ctx.fillStyle = `rgba(${red},${green},${blue},${alpha})`
  }
