//Logica del PC

let ordenador = Math.ceil(Math.random() *3)


function getComputerChoice(){
    if (ordenador == 1){
        return ("piedra")
}else if (ordenador == 2){
    return ("papel");
}else if (ordenador == 3){
    return ("tijeras")
}
}

console.log("Ordenador:" + " " + getComputerChoice())

//Logica del jugador

let humano = prompt("Elige: ¿Piedra, papel o tijeras?")


function getHumanChoice (){
if(humano.toLowerCase() == "piedra"){
        return ("piedra")
}else if (humano.toLowerCase() == "papel"){
        return ("papel")
}else if (humano.toLowerCase() == "tijeras"){
    return ("tijeras")
}else{
    alert("Texto Incorrecto")
}
}
//Puntuaciones

let humanScore = 0
let computerScore = 0

//Logica para un juego

function playRound(jugador, maquina){
    if (jugador == "piedra" && maquina == "tijeras"){
       return ("ganador")
    }else if (jugador == "papel" && maquina == "piedra"){
        return ("ganador")
    }else if (jugador == "tijeras" && maquina == "papel"){
        return ("ganador")
    }else if (jugador == maquina){
        return ("empate");
    }else{
        return("perdedor");
    }
}

const jugador = getHumanChoice()
const maquina = getComputerChoice()

playRound (jugador, maquina)

let round = playRound(jugador, maquina)

/////////////Alertas de ganador o perdedor

function alertas(ronda){
    if (ronda == "ganador"){
        alert ("¡Ganas!")
    }else if (ronda == "empate"){
        alert ("¡Empate")
    }else{
        alert("¡Pierdes!")
    }
}

alertas(round)
