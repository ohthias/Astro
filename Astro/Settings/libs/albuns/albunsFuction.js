import allSongs from "/Astro/Settings/libs/songs.js";

function getUniqueAlbums(songsObject) {
  const uniqueAlbums = [];
  const albumSet = new Set();

  for (const songId in songsObject) {
    const album = songsObject[songId].album;
    if (album && !albumSet.has(album)) {
      albumSet.add(album);
      uniqueAlbums.push({
        name: album,
        author: songsObject[songId].artist,
        coverImage: songsObject[songId].imgSong,
      });
    }
  }

  return uniqueAlbums;
}

function displayAlbumSongs(songs) {
  const container = document.getElementById("music-list");

  songs.forEach((song) => {
    const listItem = document.createElement("li");

    const infoMusica = document.createElement("div");
    infoMusica.innerHTML = `<div class='infoMusica'>
                              <div class='infoMusica_play'>
                                <strong class='musicnome_playlist'>${song.nameSong}</strong><br>
                                <p class='nomeArtista_playlist'>${song.artist}</p>
                              </div>
                              <button id='buttonSongPlay'><i class='bx bx-caret-right'></i></button>
                            </div>`;
    listItem.appendChild(infoMusica);

    container.appendChild(listItem);
  });
}

const uniqueAlbums = getUniqueAlbums(allSongs);

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
    const selectedAlbum = uniqueAlbums[albumIndex];
    loadBasedOnAlbum(selectedAlbum, allSongs);
  } else {
    console.error("Álbum não encontrado ou parâmetro inválido na URL.");
  }
}

function loadBasedOnAlbum(selectedAlbum, songsObject) {
  console.log(`Músicas do álbum "${selectedAlbum.name}":`);

  const albumSongs = Object.values(songsObject).filter(
    (song) => song.album === selectedAlbum.name
  );

  document.getElementById("nameAlbum").innerHTML = selectedAlbum.name;
  document.getElementById("creatorAlbum").innerHTML = selectedAlbum.author;
  document.getElementById("imagePlay").src = selectedAlbum.coverImage;

  displayAlbumSongs(albumSongs);

  albumSongs.forEach((song) => {
    console.log(`Música: ${song.nameSong}`);
    console.log(`Artista: ${song.artist}`);
    console.log("---");
  });
}
