
//Ejercicio practico # 1 Semana 10
let edad = prompt("Ingrese edad: ");
edad = Number(edad)
let vip=true;

isNaN(edad)? console.log("No es un número" + edad) : console.log("Es un número ");

console.log("tipo: "+ typeof(edad) +" "+ edad);

edad >= 18 && vip ? console.log("es mayor y tiene acceso VIP"):console.log("No es mayor de edad "+ edad);

//Ejercicio practico  #2 Semana 10
let productos =[
    {nombre:'Laptop', descuento: 'true'},
    {nombre:'Celular', descuento: 'false'},
    {nombre:'Tablet', descuento:'true'}
];

for(let i = 0; i < productos.length; i++){
        if (productos[i].descuento === 'true'){
            console.log("Producto con descuento "+ productos[i].nombre + " - " + productos[i].descuento) 
        }
        else{
            console.log("Producto sin descuento " + productos[i].nombre +" - " + productos[i].descuento);
        } 
}