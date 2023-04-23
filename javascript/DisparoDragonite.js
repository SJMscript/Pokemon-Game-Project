class DisparoDragonite {
    constructor() {
        this.img = new Image()
        this.img.src = "img/fuego1.png";
        
        this.x = this.dragonite.x ;  //todo //quiero que la posicion X del disparo sea igual a donde se encuentra dragonite en ese momento
        this.y = this.dragonite.y ;  //todo //lo mismo con Y
        this.w = 0;
        this.h = 0;
        this.speed = 8;
        
    }

    draw = () => {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h)
    }
    
    move = () => {
        this.x += this.speed
    }

    disparar = () => {
        
    }
}