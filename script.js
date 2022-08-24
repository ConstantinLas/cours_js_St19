'use strict';


let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", " ");
console.log(numberOfFilms);

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: true
};

let quastian = [];
let filmScore = [];
quastian[0] =  prompt("Один из последних просмотренных фильмов?'", " ");
filmScore[0] = prompt("На сколько оцените его?", " ");

quastian[1] =  prompt("Один из последних просмотренных фильмов?'", " ");
filmScore[1] = prompt("На сколько оцените его?", " ");

personalMovieDB.movies[quastian[0]] = filmScore[0];
personalMovieDB.movies[quastian[1]] = filmScore[1];

console.log(personalMovieDB);