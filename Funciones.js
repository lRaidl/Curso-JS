//Declarativas 

function MiFuncion(a,b){
    return 3;
}


MiFuncion();
//Expresion

var Funcion = function(a,b){
    return a + b
}
MiFuncion();


//Practicas
function resta(a,b){
    return a-b;
}
//
function multip(a,b){
    return a*b;
}
//
function multip_estud(estudiantes_a,estudiantes_b,porcentaje){
    var resultado = estudiantes_a+estudiantes_b*porcentaje/100
    return("Si hay "+estudiantes_a+" En el primer grado, en el segundo hay "+estudiantes_b+" ¿Cual es el "+ porcentaje+ "% de los estudiantes en total. RTA = "+resultado)
}