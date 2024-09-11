function buscarProductos() {
    // Obtener el valor del input de búsqueda
    const input = document.getElementById('search-input');
    const filter = input.value.toLowerCase();
    const cards = document.querySelectorAll('.cards-container .card');

    // Recorrer todas las tarjetas y mostrar/ocultar según la coincidencia
    cards.forEach(card => {
        const h5 = card.querySelector('h5');
        if (h5.innerText.toLowerCase().includes(filter)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    });
}