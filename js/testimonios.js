document.addEventListener("DOMContentLoaded", () => {
    const testimonios = document.querySelectorAll('.testimonio');
    let indiceActual = 0;
  
    const cambiarTestimonio = () => {
      testimonios[indiceActual].classList.remove('activo'); // Oculta el testimonio actual
      indiceActual = (indiceActual + 1) % testimonios.length; // Pasa al siguiente
      testimonios[indiceActual].classList.add('activo'); // Muestra el siguiente testimonio
    };
  
    setInterval(cambiarTestimonio, 5000); // Cambia cada 5 segundos
  });