const artistInfoString = decodeURIComponent(window.location.search.substr(6));
const artistInfo = JSON.parse(artistInfoString);

import artistsObject from "/Astro/Backend/JS/ArtistsPage/artistspage.js";

const nameArtist = document.getElementById("nameArtist");
const aboutText = document.getElementById("about");
const follows = document.getElementById("follows");
const ouvintes = document.getElementById("ouvintes");

function updateArtistInfo(artistId) {
  const artist = artistsObject.find((artist) => artist.id === artistId);

  if (artist) {
    window.location.href = "/Astro/Frontend/Html/Artistas/A01-AK.html"
    nameArtist.innerHTML = artist.name;
    aboutText.innerHTML = artist.about;
    follows.innerHTML = artist.follows;
    ouvintes.innerHTML = artist.ouvintes;
  } else {
    console.log("Artista não encontrado!");
  }
}

let currentIndex = 0;

function showButtonsScreen() {
  document.getElementById("buttonsContainer").style.display = "block";
  document.getElementById("artistContainer").style.display = "none";
}

function showArtistScreen() {
  document.getElementById("buttonsContainer").style.display = "none";
  document.getElementById("artistContainer").style.display = "block";
}

showButtonsScreen(); // Exibir a tela dos botões inicialmente

// Adicionar eventos de clique para os botões
const btnNext = document.getElementById("btnNext");
const btnPrevious = document.getElementById("btnPrevious");

btnNext.addEventListener("click", () => {
  if (currentIndex < artistsObject.length - 1) {
    currentIndex++;
  }
  updateArtistInfo(artistsObject[currentIndex].id);
  showArtistScreen();
});

btnPrevious.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
  }
  updateArtistInfo(artistsObject[currentIndex].id);
  showArtistScreen();
});

// Função para carregar o conteúdo do arquivo HTML usando AJAX
function loadHTMLFile(file, containerId) {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      document.getElementById(containerId).innerHTML = xhr.responseText;
    }
  };
  xhr.open("GET", file, true);
  xhr.send();
}