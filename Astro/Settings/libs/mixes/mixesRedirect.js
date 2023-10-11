// Loop para criar event listeners para os elementos de playlist1 a playlist8
for (let i = 1; i <= 8; i++) {
  const playlistElement = document.getElementById(`playlist${i}`);

  if (playlistElement) {
    playlistElement.addEventListener("click", function () {
      // Redirecionar para a página de mixes com um parâmetro para indicar a playlist escolhida
      window.location.href = `/Astro/src/playlist/mixes/mixes.html?playlist=${i}`;
    });
  }
}
