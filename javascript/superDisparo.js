class SuperDisparo {
    constructor(playerX, playerY) {
        this.img = new Image()
        this.img.src = "img/dragon-attack1-transformed.png";
        
        this.x = playerX +10 ; 
        this.y = playerY ; 
        this.w = 60;
        this.h = 55;
        this.speed = 3;
        
    }

    draw = () => {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
    }
    
    move = () => {
        this.x += this.speed
    }

}