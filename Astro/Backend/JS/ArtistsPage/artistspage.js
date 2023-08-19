import allSongs from "/Astro/Backend/JS/songs.js";

// Função para criar um objeto de artistas com suas músicas
function createArtistObjects(songs) {
  const artists = {};

  Object.values(songs).forEach(song => {
    const artistName = song.artist;

    if (!artists[artistName]) {
      artists[artistName] = {
        name: artistName,
        songs: [song],
      };
    } else {
      artists[artistName].songs.push(song);
    }
  });

  return Object.values(artists);
}

const artistObjects = createArtistObjects(allSongs);

// Exibir os artistas e suas músicas na tela
function displayArtistsAndSongs(artists) {
  const container = document.getElementById("artists-container");

  artists.forEach(artist => {
    const artistDiv = document.createElement("div");
    artistDiv.classList.add("artist");

    const artistName = document.createElement("h2");
    artistName.textContent = artist.name;

    const songsList = document.createElement("ul");
    artist.songs.forEach(song => {
      const songItem = document.createElement("li");
      songItem.textContent = song.nameSong;
      songsList.appendChild(songItem);
    });

    artistDiv.appendChild(artistName);
    artistDiv.appendChild(songsList);

    container.appendChild(artistDiv);
  });
}

// Exibir os artistas e suas músicas na tela
displayArtistsAndSongs(artistObjects);