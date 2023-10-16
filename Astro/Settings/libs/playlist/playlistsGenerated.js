import allSongs from "/Astro/Backend/JS/songs.js";

/**
 * Filtra um conjunto de músicas com base no ritmo especificado.
 *
 * @param {Object} songs - Um objeto contendo informações sobre músicas.
 * @param {string} targetRhythm - O ritmo alvo que desejamos filtrar.
 * @returns {Array} Um array contendo as músicas que possuem o ritmo correspondente.
*/
function filterByRhythm(songs, targetRhythm) {
  return Object.values(songs).filter((song) => song.ritmo === targetRhythm);
}

/**
 * Filtra um conjunto de músicas com base no gênero especificado.
 *
 * @param {Object} songs - Um objeto contendo informações sobre músicas.
 * @param {string} targetGenre - O gênero alvo que desejamos filtrar.
 * @returns {Array} Um array contendo as músicas que pertencem ao gênero correspondente.
*/
function filterByGenre(songs, targetGenre) {
  return Object.values(songs).filter((song) => song.genero === targetGenre);
}


/**
 * Filtra e retorna um número aleatório de músicas de um determinado gênero.
 *
 * @param {number} index - O índice de seleção aleatória (em porcentagem) das
 * músicas com base no número total de músicas disponíveis.
 * @param {Object} songs - Um objeto contendo informações sobre músicas.
 * @param {string} targetGenre - O gênero alvo para filtragem aleatória.
 * @returns {Array|undefined} Um array contendo músicas aleatórias do gênero 
 * especificado ou undefined se nenhum resultado for encontrado.
*/
function filterRandomByGenre(index, songs, targetGenre) {
  let playLength = Math.round((Object.keys(songs).length * index) / 100); // Calcula o número de músicas a serem tocadas com base no índice
  const filteredSongs = Object.values(songs).filter(
    (song) => song.genero === targetGenre
  );

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

    songDiv.appendChild(songName);
    songDiv.appendChild(artistName);
    songDiv.appendChild(genre);

    container.appendChild(songDiv);
  });
}

let index; // Variável para rastrear o índice da música atual

/**
 * Reproduzir a próxima música da lista de músicas.
 *
 * @param {Array} songs - Um array contendo informações sobre músicas.
*/
const playSongs = (songs) => {
  index = 0; // Resetar o índice
  const song = songs[index]; // Obtém a música atual com base no índice

  player.src = song.src;
  musicName.innerHTML = song.nameSong;
  artistName.innerHTML = song.artist;
  imgSong.src = song.imgSong;
};

/* Não Usado
const playAgitadoSongs = () => {
  const agitadoSongs = filterSongsByRhythm(allSongs, "agitado");
  playSongs(agitadoSongs);
};*/
