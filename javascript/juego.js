class Juego {

    constructor (){  //? son todos los elementos y valores inciales del juego, 
        //* propiedades de GAME => todos los elementos que existen en el juego

        //* fondo,  
        this.background = new Image()
        this.background.src = "img/battle-field.png"
        console.log(this.background)

        //* Dragonite
        this.dragonite = new Dragonite()
        console.log(this.dragonite)

        //* Gengar
        this.gengar = new Gengar()
        console.log(this.gengar)

        this.isGameOn = true; //? condicional con lo ultimo del codigo que es la recursión

        //* contador
        this.score = 0;
    }

    //! Métodos del juego ----> todas las acciones que se realizan en el juego


    //? movimientos del dragonite y del gengar, contador aumente, colisiones
    //? se termina el juego accion, accion de pausar 



    colisionDragoniteDisparoGengar = () =>{
        //* necesitamos checkear 
        //* this.dragonite
        //* this.disparoGengar
        this.tubosArr.forEach((eachTubo) => {
            //! eachTubo vs this.pollito
            if (
                eachTubo.x < this.pollito.x + this.pollito.w &&
                eachTubo.x + eachTubo.w > this.pollito.x &&
                eachTubo.y < this.pollito.y + this.pollito.h &&
                eachTubo.h + eachTubo.y > this.pollito.y
              ) {
                // Collision detected!
                console.log("pollito golpeado")
                this.gameOver()
              } 
        })
    }

    gameOver = () =>{  //! nunca nos podemos olvidar de detener el juego
        // 1 detener el juego
        this.isGameOn = false;

        // 2 ocultar canvas
        canvas.style.display = "none";

        // mostrar pantalla final
        gameoverScreenDom.style.display = "flex";
    }


    drawBackground = () =>{
        ctx.drawImage(this.background, 0, 0, canvas.width, canvas.height)
    }

    clearCanvas = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
    }

    removerDisparoGengar = () => { //! importante remover del juego elementos que salen del canvas
        //* remover los disparos de gengar que salieron del canvas
        //* cuando el primer elemento del array tenga una posicion fuera del canvas, remuevelo
        if(this.tubosArr[0].x + this.tubosArr[0].w < 0 ){
            this.tubosArr.shift()
            this.score += 0.5;
        } 
    }

    removerDisparoDragonite = () => { //! importante remover del juego elementos que salen del canvas
        //* remover los disparos de Dragonite que salieron del canvas
        //* cuando el primer elemento del array tenga una posicion fuera del canvas, remuevelo
        if(this.tubosArr[0].x + this.tubosArr[0].w < 0 ){
            this.tubosArr.shift()
            this.score += 0.5;
        } 
    }     

    //* bonus 
    drawScore = () =>{
        ctx.font = "30px Comic Sans MS"
        ctx.strokeText(Math.floor(this.score), 300, 30)
    }

    gameLoop = () => {  //! aqui lo que se hace automáticamente
        console.log("ejecutando recursion")

        //! 1 limpieza del canvas
        //todo 

        //! 2 acciones y movimientos de elementos (ACCIONES AUTOMÁTICAS)
        //this.gengar.move()
        // this.pollito.jump() //! no la llamo aqui porque no es una accion automatica sino solo cuando aprieto boton

        //this.checkCollisionPollitoTubo()



        //! 3 EL dibujado de los elementos ---> EL ORDEN ES IMPORTANTÍSIMO
        this.drawBackground() //todo siempre va primero porque lo demás se agrega arriba
        this.dragonite.draw()
        this.gengar.draw()
        this.drawScore()

        //* 4 recursión (requesAnimationFrame)
        if(this.isGameOn === true){
            requestAnimationFrame(this.gameLoop) 
        }

    }

}


//todo --> botón pausa