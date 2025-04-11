document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll('.contador'); // Selecciona todos los contadores
  const speed = 200; // Velocidad de la animación

  counters.forEach(counter => {
      const updateCount = () => {
          const target = +counter.getAttribute('data-target'); // Obtiene el valor objetivo
          const count = +counter.innerText; // Convierte el texto actual a número
          const increment = target / speed; // Incremento por iteración

          if (count < target) {
              counter.innerText = Math.ceil(count + increment); // Incrementa el contador
              setTimeout(updateCount, 10); // Llama a la función nuevamente
          } else {
              counter.innerText = target; // Asegura que el valor final sea el objetivo
          }
      };

      updateCount(); // Inicia la animación
  });
});