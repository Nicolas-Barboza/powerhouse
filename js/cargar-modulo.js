window.addEventListener("DOMContentLoaded", () => {
  const cargarFragmento = (selector, archivo) => {
    fetch(archivo)
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

  // Actualizá las rutas según tu carpeta
  cargarFragmento("#header-placeholder", "html/header.html");
  cargarFragmento("#footer-placeholder", "html/footer.html");
});
