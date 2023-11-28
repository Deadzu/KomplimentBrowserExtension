
// Arrays of compliments in Danish
const generalCompliments = [
  "Du er fantastisk!",
  "Du er en solstråle!",
  "Du er exceptionelt talentfuld!",
  "Du er en af en slags!",
  "Du gør verden til et bedre sted!",
  "Du er simpelthen den bedste!",
  "Du er en sand inspiration!",
  "Du er så hjertevarm!",
];

const looksCompliments = [
  "Du ser fantastisk ud!",
  "Din stil er upåklagelig!",
  "Du har en fantastisk sans for mode!",
  "Dit smil er smittende!",
  "Du er helt smuk!",
  "Du er flot!",
  "Du udstråler selvtillid!",
  "Du har en attraktiv personlighed!",
];

const personalityCompliments = [
  "Du har en utrolig personlighed!",
  "Din positive energi smitter af!",
  "Du er en glæde at være sammen med!",
  "Du er omsorgsfuld og eftertænksom!",
  "Din sans for humor lyser ethvert rum op!",
  "Du har en unik og charmerende personlighed!",
  "Du er en fantastisk ven!",
  "Du er ganske enkelt vidunderlig!",
];

// Rest of the code remains the same...


// Function to generate a random compliment
function generateRandomCompliment(complimentArray) {
  const randomIndex = Math.floor(Math.random() * complimentArray.length);
  return complimentArray[randomIndex];
}

// Function to display a random general compliment
function displayGeneralCompliment() {
  const compliment = generateRandomCompliment(generalCompliments);
  document.getElementById("complimentDisplay").textContent = compliment;
}

// Function to display a random looks compliment
function displayLooksCompliment() {
  const compliment = generateRandomCompliment(looksCompliments);
  document.getElementById("complimentDisplay").textContent = compliment;
}

// Function to display a random personality compliment
function displayPersonalityCompliment() {
  const compliment = generateRandomCompliment(personalityCompliments);
  document.getElementById("complimentDisplay").textContent = compliment;
}

// Attach event listeners to the buttons
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("generalComplimentButton").addEventListener("click", displayGeneralCompliment);
  document.getElementById("looksComplimentButton").addEventListener("click", displayLooksCompliment);
  document.getElementById("personalityComplimentButton").addEventListener("click", displayPersonalityCompliment);
});
