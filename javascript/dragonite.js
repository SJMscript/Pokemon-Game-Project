class Dragonite{

    constructor(){
        //* Propiedades de Dragonite
        this.img = new Image()
        this.img.src = "img/dragonite3.png"
        this.x = 30; // la posicion en X
        this.y = canvas.height / 2;
        this.w = 120; 
        this.h = 155; 
        this.isDirectionDown = true;

    }

    //! Acciones de Dragonite
    //? dibujo Dragonite

    draw = () => {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h)

    }

    dragoniteMoveUp = () => {
        this.y -= 4;
    }

    dragoniteMoveDown = () => {
        this.y += 4;
    }
    
    rebotar = () => {
        if(this.y + this.h >= canvas.height){
            this.isDirectionDown = false;
        } else if(this.y < 0 ){
            this.isDirectionDown = true;
        }
    }

}