const platos = [
    "arroz con pollo",
    "chaulafan",
    "encebollado",
    "ceviche",
    function(){
        return "ok"
    }
]

const otrosPlatos=[
    "tigrillo",
    "bolon"
]

const unionPlatos= [
    ...platos, ...otrosPlatos
]
console.log(unionPlatos)