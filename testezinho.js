var frase = "A linguagem javascript é fácil"
var pos1 = frase.indexOf("linguagem")

var frase = "A linguagem Javascript é fácil!";
var sub1 = frase.slice(12, 22);
var sub2 = frase.substring(2,11);
var sub3 = frase.slice(25);

var frase = "A linguagem Javascript é fácil!";
var sub = frase.slice(-19, -9);

console.log(sub1)

var frase = "A linguagem Javascript é fácil!";
var novaFrase = frase.replace("Javascript", "HTML");

console.log(novaFrase)

var frase = "Hello World";
var fraseUp = frase.toUpperCase();
var fraseLow = frase.toLowerCase();

console.log(fraseUp, fraseLow)

var lang = "Javascript";
var c = lang.charAt(3);
var cod = lang.charCodeAt(3);

console.log(cod)

var langs = "HTML CSS Javaspring";
var vetl = langs.split("  ");
var fruits = "uva ! laranja ! maçã";
var vet2 = fruits.split("!");

console.log(langs)

var x = 2;
var y = 5;
var z = x + y;

console.log(z);


function soma(num1, num2) {
    return num1 + num2;
}

var a = 5;
var b = 2;
var c = soma(a, b);
document.write(c);

function fatorial(num){
    var fat = 1, i;
    for(i = 2; i <= num; i++){
        fat = fat*i;
}
return fat;
}
var n = prompt("Digite um número:");
n = parseInt(n);
document.write(n + "! = " + fatorial(n));