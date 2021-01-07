function carro(marca,modelo,año){
    this.marca = marca
    this.modelo = modelo
    this.año = año 
}
var autos = [];
for(var i= 0; i < 30; i++){
    var marca = prompt("Ingresa la marca del auto");
    var modelo = prompt("Ingresa el modelo del auto");
    var año = prompt("Ingresa el año del auto");
    autos.push(new carro (marca, modelo, año));
   
}

console.log(autos);
