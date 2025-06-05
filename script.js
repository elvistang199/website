// Project Preview Button Functionality
document.querySelectorAll('.project-card button').forEach(button => {
  button.addEventListener('click', function () {
    const preview = this.nextElementSibling;
    const type = this.getAttribute('data-type');
    const url = this.getAttribute('data-url');

    let embed = '';
    if (type === 'youtube') {
      embed = `<iframe src="${url}" allowfullscreen></iframe>`;
    } else if (type === 'image') {
      embed = `<img src="${url}" alt="Project Preview" style="max-width:100%; border-radius:10px;">`;
    } else if (type === 'doc') {
      embed = `<iframe src="${url}" allowfullscreen></iframe>`;
    }

    preview.innerHTML = embed;
  });
});

// Toggle Music Sidebar
const toggleBtn = document.createElement('button');
toggleBtn.textContent = '🎵';
toggleBtn.style.position = 'fixed';
toggleBtn.style.top = '100px';
toggleBtn.style.right = '0';
toggleBtn.style.zIndex = '1000';
toggleBtn.style.padding = '10px';
toggleBtn.style.backgroundColor = '#007BFF';
toggleBtn.style.color = 'white';
toggleBtn.style.border = 'none';
toggleBtn.style.borderRadius = '5px 0 0 5px';
toggleBtn.style.cursor = 'pointer';

document.body.appendChild(toggleBtn);

const musicPanel = document.getElementById('musicPanel');

toggleBtn.addEventListener('click', () => {
  musicPanel.classList.toggle('open');
});

// Music panel toggle
const toggleButton = document.getElementById("toggleMusic");
const musicPanel = document.getElementById("musicPanel");

toggleButton.addEventListener("click", () => {
  musicPanel.classList.toggle("open");
});
