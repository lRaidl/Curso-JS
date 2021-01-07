var cont1 = 0;
var cont2 = 0;

function PPT(){


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
    alert(resultado);

    if(resultado === "Ganó P1"){
        cont1 = cont1 + 1
    }
    if(resultado === "Ganó P2"){
        cont2 = cont2 + 1
    }
}
    

var iniciar = prompt("¿Iniciar juego?");

if(iniciar === "si"){
    for(var i = "si"; i === "si"; i){
        PPT();
        i = prompt("¿Seguir jugando?");
    }
    alert(`El resutado es P1 = ${cont1} puntos | P2 = ${cont2} puntos`);
    alert(`Fin del juego.`);
} else {
    alert("Fin del juego");
}