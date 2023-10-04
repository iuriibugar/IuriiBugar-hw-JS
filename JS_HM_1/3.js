/*
3. Напишіть конструкцію if, щоб перевіряє, чи значення ціни товару не знаходиться між 1000 та 1900 включно.
Реалізуйте два варіанти, один з оператором НЕ !, а інший без цього оператора.
Результат виводити в консоль.
*/

let num = 1500;

if (num < 1000){
    console.log(`warning ${num} is not in 1000-1900`);
} else if(num > 1900){
    console.log(`warning ${num} is not in 1000-1900`);
} else {
    console.log(`${num} is ok`);
}

if (!(num > 1000)){
    console.log(`warning ${num} is not in 1000-1900`);
} else if(!(num < 1901)){
    console.log(`warning ${num} is not in 1000-1900`);
} else {
    console.log(`${num} is ok`);
}