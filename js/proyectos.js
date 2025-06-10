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

let index = 0;
const numVisible = 3; // Cantidad de imágenes visibles a la vez
const slider = document.getElementById("slider");

// Función para renderizar solo las imágenes necesarias
function cargarProyectos() {
  slider.innerHTML = ""; // Limpia el contenido anterior
  const proyectosExtendidos = [...proyectos, ...proyectos.slice(0, numVisible)];

  proyectosExtendidos.slice(index, index + numVisible).forEach((proyecto) => {
    const div = document.createElement("div");
    // div.className = "w-1/3 px-2 transition-all duration-500 ease-in-out";
    div.className = `w-1/3 px-2 flex-shrink-0 transition-transform duration-500 ease-in-out ${
      i === 0 ? "pl-8" : ""
    }`;

    div.innerHTML = `
      <img src="${proyecto.img}" alt="${proyecto.titulo}" 
          class="w-full h-100 rounded-lg shadow-lg object-cover">
      <h3 class="text-lg font-semibold mt-2 text-center">${proyecto.titulo}</h3>
    `;

    slider.appendChild(div); // Agregamos cada imagen al slider
  });
}

// Inicializar proyectos
cargarProyectos();

// Función para actualizar el slider y evitar imágenes extras
function actualizarSlider(direccion) {
  slider.style.transition = "transform 0.5s ease-in-out";

  if (direccion === "next") {
    index = (index + 1) % proyectos.length; // Ajusta el índice para que siga la secuencia
    slider.style.transform = "translateX(-33.33%)";
    setTimeout(() => {
      slider.appendChild(slider.firstElementChild); // Mueve la primera imagen al final
      slider.style.transition = "none";
      slider.style.transform = "translateX(0)";
    }, 500);
  } else {
    index = (index - 1 + proyectos.length) % proyectos.length; // Ajusta el índice al retroceder
    slider.style.transform = "translateX(33.33%)";
    setTimeout(() => {
      slider.prepend(slider.lastElementChild); // Mueve la última imagen al inicio
      slider.style.transition = "none";
      slider.style.transform = "translateX(0)";
    }, 500);
  }
}

// Eventos de navegación
document
  .getElementById("next")
  .addEventListener("click", () => actualizarSlider("next"));
document
  .getElementById("prev")
  .addEventListener("click", () => actualizarSlider("prev"));
