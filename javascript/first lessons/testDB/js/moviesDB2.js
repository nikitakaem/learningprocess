/* Задание на урок:
1) Автоматизировать вопросы пользователю про фильмы при помощи цикла
2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
отменить ответ или ввести название фильма длинее, чем 50 символов. 
Если это происходит - 
возвращаем пользователя к вопросам опять
3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - 
вывести сообщение "Просмотрено довольно мало фильмов", 
если от 10 до 30 - "Вы классический зритель", а если больше - 
"Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"
4) Потренироваться и переписать цикл еще двумя способами*/


"use strict";


let numberOfFilms = +prompt('How much movies you watched?', ''),
    personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false 
    };

let i = 0;

while (i < 2) {
    const a = prompt('Which last film you watched?', ''),
          b = prompt('How much rating you give for it?', '');
    if (a != '' && a != null && a.length < 50 && b != '') {
        personalMovieDB.movies[a] = b;
    } else {
        i--;
    }
    i++;
}

console.log(personalMovieDB);


/*
do {
    const a = prompt('Which last film you watched?', ''),
          b = prompt('How much rating you give for it?', '');
    if (a != '' && a != null && a.length < 50 && b != '') {
        personalMovieDB.movies[a] = b;
    } else {
        i--;
    }
    i++;
}
while (i < 2);
console.log(personalMovieDB);
/*
/*
let numberOfFilms = +prompt('How much movies you watched?', '');
if (numberOfFilms < 10 && numberOfFilms != 0) {
    alert('Not much films watched');
} else if (numberOfFilms > 30) {
    alert('You are filmman');
} else  if (10 < numberOfFilms < 30)  {
    alert('You are classic watcher');  
} else {
    alert('error');
}
let personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false 
    };
for (let i = 0; i < 2; i++) {
    const a = prompt('Which last film you watched?', ''),
          b = prompt('How much rating you give for it?', '');
    if (a.length < 50 && a.length != 0 && a != null && a != '' && b != '') {
        personalMovieDB.movies[a] = b;
    } else {
        i--;
    } 
}
console.log(personalMovieDB);
*/