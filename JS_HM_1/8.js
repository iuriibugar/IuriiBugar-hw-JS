/*
8. Використовуючи цикл for перемістити значення від 1 до 5 у масив myArray.
*/

let myArray = []

for(let i=1; i<6; i++){
    console.log(i);
    myArray++
}

fnArrayReturn = () => {
    for(let i=1; i<100; i++){
        if(i === 6){
            return;
        }
        console.log(i);
    }
}

fnArrayReturn();