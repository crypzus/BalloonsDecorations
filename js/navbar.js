document.querySelectorAll(".group > a").forEach((item) => {
  item.addEventListener("click", function (event) {
    event.preventDefault();
    let menu = this.nextElementSibling;
    menu.classList.toggle("hidden");
  });
});
