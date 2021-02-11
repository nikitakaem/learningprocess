"use strict";

console.log(5 +"4");
//превратит 4 в число

let incr = 10, decr = 10;

incr++; //прибавляет 1
decr--; //отнимает 1

console.log(--incr);
console.log(++decr); // так сработает действие

console.log(incr--);
console.log(decr++); //так не сработает

console.log(2*4 == 8); //вопрос, равно ли действие результату, вернт true
console.log(2*4 == '8'); //то же самое true
console.log(2*4 === '8'); //строгое соотвествие, результат false

const isChecked = true, isClose = true;
console.log(isChecked && isClose); //результат true, если одно из значений отличается - false
//&& - оператор И
// || - оператор ИЛИ
console.log(isChecked || isClose); //вернет true
console.log(isChecked || !isClose); // !изменяет значение на обратное

