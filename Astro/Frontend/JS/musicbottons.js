// Importação do módulo de músicas
import playlist from "/Astro/Backend/JS/Playlist/playlist.js";

// Seleção de elementos da página (caso não estejam declarados no escopo do módulo)
const player = document.querySelector("#player");
const musicName = document.querySelector("#musicName");
const artistName = document.querySelector("#artistName");
const imgSong = document.querySelector("#imgSong");
const playPauseButton = document.querySelector("#playPauseButton");
const playButton = document.getElementById("buttonsMusicImg")

// Event Listener para o botão de play
playButton.addEventListener("click", playMusic);

// Variável para rastrear a música atual
let index = 0;

function playMusic() {
  // Certifique-se de que há músicas na playlist
  if (playlist.length > 0) {
    // Pega a música atual da playlist
    const currentSong = playlist[index];

    // Define os detalhes da música no player
    player.src = currentSong.src;
    musicName.innerHTML = currentSong.name;
    artistName.innerHTML = currentSong.artist;
    imgSong.src = currentSong.imgSong;

    // Toca a música
    player.play();
    playPauseButton.innerHTML = textButtonPause;

    // Atualiza o índice para a próxima música na lista
    index = (index + 1) % playlist.length;
  }
}
