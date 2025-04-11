const form = document.getElementById('contactForm');
const spinner = document.getElementById('spinner');
const modal = document.getElementById('modalConfirmacion');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Verifica si el formulario es válido
    if (!form.checkValidity()) {
        form.reportValidity();
        return;
    }

    // Muestra el spinner
    spinner.style.display = 'block';

    // Simula un retraso para enviar el formulario
    setTimeout(() => {
        spinner.style.display = 'none'; // Oculta el spinner
        modal.style.display = 'flex'; // Muestra el modal
        form.reset(); // Reinicia el formulario
    }, 2000);
});

function cerrarModal() {
  modal.style.display = 'none';
}