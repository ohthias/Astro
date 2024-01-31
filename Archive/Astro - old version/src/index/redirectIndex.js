let botaocadastro = document.getElementById("cadastrar");
botaocadastro.addEventListener("click", function () {
  window.location.href = "/Astro/src/login/sign_in.html";
});

let botaoLogin = document.getElementById("entrar");
botaoLogin.addEventListener("click", function () {
  window.location.href = "/Astro/src/login/sign_up.html";
});

let botaoHome = document.getElementById("buttonHome");
botaoHome.addEventListener("click", function () {
  window.location.href = "/Astro/src/index.html";
});
