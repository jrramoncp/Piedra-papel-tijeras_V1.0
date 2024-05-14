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

let humano = prompt("Elige: ¿Piedra, papel o tijeras?")


function getHumanChoice (){
if(humano.toLowerCase() === "piedra"){
        console.log("piedra")
}else if (humano.toLowerCase() === "papel"){
        console.log("papel")
}else if (humano.toLowerCase() === "tijeras"){
    console.log("tijeras")
}else{
    alert("Texto Incorrecto")
}
}

console.log(getHumanChoice)
console.log("Ordenador:" + " " + getComputerChoice())

