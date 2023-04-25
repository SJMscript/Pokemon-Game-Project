console.log("probando")

// * GLOBAL VARIABLES

const splashScreenDOM = document.querySelector("#splash-screen")
const gameoverScreenDom = document.querySelector("#gameover-screen")
const startBtnDOM = document.querySelector("#start-btn")
const restartBtnDOM = document.querySelector("#restart-btn")
const canvas = document.querySelector("#my-canvas")

const ctx = canvas.getContext("2d")

let elementosJuego;


//* FUNCTIONS

const startGame = () => {
    console.log("intentando iniciar juego")
    //! 1er paso --> cambiar pantallas de juego
    splashScreenDOM.style.display = "none";
    canvas.style.display = "block"
    
    

    //! 2do --> crear los elementos del juego
    elementosJuego = new Juego() 
    console.log(elementosJuego)

    //! 3ro --> Iniciar el bucle
    elementosJuego.gameLoop()

}

const restartGame = () => {
    gameoverScreenDom.style.display = "none";
    canvas.style.display = "block"
    gameObj = new Game() 
    gameObj.gameLoop()
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