// ----------------------------------lista de productos----------------------------------------------------

const productos = [
  {
    nombre: "Paquete globos latex",
    precio: 15,
    imagen: "img/productos/globlos_latex/globo-latex-amarillo.jpg",
    categoria: "Globos Latex basico",
    color: "amarrillo",
  },
  {
    nombre: "Paquete globos latex",
    precio: 15,
    imagen: "img/productos/globlos_latex/globo-latex-azul.jpg",
    categoria: "Globos Latex basico",
    color: "azul",
  },
  {
    nombre: "Paquete globos latex",
    precio: 15,
    imagen: "img/productos/globlos_latex/globo-latex-verde.jpg",
    categoria: "Globos Latex basico",
    color: "verde",
  },
  {
    nombre: "Paquete globos latex",
    precio: 15,
    imagen: "img/productos/globlos_latex/globo-latex-marron.jpg",
    categoria: "Globos Latex basico",
    color: "marron",
  },

  {
    nombre: "Paquete globos latex",
    precio: 15,
    imagen: "img/productos/globlos_latex/globo-latex-rojo.jpg",
    categoria: "Globos Latex basico",
    color: "rojo",
  },
  // cromados---------------------------------------------------------------<
  {
    nombre: "Paquete globos latex cromados",
    precio: 15,
    imagen: "img/productos/globos_latex_cromados/fucsia-barny.jpg",
    categoria: "Globos Latex Cromados",
    color: "Fucsia barny",
  },
  {
    nombre: "Paquete globos latex cromados",
    precio: 15,
    imagen: "img/productos/globos_latex_cromados/azul.jpg",
    categoria: "Globos Latex Cromados",
    color: "Azul",
  },
  {
    nombre: "Paquete globos latex cromados",
    precio: 15,
    imagen: "img/productos/globos_latex_cromados/dorado.jpg",
    categoria: "Globos Latex Cromados",
    color: "Dorado",
  },
  {
    nombre: "Paquete globos latex cromados",
    precio: 15,
    imagen: "img/productos/globos_latex_cromados/turqueza.jpeg",
    categoria: "Globos Latex Cromados",
    color: "Turqueza",
  },
  {
    nombre: "Paquete globos latex cromados",
    precio: 15,
    imagen: "img/productos/globos_latex_cromados/verde.jpg",
    categoria: "Globos Latex Cromados",
    color: "Verde",
  },
  // globos perlados---------------------------------------------------------<
  {
    nombre: "Paquete globos latex perlados",
    precio: 15,
    imagen: "img/productos/globos_Latex_perlado/palo_rosa_perlado.jpg",
    categoria: "Globos Latex Perlados",
    color: "amarrillo",
  },
  {
    nombre: "Paquete globos latex perlados",
    precio: 15,
    imagen: "img/productos/globos_Latex_perlado/palo_rosa_perlado.jpg",
    categoria: "Globos Latex Perlados",
    color: "´palo rosa",
  },
  {
    nombre: "Paquete globos latex perlados",
    precio: 15,
    imagen: "img/productos/globos_Latex_perlado/palo_rosa_perlado.jpg",
    categoria: "Globos Latex Perlados",
    color: "azul",
  },
  {
    nombre: "Paquete globos latex perlados",
    precio: 15,
    imagen: "img/productos/globos_Latex_perlado/palo_rosa_perlado.jpg",
    categoria: "Globos Latex Perlados",
    color: "rojo",
  },
  {
    nombre: "Paquete globos latex perlados",
    precio: 15,
    imagen: "img/productos/globos_Latex_perlado/palo_rosa_perlado.jpg",
    categoria: "Globos Latex Perlados",
    color: "beige",
  },

  // globos retro--------------------<
  {
    nombre: "Paquete globos latex retros",
    precio: 15,
    imagen: "img/productos/globos_latex_retro/verde-militar.jpeg",
    categoria: "Globos Latex Retros",
    color: "verde militar",
  },
  {
    nombre: "Paquete globos latex retros",
    precio: 15,
    imagen: "img/productos/globos_latex_retro/azul_noche.jpg",
    categoria: "Globos Latex Retros",
    color: "azul noche",
  },
  {
    nombre: "Paquete globos latex retros",
    precio: 15,
    imagen: "img/productos/globos_latex_retro/lila.jpg",
    categoria: "Globos Latex Retros",
    color: "lila",
  },
  {
    nombre: "Paquete globos latex retros",
    precio: 15,
    imagen: "img/productos/globos_latex_retro/verde-agua.jpg",
    categoria: "Globos Latex Retros",
    color: "verde agua",
  },
  {
    nombre: "Paquete globos latex retros",
    precio: 15,
    imagen: "img/productos/globos_latex_retro/amarillo.jpg",
    categoria: "Globos Latex Retros",
    color: "amarilo",
  },
];

//  Mostrar los productos en el HTML
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
