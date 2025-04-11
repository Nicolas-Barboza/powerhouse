const toggle = document.getElementById('toggleDescuento');
const precios = document.querySelectorAll('.precio');
const etiquetas = document.querySelectorAll('.etiqueta-plan');

toggle.addEventListener('change', () => {
    const esAnual = toggle.checked;

    precios.forEach((precio, i) => {
        const mensual = parseFloat(precio.dataset.mensual);
        const anual = parseFloat(precio.dataset.anual);
        const descuento = Math.round(100 - (anual / mensual) * 100);

        if (esAnual) {
            precio.innerHTML = `
                <span class="tachado">$${mensual}</span>
                <span class="oferta">$${anual}</span>
                <span class="descuento">-${descuento}%</span>
            `;
            etiquetas[i].textContent = "Anual";
        } else {
            precio.innerHTML = `<span class="oferta">$${mensual}</span>`;
            etiquetas[i].textContent = "Mensual";
        }
    });
});

// Ejecutar al cargar
window.addEventListener('DOMContentLoaded', () => {
    toggle.dispatchEvent(new Event('change'));
});
toggleModo.addEventListener('click', () => {
    console.log("Botón de modo clickeado");
    document.body.classList.toggle('modo-claro');
  });