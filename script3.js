// Get references to the button and the hidden image
const revealButton2 = document.getElementById('revealButton2');
const hiddenImage = document.getElementById('hiddenImage');

// Add an event listener to the button
revealButton2.addEventListener('click', () => {
   // Show the hidden image
   hiddenImage.classList.remove('hidden');
});