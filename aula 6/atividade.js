// 1 - Faça um while que exiba o valor de 0 até 50;
// Ex: 0, 1, 2, 3...
// 2 - Faça um while que roda de 0 até 10, quando passar 
// do número cinco vai aparecer a mensagem "ALELUIA";
// EX: 0, 1, 2, 3, 4, 5, "ALELUIA", "ALELUIA", 'ALELUIA'. 'ALELUIA'
// 3 - fAÇA UM WHILE QUE VQI EXIBIR OS VALORES DE 0 ATÉ 10 SÓ QUE
//apenas no número 5 ele vai substituir pelo texto 'CINCO'
// Ex: 0, 1, 2, 3, 4, CINCO, 6, 7, 8, 9, 10;

// Dica: Quando você terminar uma ativiodade, comente o código dela com CTRL + ; para 
// continuar a fazer as outras sem atrapalhar a execução do código.

// var contador = 0;
// while (contador <= 50) {
//     console.log(contador); 
//     contador++;
// }

var contador = 0;
while (contador <= 10) {
 if(contador> 5) {
     console.log("ALELUIA");
     } else {  
        console.log(contador); 
    }
        contador++;     
    }
 

    var contador = 0;
    while (contador <=10) {
        if(contador === 5) {
            console.log("CINCO");
        } else {
        console.log(contador);
        }       
    contador++;
}
