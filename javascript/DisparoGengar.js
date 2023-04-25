class DisparoGengar {
    constructor(gengarX, gengarY) {
        this.img = new Image()
        this.img.src = "img/psiquico2-transformed.png";
        
        this.x = gengarX -10; //todo quiero que la posicion de x de la que salga el disparo sea igual a la del gengar en el momento del disparo
        this.y = gengarY; //todo lo mismo con la posicion en y
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

    //todo quiero intentar usar el timer para que dispare cada 3 segundos

}