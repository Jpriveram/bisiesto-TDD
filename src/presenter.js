import esbisiesto from "./bisiesto.js"; 

const year = document.querySelector("#anio");
const form = document.querySelector("#bisiesto-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const yearNumber = parseInt(year.value); 
  const isbisiesto = esbisiesto(yearNumber); 

  div.innerHTML = "<p>" + (isbisiesto ? yearNumber + " es bisiesto." : yearNumber + " no es bisiesto.") + "</p>";
});
