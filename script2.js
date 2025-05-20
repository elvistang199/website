// Get references to the button and the video container
const revealButton = document.getElementById('revealButton');
const youtubeVideo = document.getElementById('youtubeVideo');

// Add an event listener to the button
revealButton.addEventListener('click', () => {
   // Replace the video ID with your own YouTube video ID
   const videoId = 'your-video-id';
   
   // Create the YouTube embed URL
   const embedUrl = `https://www.youtube.com/embed/PU2H38xfZKs`;
   
   // Set the video container HTML to the YouTube embed iframe
   youtubeVideo.innerHTML = `<iframe width="560" height="315" src="${embedUrl}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
   
   // Show the video container
   youtubeVideo.style.display = 'block';
});
