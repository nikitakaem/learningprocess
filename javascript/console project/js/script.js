

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt("How much movies you have watch?", "");
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("How much movies you have watch?", "");
        }
    },
    remeberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt("What is last movie?", ""),
                  b = prompt("How much rating?", "");
                  
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                
            }
        }
    }, 
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log("Too low movies watched");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Normal"); 
        } else if (personalMovieDB.count > 30) {
            console.log("Very good!");
        } else {
            console.log("Error");
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`What is your fav genre under number ${i}?`, "");
            if (genre === '' || genre == null) {
                console.log('Uncorrect');
                i--; 
            } else {
                personalMovieDB.genres[i - 1] = genre;
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Fav genre ${i + 1} - is ${item}`);
        });
        
    }
};
