// Prueba de JavaScript: cambia los retos y el tema de la página.
const retos = [
  "Crea una función nueva en Python y súbela con un commit.",
  "Practica 15 minutos de groove con el bajo de 5 cuerdas.",
  "Intenta encestar 20 tiros libres y registra tu resultado.",
  "Juega una partida de The Binding of Isaac con un objetivo distinto.",
  "Agrega una nueva tarjeta a esta página y haz tu segundo commit.",
  "Aprende un riff sencillo y tócalo a tres velocidades diferentes."
];

const challengeBtn = document.querySelector("#challengeBtn");
const challengeText = document.querySelector("#challengeText");
const themeBtn = document.querySelector("#themeBtn");
let ultimoReto = -1;

challengeBtn.addEventListener("click", () => {
  let indice;
  do {
    indice = Math.floor(Math.random() * retos.length);
  } while (indice === ultimoReto && retos.length > 1);
  ultimoReto = indice;
  challengeText.textContent = retos[indice];
});

themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");
  themeBtn.textContent = document.body.classList.contains("light") ? "☾" : "☀";
});
