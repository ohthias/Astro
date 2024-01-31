function createMusicPlayer() {
  const container = document.createElement("div");
  container.className = "containner_player fullscreen";

  const player = document.createElement("div");
  player.className = "player fullscreen";

  const playerImage = document.createElement("div");
  playerImage.className = "player_image fullscreen";
  const imgSong = document.createElement("img");
  imgSong.src = "https://fakeimg.pl/210x210/e9e9e9/e9e9e9";
  imgSong.id = "imgSong";
  playerImage.appendChild(imgSong);

  const playerInfoMusic = document.createElement("div");
  playerInfoMusic.className = "player_infoMusic fullscreen";
  const musicName = document.createElement("span");
  musicName.id = "musicName";
  musicName.textContent = "▅▅▅▅▅▅";
  const artistName = document.createElement("span");
  artistName.id = "artistName";
  artistName.textContent = "▅▅▅▅▅▅";
  playerInfoMusic.appendChild(musicName);
  playerInfoMusic.appendChild(artistName);

  const heartButton = document.createElement("button");
  heartButton.id = "heartMusic";
  const heartIcon = document.createElement("i");
  heartIcon.className = "fi fi-rr-heart fullscreen";
  heartButton.appendChild(heartIcon);

  const controls = document.createElement("div");
  controls.className = "controls fullscreen";
  const prevButton = document.createElement("button");
  prevButton.id = "prevButton";
  const prevIcon = document.createElement("i");
  prevIcon.className = "bx bx-skip-previous fullscreen";
  prevButton.appendChild(prevIcon);
  const playPauseButton = document.createElement("button");
  playPauseButton.id = "playPauseButton";
  const playPauseIcon = document.createElement("i");
  playPauseIcon.className = "bx bx-caret-right fullscreen";
  playPauseButton.appendChild(playPauseIcon);
  const nextButton = document.createElement("button");
  nextButton.id = "nextButton";
  const nextIcon = document.createElement("i");
  nextIcon.className = "bx bx-skip-next fullscreen";
  nextButton.appendChild(nextIcon);
  controls.appendChild(prevButton);
  controls.appendChild(playPauseButton);
  controls.appendChild(nextButton);

  const randomPlayerButton = document.createElement("button");
  randomPlayerButton.id = "randomPlayerMusic";
  const randomIcon = document.createElement("i");
  randomIcon.className = "fi fi-sr-shuffle fullscreen";
  randomPlayerButton.appendChild(randomIcon);

  const audioPlayer = document.createElement("audio");
  audioPlayer.id = "player";
  audioPlayer.src = "";

  const footer = document.createElement("div");
  footer.className = "footer fullscreen";
  const timecodePlayer = document.createElement("div");
  timecodePlayer.className = "timecode_player fullscreen";
  const currentTime = document.createElement("span");
  currentTime.id = "currentTime";
  currentTime.textContent = "0:00";
  const progressBarContainer = document.createElement("div");
  progressBarContainer.className = "progress-bar fullscreen";
  const progressBar = document.createElement("div");
  progressBar.className = "progress fullscreen";
  progressBarContainer.appendChild(progressBar);
  const duration = document.createElement("span");
  duration.id = "duration";
  duration.textContent = "0:00";
  timecodePlayer.appendChild(currentTime);
  timecodePlayer.appendChild(progressBarContainer);
  timecodePlayer.appendChild(duration);
  footer.appendChild(timecodePlayer);

  const containerMore = document.createElement("div");
  containerMore.className = "containner_more fullscreen";
  const containerVolume = document.createElement("div");
  containerVolume.className = "container_volume fullscreen";
  const volumeButton = document.createElement("button");
  volumeButton.id = "volumeButton";
  const volumeIcon = document.createElement("i");
  volumeIcon.className = "fi fi-ss-volume fullscreen";
  volumeButton.appendChild(volumeIcon);
  const volumeControlTooltip = document.createElement("div");
  volumeControlTooltip.className = "tooltip-volume_control fullscreen";
  const volumeInput = document.createElement("input");
  volumeInput.type = "range";
  volumeInput.min = "0";
  volumeInput.max = "1";
  volumeInput.step = "0.01";
  volumeInput.value = "1";
  volumeInput.id = "volumeSom";
  volumeControlTooltip.appendChild(volumeInput);
  containerVolume.appendChild(volumeButton);
  containerVolume.appendChild(volumeControlTooltip);

  const containerFaixas = document.createElement("div");
  containerFaixas.className = "container_faixas";
  const menuIcon = document.createElement("i");
  menuIcon.className = "fi fi-rr-menu-burger";
  const containerFaixasDetalhes = document.createElement("div");
  containerFaixasDetalhes.className = "container_faixas_detalhes";
  const upcomingSongsList = document.createElement("ul");
  upcomingSongsList.id = "upcomingSongsList";
  containerFaixasDetalhes.appendChild(upcomingSongsList);
  containerFaixas.appendChild(menuIcon);
  containerFaixas.appendChild(containerFaixasDetalhes);
  
  let openNextSong = false;

  menuIcon.addEventListener("click", function() {
    openNextSong = !openNextSong
    if(openNextSong){
      containerFaixasDetalhes.classList.add("open")
    } else {
      containerFaixasDetalhes.classList.remove("open")
    }
  })

  const fullScreenButton = document.createElement("button");
  fullScreenButton.id = "fullScreenButton";
  const fullScreenIcon = document.createElement("i");
  fullScreenIcon.className = "fi fi-rr-angle-up fullscreen";
  fullScreenButton.appendChild(fullScreenIcon);

  // Anexar todos os elementos criados à hierarquia adequada
  player.appendChild(playerImage);
  player.appendChild(playerInfoMusic);
  player.appendChild(heartButton);
  player.appendChild(controls);
  player.appendChild(randomPlayerButton);
  player.appendChild(audioPlayer);
  player.appendChild(footer);

  containerMore.appendChild(containerVolume);
  containerMore.appendChild(containerFaixas);
  containerMore.appendChild(fullScreenButton);
  player.appendChild(containerMore);

  container.appendChild(player);
  document.body.appendChild(container);
}

// Chame a função para criar o reprodutor de música
export { createMusicPlayer };
