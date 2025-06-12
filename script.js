
//Ejercicio practico # 1 Semana 10
/*let edad = prompt("Ingrese edad: ");
edad = Number(edad)
let vip=true;

isNaN(edad)? console.log("No es un número" + edad) : console.log("Es un número ");

console.log("tipo: "+ typeof(edad) +" "+ edad);

edad >= 18 && vip ? console.log("es mayor y tiene acceso VIP"):console.log("No es mayor de edad "+ edad);

//Ejercicio practico  #2 Semana 10
let productos =[
    {nombre:'Laptop', descuento: true},
    {nombre:'Celular', descuento: false},
    {nombre:'Tablet', descuento:true}
];

for(let i = 0; i < productos.length; i++){
        if (productos[i].descuento === true){
            console.log("Producto con descuento "+ productos[i].nombre + " - " + productos[i].descuento) 
        }
        else{
            console.log("Producto sin descuento " + productos[i].nombre +" - " + productos[i].descuento);
        } 
}*/

/*
function calcularArea(b, a){
     resultado = b * a;
     return resultado;
}

function imprimir(r){
     console.log(r);
}

let base =3, altura = 4, resultado = 0;
resultado = calcularArea(base, altura);
imprimir("El área es : " + resultado);
*/

/*
let cursos=[
    {codigo:1,descripción:"Curso de Guitarra anual",precio:"1300.60",moneda:"euros",instrumento:"guitarra"},
    {codigo:2,descripción:"Curso de anual de Ukelele",precio:"330",moneda:"pesos ARG",instrumento:"Ukelele"},
    {codigo:3,descripción:"Curso de Internacional de Guitarra anual",precio:"610",moneda:"Yenes",instrumento:"guitarra"},
    {codigo:4,descripción:"Curso de Internacional de Piano anual",precio:"300",moneda:"Dolares",instrumento:"piano"},
];

let conta = 0;
let montoDescuento=.12
for (i in cursos){ 
   let instru = cursos[i]["instrumento"];
   if (instru.toLowerCase() === "guitarra"){
    let precioActual= Number(cursos[i]["precio"]);
    let descuento = (precioActual * montoDescuento);
    console.log(precioActual - descuento + " \n ");
    console.log(" --------------- ");
    conta += 1;
   }   
}
console.log(conta + " descuentos aplicados a " + "Guitarras");
*/
/*
let fullName = "Cesar Augusto cha";
let array = [];
for (i in fullName){
    array.push(fullName[i]);
}
console.log(array);
*/
let fecha = new Date();
let dia = fecha.getDate();
let mes = fecha.getMonth()+ 1;
let anio = fecha.getFullYear()
console.log(dia + " / " + mes + " / " + anio);
let fecha_actual = dia + " / " + mes + " / " + anio

document.getElementById("text-fecha").innerHTML = fecha_actual;
let ine = document.getElementById("text-fecha").innerHTML;
console.log("console: "+ ine);

const email_ = document.getElementById("-mail-");
console.log("Soy de tipo : "+typeof(email_));
for (i in email_){
    if (i === "placeholder"){
        console.log(i);  
    }
} 
const titulo = document.getElementsByTagName('title');
console.log(titulo[0].innerText = 'Lo mejor de la música chulay..');

const p_texto = document.getElementById('p-direccion');
p_texto.classList.add('p-direccion');