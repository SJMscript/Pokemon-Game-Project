class Juego {

    constructor (){  //? son todos los elementos y valores inciales del juego, 
        //* propiedades de GAME => todos los elementos que existen en el juego

        //* fondo,  
        this.background = new Image()
        this.background.src = "img/battle-field.png"


        //* Dragonite
        this.dragonite = new Dragonite()


        //* Gengar
        this.gengar = new Gengar()


        this.disparosDragoniteArr = [];
        this.disparosGengarArr = [];

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

    disparaDragonite = () => {
            let nuevoDisparoDragonite = new DisparoDragonite(this.dragonite.x, this.dragonite.y)
            this.disparosDragoniteArr.push(nuevoDisparoDragonite)
        
    }

    disparaGengar = () => {
        
    }



    removerDisparoDragonite = () => { //! importante remover del juego elementos que salen del canvas

        if(this.disparosDragoniteArr[0].x + this.disparosDragoniteArr[0].w > 800 ){
            this.disparosDragoniteArr.shift()
            this.score += 1;
        } 
    }     

    removerDisparoGengar = () => { //! importante remover del juego elementos que salen del canvas

        if(this.disparosGengarArr[0].x + this.disparosGengarArr[0].w < 0 ){
            this.disparosGengarArr.shift()
            this.score += 1;
        } 
    }

    //* bonus 
    drawScore = () =>{
        ctx.font = "40px Comic Sans MS"
        ctx.strokeText(Math.floor(this.score), 400, 50)
    }

    gameLoop = () => {  //! aqui lo que se hace automáticamente
        console.log("ejecutando recursion")

        //! 1 limpieza del canvas
        //todo 

        //! 2 acciones y movimientos de elementos (ACCIONES AUTOMÁTICAS)
        
        this.gengar.move()
        this.gengar.rebotar()
        //this.dragonite.rebotar()


        //! 3 EL dibujado de los elementos ---> EL ORDEN ES IMPORTANTÍSIMO
        this.drawBackground() //todo siempre va primero porque lo demás se agrega arriba
        this.dragonite.draw()
        this.gengar.draw()
        this.drawScore()

        this.disparosDragoniteArr.forEach((eachDisparoDragonite)=>{   
            eachDisparoDragonite.move()
            eachDisparoDragonite.draw()
        })

        //this.disparaDragonite.draw()
        //this.disparaGengar.draw()

        //* 4 recursión (requesAnimationFrame)
        if(this.isGameOn === true){
            requestAnimationFrame(this.gameLoop) 
        }

    }

}


//todo --> botón pausa