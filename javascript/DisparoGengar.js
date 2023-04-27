class DisparoGengar {
    constructor(gengarX, gengarY) {
        this.img = new Image()
        this.img.src = "img/psiquico2-transformed.png";
        
        this.x = gengarX -10;
        this.y = gengarY; 
        this.w = 60;
        this.h = 55;
        this.speed = 3;
        
    }

    draw = () => {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
    }
    
    move = () => {
        this.x -= this.speed
    }


}