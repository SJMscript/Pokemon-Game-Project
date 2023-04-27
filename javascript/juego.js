class Juego {

    constructor (){  //? son todos los elementos y valores inciales del juego, 
        //* propiedades de GAME => todos los elementos que existen en el juego

        //* fondo,  
        this.background = new Image()
        this.background.src = "img/battle-field.png"


        //* Dragonite
        this.dragonite = new Dragonite()
        this.disparosDragoniteArr = [];
        this.isDragoniteFiring = true;
        this.superDisparoArr = [];
        this.isDragoniteSuperFiring =[];

        //* Gengar
        this.gengar = new Gengar()
        this.disparosGengarArr = [];
        this.isGengarFiring = true;



        this.isGameOn = true; 

        //* contador
        this.score = 0;
    }

    //! Métodos del juego ----> todas las acciones que se realizan en el juego


    gameOver = () =>{  //! nunca nos podemos olvidar de detener el juego
        // 1 detener el juego
        this.isGameOn = false;

        // 2 ocultar canvas
        canvas.style.display = "none";

        // mostrar pantalla final
        gameoverScreenDom.style.display = "flex";
        instruccionesDOM.style.display = "none";
    }

    ganarJuego = () =>{
    this.isGameOn = false;
    canvas.style.display = "none";
    winScreenDOM.style.display = "flex";
    instruccionesDOM.style.display = "none";
    }

    scoreAndGameOver = () => {
        if(this.score <= -4){
            this.gameOver()
            console.log("hemos perdido")
        }
    }

    scoreAndWin = () => {
        if(this.score >= 4){
            this.ganarJuego()
            console.log("Hemos ganado")
        }
    }


    drawBackground = () =>{
        ctx.drawImage(this.background, 0, 0, canvas.width, canvas.height)
    }

    clearCanvas = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
    }

    disparaDragonite = () => {
        if(this.isDragoniteFiring === true){
            let nuevoDisparoDragonite = new DisparoDragonite(this.dragonite.x, this.dragonite.y)
            this.disparosDragoniteArr.push(nuevoDisparoDragonite)
            this.isDragoniteFiring = false
            setTimeout(()=>{
                this.isDragoniteFiring = true;
            }, 1500)
        }
        
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
    }

    superDisparo = () => {
        if(this.isDragoniteFiring === true && this.score > 3){
            let nuevoSuperDisparo = new SuperDisparo(this.dragonite.x, this.dragonite.y)
            this.superDisparoArr.push(nuevoSuperDisparo)
            this.isDragoniteFiring = false
            setTimeout(()=>{
                this.isDragoniteFiring = true;
            }, 1500)
    }
    }


    removerDisparoDragonite = () => { 

        if(this.disparosDragoniteArr.length > 0 &&  this.disparosDragoniteArr[0].x + this.disparosDragoniteArr[0].w > 800 ){
            this.disparosDragoniteArr.shift()
        } 
    }

    removerDisparoGengar = () => { 

        if(this.disparosGengarArr.length > 0 &&  this.disparosGengarArr[0].x + this.disparosGengarArr[0].w < 0 ){
            this.disparosGengarArr.shift()
        } 
    }

    colisionDragoniteDisparoGengar = () =>{
        //* necesitamos checkear 
        //* this.dragonite
        //* this.disparoGengar
        this.disparosDragoniteArr.forEach((eachDisparoDragonite) => {
            
            if (
                eachDisparoDragonite.x < this.gengar.x + this.gengar.w &&
                eachDisparoDragonite.x + eachDisparoDragonite.w > this.gengar.x &&
                eachDisparoDragonite.y < this.gengar.y + this.gengar.h &&
                eachDisparoDragonite.h + eachDisparoDragonite.y > this.gengar.y             
              ) {
                this.disparosDragoniteArr.splice(0, 1)
                this.score++
              } 
        })
    }

    colisionGengarDisparoDragonite = () =>{
        //* necesitamos checkear 
        //* this.dragonite
        //* this.disparoGengar
        this.disparosGengarArr.forEach((eachDisparoGengar) => {
            
            if (
                eachDisparoGengar.x < this.dragonite.x + this.dragonite.w &&
                eachDisparoGengar.x + eachDisparoGengar.w > this.dragonite.x &&
                eachDisparoGengar.y < this.dragonite.y + this.dragonite.h &&
                eachDisparoGengar.h + eachDisparoGengar.y > this.dragonite.y             
              ) {

                this.disparosGengarArr.splice(0, 1)
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

        //! 1 limpieza del canvas
        //todo 
        this.clearCanvas()

        //! 2 acciones y movimientos de elementos (ACCIONES AUTOMÁTICAS)
        
        this.gengar.move()
        this.gengar.rebotar()
        this.disparaGengar()
        this.colisionDragoniteDisparoGengar()
        this.colisionGengarDisparoDragonite()
        this.removerDisparoDragonite()
        this.removerDisparoGengar()


        //! 3 EL dibujado de los elementos ---> EL ORDEN ES IMPORTANTÍSIMO
        this.drawBackground() //todo siempre va primero porque lo demás se agrega arriba
        this.dragonite.draw()
        this.gengar.draw()
        this.drawScore()
        this.scoreAndGameOver()
        this.scoreAndWin()

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