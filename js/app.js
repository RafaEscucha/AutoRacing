const productos ={
    gorra: {
        nombre: 'Gorra',
        precio: 10000,
        stock: 50,
        descuento: 0.07
    },
    llavero: {
        nombre: 'Llavero',
        precio: 1000,
        stock: 100,
        descuento: 0.15
    },
    remera: {
        nombre: 'Remera',
        precio: 30000,
        stock: 20,
        descuento: 0.05
    },
    campera: {
        nombre: 'Campera',
        precio: 100000,
        stock: 8,
        descuento: 0.1
    },
    calcomania: {
        nombre: 'Calcomania',
        precio: 500,
        stock: 100,
        descuento: 0
    },
};

const IVA = 0.21

document.addEventListener('DOMContentLoaded', cargarCarrito);

function agregarAlCarrito(nombre, precio, productoKey){
    const producto = productos[productoKey];
    if(producto.stock <=0){
        alert('Producto sin stock');
        return;
    }
    //obtener informacion del carrito
    let carrito=JSON.parse(localStorage.getItem('carrito'))|| [];
    //agregar nuevo producto
    carrito.push({
        nombre: producto.nombre,
        precio: producto.precio,
        productoKey: productoKey
    });
    //reducir stock
    producto.stock--;
    document.getElementById(`stock-${productoKey}`).textContent = producto.stock;
    // Guardar en LS
    localStorage.setItem('carrito',JSON.stringify(carrito));
    //actualizar la vista del carrito
    renderizarCarrito();
}

function renderizarCarrito(){
    const listaCarrito = document.getElementById('lista-carrito');
    const subtotalCarrito = document.getElementById('subtotal-carrito');
    const descuentoCarrito = document.getElementById('descuento-carrito');
    const ivaCarrito = document.getElementById('iva-carrito');
    const totalCarrito = document.getElementById('total-carrito');
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    listaCarrito.innerHTML= '';
    let subtotal=0;
    let descuentoTotal=0;
    // Renderizar cada producto
    carrito.forEach((producto, index) => {
        const productoInfo = productos[producto.productoKey];
        const li = document.createElement('li');
        // Calcular descuento individual
        const descuentoProducto = productoInfo.descuento * producto.precio;
        const precioConDescuento = producto.precio - descuentoProducto;
        li.innerHTML = `
            ${producto.nombre} - $${producto.precio}
            ${productoInfo.descuento > 0 ? 
                `<span class="descuento">(Desc. ${(productoInfo.descuento * 100).toFixed(0)}%):
                -$${descuentoProducto.toFixed(2)})</span>`
                :''}
        `;
        //eliminar el producto
        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.onclick = () => eliminarDelCarrito(index);
        li.appendChild(botonEliminar);
        listaCarrito.appendChild(li);
        // hacer cuentas
        subtotal += producto.precio;
        descuentoTotal += descuentoProducto;
    });
    // Calcular IVa
    const ivaTotal = (subtotal - descuentoTotal) * IVA;
    const total = subtotal - descuentoTotal + ivaTotal;
    //actualizar totales
    subtotalCarrito.textContent = subtotal.toFixed(2);
    descuentoCarrito.textContent = descuentoTotal.toFixed(2);
    ivaCarrito.textContent = ivaTotal.toFixed(2);
    totalCarrito.textContent = total.toFixed(2);
}

function eliminarDelCarrito(index){
    let carrito = JSON.parse(localStorage.getItem('carrito'))||[];
    //recuperar el producto
    const producto = productos[carrito[index].productoKey];
    producto.stock++;
    document.getElementById(`stock-${carrito[index].productoKey}`).textContent = producto.stock;
    carrito.splice(index, 1);
    localStorage.setItem('carrito',JSON.stringify(carrito));
    renderizarCarrito();
}

function vaciarCarrito(){
    const carrito = JSON.parse(localStorage.getItem('carrito'))||[];
    carrito.forEach(item =>{
        const producto = productos[item.productoKey];
        producto.stock++;
        document.getElementById(`stock-${item.productoKey}`).textContent = producto.stock;
        
    });
    localStorage.removeItem('carrito');
    renderizarCarrito();
}

function cargarCarrito(){
    renderizarCarrito();
}

function mostrarCheckout() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    
    // Validar que hay productos en el carrito
    if (carrito.length === 0) {
        alert('El carrito está vacío');
        return;
    }
    
    // Mostrar modal de checkout
    const modal = document.getElementById('checkout-modal');
    modal.style.display = 'flex';
    
    // Actualizar totales en el modal
    const subtotal = parseFloat(document.getElementById('subtotal-carrito').textContent);
    const descuento = parseFloat(document.getElementById('descuento-carrito').textContent);
    const iva = parseFloat(document.getElementById('iva-carrito').textContent);
    const total = parseFloat(document.getElementById('total-carrito').textContent);
    
    document.getElementById('modal-subtotal').textContent = subtotal.toFixed(2);
    document.getElementById('modal-descuento').textContent = descuento.toFixed(2);
    document.getElementById('modal-iva').textContent = iva.toFixed(2);
    document.getElementById('modal-total').textContent = total.toFixed(2);
}

function realizarCompra() {
    // Simular compra
    alert('¡Compra realizada con éxito!');
    
    // Vaciar carrito
    localStorage.removeItem('carrito');
    
    // Cerrar modal
    cerrarCheckout();
    
    // Renderizar carrito vacío
    renderizarCarrito();
}

function cerrarCheckout() {
    const modal = document.getElementById('checkout-modal');
    modal.style.display = 'none';
}


