import allSongs from "/Astro/Settings/libs/songs.js";

const albumsMap = new Map();
const htmlAlbumArray = [];

for (const key in allSongs) {
  if (Object.hasOwnProperty.call(allSongs, key)) {
    const song = allSongs[key];
    if (song.imgSong && song.album && !albumsMap.has(song.album)) {
      albumsMap.set(song.album, song);
      htmlAlbumArray.push(song);
    }
  }
}

let htmlAlbum = "";

// Gerando HTML com base nos álbuns únicos
htmlAlbumArray.forEach((song, index) => {
  htmlAlbum += `
  <button id="album${index}">
      <img
          src="${song.imgSong}"
          class="songButton"
          draggable="false"
      />
  </button>`;
});

const wrapper = `${htmlAlbum}`;

const albunsWrapper = document.getElementById("albunsWrapper");
albunsWrapper.innerHTML = wrapper;

const buttons = document.querySelectorAll('[id^="album"]');
buttons.forEach((button, index) => {
  button.addEventListener("click", () => redirectToAlbum(index));
});

function redirectToAlbum(index) {
  const album = htmlAlbumArray[index].album;
  window.location.href = `/Astro/src/playlist/albuns/album.html?album=${index}&name=${encodeURIComponent(
    album
  )}`;
}
