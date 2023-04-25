class Juego {

    constructor (){  //? son todos los elementos y valores inciales del juego, 
        //* propiedades de GAME => todos los elementos que existen en el juego

        //* fondo,  
        this.background = new Image()
        this.background.src = "img/battle-field.png"


        //* Dragonite
        this.dragonite = new Dragonite()
        this.disparosDragoniteArr = [];


        //* Gengar
        this.gengar = new Gengar()
        this.disparosGengarArr = [];
        this.isGengarFiring = true;



        this.isGameOn = true; //? condicional con lo ultimo del codigo que es la recursión

        //* contador
        this.score = 0;
    }

    //! Métodos del juego ----> todas las acciones que se realizan en el juego


    //? movimientos del dragonite y del gengar, contador aumente, colisiones
    //? se termina el juego accion, accion de pausar 



   

    gameOver = () =>{  //! nunca nos podemos olvidar de detener el juego
        // 1 detener el juego
        this.isGameOn = false;

        // 2 ocultar canvas
        canvas.style.display = "none";

        // mostrar pantalla final
        gameoverScreenDom.style.display = "flex";
    }

    scoreAndGameOver = () => {
        if(this.score >= 400){
            this.gameOver()
            console.log("Hemos ganado")
        } else if(this.score <= -400){
            this.gameOver()
            console.log("hemos perdido")
        }
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
        if(this.isGengarFiring === true){
            let nuevoDisparoGengar = new DisparoGengar(this.gengar.x, this.gengar.y)
            this.disparosGengarArr.push(nuevoDisparoGengar)
            this.isGengarFiring = false;
            setTimeout(()=>{
                this.isGengarFiring = true;
            }, 2000)
        }
        //console.log("gengar ha disparado")
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

    colisionDragoniteDisparoGengar = () =>{
        //* necesitamos checkear 
        //* this.dragonite
        //* this.disparoGengar
        this.disparosDragoniteArr.forEach((eachDisparoDragonite) => {
            //! each disparo vs Gengar
            if (
                eachDisparoDragonite.x < this.gengar.x + this.gengar.w &&
                eachDisparoDragonite.x + eachDisparoDragonite.w > this.gengar.x &&
                eachDisparoDragonite.y < this.gengar.y + this.gengar.h &&
                eachDisparoDragonite.h + eachDisparoDragonite.y > this.gengar.y             
              ) {
                // Collision detected!
                //console.log("gengar dañado")

                this.score++
              } 
        })
    }

    colisionGengarDisparoDragonite = () =>{
        //* necesitamos checkear 
        //* this.dragonite
        //* this.disparoGengar
        this.disparosGengarArr.forEach((eachDisparoGengar) => {
            //! each disparo vs Gengar
            if (
                eachDisparoGengar.x < this.dragonite.x + this.dragonite.w &&
                eachDisparoGengar.x + eachDisparoGengar.w > this.dragonite.x &&
                eachDisparoGengar.y < this.dragonite.y + this.dragonite.h &&
                eachDisparoGengar.h + eachDisparoGengar.y > this.dragonite.y             
              ) {
                // Collision detected!
                //console.log("dragonite dañado")

                this.score--
              } 
        })
    }



    //* bonus 
    drawScore = () =>{
        ctx.font = "40px Comic Sans MS"
        ctx.strokeText(Math.floor(this.score), 400, 50)
    }

    gameLoop = () => {  //! aqui lo que se hace automáticamente
        //console.log("ejecutando recursion")

        //! 1 limpieza del canvas
        //todo 
        this.clearCanvas()

        //! 2 acciones y movimientos de elementos (ACCIONES AUTOMÁTICAS)
        
        this.gengar.move()
        this.gengar.rebotar()
        //this.dragonite.rebotar()
        this.disparaGengar()
        this.colisionDragoniteDisparoGengar()
        this.colisionGengarDisparoDragonite()


        //! 3 EL dibujado de los elementos ---> EL ORDEN ES IMPORTANTÍSIMO
        this.drawBackground() //todo siempre va primero porque lo demás se agrega arriba
        this.dragonite.draw()
        this.gengar.draw()
        this.drawScore()
        this.scoreAndGameOver()

        this.disparosDragoniteArr.forEach((eachDisparoDragonite)=>{   
            eachDisparoDragonite.move()
            eachDisparoDragonite.draw()
        })

        this.disparosGengarArr.forEach((eachDisparoGengar)=>{
            eachDisparoGengar.move()
            eachDisparoGengar.draw()
        })


        //* 4 recursión (requesAnimationFrame)
        if(this.isGameOn === true){
            requestAnimationFrame(this.gameLoop) 
        }

    }

}


//todo --> botón pausa