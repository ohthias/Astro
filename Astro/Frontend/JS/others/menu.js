let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");

// Removemos o event listener do botão de fechar
// closeBtn.addEventListener("click", () => {
//   sidebar.classList.toggle("close");
//   menuBtnChange();
// });

// Inicialmente, a barra lateral estará aberta
sidebar.classList.toggle("open");
menuBtnChange();

searchBtn.addEventListener("click", () => {
  sidebar.classList.remove("open");
  menuBtnChange();
});

function menuBtnChange() {
  if (sidebar.classList.contains("open")) {
    closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");
  } else {
    closeBtn.classList.replace("bx-menu-alt-right", "bx-menu");
  }
}