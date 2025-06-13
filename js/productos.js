// ----------------------------------lista de productos----------------------------------------------------

const productos = [
  // Globos Latex Básicos
  {
    nombre: "Paquete globos latex",
    precio: 15,
    imagen: "img/productos/globlos_latex/globo-latex-amarillo.jpg",
    categoria: "Globos Latex basico",
    color: "Amarillo",
    seccion: ["Populares", "productos"],
  },
  {
    nombre: "Paquete globos latex",
    precio: 15,
    imagen: "img/productos/globlos_latex/globo-latex-azul.jpg",
    categoria: "Globos Latex basico",
    color: "Azul",
    seccion: "Más vendidos",
  },
  {
    nombre: "Paquete globos latex",
    precio: 15,
    imagen: "img/productos/globlos_latex/globo-latex-verde.jpg",
    categoria: "Globos Latex basico",
    color: "Verde",
    seccion: ["Ofertas especiales", "productos"],
  },
  {
    nombre: "Paquete globos latex",
    precio: 15,
    imagen: "img/productos/globlos_latex/globo-latex-marron.jpg",
    categoria: "Globos Latex basico",
    color: "Marrón",
    seccion: ["Populares", "productos"],
  },
  {
    nombre: "Paquete globos latex",
    precio: 15,
    imagen: "img/productos/globlos_latex/globo-latex-rojo.jpg",
    categoria: "Globos Latex basico",
    color: "Rojo",
    seccion: "Más vendidos",
  },
  // Globos Latex Cromados
  {
    nombre: "Paquete globos latex cromados",
    precio: 15,
    imagen: "img/productos/globos_latex_cromados/fucsia-barny.jpg",
    categoria: "Globos Latex Cromados",
    color: "Fucsia barny",
    seccion: ["Populares", "productos"],
  },
  {
    nombre: "Paquete globos latex cromados",
    precio: 15,
    imagen: "img/productos/globos_latex_cromados/azul.jpg",
    categoria: "Globos Latex Cromados",
    color: "Azul",
    seccion: ["Más vendidos", "productos"],
  },
  {
    nombre: "Paquete globos latex cromados",
    precio: 15,
    imagen: "img/productos/globos_latex_cromados/dorado.jpg",
    categoria: "Globos Latex Cromados",
    color: "Dorado",
    seccion: ["Ofertas especiales", "productos"],
  },
  {
    nombre: "Paquete globos latex cromados",
    precio: 15,
    imagen: "img/productos/globos_latex_cromados/turqueza.jpeg",
    categoria: "Globos Latex Cromados",
    color: "Turqueza",
    seccion: "Populares",
  },
  {
    nombre: "Paquete globos latex cromados",
    precio: 15,
    imagen: "img/productos/globos_latex_cromados/verde.jpg",
    categoria: "Globos Latex Cromados",
    color: "Verde",
    seccion: "Más vendidos",
  },
  // Globos Latex Perlados
  {
    nombre: "Paquete globos latex perlados",
    precio: 15,
    imagen: "img/productos/globos_Latex_perlado/palo_rosa_perlado.jpg",
    categoria: "Globos Latex Perlados",
    color: "Amarillo",
    seccion: "Populares",
  },
  {
    nombre: "Paquete globos latex perlados",
    precio: 15,
    imagen: "img/productos/globos_Latex_perlado/palo_rosa_perlado.jpg",
    categoria: "Globos Latex Perlados",
    color: "Palo rosa",
    seccion: "Más vendidos",
  },
  {
    nombre: "Paquete globos latex perlados",
    precio: 15,
    imagen: "img/productos/globos_Latex_perlado/palo_rosa_perlado.jpg",
    categoria: "Globos Latex Perlados",
    color: "Azul",
    seccion: "Ofertas especiales",
  },
  {
    nombre: "Paquete globos latex perlados",
    precio: 15,
    imagen: "img/productos/globos_Latex_perlado/palo_rosa_perlado.jpg",
    categoria: "Globos Latex Perlados",
    color: "Rojo",
    seccion: "Populares",
  },
  {
    nombre: "Paquete globos latex perlados",
    precio: 15,
    imagen: "img/productos/globos_Latex_perlado/palo_rosa_perlado.jpg",
    categoria: "Globos Latex Perlados",
    color: "Beige",
    seccion: "Más vendidos",
  },
  // Globos Latex Retros
  {
    nombre: "Paquete globos latex retros",
    precio: 15,
    imagen: "img/productos/globos_latex_retro/verde-militar.jpeg",
    categoria: "Globos Latex Retros",
    color: "Verde militar",
    seccion: "Ofertas especiales",
  },
  {
    nombre: "Paquete globos latex retros",
    precio: 15,
    imagen: "img/productos/globos_latex_retro/azul_noche.jpg",
    categoria: "Globos Latex Retros",
    color: "Azul noche",
    seccion: "Populares",
  },
  {
    nombre: "Paquete globos latex retros",
    precio: 15,
    imagen: "img/productos/globos_latex_retro/lila.jpg",
    categoria: "Globos Latex Retros",
    color: "Lila",
    seccion: "Más vendidos",
  },
  {
    nombre: "Paquete globos latex retros",
    precio: 15,
    imagen: "img/productos/globos_latex_retro/verde-agua.jpg",
    categoria: "Globos Latex Retros",
    color: "Verde agua",
    seccion: "Ofertas especiales",
  },
  {
    nombre: "Paquete globos latex retros",
    precio: 15,
    imagen: "img/productos/globos_latex_retro/amarillo.jpg",
    categoria: "Globos Latex Retros",
    color: "Amarillo",
    seccion: "Más vendidos",
  },
];

