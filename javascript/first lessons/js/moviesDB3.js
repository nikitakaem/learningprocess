/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. 
Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать 
на вопрос "Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ 
записывается в массив данных genres

P.S. Функции вызывать не обязательно*/

'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = prompt('How much movies you watched?', '');
    
    while (numberOfFilms == '' || numberOfFilms == null || 
    isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('How much movies you watched?', '');
    }
}

start();

const personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false 
    };

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Which last film you watched?', ''),
              b = prompt('How much rating you give for it?', '');
        if (a.length < 50 && a.length != 0 && a != null && a != '' && b != '') {
            personalMovieDB.movies[a] = b;
        } else {
            i--;
        } 
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10 && personalMovieDB.count != 0) {
        console.log('Not much films watched');
    } else if (personalMovieDB.count > 30) {
        console.log('You are filmman');
    } else  if (10 < personalMovieDB.count < 30)  {
        console.log('You are classic watcher');  
    } else {
        console.log('error');
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB();

function writeYourGenres() {
    for (let i = 1; i < 4; i++) {
        let genre = prompt(`Your favorite genre N ${i}`);
        personalMovieDB.genres[i - 1] = genre;
        }
}

writeYourGenres();

console.log(personalMovieDB);
