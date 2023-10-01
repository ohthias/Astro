// Script de criação de playlists geradas pelo usuário, ou carregadas por padrão

/**
 * @param {function} calcularDuracaoTotal - Calcula o tamanho da playlist, com base
 *  na somatória do tempo de duração de cada música, onde é formatada na  funcçaõ
 *  'formatarDuracao', que transforma os tempo em minutos e segundos. Sendo usado
 *  na criação da playlist pela função 'exibirMusicas'
 */
function calcularDuracaoTotal() {
  let duracaoTotal = 0;
  let loadedCount = 0; // Contador de músicas carregadas

  musicas.forEach((musica) => {
    const audio = new Audio(musica.src);
    audio.addEventListener("loadedmetadata", () => {
      duracaoTotal += audio.duration;
      loadedCount++;

      // Verifica se todas as músicas foram carregadas
      if (loadedCount === musicas.length) {
        const duracaoTotalFormatada = formatarDuracao(duracaoTotal);

        const duracaoTotalElement = document.getElementById("duracao-total");
        duracaoTotalElement.textContent = `${duracaoTotalFormatada} duração total`;
      }
    });
  });
}

function formatarDuracao(segundos) {
  const minutos = Math.floor(segundos / 60);
  const segundosRestantes = Math.floor(segundos % 60);

  return `${minutos}:${segundosRestantes.toString().padStart(2, "0")}`;
}

let isPlaying = false;
let currentSongIndex = -1;

/**
 * @param {function} exibirMusicas - exibi em tela para o usuário a playlist de
 * música, com base nas informações coletadas no array das músicas
 */
function exibirMusicas() {
  const musicList = document.getElementById("music-list");

  musicas.forEach((musica, index) => {
    const listItem = document.createElement("li");

    const albumContainer = document.createElement("div");
    albumContainer.classList.add("album-container");

    const capaAlbum = document.createElement("img");
    capaAlbum.src = musica.capaAlbum;

    albumContainer.appendChild(capaAlbum);

    albumContainer.addEventListener("click", () => {
      tocarMusica(index);
    });

    listItem.appendChild(albumContainer);

    const infoMusica = document.createElement("div");
    infoMusica.innerHTML = `<div class='infoMusica'>
                              <div class='infoMusica_play'>
                                <strong class='musicnome_playlist'>${musica.nome}</strong><br>
                                <p class='nomeArtista_playlist'>${musica.artista}</p><
                              /div>
                              <button id='buttonSongPlay' onclick="tocarMusica(${index})"><i class='bx bx-caret-right'></i></button>
                            </div>`;

    listItem.appendChild(infoMusica);

    musicList.appendChild(listItem);
  });
}

/**
 * @param {function} tocarMusica - toca a música do botão que chamou a função,
 * verificando sua posição no array e sendo reproduzida automaticamente.
 * 
*/
function tocarMusica(index) {
  const musicName = document.querySelector("#musicName");
  const artistName = document.querySelector("#artistName");
  const imgSong = document.querySelector("#imgSong");
  const player = document.querySelector("#player");

  if (isPlaying && currentSongIndex === index) {
    player.pause();
    isPlaying = false;
  } else {
    currentSongIndex = index;
    musicName.innerHTML = musicas[index].nome;
    artistName.innerHTML = musicas[index].artista;
    imgSong.src = musicas[index].capaAlbum;
    player.play();
    player.src = musicas[index].src;
    isPlaying = true;

    player.addEventListener("ended", proximaMusica);
  }
}

/**
 * @param {function} proximaMusica - verifica a posição da musica que está
 *  sendo tocada. Se for verdadeira a afirmação ele avança para a próxima posição
 *  do array, e só substitui as informações no player
 */
function proximaMusica() {
  const imgSong = document.querySelector("#imgSong");
  const player = document.querySelector("#player");
  player.removeEventListener("ended", proximaMusica);

  // Avança para a próxima música
  currentSongIndex++;
  if (currentSongIndex >= musicas.length) {
    currentSongIndex = 0;
  }

  // Reproduz a próxima música
  const musica = musicas[currentSongIndex];
  player.src = musica.src;
  musicName.innerHTML = musica.nome;
  artistName.innerHTML = musica.artista;
  imgSong.src = musica.capaAlbum;
  player.play();
  isPlaying = true;

  player.addEventListener("ended", proximaMusica);
}

function musicaAnterior() {
  currentSongIndex--;
  if (currentSongIndex < 0) {
    currentSongIndex = musicas.length - 1; // Voltar para a última música se estiver na primeira
  }
  tocarMusica(currentSongIndex);
}

const tocarPlaylist = document.getElementById("playPause");
tocarPlaylist.addEventListener("click", () => {
  playPauseIcon()
  proximaMusica();
});


// Função para atualizar o ícone do botão Play/Pause
const textButtonPlay = "<i class='bx bx-caret-right'></i>";
const textButtonPause = "<i class='bx bx-pause'></i>";

const playPauseIcon = () => {
  if (player.paused) {
    tocarPlaylist.innerHTML = textButtonPlay;
  } else {
    tocarPlaylist.innerHTML = textButtonPause;
  }
};

// Evento para o botão "Próxima Música"
const nextButton = document.querySelector("#nextButton");
nextButton.addEventListener("click", () => {
  proximaMusica();
});

// Evento para o botão "Música Anterior"
const prevButton = document.querySelector("#prevButton");
prevButton.addEventListener("click", () => {
  musicaAnterior();
});

calcularDuracaoTotal();
exibirMusicas();
