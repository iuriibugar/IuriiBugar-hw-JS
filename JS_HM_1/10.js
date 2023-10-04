/*
10. Оголоcіть та ініціалізуйте змінну total = 0.
Використовуйте цикл for, щоб додати значення кожного елемента масиву myArr до підсумку.
const myArr = [2, 3, 4, 5, 6];
*/

let total = 0;
const myArr = [2, 3, 4, 5, 6];

for(i=0; i < myArr.length ; i++){
    console.log(total + myArr[i]);
}
