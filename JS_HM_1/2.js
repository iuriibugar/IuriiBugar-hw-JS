/*
2. Напишіть умовну конструкцію if, що перевіряє, чи знаходиться значення ціни товару між 1000 та 1900 включно.
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


function checkNumberIn (num) {
    if (num < 1000){
        console.log(`warning ${num} is not in 1000-1900`);
    } else if(num > 1900){
        console.log(`warning ${num} is not in 1000-1900`);
    } else {
        console.log(`${num} is ok`);
    }
}

checkNumberIn(num);