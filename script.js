let carrito = [];
let total = 0;

function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    total += precio;
    actualizarInterfaz();
}

function actualizarInterfaz() {
    const lista = document.getElementById('lista-carrito');
    const totalTxt = document.getElementById('total-precio');
    
    lista.innerHTML = '';
    carrito.forEach(item => {
        let li = document.createElement('li');
        li.textContent = `${item.nombre} - $${item.precio}`;
        lista.appendChild(li);
    });
    
    totalTxt.textContent = total;
}

// Estructura base por si deseas conectar las funciones de tu Bot de Telegram más adelante
function enviarPedidoTelegram() {
    if(carrito.length === 0) {
        alert("El carrito está vacío");
        return;
    }
    alert("Pedido procesado. ¡Listo para enviar los datos!");
    // Aquí se integraría el fetch hacia tu webhook o API de Flask de tu proyecto
}
