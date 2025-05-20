// Get references to all buttons
const revealButtons = document.querySelectorAll('.revealButton');

// Add event listeners to all buttons
revealButtons.forEach(button => {
   button.addEventListener('click', () => {
       // Get the Google Doc URL from the data attribute
       const docUrl = button.dataset.docUrl;
       
       // Open the Google Doc URL in a new tab/window
       window.open(docUrl, '_blank');
   });
});