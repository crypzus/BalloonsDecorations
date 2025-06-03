document.addEventListener("DOMContentLoaded", () => {
  const menuContainers = document.querySelectorAll(".menu-container");

  menuContainers.forEach((container) => {
    const button = container.querySelector(".menu-button");
    const menu = container.querySelector(".menu");

    let isHoveringMenu = false;

    button.addEventListener("mouseenter", () => {
      menu.classList.remove("hidden");
    });

    container.addEventListener("mouseenter", () => {
      isHoveringMenu = true;
      menu.classList.remove("hidden");
    });

    container.addEventListener("mouseleave", () => {
      isHoveringMenu = false;
      setTimeout(() => {
        if (!isHoveringMenu) {
          menu.classList.add("hidden");
        }
      }, 100);
    });

    menu.addEventListener("mouseenter", () => {
      isHoveringMenu = true;
    });

    menu.addEventListener("mouseleave", () => {
      isHoveringMenu = false;
      setTimeout(() => {
        if (!isHoveringMenu) {
          menu.classList.add("hidden");
        }
      }, 100);
    });
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
