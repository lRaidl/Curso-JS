var carro = {
    marca: "toyota",
    modelo: "corolla",
    año: "2020",
    detalles: function (){
        console.log(`Marca ${this.marca} Modelo ${this.modelo} Año ${this.año}`)
    }
}

carro.detalles()