import backlist from "./backgroundMainArtsit.js";

const h1Element = document.getElementById("nameArtist");
const backgroundDiv = document.getElementById("backParallax");
const nextSong = document.getElementById("nextSong")

// Verifica se já há um índice armazenado no localStorage
let currentIndex = localStorage.getItem("currentIndex");
if (currentIndex === null) {
  currentIndex = 0;
} else {
  currentIndex = parseInt(currentIndex, 10);
}

// Função para atualizar o índice no localStorage e avançar uma posição no array
function updateIndexAndAdvance() {
  if (currentIndex >= backlist.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }

  // Armazena o novo índice no localStorage
  localStorage.setItem("currentIndex", currentIndex);

  // Atualiza o header e o background
  changeHeaderAndBackground();
}

// Função para atualizar o header e o background
function changeHeaderAndBackground() {
  const newHeaderText = backlist[currentIndex].nameArtist;
  const newBackgroundImage = backlist[currentIndex].src;
  const newNextSong = backlist[currentIndex].nextSong

  h1Element.innerText = newHeaderText;
  backgroundDiv.style.backgroundImage = `url('${newBackgroundImage}')`;
  nextSong.innerText = newNextSong
}

// Chamando a função para atualizar o header e o background inicialmente
changeHeaderAndBackground();
updateIndexAndAdvance();
