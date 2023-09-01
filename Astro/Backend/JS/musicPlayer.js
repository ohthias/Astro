import allSongs from "/Astro/Backend/JS/songs.js";
import {
  startListening,
  stopListening,
} from "/Astro/Backend/JS/levelSystem/base.js";
import { createMusicPlayer } from "/Astro/Backend/JS/Settings/createdMusicPlayer.js";
createMusicPlayer();

const player = document.querySelector("#player");
const musicName = document.querySelector("#musicName");
const artistName = document.querySelector("#artistName");
const imgSong = document.querySelector("#imgSong");
const heartMusic = document.querySelector("#heartMusic");
const randomPlayerMusic = document.querySelector("#randomPlayerMusic");
const playPauseButton = document.querySelector("#playPauseButton");
const prevButton = document.querySelector("#prevButton");
const nextButton = document.querySelector("#nextButton");
const currentTime = document.querySelector("#currentTime");
const duration = document.querySelector("#duration");
const progressBar = document.querySelector(".progress-bar");
const progress = document.querySelector(".progress");
const voulmeSom = document.querySelector("#volumeSom");
const volumeButton = document.querySelector("#volumeButton");
const fullScreenButton = document.querySelector("#fullScreenButton");
const upcomingSongsList = document.querySelector("#upcomingSongsList");

// Icones para botão
const textButtonPlay = "<i class='bx bx-caret-right'></i>";
const textButtonPause = "<i class='bx bx-pause'></i>";
const textMutedAudio = "<i class='fi fi-ss-volume-mute'></i>";
const textNormalAudio = "<i class='fi fi-ss-volume'></i>";
const textNormalHeartMusic = "<i class='fi fi-rr-heart'>";
const textLikeHeartMusic = "<i class='fi fi-sr-heart'></i>";
const textrandomPlayerMusicAtive = "<i class='fi fi-rr-shuffle'></i>";
const textrandomPlayerMusicNormal = "<i class='fi fi-ss-shuffle'></i>";

let index = 0;

// Keyboard atalhos
const pressPrevNext = (event) => {
  if (event.key === "ArrowLeft") {
    prevNextMusic("prev");
  } else if (event.key == "ArrowRight") {
    prevNextMusic();
  } else if (event.key === "m" && event.ctrlKey) {
    stateButtonVolume();
  } else if (event.key === "p" && event.altKey && event.ctrlKey) {
    playPause();
  }
};

//Eventos
document.addEventListener("keydown", pressPrevNext);
prevButton.onclick = () => prevNextMusic("prev");
nextButton.onclick = () => prevNextMusic();
playPauseButton.onclick = () => playPause();
player.ontimeupdate = () => updateTime();
volumeButton.onclick = () => stateButtonVolume();
heartMusic.onclick = () => likeMusic();
randomPlayerMusic.onclick = () => randomMusic();
fullScreenButton.onclick = () => toggleFullScreen();

let isPlaying = false;

/**
 * @param {function} playPause - controle de estado de reprodução do player de áudio,
 * juntamente com a atualização do ícone do botão de reprodução/pausa, @param {updatePlayPauseIcon}.
 */
const playPause = () => {
  if (player.paused) {
    player.play();
    startListening();
    isPlaying = true; // Atualize o estado para tocando
  } else {
    stopListening();
    player.pause();
    isPlaying = false; // Atualize o estado para pausado
  }
  updatePlayPauseIcon(); // Atualiza o ícone do botão Play/Pause
};

const updatePlayPauseIcon = () => {
  if (player.paused) {
    playPauseButton.innerHTML = textButtonPlay;
  } else {
    playPauseButton.innerHTML = textButtonPause;
  }
};

/**
 * @param {fuction} updateTime - Atualiza a exibição do tempo de reprodução
 *  atual e da duração da faixa no formato de minutos e segundos, bem como
 *  atualizar visualmente a barra de progresso, com base no estado de reprodução
 *  do player de áudio. A função updateTime calcula os minutos e segundos do tempo
 *  atual de reprodução e da duração total da faixa, formatando-os para exibição.
 *  Além disso, ela atualiza a largura da barra de progresso de acordo com o
 * progresso da reprodução. A função formatZero garante que os números menores que
 * 10 sejam exibidos com um zero à esquerda. O evento onclick na progressBar permite
 * que o usuário clique na barra de progresso para ajustar a minutagem da reprodução
 * com base na posição do clique.
 */
const updateTime = () => {
  const currentMinutes = Math.floor(player.currentTime / 60);
  const currentSeconds = Math.floor(player.currentTime % 60);
  currentTime.textContent = currentMinutes + ":" + formatZero(currentSeconds);

  const durationFormatted = isNaN(player.duration) ? 0 : player.duration;
  const durationMinutes = Math.floor(durationFormatted / 60);
  const durationSeconds = Math.floor(durationFormatted % 60);
  duration.textContent = durationMinutes + ":" + formatZero(durationSeconds);

  const progressWidth = durationFormatted
    ? (player.currentTime / durationFormatted) * 100
    : 0;

  progress.style.width = progressWidth + "%";
};

