document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const categoria = urlParams.get("categoria");

  const tags = document.querySelectorAll(".tag");
  const posts = document.querySelectorAll(".post");

  if (categoria) {
    // Encuentra el botón correspondiente y activa el filtro
    const tagButton = document.querySelector(`.tag[data-category="${categoria}"]`);
    if (tagButton) {
      // Desmarcar el botón "Todos"
      const allButton = document.querySelector(`.tag[data-category="todos"]`);
      if (allButton) {
        allButton.classList.remove("active");
      }

      // Marcar el botón de la categoría seleccionada
      tagButton.classList.add("active");

      // Filtrar las publicaciones
      posts.forEach(post => {
        if (categoria === "todos" || post.getAttribute("data-category") === categoria) {
          post.style.display = "block";
        } else {
          post.style.display = "none";
        }
      });
    }
  }
  // Lógica existente para el filtro manual
  tags.forEach(tag => {
    tag.addEventListener("click", () => {
      const category = tag.getAttribute("data-category");

      // Actualiza la clase activa
      tags.forEach(t => t.classList.remove("active"));
      tag.classList.add("active");

      // Filtra las publicaciones
      posts.forEach(post => {
        if (category === "todos" || post.getAttribute("data-category") === category) {
          post.style.display = "block";
        } else {
          post.style.display = "none";
        }
      });
    });
  });
});