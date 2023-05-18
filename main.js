let form = document.querySelector("#form");
let input = document.querySelector("#input");
let textHuman = document.querySelector("#text_human");
let textBicycle = document.querySelector("#text_bicycle");
let textCar = document.querySelector("#text_car");
let textAirplane = document.querySelector("#text_airplane");

let piyodaScore = 3.6;
let veloScore = 20.1;
let mashinaScore = 70;
let samalyotScore = 800;

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let inputValue = Number(input.value);
  textHuman.textContent =
    Math.floor(inputValue / piyodaScore) +
    " soat " +
    Math.ceil((inputValue / piyodaScore / piyodaScore) * 60) +
    " daqiqa";
  textBicycle.textContent =
    Math.floor(inputValue / veloScore) +
    " soat " +
    Math.ceil((inputValue / veloScore / veloScore) * 60) +
    " daqiqa";
  textCar.textContent =
    Math.floor(inputValue / mashinaScore) +
    " soat " +
    Math.ceil((inputValue / mashinaScore / mashinaScore) * 60) +
    " daqiqa";
  textAirplane.textContent =
    Math.floor(inputValue / samalyotScore) +
    " soat " +
    Math.ceil((inputValue / samalyotScore / samalyotScore) * 60) +
    " daqiqa";
});