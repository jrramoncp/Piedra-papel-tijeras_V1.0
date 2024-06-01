//INTERFAZ DE USUARIO
//Botones para jugar
const buttons = document.getElementById("buttons")

let btnOne = document.createElement("button");
btnOne.classList.add("Piedra");
btnOne.textContent = "Piedra";
buttons.appendChild(btnOne);
let btnTwo = document.createElement("button");
btnTwo.classList.add("Papel");
btnTwo.textContent = "Papel";
buttons.appendChild(btnTwo);
let btnThree = document.createElement("button");
btnThree.classList.add("Tijeras");
btnThree.textContent = "Tijeras";
buttons.appendChild(btnThree);


//MARCADORES



let humanScore = 0
let computerScore = 0

const puntuacionJugadorElemento = document.getElementById("puntuacionJugador");
const puntuacionMaquinaElemento = document.getElementById("puntuacionOrdenador");

function actualizarPuntuacion(){
    puntuacionJugadorElemento.textContent = humanScore;
    puntuacionMaquinaElemento.textContent = computerScore;
}
//Logica del PC
function getComputerChoice(){
    let ordenador = Math.ceil(Math.random() *3)
    if (ordenador == 1){
        return ("piedra")
}else if (ordenador == 2){
    return ("papel");
}else if (ordenador == 3){
    return ("tijeras")
}
}

//Logica del jugador

let game = ""

btnOne.addEventListener("click", function(){
    game = (playPiedra("piedra"));
    getWinner(game);
    puntuacion()
    reload()
    return(game);
});

btnTwo.addEventListener("click", function(){
    game = (playPapel("papel"));
    getWinner(game);
    puntuacion()
    reload()
    return(game);
})

btnThree.addEventListener("click", function(){
    game = playTijeras("tijeras");
    getWinner(game);
    puntuacion()
    reload()
    return(game);
})

//Logica para una ronda

function playPiedra(humano){
    let player = humano;
    let computer = getComputerChoice()
    if (player == "piedra" && computer == "tijeras"){
        return ("ganador");
    }else if (player == computer){
        return ("empate");
    }else{
        return ("perdedor");
    }
}

function playPapel(humano){
    let player = humano;
    let computer = getComputerChoice()
    if (player == "papel" && computer == "piedra"){
        return ("ganador");
    }else if (player == computer){
        return ("empate");
    }else{
        return("perdedor");
    }
}

function playTijeras(humano){
    let player = humano;
    let computer = getComputerChoice()
    if (player == "tijeras" && computer == "papel"){
        return ("ganador");
    }else if (player == computer){
        return ("empate");
    }else{
        return("perdedor");
    }
}

//Alertas

function getWinner(game){
    if (game == "ganador"){
        return "win"
    }else if (game == "perdedor"){
                return "lose"
    }else if (game == "empate"){
                return "tie"
    }
}


//Puntuacion


function puntuacion(){
    if (getWinner(game) == "win"){
        alert("Has ganado esta ronda");
        humanScore ++
        actualizarPuntuacion()
        console.log("Tus puntos: "+ (humanScore) + " / " + "Puntos de la maquina: " + computerScore)
    }
    else if (getWinner(game) == "lose"){
        alert("Has perdido esta ronda!");
        computerScore ++
        actualizarPuntuacion()
        console.log("Tus puntos: "+ humanScore + " / " + "Puntos de la maquina: " + (computerScore))
    }
    else if(getWinner(game)== "tie"){
        alert("Esta ronda es empate");
        console.log("Tus puntos: "+ humanScore + " / " + "Puntos de la maquina: " + (computerScore))
    }
}

//Refrescar página cuando llegue a 5 cualquiera de los contadores y asi reiniciar el juego

function reload(){
    if (humanScore == 5){
        let newGame = confirm("¡Genial, has ganado! ¿Quieres jugar otra vez?")
        if (newGame == true){
            location.reload()
         }else{
            alert("¡Gracias por jugar!")
            }
    }else if (computerScore == 5){
        let newGame = confirm("¡Que pena, has perdido! ¿Quieres jugar otra vez?")
        if (newGame == true){
            location.reload()
         }else{
            alert("¡Gracias por jugar!")
            }
    }
}


