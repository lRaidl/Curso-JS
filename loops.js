var estudiantes = ["Nicolas" ,"Andrea", "Daniela"];

function Saludar(estudiantes){
    console.log(`Bienvedo a clase, ${estudiantes}`)
}

for(var i = 0; i < estudiantes.length; i++){
    Saludar(estudiantes[i]);
}

for(var estudiante of estudiantes){
    Saludar(estudiante);
}