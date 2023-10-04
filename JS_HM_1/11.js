/*
11. Напишіть код, котрий виведе в консоль кожен піделемент в arr по одному.

const arr = [ [1, 2], [3, 4], [5, 6] ];

    Console output:
    1
    2
    3
    4
    5
    6
*/

const arr = [ [1, 2], [3, 4], [5, 6] ];


for (let i=0; i<arr.length; i++){
    //console.log(arr[i])
    let smallArr = arr[i];
    for (let j=0; j<smallArr.length; j++){
    console.log(smallArr[j])
    }
}