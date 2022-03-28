"use strict";

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    }
};

console.log(options.name);

delete options.name; //удаляет name


// перебирает объект и объект внутри объекта

for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let key2 in options[key]) {
            console.log(`Prop ${key2} means ${options[key][key2]}`);
        }
    } else {
        console.log(`Prop ${key} means ${options[key]}`);
    }
}


// получить массив со всеми ключами, чтобы посчитать
console.log(Object.keys(options).lenght);


//встроенный метод в объекте
const options2 = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log("Test");
    }
};

options2.makeTest();
console.log(options2.name);


//деструктуризация
//вытаскивает в качестве отдельной переменной
const {border, bg} = options.colors; 


//копирование объекта, Функция (но не копирует объекты в объекте, только ссылки)
function copy(mainObj) {
    let objCopy = {};
    let keyx;
    for (keyx in mainObj) {
        objCopy[keyx] = mainObj[keyx];
    }
    return objCopy;
}

//слияние объектов

const obj1 = {
    am: 'es',
    th: 24,
    ght: 24,
    col: {
        bor: 'k',
        tt: 'd'
    }
};

const obj2 = {
    n: 'test',
    w: 10,
    height: 10,
    c: {
        bor: 'b',
        bg: 'r'
    }
};

console.log(Object.assign(obj1, obj2));



