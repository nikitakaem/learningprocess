"use strict";
const num = 60

if (num < 50) {           //boolen значение
    console.log("Low");
} else if (num > 70) {
    console.log("Much");
} else {
    console.log("Ok");
}

//тернарный оператор - 3 аргумента ? : 
(num === 50) ? console.log("Ok!") : console.log("Error");

const num2 = 10;
//switch проверяет по списку на false/true
switch (num) {
    case 4:
        console.log("No")
        break;
    case 3:
        console.log("No")
        break;
    default:
        console.log("No completely")
        break;
}
