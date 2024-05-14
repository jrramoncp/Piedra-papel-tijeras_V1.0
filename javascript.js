//La consola tiene que dar tres valores aleatorios
//Para cada valor hay que asignar un texto piedra papel o tijeras
//

const computer = Math.floor(Math.random()*10)

function getComputerChoice(){
if (computer >= 0 && computer <= 2){
    console.log("rock")
    }
else if(computer >= 3 && computer <= 5){
    console.log("papper")
}
else if (computer >= 6 && computer <= 9){
    console.log("scissors")
}
}

console.log(getComputerChoice())

//Una interfaz para que el usuario introduzca su eleccion
//La eleccion del usuario tiene que traducirse en las anteriores

let human = window.prompt("Rock, papper or scissors?")

if (human.toLowerCase() === "rock"){
    console.log("rock")
}
else if (human.toLowerCase() === "papper"){
    console.log("papper")
}
else if (human.toLowerCase() === "scissors"){
    console.log("scissors")
}
else{
    console.log("Incorrect Input")
}