const formatZero = (n) => (n < 10 ? "0" + n : n);

progressBar.onclick = (e) => {
  const newTime = (e.offsetX / progressBar.offsetWidth) * player.duration;
  player.currentTime = newTime;
};

/**
 * @param {event} volumeButton - gerencia o controle de volume em um player de áudio.
 *  Quando a página é carregada, ele define o volume inicial com base no valor do controle
 *  de volume, atualiza o ícone do botão de volume e acompanha as mudanças no controle.
 *  A função stateButtonVolume é responsável por alternar entre o volume mudo e normal,
 *  ajustando o ícone do botão de volume de acordo. No entanto, havia erros na versão
 *  original da função, os quais foram corrigidos para fazer a alternância correta entre
 *  os estados de mudo e normal.
 */
document.addEventListener("DOMContentLoaded", function () {
  player.volume = volumeSom.value;
  volumeButton.innerHTML = textNormalAudio;

  voulmeSom.addEventListener("input", function () {
    player.volume = voulmeSom.value;

    if (voulmeSom.value == 0) {
      volumeButton.innerHTML = textMutedAudio;
    } else {
      volumeButton.innerHTML = textNormalAudio;
    }
  });
});

const stateButtonVolume = () => {
  player.muted = !player.muted; // Alterna entre mutar e desmutar

  if (player.muted) {
    volumeButton.innerHTML = textMutedAudio;
  } else {
    volumeButton.innerHTML = textNormalAudio;
  }
};

/**
 * @param {block fuction} likedSong -  gerencia a funcionalidade de curtir músicas,
 *  mantendo um array likedSongs para armazenar detalhes de músicas curtidas. A função
 *  likeMusic é acionada quando o botão de curtir é clicado, alternando o estado de
 *  curtir para a música atual e atualizando o ícone do botão de coração. A função
 *  saveLikedSong adiciona uma música ao array likedSongs se ela ainda não estiver
 *  presente, verificando se já existe. A função removeLikedSong possibilita a remoção
 *  de uma música do array likedSongs com base nos detalhes da música. O array likedSongs
 *  pode ser exportado para uso em outras partes do código. Essencialmente, essa parte do
 *  código oferece a funcionalidade de manter uma lista de músicas curtidas.
 */
const likedSongs = [];

const likeMusic = () => {
  let liked = false;

  liked = !liked;
  player.likeMusic = liked;

  if (player.likeMusic === true) {
    heartMusic.innerHTML = textLikeHeartMusic;
    // Adicionar a música curtida ao array likedSongs
    saveLikedSong(musicName.textContent, artistName.textContent, imgSong.src);
  } else {
    heartMusic.innerHTML = textNormalHeartMusic;
    // Remover a música descurtida do array likedSongs (opcional)
    removeLikedSong(musicName.textContent, artistName.textContent, imgSong.src);
  }
};

const saveLikedSong = (musicName, artistName, imgSong) => {
  const likedSong = {
    musicName: musicName,
    artistName: artistName,
    imgSong: imgSong,
  };

  // Verifica se a música já está no array antes de adicioná-la
  const isAlreadyLiked = likedSongs.some(
    (song) =>
      song.musicName === likedSong.musicName &&
      song.artistName === likedSong.artistName &&
      song.imgSong === likedSong.imgSong
  );

  if (!isAlreadyLiked) {
    ("");
    likedSongs.push(likedSong);
  }
};

const removeLikedSong = (musicName, artistName, imgSong) => {
  for (let i = 0; i < likedSongs.length; i++) {
    const song = likedSongs[i];
    if (
      song.musicName === musicName &&
      song.artistName === artistName &&
      song.imgSong === imgSong
    ) {
      likedSongs.splice(i, 1);
      break;
    }
  }
};

export { likedSongs };

/**
 * @param {block fuction} rundomMode - Função de reprodução de músicas
 *  aleatórias em um player de áudio. Através da variável randomMode, ele controla
 *  se o modo de reprodução aleatória está ativo ou não. Quando o botão de reprodução
 *  aleatória é clicado, a função randomMusic alterna o estado do modo aleatório e
 *  atualiza o ícone correspondente. A função getRandomIndex gera um índice aleatório
 *  para escolher uma música aleatória, assegurando que não seja a mesma música
 *  atualmente em reprodução. Em resumo, o código permite a seleção de músicas aleatórias
 *  para reprodução no player de áudio, com opção de ativar ou desativar o modo aleatório.
 */
let randomMode = false;

const randomMusic = () => {
  randomMode = !randomMode;

  if (randomMode) {
    randomPlayerMusic.innerHTML = textrandomPlayerMusicNormal;
  } else {
    randomPlayerMusic.innerHTML = textrandomPlayerMusicAtive;
  }
};

