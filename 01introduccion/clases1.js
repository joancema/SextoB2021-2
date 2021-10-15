
let prueba="555";

const persona = {
    nombre: 'JosE',
    apellido: 'Campuzano',
    esEstudiante: true,
    prueba: prueba,
    getNombreCompleto(){
        return `${this.nombre} ${this.apellido}`;
    },
    geolocalizacion: {
        lat:14.123,
        lng:11.234,
    }
}


function mostrarDatos({ nombre, geolocalizacion: { lat, lng } })
{
    console.log(nombre)
    console.log(lat)
    console.log(lng)
}

mostrarDatos(persona)

// const estudiante = { ...persona };

// estudiante.nombre= "Steven";


// console.log(persona)
// console.log(estudiante)



