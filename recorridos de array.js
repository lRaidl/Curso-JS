var objetos = [
    {nombre: "mesa", costo: 2000 },
    {nombre: "cama", costo: 3000 },
    {nombre: "silla", costo: 4000 },
    {nombre: "luces",costo: 5000 },
    {nombre: "camisetas", costo: 6000 },
    {nombre: "pantalones", costo: 7000 },
];

var Filtrados = objetos.filter(function(objeto) {
    ruturn objeto.costo <= 500; 
});