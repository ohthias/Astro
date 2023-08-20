import allSongs from "/Astro/Backend/JS/songs.js";
import artistsArray from "/Astro/Backend/JS/ArtistsPage/artistsArray.js";

//Consulta e envio de informações correspondentes a uma página dos artistas
const urlParams = new URLSearchParams(window.location.search);
const artistParam = urlParams.get("artist");

if (!artistParam) {
  console.error("Parâmetro 'artista' ausente no URL.");
} else {
  const artistIndex = parseInt(artistParam, 10);

  if (
    !isNaN(artistIndex) &&
    artistIndex >= 1 &&
    artistIndex <= artistsArray.length
  ) {
    const selectedArtist = artistsArray[artistIndex - 1];
    updateArtistInfo(selectedArtist);
    loadMixBasedOnArtist(selectedArtist.name);
  } else {
    console.error("Artista no encontrado o parámetro inválido en la URL.");
  }
}

function attachSongClickHandlers() {
  const songItems = document.querySelectorAll("#songs-list li");
  songItems.forEach((songItem, index) => {
    songItem.addEventListener("click", () => {
      playMusic(allSongs[index]); // Play the corresponding song from allSongs
    });
  });
}

// Call the function to attach click handlers to song elements
attachSongClickHandlers();

let isPlaying = false;
let index = 0;
let currentSongIndex = -1;

function playMusic() {
  const musicName = document.querySelector("#musicName");
  const artistName = document.querySelector("#artistName");
  const imgSong = document.querySelector("#imgSong");
  const player = document.querySelector("#player");

  if (isPlaying && currentSongIndex === index) {
    player.pause();
    isPlaying = false;
  } else {
    currentSongIndex = index;
    player.src = allSongs[index].src;
    musicName.innerHTML = allSongs[index].nome;
    artistName.innerHTML = allSongs[index].artista;
    imgSong.src = allSongs[index].capaAlbum;
    player.play();
    isPlaying = true;
  }
}

function loadMixBasedOnArtist(artistName) {
  switch (artistName) {
    case "Otis McDonald":
      break;

    case "NEFFEX":
      break;

    default:
      console.error("Mix no encontrado para el artista:", artistName);
      return;
  }
}

function updateArtistInfo(artist) {
  document.getElementById("nameArtist").innerText = artist.artist;
  document.getElementById(
    "backParallax"
  ).style.backgroundImage = `url(${artist.imgArtist})`;

  const songsList = document.getElementById("songs-list");
  songsList.innerHTML = "";
  artist.songs.forEach((song) => {
    const songItem = document.createElement("li");
    songItem.innerText = song;
    songsList.appendChild(songItem);
  });
}
