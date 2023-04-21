class Point {
    //     Creation Point/pixel
    constructor(x, y, speedX, speedY, color) {
        this.x = x;
        this.y = y;
        this.speedX = speedX;
        this.speedY = speedY;
        this.color = color;
    }

    draw(ctx) {
        ctx.fillStyle = (this.color);
        ctx.fillRect(this.x, this.y, 2, 2);
    }

    static generateRandom(canvasWidth, canvasHeight) {
        //               X & Y
        const randomX = Math.random() * canvasWidth;
        const randomY = Math.random() * canvasHeight;
        //           Speed X & Y
        const speedX = (Math.random() * 2) - 1
        const speedY = (Math.random() * 2) - 1



        //               Color
        const red = Math.floor(Math.random() * 256);
        const green = Math.floor(Math.random() * 256);
        const blue = Math.floor(Math.random() * 256);
        const randomColor = `rgba(${red},${green},${blue}`;

        const newPoint = new Point(randomX, randomY, speedX, speedY, randomColor);

        return newPoint;
    }

    changePosition() {
        this.x += this.speedX;
        this.y += this.speedY;

    }








}