// codigo de mostrar y ocultar el menú al pasar el mouse
document.addEventListener("DOMContentLoaded", () => {
  const menuContainers = document.querySelectorAll(".menu-container");

  menuContainers.forEach((container) => {
    const button = container.querySelector(".menu-button");
    const menu = container.querySelector(".menu");

    button.addEventListener("mouseenter", () => {
      menu.classList.add("visible");
    });

    container.addEventListener("mouseenter", () => {
      if (button.matches(":hover")) {
        menu.classList.add("visible");
      }
    });

    container.addEventListener("mouseleave", () => {
      setTimeout(() => {
        if (!container.matches(":hover")) {
          menu.classList.remove("visible");
        }
      }, 100);
    });
  });
});

// codigo para expandir el icono de buscar
document.addEventListener("DOMContentLoaded", () => {
  const searchIcon = document.querySelector(".contenerIconBuscar");
  const searchInput = document.getElementById("search-input");

  searchIcon.addEventListener("click", () => {
    searchInput.classList.add("w-48", "opacity-100");
    searchInput.focus();
  });

  searchInput.addEventListener("blur", () => {
    if (searchInput.value === "") {
      searchInput.classList.remove("w-48", "opacity-100");
    }
  });
});

// menú  funcione en dispositivos móviles
// document.querySelectorAll(".group > a").forEach((item) => {
//   item.addEventListener("click", function (event) {
//     event.preventDefault();
//     let menu = this.nextElementSibling;
//     menu.classList.toggle("hidden");
//   });
// });
