// Array of general compliments
const generalCompliments = [
    "You're amazing!",
    "You're a ray of sunshine!",
    "You're exceptionally talented!",
    "You're one of a kind!",
    "You make the world a better place!",
    "You're simply the best!",
    "You're a true inspiration!",
    "You're so kind-hearted!",
  ];
  
  // Array of compliments about looks
  const looksCompliments = [
    "You look stunning!",
    "Your style is impeccable!",
    "You have a great sense of fashion!",
    "Your smile is contagious!",
    "You're absolutely beautiful!",
    "You're handsome!",
    "You radiate confidence!",
    "You have an attractive personality!",
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
  