/* const a = 100;
var b = 14;
var c = a + b;
console.log(c);

if (a>b)
{
    console.log("A maior que B");
} 
else 
{
    console.log("B maior que A");
} */

//exemplo de switch

/* var fruta = 'melao';
switch (fruta)
{
    case 'abacaxi':
        console.log('Abacaxi');
    case 'banana':
        console.log('Banana');
    case 'melao':
        console.log('outras frutas')
}
 */

//Exemplo com VETOR
/* 
let aFrutas = ['banana', 'pera', 'uva', 'maçã']
for (let i = 0; i < aFrutas.length; i++)
{
    const element = aFrutas[i];
    console.log(element);
}
 */
//Exemplo com function

/* function soma(x, y)
{
    var total = x + y;
    return total;
}

soma (2, 5)
var res = soma (2, 5);
console.log(res);

function fahrenheit(c)
{
    var f =  9 / 5 * c + 32;
    return f;
}
 */
/* var c = parseFloat(prompt('Digite um valor em graus Celsius'))
var f = fahrenheit(c);
document.write(`O valor de Celsius para Fahrenheit é ${f}`); */

/* function Somar(){
    var result;
    let A = parseFloat(document.getElementById("peso").value);
    let B = parseFloat(document.getElementById("h").value);
    result = A / ((B/100)*(B/100));

    if (result<18,5)
    {
        document.getElementById("resultado").innerHTML = `<p class="text">Seu IMC é: <strong>${result}</strong> </p>`
        document.write("Você está abaixo do peso indicado.");
    } 
    else if (result >= 18,5 && result < 25)
    {
        document.write("Você está no peso indicado.");        
    }
    else if (result >= 25 && result < 30)
    {
        document.write("Você está com sobrepeso.");        
    }
    else if (result >=30 && result < 40)
    {
        document.write("Você está em estado de obesidade.");        
    }
    else
    {
        document.write("Você está com obesidade grave.");        
    }
} */

function maximo(vetor) { 
    let max = -Infinity;
    for (let i = 0; i < vetor.length; i++) 
      if (vetor[i] > max) 
        max = vetor[i];
    return max;
  }
let v = [1, 6, 3, 4, 2, 5];
console.log(maximo(v));