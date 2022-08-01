"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?','');

const personalMobieDB = {
    count: numberOfFilms,
    movies: {},
    ectors: {},
    ganres: [],
    privat: false

};

const a = prompt('Один из просмотренных фильмов?',''),
      b = prompt('На сколько оцените его ?', ''),  
      c = prompt('Один из просмотренных фильмов?',''),
      d = prompt('На сколько оцените его ?', '');
      
personalMobieDB.movies[a] = b;
personalMobieDB.movies[c] = d;

console.log(personalMobieDB);
console.log(personalMobieDB);






