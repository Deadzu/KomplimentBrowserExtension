// Array of general compliments
const generalCompliments = [
  "Du er utrolig kreativ!",
  "Din intelligens imponerer mig!",
  "Dit smil kan lyse op i ethvert rum!",
  "Du har en fantastisk sans for humor!",
  "Din venlighed er smittende!",
  "Du er en inspiration for andre!",
  "Dit positive sind er en glæde at være omkring!",
  "Du har en imponerende arbejdsmoral!",
  "Din evne til at løse problemer er bemærkelsesværdig!",
  "Du udstråler en utrolig selvtillid!"
  ];
  
  // Array of compliments
  const looksCompliments = [
    "Du er virkelig god til at være irriterende!",
    "Din manglende taktfilter gør livet interessant!",
    "Du er en sand mester i at teste tålmodigheden!",
    "Din beskedenhed kender ingen grænser!",
    "At tale med dig er som at løse en gåde - forvirrende, men nogle gange sjovt!",
    "Din selvsikkerhed er virkelig imponerende, på en ubehagelig måde!",
    "Du er som et levende eksempel på Murphy's lov!",
    "Din evne til at ignorere andres synspunkter er en gave!",
    "Jeg har aldrig mødt nogen så unik som dig, og det siger jeg ikke som et kompliment!",
    "Din charme er lige så skarp som en kniv!"
  ];
  
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
  
  // Attach event listeners to the buttons
  document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("generalComplimentButton").addEventListener("click", displayGeneralCompliment);
    document.getElementById("looksComplimentButton").addEventListener("click", displayLooksCompliment);
  });
  