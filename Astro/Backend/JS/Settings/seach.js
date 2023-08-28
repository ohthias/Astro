import allSongs from "/Astro/Backend/JS/songs.js";

const searchButton =  document.getElementById("search")
searchButton.onclick = () => search()

function search() {
  const searchInput = document.getElementById("searchResult"); // Corrigido o ID para "searchInput"
  const searchTerm = searchInput.value.toLowerCase();
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = "";

  const matchingSongs = Object.values(allSongs).filter((song) =>
    song.nameSong.toLowerCase().includes(searchTerm)
  );

  if (matchingSongs.length === 0) {
    resultsDiv.textContent = "Nenhuma música encontrada.";
  } else {
    matchingSongs.forEach((song) => {
      const songDiv = document.createElement("div");
      songDiv.textContent = `${song.nameSong} - ${song.artist}`;
      resultsDiv.appendChild(songDiv);
    });
  }
}
