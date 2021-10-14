/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. 
Представьте, что перед вами стоит задача переписать его так, 
чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий
или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять 
свойство privat. 
Если оно false - он переключает его в true, если true - переключает в false. 
Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена"
 или оставлять пустую строку. Если он это сделал - 
 возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

const personalMovieDB = {
        count: 0,
        movies: {},
        actors: {},
        genres: [],
        privat: false,
        start: function () {
            personalMovieDB.count = prompt('How much movies you watched?', '');
            while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
                personalMovieDB.count = +prompt('How much movies you watched?', '');
            }
        },
        rememberMyFilms: function () {
            for (let i = 0; i < 2; i++) {
                const a = prompt('Which last film you watched?', ''),
                      b = prompt('How much rating you give for it?', '');
                if (a.length < 50 && a.length != 0 && a != null && a != '' && b != '') {
                    personalMovieDB.movies[a] = b;
                } else {
                    i--;
                } 
            }
        },
        detectPersonalLevel: function () {
            if (personalMovieDB.count < 10 && personalMovieDB.count != 0) {
                console.log('Not much films watched');
            } else if (personalMovieDB.count > 30) {
                console.log('You are filmman');
            } else  if (10 < personalMovieDB.count < 30)  {
                console.log('You are classic watcher');  
            } else {
                console.log('error');
            }
        },
        showMyDB: function (hidden) {
            if (!hidden) {
                console.log(personalMovieDB);
            }
        },
        writeYourGenres: function () {
            for (let i = 1; i < 4; i++) {
                personalMovieDB.genres[i - 1] = prompt(`Your favorite genre N ${i}`);
                while (personalMovieDB.genres[i - 1] == null || personalMovieDB.genres[i - 1] == '') {
                    personalMovieDB.genres[i - 1] = prompt(`Your favorite genre N ${i}`);    
                }
            }
            personalMovieDB.genres.forEach((item, i) => {
                console.log(`Lovely genre ${i + 1}: ${item}`);
            });
        },
        toggleVisibleMyDB: function () {
            if (personalMovieDB.privat) {
                personalMovieDB.privat = false; 
            } else {
                personalMovieDB.privat = true;
            }
        }
    };


personalMovieDB.writeYourGenres();

