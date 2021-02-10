alert('adad'); // выводит сообщение на экран

const result = confirm('r u ready?'); // показывает окно с кнопкой, выведется
// в консоль

const answer = prompt("have u love?", ""); // в кавычках можно ввести ответ
//в answer запишется ответ
//ответ всегда будет в виде строки

const answer2 = +prompt("how old r u?", "18");
//ответ по умолчанию "yes", в виде числа потому что +

console.log(typeof(answer)); //подскажет, какой тип данных


const answers = [];

answers[0] = prompt('What your name?', '');
answers[1] = prompt('How old r you?', '');

document.write(answers); //пишет прямо на страницу




