alert("Bienvenido a nuestro sitio Wed")

let nombreUsuario = "luna";
let queEdadtienes = 25;
let numeroVentas = 50
let saldoDisponible = 1000


let nombreIngreso = prompt("Nombre usuario")
let edadIngreso = prompt("Tu edad")
let mensajeDeError = "!Error¡ completa tosdos los campos"
let menorDeEdad = "No cumples la edad requerida"

console.log(nombreIngreso)
console.log(edadIngreso)


if(nombreUsuario != nombreIngreso){
    alert(mensajeDeError)
}else

if(edadIngreso>= 18){
    alert("Puedes obtener tu licencia de conducir ")
}
if(edadIngreso <= 17){
    alert(menorDeEdad)
}

