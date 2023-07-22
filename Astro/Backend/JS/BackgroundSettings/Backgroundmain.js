import backlist from "/Astro/Backend/JS/BackgroundSettings/backgroundMainArtsit.js";

const h1Element = document.getElementById("nameArtist");
const backgroundDiv = document.getElementById("backParallax");

let currentIndex = 0;

function changeHeaderAndBackground() {
  if (currentIndex >= backlist.length) {
    currentIndex = 0;
  }

  const newHeaderText = backlist[currentIndex].nameArtist;
  const newBackgroundImage = backlist[currentIndex].src;

  h1Element.innerText = newHeaderText;
  backgroundDiv.style.backgroundImage = `url('${newBackgroundImage}')`;

  currentIndex++;
}

changeHeaderAndBackground();
