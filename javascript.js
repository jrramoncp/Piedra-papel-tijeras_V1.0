//INTERFAZ DE USUARIO

let btnOne = document.createElement("button");
btnOne.classList.add("Piedra");
btnOne.textContent = "Piedra";
document.body.appendChild(btnOne);
let btnTwo = document.createElement("button");
btnTwo.classList.add("Papel");
btnTwo.textContent = "Papel";
document.body.appendChild(btnTwo);
let btnThree = document.createElement("button");
btnThree.classList.add("Tijeras");
btnThree.textContent = "Tijeras";
document.body.appendChild(btnThree);

//boton para pruebas

let prueba = document.createElement("button")
prueba.textContent = "prueba"
document.body.appendChild(prueba)

prueba.addEventListener("click", function(){
    console.log(getWinner(game))
})


//Logica del PC

//Una funcion para que el pc elija una de las tres opciones
//Traduce cada opcion numerica en un string y devuelve el string


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
//Una funcion para que el jugador introduzca su eleccion
//Da igual como lo introduzca, siempre se hara en minusculas


/*btnOne.addEventListener("click", function(){
    return (playPiedra("piedra"));
})*/

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
//Una funcion que compare los resultados de las dos elecciones
//Las compare y determine un ganador o un empate


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
//Una funcion, que obtenga el resultado de la operacion anterior y devuelva una alerta indicando si ganas o pierdes

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
//Una funcion que dependiendo del resultado de la ronda sume puntos al ganador

humanScore = 0
computerScore = 0

function puntuacion(){
    if (getWinner(game) == "win"){
        alert("Has ganado esta ronda");
        humanScore ++
        console.log("Tus puntos: "+ (humanScore) + " / " + "Puntos de la maquina: " + computerScore)
    }
    else if (getWinner(game) == "lose"){
        alert("Has perdido esta ronda!");
        computerScore ++
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



//Juego Completo
//Una funcion, para jugar cinco rondas y que vayan sumando puntos

function fullGame(){
winLose()
puntuacion()
ronda = playRound()
}

//Funcion que alerta si has ganado o perdido
/*function getWinner(){
    if (humanScore > computerScore){
        alert("¡Has ganado!")
        console.log("¡Has ganado!")
    }else if (humanScore < computerScore){
        alert("¡Has perdido!")
        console.log("¡Has perdido!")
    }else{
        alert("¡Empate!")
        console.log("¡Empate!")
    }
    
}
*/
//Funcion que finaliza el juego



/*
///Juego completo a 5 rondas

console.log("Ronda 1");
fullGame();
console.log("Ronda 2");
fullGame();
console.log("Ronda 3");
fullGame();
console.log("Ronda 4");
fullGame();
console.log("Ronda 5");
endGame();
*/
