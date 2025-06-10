// codigo de mostrar y ocultar el menú al pasar el mouse en el navabar
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

// codigo para aparecer el modal de inicio secion
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("dropdown-login");
  const openModal = document.getElementById("seccion");
  const closeModal = document.getElementById("dropdown-login");

  openModal.addEventListener("click", () => {
    modal.classList.remove("opacity-0", "pointer-events-none");
  });

  document.addEventListener("click", (event) => {
    if (!modal.contains(event.target) && event.target !== openModal) {
      modal.classList.add("opacity-0", "pointer-events-none");
    }
  });
});

// funcion para que el ojo que sale el password oculte o muestre la misma
document.addEventListener("DOMContentLoaded", () => {
  const passwordInput = document.getElementById("password");
  const togglePassword = document.getElementById("toggle-password");

  togglePassword.addEventListener("click", () => {
    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      togglePassword.textContent = "visibility_off"; // Cambia el icono a "ojo cerrado"
    } else {
      passwordInput.type = "password";
      togglePassword.textContent = "visibility"; // Vuelve al "ojo abierto"
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
