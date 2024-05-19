let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");

// following are the code to change sidebar button(optional)
function menuBtnChange() {
  if (sidebar.classList.contains("open")) {
    closeBtn.classList.replace("bx-menu", "bx-menu-alt-right"); //replacing the iocns class
  } else {
    closeBtn.classList.replace("bx-menu-alt-right", "bx-menu"); //replacing the iocns class
  }
}

closeBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  menuBtnChange(); //calling the function(optional)
});


document.addEventListener('DOMContentLoaded', (event) => {
  const main = document.querySelector(".home-section");
  const header = document.querySelector("section.module header")

  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        console.log("1");
        header.style = 'background: var(--dark-shadow); backdrop-filter: blur(10px);'
      } else {
        console.log("0");
        header.style = 'background: none'
      }
    });
  }, { threshold: 0.5 });
  
  observer.observe(main);
});
