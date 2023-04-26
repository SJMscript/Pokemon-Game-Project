console.log("probando")

// * GLOBAL VARIABLES

const splashScreenDOM = document.querySelector("#splash-screen")
const gameoverScreenDom = document.querySelector("#gameover-screen")
const startBtnDOM = document.querySelector("#start-btn")
const restartBtnDOM = document.querySelector("#restart-btn")
const canvas = document.querySelector("#my-canvas")
const instruccionesDOM = document.querySelector("#instrucciones")
const ctx = canvas.getContext("2d")

let elementosJuego;

this.background = new Image()
this.background.src = "img/arena-background1.jpg"
instruccionesDOM.style.display = "none"

//* FUNCTIONS

const startGame = () => {
    console.log("intentando iniciar juego")
    //! 1er paso --> cambiar pantallas de juego
    splashScreenDOM.style.display = "none";
    canvas.style.display = "block"
    instruccionesDOM.style.display = "block"

    
    

    //! 2do --> crear los elementos del juego
    elementosJuego = new Juego() 
    console.log(elementosJuego)

    //! 3ro --> Iniciar el bucle
    elementosJuego.gameLoop()

}

const restartGame = () => {
    gameoverScreenDom.style.display = "none";
    canvas.style.display = "block"
    elementosJuego = new Juego() 
    elementosJuego.gameLoop()
    //instruccionesDOM.style.display = "none"
}


// * EVENTOS
startBtnDOM.addEventListener("click", startGame)
restartBtnDOM.addEventListener("click", restartGame)

window.addEventListener("keydown", (event) => {
    if(event.code === "ArrowUp"){
        elementosJuego.dragonite.dragoniteMoveUp()
    }
})
window.addEventListener("keydown", (event) => {
    if(event.code === "ArrowDown"){
        elementosJuego.dragonite.dragoniteMoveDown()
    }
})

window.addEventListener("keydown", (event) => {
    if(  event.code === "Space"){
    elementosJuego.disparaDragonite()
    }
})

window.addEventListener("load",function(){
	document.getElementById("play").addEventListener("click",sonarMusica);
	document.getElementById("stop").addEventListener("click",pararMusica);			
});

function sonarMusica(){
	var sonido = document.createElement("iframe");
	sonido.setAttribute("src","mp3/pokemon-intro.mp3");
	document.body.appendChild(sonido);
	document.getElementById("play").removeEventListener("click",sonarMusica);
}

function pararMusica(){
	var iframe = document.getElementsByTagName("iframe");

	if (iframe.length > 0){
		iframe[0].parentNode.removeChild(iframe[0]);
		document.getElementById("play").addEventListener("click",sonarMusica);
	}
}