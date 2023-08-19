// Importar todas as músicas do módulo songs.js
import allSongs from "/Astro/Backend/JS/songs.js";



// Elementos do DOM
const player = document.getElementById("player");
const musicName = document.getElementById("musicName");
const artistName = document.getElementById("artistName");
const imgSong = document.getElementById("imgSong");

// Função para exibir músicas em um mix aleatório
function displayRandomMix(mix) {
  const container = document.getElementById("random-mix-container");

  mix.forEach((song) => {
    const songDiv = document.createElement("div");
    songDiv.classList.add("song");

    const songName = document.createElement("h2");
    songName.textContent = song.nameSong;

    const artistName = document.createElement("p");
    artistName.textContent = `Artist: ${song.artist}`;

    const playButton = document.createElement("button");
    playButton.textContent = "Play";
    playButton.addEventListener("click", () => playSongs(song));

    songDiv.appendChild(songName);
    songDiv.appendChild(artistName);
    songDiv.appendChild(playButton);

    container.appendChild(songDiv);
  });
}

// Função para criar um mix aleatório de músicas
function createRandomMix(filteredSongs, numberOfSongs) {
  const randomSongs = [];
  const usedIndices = new Set();

  while (
    randomSongs.length < numberOfSongs &&
    usedIndices.size < filteredSongs.length
  ) {
    const randomIndex = Math.floor(Math.random() * filteredSongs.length);

    if (!usedIndices.has(randomIndex)) {
      usedIndices.add(randomIndex);
      randomSongs.push(filteredSongs[randomIndex]);
    }
  }

  return randomSongs;
}

// Função para criar e salvar um mix aleatório por ritmo
function createAndSaveRandomMixByRhythm(songs, targetRhythm, numberOfSongs) {
  const filteredSongs = filterSongsByRhythm(songs, targetRhythm);
  const randomSongs = createRandomMix(filteredSongs, numberOfSongs);

  localStorage.setItem(
    `randomMix_${targetRhythm}`,
    JSON.stringify(randomSongs)
  );

  return randomSongs;
}

// Função para reproduzir músicas
function playNextSong() {
  currentSongIndex++; // Avança para a próxima música

  if (currentSongIndex >= currentMix.length) {
    currentSongIndex = 0; // Volta para a primeira música quando alcançar o final do mix
  }

  playSongs(); // Reproduz a próxima música
}

let currentSongIndex = 0; // Inicializa o índice da música atual
function playSongs() {
  const song = currentMix[currentSongIndex];

  player.src = song.src;
  musicName.innerHTML = song.nameSong;
  artistName.innerHTML = song.artist;
  imgSong.src = song.imgSong;

  // Adiciona um evento para tocar a próxima música quando a atual terminar
  player.onended = playNextSong;
}

// Adicionar um ouvinte de evento para cada botão de faixa
function setupPlayButtons() {
  const songButtons = document.querySelectorAll(".play-button");

  songButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
      currentSongIndex = index; // Define o índice da música selecionada
      playSongs(); // Inicia a reprodução da música selecionada
    });
  });
}

// Carregar mix aleatório salvo ou criar e salvar se não existir
const savedAgitadoMix = JSON.parse(localStorage.getItem("randomMix_agitado"));

const agitadoMix =
  savedAgitadoMix || createAndSaveRandomMixByRhythm(allSongs, "agitado", 16);

// Exibir o mix de TimeOfStudy na lista
displayRandomMix(agitadoMix);
setupPlayButtons();

// Atribuir o mix TimeOfStudy como o mix atual
let currentMix = agitadoMix;

// Adicionar um ouvinte de evento para o botão de reprodução
document.getElementById("playAgitado").addEventListener("click", playSongs);