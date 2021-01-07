var pregunta = prompt("Ingresa tu opción: piedra, papel o tijera "); 
var user = pregunta.toLowerCase();
var options = ["piedra", "papel", "tijera"];
var maquina = options[Math.floor(Math.random() * 3)];
var resultado = "";



 switch(true){

    case (user === maquina):
        var resultado = "Empate";
    break;

    case (user === "piedra" && maquina == "tijeras"):
        var resultado = "Ganó P1";
    break;

    case (user === "tijera" && maquina == "papel"):
        var resultado = "Ganó P1";
    break;

    case (user === "papel" && maquina == "piedra"):
        var resultado = "Ganó P1";
    break;

    default:
        var resultado = "Ganó P2";
 }

  console.log(resultado);