// Importar todas as músicas do módulo songs.js
import allSongs from "/Astro/Settings/libs/songs.js";

const player = document.getElementById("player");
const musicName = document.getElementById("musicName");
const artistName = document.getElementById("artistName");
const imgSong = document.getElementById("imgSong");

// Função para exibir músicas em um mix aleatório
function displayRandomMix(mix) {
  const container = document.getElementById("music-list");

  mix.forEach((song) => {
    const listItem = document.createElement("li");

    const albumContainer = document.createElement("div");
    albumContainer.classList.add("album-container");

    const capaAlbum = document.createElement("img");
    capaAlbum.src = song.imgSong;

    const playIcon = document.createElement("i");
    playIcon.classList.add("bx", "bx-caret-right", "play-icon");

    albumContainer.appendChild(capaAlbum);
    albumContainer.appendChild(playIcon);

    listItem.appendChild(albumContainer);

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

let currentSongIndex = 0; // Inicializa o índice da música atual
function playSongs() {
  if (currentSongIndex >= 0 && currentSongIndex < currentMix.length) {
    const song = currentMix[currentSongIndex];

    player.src = song.src;
    musicName.innerHTML = song.nameSong;
    artistName.innerHTML = song.artist;
    imgSong.src = song.imgSong;

    // Adiciona um evento para tocar a próxima música quando a atual terminar
    player.onended = playNextSong;
  } else {
    console.error("Índice da música atual fora dos limites do mix.");
  }
}

// Função para reproduzir músicas
function playNextSong() {
  currentSongIndex++; // Avança para a próxima música

  if (currentSongIndex >= currentMix.length) {
    currentSongIndex = 0; // Volta para a primeira música quando alcançar o final do mix
  }

  playSongs(); // Reproduz a próxima música
}

function createRandomMixByRhythm(songs, rhythm, numberOfSongs) {
  const filteredSongs = Object.values(songs).filter((song) => song.ritmo === rhythm);
  return createRandomMix(filteredSongs, numberOfSongs);
}

// Carregar mix aleatório salvo ou criar e salvar se não existir
const Global = createRandomMixByRhythm(allSongs, "agitado", 10);
const PelaJanela = createRandomMixByRhythm(allSongs, "moderado", 10);
const AutoAstral = createRandomMixByRhythm(allSongs, "raiva", 10);
const TimeofStudy = createRandomMixByRhythm(allSongs, "Calmo", 10);

const playlists = [
  {
    name: "Global",
    image: "/Assets/Images/Capas_astro/Art_M.2.png",
    creator: "Matheus",
  },
  {
    name: "Pela Janela",
    image: "/Assets/Images/Capas_astro/Art_M.3.png",
    creator: "Matheus",
  },
  {
    name: "Auto Astral",
    image: "/Assets/Images/Capas_astro/Art_M.4.png",
    creator: "Matheus",
  },
  {
    name: "Time of Study",
    image: "/Assets/Images/Capas_astro/Art_M.5.png",
    creator: "Matheus",
  },
];

// Obtenha o valor do parâmetro "playlist" da URL
const urlParams = new URLSearchParams(window.location.search);
const playlistParam = urlParams.get("playlist");

// Converte o valor do parâmetro para número (se necessário)
const playlistIndex = parseInt(playlistParam, 10);

// Verifica se o valor é um número válido e dentro do intervalo de playlists
if (
  !isNaN(playlistIndex) &&
  playlistIndex >= 1 &&
  playlistIndex <= playlists.length
) {
  const selectedPlaylist = playlists[playlistIndex - 1];
  updatePlaylistInfo(selectedPlaylist);
  loadMixBasedOnPlaylist(selectedPlaylist.name);
} else {
  console.error("Playlist não encontrada ou parâmetro inválido na URL.");
}

// Função para carregar o mix com base na playlist selecionada
function loadMixBasedOnPlaylist(playlistName) {
  let currentMix;

  switch (playlistName) {
    case "Global":
      currentMix = Global;
      break;

    case "Pela Janela":
      currentMix = PelaJanela;
      break;

    case "Auto Astral":
      currentMix = AutoAstral;
      break;

    case "Time of Study":
      currentMix = TimeofStudy;
      break;

    default:
      console.error("Mix não encontrado para a playlist:", playlistName);
      return;
  }

  // Exibir o mix na lista e configurar os botões de reprodução
  displayRandomMix(currentMix);
}

// Atualiza as informações da página de acordo com a playlist selecionada
function updatePlaylistInfo(playlistData) {
  document.getElementById("namePlaylist").innerHTML = playlistData.name;
  document.getElementById("creatorPlaylist").innerHTML = playlistData.creator;
  document.getElementById("imagePlay").src = playlistData.image;
}