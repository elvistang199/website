document.querySelectorAll("button").forEach((btn) => {
  btn.addEventListener("click", () => {
    const preview = btn.nextElementSibling;
    const type = btn.getAttribute("data-type");
    const url = btn.getAttribute("data-url");

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
