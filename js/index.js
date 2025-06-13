// ultimos Proyectos
const proyectos = [
  {
    id: 1,
    titulo: "Arreglos personalizados",
    img: "img/proyectos/proyecto1.jpg",
  },
  {
    id: 2,
    titulo: "Arreglos personalizados 2",
    img: "img/proyectos/proyecto2.jpg",
  },
  {
    id: 3,
    titulo: "Arreglos personalizados 3",
    img: "img/proyectos/proyecto3.jpg",
  },
  {
    id: 4,
    titulo: "Arreglos personalizados 4",
    img: "img/proyectos/proyecto4.jpg",
  },
  {
    id: 5,
    titulo: "Arreglos personalizados 5",
    img: "img/proyectos/proyecto5.jpg",
  },
  {
    id: 6,
    titulo: "Arreglos personalizados 6",
    img: "img/proyectos/proyecto6.jpg",
  },
  {
    id: 7,
    titulo: "Arreglos personalizados 7",
    img: "img/proyectos/proyecto7.jpg",
  },
  {
    id: 8,
    titulo: "Arreglos personalizados 8",
    img: "img/proyectos/proyecto8.jpg",
  },
  {
    id: 9,
    titulo: "Arreglos personalizados 9",
    img: "img/proyectos/proyecto9.jpg",
  },
  {
    id: 10,
    titulo: "Arreglos personalizados 10",
    img: "img/proyectos/proyecto10.jpg",
  },
];

const slider = document.getElementById("slider");
const NUM_VISIBLE_SLIDES = 3; // Cuántas tarjetas se muestran a la vez
let index = 0;
// cre acion de tarjetas para el slider
function crearTarjeta(proyecto) {
  const div = document.createElement("div");
  const ancho = 100 / NUM_VISIBLE_SLIDES;
  div.style.width = `${ancho}%`;
  div.className =
    " mx-2 flex-shrink-0 transition-transform duration-300 hover:scale-90 bg-[#eb9df5] p-2 rounded-lg shadow-xl/30"; // Puedes ajustar el ancho aquí
  div.innerHTML = `
    <img src="${proyecto.img}" alt="${proyecto.titulo}" class="w-full h-90 rounded-lg object-cover ">
    <h3 class="text-center mt-2 font-semibold">${proyecto.titulo}</h3>
  `;
  return div;
}

// Renderizar TODOS los elementos (duplicados al final para efecto infinito)
function inicializarSlider() {
  // Duplicar al principio y al final para looping suave
  const itemsDuplicados = [...proyectos, ...proyectos, ...proyectos];
  itemsDuplicados.forEach((proyecto) => {
    slider.appendChild(crearTarjeta(proyecto));
  });

  // Posicionar al centro del contenido duplicado
  index = proyectos.length;
  actualizarTransform();
}

// Función para actualizar el transform del slider
function actualizarTransform() {
  const slideWidth = slider.querySelector("div").offsetWidth + 16; // ancho + margin
  slider.style.transform = `translateX(-${index * slideWidth}px)`;
}

// Función de navegación
function mover(direccion) {
  if (direccion === "next") {
    index++;
  } else {
    index--;
  }

  slider.style.transition = "transform 0.5s ease-in-out";
  actualizarTransform();

  slider.addEventListener(
    "transitionend",
    () => {
      slider.style.transition = "none";

      // Si estamos al final de los duplicados, reiniciamos a la posición central
      if (index >= proyectos.length * 2) {
        index = proyectos.length;
        actualizarTransform();
      } else if (index < proyectos.length) {
        index = proyectos.length + (index % proyectos.length);
        actualizarTransform();
      }
    },
    { once: true }
  );
}

// Inicializar
inicializarSlider();

// Eventos
document.getElementById("next").addEventListener("click", () => mover("next"));
document.getElementById("prev").addEventListener("click", () => mover("prev"));

// Contacto
const btnContacto = document.querySelector("#toggleContacto");
const seccionFormulario = document.querySelector("#formulario-contacto");

// Estado inicial: oculto
seccionProyectos.classList.add("oculto");
seccionFormulario.classList.add("oculto");

// Eventos
btnProyectos.addEventListener("click", () => {
  toggleSeccion(seccionProyectos);
});

btnContacto.addEventListener("click", () => {
  toggleSeccion(seccionFormulario);
});

// ----------------------------------------------formulario----------------------------------------------------------->

const form = document.querySelector("#contactForm");
const mensajeExito = document.querySelector("#mensaje-exito");
form.addEventListener("submit", function (event) {
  event.preventDefault(); //evita que se recargue la pagina

  const nombre = document.querySelector("#nombre").value.trim();
  const email = document.querySelector("#email").value.trim();
  const mensaje = document.querySelector("#mensaje").value.trim();

  if (!nombre || !email || !mensaje) {
    mostrarMensaje("Por favor. complete todos los campos.", "error");
    return;
  }

  mostrarMensaje(`Gracias por contactarnos, ${nombre}!`, "exito");
  form.reset(); //limpia el formulario
});

// funcion para mostrar el mensaje y ocultar por 3 segundos
function mostrarMensaje(texto, tipo) {
  mensajeExito.textContent = texto;

  if (tipo === "exito") {
    mensajeExito.className = "mensaje-exito";
  } else {
    mensajeExito.className = "mensaje-error";
  }

  setTimeout(() => {
    mensajeExito.textContent = "";
    mensajeExito.className = "mensaje-oculto";
  }, 3000);
}

document.querySelector("#link-contacto").addEventListener("click", (event) => {
  event.preventDefault(); // Evita el comportamiento estándar del enlace
  document
    .querySelector("#formulario-contacto")
    .scrollIntoView({ behavior: "smooth" });
});

btnContacto.addEventListener("click", () => {
  toggleSeccion(seccionFormulario);
});
