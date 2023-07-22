import songs from "/Astro/Backend/JS/Playlist/playlist-Main.js";

const player = document.querySelector("#player");
const musicName = document.querySelector("#musicName");
const artistName = document.querySelector("#artistName");
const imgSong = document.querySelector("#imgSong");
const playPauseButton = document.querySelector("#playPauseButton");
const playButton = document.getElementById("buttonsMusicImg");
const textButtonPause = "Pause"; // Certifique-se de definir o valor correto para 'textButtonPause'.

let index = 0;

playButton.addEventListener("click", playMusic);

function playMusic() {
  if (playlist.length > 0) {
    const currentSong = playlist[index];

    player.src = currentSong.src;
    musicName.innerHTML = currentSong.name;
    artistName.innerHTML = currentSong.artist;
    imgSong.src = currentSong.imgSong;

    player.play();
    playPauseButton.innerHTML = textButtonPause;

    index = (index + 1) % playlist.length;
  }
}

export function addNewSong(newSong) {
  songs.push(newSong);
}

// Chamada para adicionar uma nova música à playlist
const newSong = {
  src: "/Astro/Backend/JS/Playlist/song3.mp3",
  name: "Nome da Nova Música",
  artist: "Artista da Nova Música",
  imgSong: "/Astro/Backend/JS/Playlist/img3.jpg",
};

addNewSong(newSong);
