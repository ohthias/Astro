// Supondo que existam 4 artistas, você pode ajustar esse número conforme necessário
const numeroDeArtistas = 20;

for (let indiceArtista = 1; indiceArtista <= numeroDeArtistas; indiceArtista++) {
  const elementoArtista = document.getElementById(`artist${indiceArtista}`);
  if (elementoArtista) {
    elementoArtista.addEventListener("click", function () {
      // Redirecionar para a página de mixes com um parâmetro indicando o artista escolhido
      window.location.href = `/Astro/Frontend/Html/Artistas/A01-AK.html?artist=${indiceArtista}`;
    });
  }
}
