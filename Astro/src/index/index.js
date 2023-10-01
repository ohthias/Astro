const logo = document.querySelector("#logo");
logo.addEventListener("click", function () {
  window.location.href = "/Astro/Frontend/Html/Base/index.html";
});

/* Animation */

let sections =  document.querySelectorAll('section');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.screenY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;

    if (top >= offset && top < offset + height) {
      sec.classList.add('show-animate');
    } else {
      sec.classList.remove('show-animate');
    }
  });
}