// Reutilizable: función para alternar clases de animación
function toggleSeccion(elemento) {
  if (elemento.classList.contains("visible")) {
    elemento.classList.remove("visible");
    elemento.classList.add("oculto");
  } else {
    elemento.classList.remove("oculto");
    elemento.classList.add("visible");
  }
}

// Proyectos
const btnProyectos = document.querySelector("#toggleProyectos");
const seccionProyectos = document.querySelector("#proyectos");

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
