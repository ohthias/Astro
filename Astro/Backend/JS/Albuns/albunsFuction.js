import {
  getUniqueAlbums,
  displayAlbumSongs,
} from "/Astro/Backend/JS/Playlist/playlistsGenerated.js";
import allSongs from "/Astro/Backend/JS/songs.js";

// Get the list of unique albums
const uniqueAlbums = getUniqueAlbums(allSongs);
console.log("Álbuns disponíveis:", uniqueAlbums);

// Extract the 'album' parameter from the URL
const urlParams = new URLSearchParams(window.location.search);
const albumParam = urlParams.get("album");

if (!albumParam) {
  console.error(
    "Parâmetro 'album' ausente na URL. Por favor, forneça um índice de álbum válido."
  );
} else {
  const albumIndex = parseInt(albumParam, 10);

  if (
    !isNaN(albumIndex) &&
    albumIndex >= 0 &&
    albumIndex < uniqueAlbums.length
  ) {
    const selectedAlbum = uniqueAlbums[albumIndex - 1];
    console.log("Álbum selecionado:", selectedAlbum);
    loadBasedOnAlbum(selectedAlbum, allSongs);
  } else {
    console.error("Álbum não encontrado ou parâmetro inválido na URL.");
  }
}

function loadBasedOnAlbum(selectedAlbum, songsObject) {
  // Display album songs with authors
  displayAlbumSongs(selectedAlbum.name, songsObject);
}
