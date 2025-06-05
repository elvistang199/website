<script>
  // Preview buttons logic
  document.querySelectorAll("button").forEach((btn) => {
    btn.addEventListener("click", () => {
      const preview = btn.nextElementSibling;
      const type = btn.getAttribute("data-type");
      const url = btn.getAttribute("data-url");

      if (!type || !url) return;

      if (preview.innerHTML.trim() !== "") {
        preview.innerHTML = ""; // toggle off
        return;
      }

      let content = "";
      if (type === "doc") {
        content = `<iframe src="${url}" height="500"></iframe>`;
      } else if (type === "image") {
        content = `<img src="${url}" alt="Project image" />`;
      } else if (type === "youtube") {
        content = `<iframe width="560" height="315" src="${url}" frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen></iframe>`;
      }

      preview.innerHTML = content;
    });
  });

  // Music toggle logic with swipe-to-close
  document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.getElementById("toggleMusic");
    const musicPanel = document.getElementById("musicPanel");

    if (toggleBtn && musicPanel) {
      toggleBtn.addEventListener("click", () => {
        musicPanel.classList.toggle("open");
      });

      // Swipe detection variables
      let startX = 0;
      let endX = 0;

      musicPanel.addEventListener("touchstart", (e) => {
        startX = e.touches[0].clientX;
      });

      musicPanel.addEventListener("touchmove", (e) => {
        endX = e.touches[0].clientX;
      });

      musicPanel.addEventListener("touchend", () => {
        const deltaX = endX - startX;
        if (deltaX < -50) {
          // Swiped left
          musicPanel.classList.remove("open");
        }
      });
    }
  });
</script>
