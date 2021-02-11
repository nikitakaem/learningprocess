'use strict';

function showFirstMessage(text) {
    console.log(text);
}

showFirstMessage('Yees');

function calc(a, b) {
    return (a + b);
}

console.log(calc(4, 8));

//функция объявления создается только, когда до нее дойдет поток
//остальные функции считываются сразу со всего кода, а потом уже сам код
const logger = function() {
    console.log('Hello');
};

logger();

//функция не имеет вызова
const calc2 = (a, b) => a + b;






//callback funcs

function first() {
    setTimeout(function() {
        console.log(1);
    }, 500);   ///выдает задержку срабатывания в 500мс
}

function second() {
    console.log(2);
}

first();
second();  //вторая функция закончит выполнение раньше

function learning(lang, callback) {
    console.log(`Learning: ${lang}`);
    callback();
}

/// вызов функции с двумя аргументами, второй аргумент - вложенная функция
learning("JavaScript", function() {
    console.log('I got it')
});

function done() {
    console.log('I got it');
}

//в данном случае done передается без скобок, тк не вызывается сразу
//вызывается уже в самой функции learning через callback()
learning('JavaScript', done);