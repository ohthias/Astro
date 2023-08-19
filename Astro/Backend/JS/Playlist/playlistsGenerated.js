import allSongs from "/Astro/Backend/JS/songs.js";

function filterByRhythm(songs, targetRhythm) {
  return Object.values(songs).filter(song => song.ritmo === targetRhythm);
}

// Função para filtrar músicas com base no gênero
function filterByGenre(songs, targetGenre) {
  return Object.values(songs).filter(song => song.genero === targetGenre);
}

function filterRandomByGenre(index, songs, targetGenre) {
  let playLength = Math.round(Object.keys(songs).length * index / 100); // Calcula o número de músicas a serem tocadas com base no índice
  const filteredSongs = Object.values(songs).filter(song => song.genero === targetGenre);
  
  if (filteredSongs.length === 0) {
    console.log(`Nenhuma música encontrada no gênero ${targetGenre}`);
    return;
  }
  const randomSongs = [];

  for (let i = 0; i < playLength; i++) {
    const randomIndex = Math.floor(Math.random() * filteredSongs.length);
    randomSongs.push(filteredSongs[randomIndex]);
  }

  return randomSongs;
}

// Playlists por ritmo das músicas
const calmoPlaylist = filterByRhythm(allSongs, "Calmo");
const moderadoPlaylist = filterByRhythm(allSongs, "moderado");
const agitadoPlaylist = filterByRhythm(allSongs, "agitado");
const intensoPlaylist = filterByRhythm(allSongs, "intenso");
const sombrioPlaylist = filterByRhythm(allSongs, "sombrio");
const romanticoPlaylist = filterByRhythm(allSongs, "romantico");
const dramaticoPlaylist = filterByRhythm(allSongs, "dramatico");

// Playlist por gênero das músícas
const RockSongs = filterByGenre(allSongs, "Rock");
const RapSongs = filterByGenre(allSongs, "Rap");
const HipHopSongs = filterByGenre(allSongs, "Hip-Hop");
const InstrumentalSongs = filterByGenre(allSongs, "Instrumental");
const JazzSongs = filterByGenre(allSongs, "Jazz");
const DanceSongs = filterByGenre(allSongs, "Dance");
const PopSongs = filterByGenre(allSongs, "Pop");
const EletronicaSongs = filterByGenre(allSongs, "Eletrônica");
const ArabeSongs = filterByGenre(allSongs, "Árabe");
const FolkSongs = filterByGenre(allSongs, "Folk");
const CountrySongs = filterByGenre(allSongs, "Country");

// Função para exibir as informações na tela
function displaySongs(songs) {
  const container = document.getElementById("songs-container");

  songs.forEach((song) => {
    const songDiv = document.createElement("div");
    songDiv.classList.add("song");

    const songName = document.createElement("h2");
    songName.textContent = song.nameSong;

    const artistName = document.createElement("p");
    artistName.textContent = `Artist: ${song.artist}`;

    const genre = document.createElement("p");
    genre.textContent = `Genre: ${song.genero}`;

    // Adicionar mais informações conforme necessário (imgSong, ritmo, etc.)

    songDiv.appendChild(songName);
    songDiv.appendChild(artistName);
    songDiv.appendChild(genre);

    container.appendChild(songDiv);
  });
}

const playAgitadoSongs = () => {
  const agitadoSongs = filterByRhythm(allSongs, "agitado");
  playSongs(agitadoSongs);
};

// Função para tocar músicas de rock
const playRockSongs = () => {
  const rockSongs = filterByGenre(allSongs, "Rock");
  playSongs(rockSongs);
};

// Função para tocar um array de músicas
let index;
const playSongs = (songs) => {
  index = 0; // Resetar o índice
  const song = songs[index];

  player.src = song.src;
  musicName.innerHTML = song.nameSong;
  artistName.innerHTML = song.artist;
  imgSong.src = song.imgSong;
};

// Event listeners dos botões
document.getElementById("playAgitado").addEventListener("click", playAgitadoSongs);
document.getElementById("playRock").addEventListener("click", playRockSongs);

const randomInstrumentalSongs = filterRandomByGenre(25, allSongs, "Instrumental");
// Exibindo as músicas aleatórias na tela
displaySongs(randomInstrumentalSongs);