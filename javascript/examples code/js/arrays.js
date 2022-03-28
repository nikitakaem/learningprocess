"use strict";

const arr = [1, 2, 5, 10, 12]

arr.pop(); //удаляет последний элемент из массива
arr.push(13); //добавляет в массив в конец значение

console.log(arr);


//перебирает все элементы в массиве
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
//for of - перебирает значения в массиве
//for in - перебирает индексы в массиве
for (let value of arr) {
    console.log(value);
}

arr[99] = 0; //добавляет в 99 индекс 0
//остальные будут пустыми, нумерация от lenght нарушится


//метод-функция пройдет по каждому элементу массива
arr.forEach(function(item, i, arr) {
   console.log(`${i}: ${item} inside array ${arr}`); 
});

//формирование массива на основании строк
const str = prompt("");
const products = str.split(", ");
console.log(products.join(", ")); //обратно склеивает в строку через , 

//сортирует по алфавиту (только как строки)
products.sort();

//чистое копирование массива без ссылок
const arr1 = [0, 6, 12, 22];
const arr2 = arr1.slice();



