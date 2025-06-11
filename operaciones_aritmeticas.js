const titulo = document.getElementById("titl");
//console.log(titulo);
titulo.textContent = "Operaciones Aritméticas";
//console.log(titulo.textContent);
for (i in titulo){
    if (i === "textContent"){
        console.log(i);
        titulo.textContent = "Operaciones Aritméticas"
        console.log(titulo.textContent);
    }
}

const num1 = document.getElementById("nro1").value;
const num2 = document.getElementById("nro2").value;
//console.log(num1);
//console.log(num2);
/*Suma */
const resultadoSuma = document.getElementById("resultadoSuma");
resultadoSuma.value = Number(num1) + Number(num2);

/*Resta */
const resultadoResta = document.getElementById("resultadoResta");
resultadoResta.value = Number(num1) - Number(num2);

/*Multiplicacion */
const resultadoMulti = document.getElementById("resultado-multipli");
resultadoMulti.value = Number(num1) * Number(num2);

/*División */
let reg = /ab+c/;
let es_cero = num2;
reg = /0/;
console.log("expresion regular es: " + reg.test(es_cero) );
if (reg.test(es_cero)){
   //console.log("no se puede dividir entre (0)");
    const body= document.getElementsByTagName('body');
    body[0].classList.add('darkBackGround');    
    alert("No se puede dividir entre cero..");
   }

else{
   const resultado_divi = document.getElementById("resultado-divi");
   resultado_divi.value = (Number(num1) / Number(num2)).toFixed(2);
}
