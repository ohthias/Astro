import allSongs from "/Astro/Settings/libs/songs.js";

const searchInput = document.getElementById("searchResult");
const searchButton = document.getElementById("search");
const resultsDiv = document.getElementById("results");

searchButton.onclick = () => search();

function search() {
  const searchTerm = searchInput.value.toLowerCase();
  resultsDiv.innerHTML = "";

  const matchingSongs = Object.values(allSongs).filter((song) =>
    song.nameSong.toLowerCase().includes(searchTerm)
  );

  if (matchingSongs.length === 0) {
    resultsDiv.textContent = "Nenhuma música, álbum ou artista encontrados.";
  } else {
    matchingSongs.forEach((song) => {
      const songDiv = document.createElement("div");
      songDiv.classList.add("container-results");

      const songInfo = document.createElement("p");
      songInfo.textContent = `${song.nameSong} - ${song.artist}`;
      songDiv.appendChild(songInfo);

      resultsDiv.appendChild(songDiv);
    });
  }
}
