import allSongs from "/Astro/Backend/JS/songs.js";

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

// Variaveis globais
let index = 0;
let isMuted = false;
let liked = false;

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

const playPause = () => {
  if (player.paused) {
    player.play();
  } else {
    player.pause();
  }
  updatePlayPauseIcon(); // Atualiza o ícone do botão Play/Pause
};

// Função para atualizar o ícone do botão Play/Pause
const updatePlayPauseIcon = () => {
  if (player.paused) {
    playPauseButton.innerHTML = textButtonPlay;
  } else {
    playPauseButton.innerHTML = textButtonPause;
  }
};

//Função do timecode
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

// Range Volume
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
  isMuted = !isMuted; // Alterna entre mutar e desmutar
  player.muted === isMuted;

  if ((player.muted = isMuted)) {
    volumeButton.innerHTML = textMutedAudio;
  } else {
    volumeButton.innerHTML = textNormalAudio;
  }
};

//Like music
const likedSongs = [];

const likeMusic = () => {
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
    likedSongs.push(likedSong);
  }
};

// Função opcional para remover a música descurtida do array likedSongs
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

//Random music
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

// Função da criação da lista das próximas músicas
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
  player.src = songs[index].src;
  musicName.innerHTML = songs[index].name;
  artistName.innerHTML = songs[index].artist;
  imgSong.src = songs[index].imgSong;
  heartMusic.innerHTML = textNormalHeartMusic;
  playPause();
};

// Proximas faixas
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
  // @param Nextsong - Verifica se elá em 'runMode' se sim ele faz o runmode, se não, segue normalmente

  player.src = Object.values(allSongs)[index].src;
  musicName.innerHTML = Object.values(allSongs)[index].nameSong;
  artistName.innerHTML = Object.values(allSongs)[index].artist;
  imgSong.src = Object.values(allSongs)[index].imgSong;
  heartMusic.innerHTML = textNormalHeartMusic;

  updateTime();
  if (type === "next") {
    showUpcomingSongs();
  }
};

player.onended = () => {
  prevNextMusic();
};

// Keyboard atalhos
function pressPrevNext(event) {
  if (event.key === "a" || event.key === "A") {
    prevNextMusic("prev");
  }
  if (event.key == "d" || event.key == "D" || event.key == "VK_RIGHT") {
    prevNextMusic();
  }
  if (event.key === "m" || event.key === "M") {
    stateButtonVolume();
  }
  if (event.key == "space" || event.key == "SPACE") {
    playPause();
  }
}

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