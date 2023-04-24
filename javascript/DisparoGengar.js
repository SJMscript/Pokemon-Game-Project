class DisparoGengar {
    constructor() {
        this.img = new Image()
        this.img.src = "img/psiquico1.png";
        
        this.x = this.gengar.x - 10; //todo quiero que la posicion de x de la que salga el disparo sea igual a la del gengar en el momento del disparo
        this.y = this.gengar.y; //todo lo mismo con la posicion en y
        this.w = 12;
        this.h = 7;
        this.speed = 8;
        this.timer = 0;
        
    }

    draw = () => {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
    }
    
    move = () => {
        this.x += this.speed
    }

    //todo quiero intentar usar el timer para que dispare cada 3 segundos

    disparar = () => {
        
    }
}