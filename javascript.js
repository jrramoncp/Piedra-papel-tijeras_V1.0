//La consola tiene que dar tres valores aleatorios
//Para cada valor hay que asignar un texto piedra papel o tijeras
//

let x = Math.floor(Math.random()*10)

function getComputerChoice(){
if (x >= 0 && x <= 2){
    console.log("rock")
    }
else if(x >= 3 && x <= 5){
    console.log("papper")
}
else if (x >= 6 && x <= 9){
    console.log("scissors")
}
}

console.log(getComputerChoice())