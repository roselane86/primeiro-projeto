// 1 - Algoritmo que roda X vezes e exibe quais valores são par ou impar.
var contador = 0;

while(contador <=10){
     if(contador % 2 === 0){
         console.log("O valor " + contador + " é par.");
     } else {
          console.log("O valor " + contador + " é impar.");
     }
     contador++
}