/*
9. Напишіть 2 цикли.
За допомогою першого передайте парні числа від 1 до 9 у myArray за допомогою циклу for.
За допомогою другого передайте непарні числа від 1 до 9 у myArray за допомогою циклу for.
*/

let myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log('парні числа від 1 до 9')
for(let i=0; i < myArr.length; i +=2){
    console.log(myArr[i]);
}

console.log('непарні числа від 1 до 9')
for(let i=1; i < myArr.length; i +=2){
    console.log(myArr[i]);
}