// funcion para mostrar los productos en el index.html
function cargarProductos(seccion) {
  const contenedor = document.getElementById("productos-container");
  contenedor.innerHTML = "";

  const productosFiltrados = productos.filter((prod) =>
    prod.seccion.includes(seccion)
  );

  productosFiltrados.forEach((prod) => {
    const div = document.createElement("div");
    div.className =
      "bg-[#eb9df5] p-4 rounded-lg shadow-lg text-center transition-transform duration-300 hover:scale-105";
    div.innerHTML = `
            <img src="${prod.imagen}" alt="${prod.nombre}" class="w-[220px] h-[240px] object-cover rounded-md">
            <h3 class="text-lg font-semibold mt-2">${prod.nombre}</h3>
            <p class="text-[#B5179E] font-bold">S/.${prod.precio} </p>
        `;
    contenedor.appendChild(div);
  });
}
document.addEventListener("DOMContentLoaded", () => {
  cargarProductos("productos");
});
// Eventos de botones para cambiar de categoría
document.querySelectorAll(".filter-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const seccion = btn.getAttribute("data-seccion");
    cargarProductos(seccion);
  });
});

//--------------------------------------------------------------------- Mostrar los productos en producto.hTML---------------------------------------------
const contenedorProdutos = document.querySelector("#lista-productos");
let html = "";

function mostrarProductos() {
  const categorias = {};

  productos.forEach((producto) => {
    const { categoria } = producto;

    if (!categorias[categoria]) {
      categorias[categoria] = [];
    }

    categorias[categoria].push(producto);
  });

  let html = "";

  for (const categoria in categorias) {
    html += `<h3 class="categoria-titulo">${categoria}</h3>`;
    html += `<div class="grupo-productos">`;

    categorias[categoria].forEach((producto) => {
      const index = productos.indexOf(producto);
      html += `
    <div class="producto">
      <img src="${producto.imagen}" alt="${producto.nombre}" />
      <h3>${producto.nombre} - ${producto.color}</h3> 
      <p>Precio: ${producto.precio} Soles</p>
      <button class="agregar-carrito" data-index="${index}">Agregar al carrito</button>
    </div>
  `;
    });

    html += `</div>`;
  }

  contenedorProdutos.innerHTML = html;
}

mostrarProductos();

//filtrar productos por categoria

document.querySelectorAll(".categoria").forEach((boton) => {
  boton.addEventListener("click", (event) => {
    const subcategorias = event.target.nextElementSibling;

    if (subcategorias && subcategorias.classList.contains("subcategorias")) {
      subcategorias.style.display =
        subcategorias.style.display === "block" ? "none" : "block";
    }
  });
});

document.querySelectorAll(" .subcategoria").forEach((boton) => {
  boton.addEventListener("click", (event) => {
    const categoriaSeleccionada = event.target.getAttribute("data-categoria");

    // Filtrar productos según la categoría seleccionada
    const productosFiltrados = productos.filter(
      (producto) => producto.categoria === categoriaSeleccionada
    );

    mostrarProductosFiltrados(productosFiltrados);
  });
});

// Función para mostrar los productos filtrados
function mostrarProductosFiltrados(productosFiltrados) {
  const contenedorProductos = document.querySelector("#lista-productos");

  // 🔥 Aseguramos que siga usando grid al actualizarse
  contenedorProductos.innerHTML = `
    <div class="grupo-productos">
      ${productosFiltrados
        .map(
          (producto) => `
          <div class="producto">
              <img src="${producto.imagen}" alt="${producto.nombre}">
              <h3>${producto.nombre} - ${producto.color}</h3>
              <p>Precio: ${producto.precio} Soles</p>
              <button class="agregar-carrito" data-index="${productos.indexOf(
                producto
              )}">Agregar al carrito</button>
          </div>
        `
        )
        .join("")}
    </div>
  `;
}
