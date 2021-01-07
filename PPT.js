var jg1 = "piedra";
var jg2 = "papel";
var jg3 = "tijera";


function juego(P1,P2){

    if (P1 == P2){
        console.log("empate");
    } else if (P1 == jg1 && P2 == jg3){
        console.log("Ganó P1");
    } else if (P1 == jg2 && P2 == jg1){
        console.log("Ganó P1");
    } else if (P1 == jg3 && P2 == jg2){
        console.log("Ganó P1");
    } else {
        console.log("Ganó P2")
    }

}
juego(1,1);