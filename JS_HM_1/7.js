/*
7. За допомогою switch реалізуйте обчислення виразу, передаючи у switch, як параметр, символ математичної операції.
Математичні операції для обчислення: "+", "-", "*", "/".
Результат виводити в консоль.
*/

let symbol = "*";
let a = 3;
let b = 5;

switch (symbol){
    case "+":
        console.log(a + b);
        break;
    case "-":
        console.log(a - b);
        break;
    case "*":
        console.log(a * b);
        break;
    case "/":
        console.log(a / b);
        break;
    default:
        console.log("It's not a symbol: +, -, *, /");
        break;
}