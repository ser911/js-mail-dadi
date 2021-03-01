var playerScore = Math.floor(Math.random() * 6) + 1;
console.log(playerScore)
alert("Il tuo punteggio è " + playerScore)
var cpuScore = Math.floor(Math.random() * 6 ) +1;
console.log(cpuScore);
alert("Il punteggio della cpu è " + cpuScore)

if (playerScore > cpuScore) {
  alert("Hai vinto!");
}
else if (playerScore === cpuScore) {
  alert("Pareggio");
}
else{
  alert("Hai perso!");
}
