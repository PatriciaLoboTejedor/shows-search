"use strict";

console.log(">> Ready :)");

// Constante globales
const form = document.querySelector(".js-form");
const inputSearch = document.querySelector(".js-inputText");
const inputButton = document.querySelector(".js-inputButton");
const favoritesSection = document.querySelector(".js-favorites");
const showsList = document.querySelector(".js-showsList");

let searchText = "";
const imgDefault = `https://via.placeholder.com/210x295/ffffff/666666/?text=TV`;

// Array vacio que llenaré con los datos de la API
let arrayData = [];
// Array vacio que llenaré con los favoritos del usuario
let arrayFavoriteShows = [];
