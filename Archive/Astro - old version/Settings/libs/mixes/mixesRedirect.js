for (let i = 1; i <= 8; i++) {
  const playlistElement = document.getElementById(`playlist${i}`);

  if (playlistElement) {
    playlistElement.addEventListener("click", function () {
      window.location.href = `/Astro/src/playlist/mixes/mixes.html?playlist=${i}`;
    });
  }
}
