class Gengar{

    constructor(){
        //* Propiedades de Gengar
        this.img = new Image()
        this.img.src = "img/gengar1.png"
        this.x = 670; // la posicion en X
        this.y = canvas.height / 2;
        this.w = 100; 
        this.h = 135; 
        this.speed = 1.5;
        this.isDirectionDown = true;
    }

    //! Acciones de Gengar
    //? dibujo Gengar

    draw = () => {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h)

    }

    move = () => {
        if(this.isDirectionDown === true){
            this.y += this.speed
        } else {
            this.y -= this.speed
        }
    }

   

    rebotar = () => {
        if(this.y + this.h >= canvas.height){
            this.isDirectionDown = false;
        } else if(this.y < 0 ){
            this.isDirectionDown = true;
        }
    }


}
