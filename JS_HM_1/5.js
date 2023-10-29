/*
5. Задано 3 числа (a, b, c), які не рівні між собою.
Визначити середнє між цими трьома числами
(не середнє арифметичне значення, а яке з трьох заданих чисел среднє за значенням) використовуючи оператор if-else.
Використати вкладені оператори if
Результат виводити в консоль.
*/

let a = 6;
let b = 2;
let c = 4;

let avg

if ((a > b && a < c) || (a < b && a > c)) {
        avg = a;
    } else if ((b > a && b < c) || (b < a && b > c)){
        avg = b;
    } else
        avg = c;
    
    console.log(avg)


fnAvgFromNumbers = (a, b, c) => {
    let avg1
    if ((a > b && a < c) || (a < b && a > c)) {
        avg1 = a;
    } else if ((b > a && b < c) || (b < a && b > c)){
        avg1 = b;
    } else
        avg1 = c;
    
    console.log(avg1)
}

fnAvgFromNumbers(a, b, c);