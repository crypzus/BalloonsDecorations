const carrito = [];

document.addEventListener("click", (event) => {
  if (event.target.classList.contains("agregar-carrito")) {
    const index = parseInt(event.target.getAttribute("data-index"));
    const productoSeleccionado = productos[index];

    // Verificar si ya está en el carrito con imagen y categoría incluidas
    const existe = carrito.find(
      (item) =>
        item.nombre === productoSeleccionado.nombre &&
        item.color === productoSeleccionado.color &&
        item.imagen === productoSeleccionado.imagen &&
        item.categoria === productoSeleccionado.categoria
    );

    if (existe) {
      existe.cantidad++;
    } else {
      carrito.push({
        ...productoSeleccionado,
        cantidad: 1,
      });
    }
    guardarDatosCarrito();
    actualizarContadorCarrito();
  }
});

// Mostrar el carrito en la lista
function actualizarCarrito() {
  const listaCarrito = document.querySelector("#lista-carrito");
  if (listaCarrito) {
    listaCarrito.innerHTML = "";
    carrito.forEach((producto) => {
      listaCarrito.innerHTML += `
        <li>
          <img src="${producto.imagen}" alt="${producto.nombre}" width="40" height="40">
          ${producto.nombre} ${producto.color} x${producto.cantidad}
        </li>
      `;
    });
  } else {
    console.error("Elemento 'lista-carrito' no encontrado en el DOM");
  }
}

// Mostrar los productos en una mini página o ventana modal
document.querySelector("#ver-carrito").addEventListener("click", () => {
  document.querySelector("#carrito-modal").style.display = "block";
  const detalleCarrito = document.querySelector("#detalle-carrito");
  detalleCarrito.innerHTML = carrito
    .map(
      (producto, index) =>
        `<li><img src="${producto.imagen}" alt="${producto.nombre}" width="40" height="40"> ${producto.nombre} ${producto.color}  x${producto.cantidad} <button class="eliminar-producto" data-index="${index}">❌</button></li>`
    )
    .join("");

  //agregar evento para eliminar productos del carrito
  document.querySelectorAll(".eliminar-producto").forEach((boton) => {
    boton.addEventListener("click", (e) => {
      const indexELimminar = parseInt(e.target.getAttribute("data-index"));
      carrito.splice(indexELimminar, 1); // Eliminar el producto del carrito
      guardarDatosCarrito(); // Guardar los cambios en localStorage
      actualizarContadorCarrito(); // Actualizar el contador del carrito
      document.querySelector("#ver-carrito").click();
    });
  });
});

document.querySelector("#cerrar-carrito").addEventListener("click", () => {
  document.querySelector("#carrito-modal").style.display = "none";
});

// funcion para actulizar el contador carrito de comprar

function actualizarContadorCarrito() {
  const contador = document.querySelector("#contador-carrito");
  const totalProductos = carrito.reduce(
    (acc, producto) => acc + producto.cantidad,
    0
  );

  if (totalProductos > 0) {
    contador.textContent = totalProductos;
    contador.style.display = "inline-block";
  } else {
    contador.style.display = "none";
  }
}

//guardar el carrito en localStorage
function guardarDatosCarrito() {
  localStorage.setItem("carrito", JSON.stringify(carrito)); // Convertir el carrito a JSON y guardarlo
}

// Cargar el carrito desde localStorage al cargar la página
function cargarDatosCarrito() {
  const datosCarrito = localStorage.getItem("carrito"); // Obtener los datos del carrito desde localStorage
  if (datosCarrito) {
    carrito.length = 0; // Limpiar el carrito actual
    carrito.push(...JSON.parse(datosCarrito)); // Agregar los productos del carrito guardado
    actualizarContadorCarrito();
  }
}
// Llamar a cargarDatosCarrito al cargar la página
document.addEventListener("DOMContentLoaded", cargarDatosCarrito);
