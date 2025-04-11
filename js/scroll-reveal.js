document.addEventListener("DOMContentLoaded", () => {
  const posts = document.querySelectorAll(".post");
  const comments = document.querySelectorAll(".comment"); // Selecciona los comentarios

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  // Aplica el estado inicial y observa los artículos
  posts.forEach(post => {
    post.classList.add("hidden"); // estado inicial
    observer.observe(post);
  });

  // Aplica el estado inicial y observa los comentarios
  comments.forEach(comment => {
    comment.classList.add("hidden"); // estado inicial
    observer.observe(comment);
  });
});