window.addEventListener("DOMContentLoaded", () => {
  const cargarFragmento = (selector, archivo) => {
    return fetch(archivo)
      .then(response => {
        if (!response.ok) {
          throw new Error(`No se pudo cargar ${archivo}`);
        }
        return response.text();
      })
      .then(data => {
        document.querySelector(selector).innerHTML = data;
      })
      .catch(error => {
        console.error("Error al cargar fragmento:", error);
      });
  };

  // Cargar los módulos
  Promise.all([
    cargarFragmento("#header-placeholder", "html/header.html"),
    cargarFragmento("#footer-placeholder", "html/footer.html")
  ]).then(() => {
    // Asignar el evento al botón de modo después de cargar los módulos
    const toggleContainer = document.querySelector(".toggle-container");
    if (toggleContainer) {
      toggleContainer.addEventListener("click", () => {
        document.body.classList.toggle("modo-oscuro");
        document.body.classList.toggle("modo-claro");
        toggleContainer.classList.toggle("night"); // Alterna la clase para la animación
      });
    }
  });
});