"use strict";

//STRINGS
const str = "test norm";

console.log(str.lenght); //length покажет 9, кол-во символов
console.log(str[2]); //покажет s, но строку поменять нельзя
console.log(str.toUpperCase()); //покажет TEST NORM, но не изменит на TEST
//аналог .toUpperCase()
console.log(str.indexOf("norm")); //покажет 6 (с 6ого символа начинается)
console.log(str.slice(5, 11)); //покажет norm (срезает с 5 до 11(необ.) символа)
console.log(str.substring(5, 11)); //аналогично
console.log(str.substr(5, 4));// второй аргумент вырезает кол-во символов

//INTEGER
const num = 12.2;
const test = "12.2px"

console.log(Math.round(num)); //округлит до 12
console.log(parseInt(test)); //переведт строку в число, 12
console.log(parseFloat(test)); //аналогично, но 12.2






