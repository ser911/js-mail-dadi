// Array newsletter
var newsletter = ["test-1@boolean.it", "test-2@boolean.it", "test-3@boolean.it", "test-4@boolean.it", "test-5@boolean.it", "test-6@boolean.it", "test-7@boolean.it", "test-8@boolean.it", "test-9@boolean.it", "test-10@boolean.it", "test-11@boolean.it", "test-12@boolean.it", "test-13@boolean.it"];
// Prompt per l'user
var validEmail = prompt("Inserisci il tuo indirizzo email");
// Email autorizzata o non-autorizzata
var confirmedEmail = "L'indirizzo email é valido"
var deniedEmail = " Indirizzo email non valido"
// Ciclo for
for (var i = 0; i < newsletter.length; i++) {

  if (newsletter[i] === validEmail) {
  console.log(confirmedEmail);
  }
}
// Accesso negato
if (newsletter[i] != validEmail){
  console.log(deniedEmail);
}
