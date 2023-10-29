/*
6. Задано номер дня тижня.
За заданим номером вивести назву дня тижня використовуючи switch.
Результат виводити в консоль.
*/

let dayOfWeek = 7;

switch(dayOfWeek){
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log(`It's not a number of the week`);
        break;
}


fnDayOfWeek = (dayOfWeek) => {
    switch(dayOfWeek){
        case 1:
            console.log('Monday');
            break;
        case 2:
            console.log('Tuesday');
            break;
        case 3:
            console.log('Wednesday');
            break;
        case 4:
            console.log('Thursday');
            break;
        case 5:
            console.log('Friday');
            break;
        case 6:
            console.log('Saturday');
            break;
        case 7:
            console.log('Sunday');
            break;
        default:
            console.log(`It's not a number of the week`);
            break;
    }
}

fnDayOfWeek(dayOfWeek);