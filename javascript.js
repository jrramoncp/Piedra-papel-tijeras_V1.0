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

function playRound(jugador, maquina){
    if (jugador == "piedra" && maquina == "tijeras"){
        alert("Ganas!")
    }else if (jugador == "papel" && maquina == "piedra"){
        alert("Ganas!")
    }else if (jugador == "tijeras" && maquina == "papel"){
        alert("Ganas!")
    }else{
        alert("Pierdes!")
    }
}

const jugador = getHumanChoice()
const maquina = getComputerChoice()

playRound (jugador, maquina)
