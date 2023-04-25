class DisparoDragonite {
    constructor(playerX, playerY) {
        this.img = new Image()
        this.img.src = "img/fuego2-transformed.png";
        
        this.x = playerX +10 ;  //todo //quiero que la posicion X del disparo sea igual a donde se encuentra dragonite en ese momento
        this.y = playerY ;  //todo //lo mismo con Y
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





/*function sumAndMultiply (patata1, patata2) {
    // let patata1 = 
    return (patata1 + patata2) * 20
}



sum(5, 20)
sum(10, 40)

let num1 = 10;
let num2 = 20;
sum(num1, num2)*/