const getRandomIndex = () => {
  const currentIndex = index;
  let randomIndex;

  do {
    randomIndex = Math.floor(Math.random() * Object.keys(allSongs).length);
  } while (randomIndex === currentIndex);

  return randomIndex;
};

/**
 * @param {block fuction} showUpcomingSongs - Gerencia a exibição e reprodução
 *  de músicas próximas em um player de áudio. A função showUpcomingSongs atualiza
 *  a lista de próximas músicas, criando elementos de lista com capa, nome e artista
 *  para um número determinado de músicas próximas. Cada item da lista possui um
 *  evento de clique que aciona a função playUpcomingSong, a qual seleciona uma música
 *  da lista e a reproduz no player de áudio, atualizando os detalhes da música exibidos,
 *  como nome, artista e capa, além de iniciar a reprodução.
 */
const showUpcomingSongs = () => {
  upcomingSongsList.innerHTML = "";

  const numberOfUpcomingSongsToShow = 4;

  for (let i = 0; i <= numberOfUpcomingSongsToShow; i++) {
    const upcomingIndex = (index + i) % Object.keys(allSongs).length;
    const upcomingSong = allSongs[Object.keys(allSongs)[upcomingIndex]];
    const listItem = document.createElement("li");

    listItem.innerHTML = `<div class="Songlits">
                            <img src="${upcomingSong.imgSong}">
                            <div class="Songlist-details">
                              <h5> ${upcomingSong.nameSong} </h5>
                              <p> ${upcomingSong.artist}</p>
                            </div>
                          </div>`;

    // Poder clicar em qualquer música e ela ser tocada
    listItem.addEventListener("click", () => {
      playUpcomingSong(upcomingIndex);
    });

    upcomingSongsList.appendChild(listItem);
  }
};

// Função da musica clicada
const playUpcomingSong = (upcomingIndex) => {
  index = upcomingIndex;
  player.src = Object.values(allSongs)[index].src;
  musicName.innerHTML = Object.values(allSongs)[index].nameSong;
  artistName.innerHTML = Object.values(allSongs)[index].artist;
  imgSong.src = Object.values(allSongs)[index].imgSong;
  heartMusic.innerHTML = textNormalHeartMusic;

  playPause();
};

/**
 * @param {fuction} prevNextMusic - Gerencia a reprodução de músicas
 *  anteriores e próximas do player, considerando também o modo de reprodução
 *  aleatória. A função prevNextMusic é acionada ao clicar nos botões de
 *  avançar ou retroceder e aceita um argumento type, que especifica a ação
 *  ("next" para avançar ou "prev" para retroceder). Dependendo do modo de
 *  reprodução aleatória (randomMode), ele pode selecionar aleatoriamente uma
 *  nova música (getRandomIndex()) ou atualizar o índice da música atual. Se
 *  o modo aleatório não estiver ativado, ele ajusta o índice com base nas ações
 *  do usuário. Os detalhes da nova música são carregados no player de áudio,
 *  incluindo a fonte, o nome, o artista e a capa. Além disso, se o player não
 *  estiver reproduzindo, inicia a reprodução, atualiza os detalhes exibidos e
 *  chama a função updateTime(). Se a ação for "next", também atualiza a lista de
 *  próximas músicas com showUpcomingSongs(). Em resumo, esse código permite a
 *  navegação entre músicas e a atualização dos detalhes da reprodução, considerando
 *  tanto a reprodução aleatória quanto o estado de reprodução anterior.
 */
const prevNextMusic = (type = "next") => {
  if (randomMode) {
    index = getRandomIndex();
  } else if (
    (type == "next" && index + 1 === allSongs.length) ||
    type === "init"
  ) {
    index = 0;
  } else if (type == "prev" && index === 0) {
    index = allSongs.length;
  } else {
    index = type === "prev" && index ? index - 1 : index + 1;
  }

  player.src = Object.values(allSongs)[index].src;
  musicName.innerHTML = Object.values(allSongs)[index].nameSong;
  artistName.innerHTML = Object.values(allSongs)[index].artist;
  imgSong.src = Object.values(allSongs)[index].imgSong;
  heartMusic.innerHTML = textNormalHeartMusic;

  if (type === "next") {
    showUpcomingSongs();
  }

  if (!isPlaying) {
    player.play();
  }

  playPause();
  updateTime();
};

//FullScreen
let currentStyle = "playerCss";

const toggleFullScreen = () => {
  const playerCss = document.getElementById("normal");
  const fullScreenCss = document.getElementById("fullScreen");

  if (currentStyle === "playerCss") {
    playerCss.disabled = true;
    fullScreenCss.disabled = false;
    currentStyle = "fullScreenCss";
  } else {
    playerCss.disabled = false;
    fullScreenCss.disabled = true;
    currentStyle = "playerCss";
  }
};

prevNextMusic("init");