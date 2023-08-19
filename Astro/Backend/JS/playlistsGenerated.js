import allSongs from "/Astro/Backend/JS/songs.js";

function filterByRhythm(songs, targetRhythm) {
  return Object.values(songs).filter(song => song.ritmo === targetRhythm);
}

// Função para filtrar músicas com base no gênero
function filterByGenre(songs, targetGenre) {
  return Object.values(songs).filter(song => song.genero === targetGenre);
}

const agitadoSongs = filterByRhythm(allSongs, "agitado");
const rockSongs = filterByGenre(allSongs, "Rock");

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

// Exibir as músicas filtradas na tela
displaySongs(agitadoSongs);

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