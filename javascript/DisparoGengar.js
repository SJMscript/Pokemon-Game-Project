class DisparoGengar {
    constructor() {
        this.img = new Image()
        this.img.src = "img/fuego1.png";
        
        this.x = 0;
        this.y = 0;
        this.w = 0;
        this.h = 0;
        this.speed = 2;
        
    }

    draw = () => {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
    }
    
    move = () => {
        this.x += this.speed
    }
}