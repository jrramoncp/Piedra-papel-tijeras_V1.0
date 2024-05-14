//Logica del PC

let ordenador = Math.ceil(Math.random() *3)

console.log(ordenador)

function getComputerChoice(){
    if (ordenador == 1){
        return ("piedra")
}else if (ordenador == 2){
    return ("papel");
}else if (ordenador == 3){
    return ("tijeras")
}
}

console.log(getComputerChoice())