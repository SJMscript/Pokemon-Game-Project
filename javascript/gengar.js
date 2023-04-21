class Gengar{

    constructor(){
        //* Propiedades de Dragonite
        this.img = new Image()
        this.img.src = "img/gengar1.png"
        this.x = 670; // la posicion en X
        this.y = canvas.height / 2;
        this.w = 100; 
        this.h = 135; 

    }

    //! Acciones de Gengar
    //? dibujo Gengar

    draw = () => {
        ctx.drawImage(this.img, this.x, this.y, this.w, this.h)

    }

}
