/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const palos = ["diamond", "heart", "club", "spade"];
const cartas = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];

let generateCard = () => {
  let paloIndex = palos[Math.floor(Math.random() * palos.length)];
  let cartasIndex = cartas[Math.floor(Math.random() * cartas.length)];

  let paloHTML = "";
  switch (paloIndex) {
    case "diamond":
      paloHTML = "♦";
      break;
    case "heart":
      paloHTML = "♥";
      break;
    case "club":
      paloHTML = "♣";
      break;
    default:
      paloHTML = "♠";
  }
  let cardHTML = `
  <div class="card ${paloIndex}"> 
    <div class="topIcon">${paloHTML}</div>
    <div class="number">${cartasIndex}</div>
    <div class="bottomIcon">${paloHTML}</div>
  </div>
  `;
  document.querySelector("#cardContainer").innerHTML = cardHTML;
};

let interval = () => {
  clearInterval(interval);
  let interval = setInterval(generateCard, 10000);
};

window.onload = function() {
  //write your code here
  document
    .querySelector("#generateCard")
    .addEventListener("click", () => generateCard());
  generateCard();
  interval();
};
