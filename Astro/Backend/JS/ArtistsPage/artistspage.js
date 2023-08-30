import artistsArray from "/Astro/Backend/JS/ArtistsPage/artistsArray.js";

/**
 * @param {const} artistParam: Verifica se um parâmetro 'artist' está presente na URL,
 *  valida o índice do artista e, se tudo estiver correto,
 *  atualiza informações relacionadas a esse artista e carrega
 *  com base no artista selecionado. Se ocorrer algum problema,
 *  ele registra mensagens de erro apropriadas no console.
*/
const urlParams = new URLSearchParams(window.location.search);
const artistParam = urlParams.get("artist");

if (!artistParam) {
  console.error("Parâmetro 'artist' ausente no URL.");
} else {
  const artistIndex = parseInt(artistParam, 10);

  if (
    !isNaN(artistIndex) &&
    artistIndex >= 1 &&
    artistIndex <= artistsArray.length
  ) {
    const selectedArtist = artistsArray[artistIndex - 1];
    updateArtistInfo(selectedArtist);
    loadBasedOnArtist(selectedArtist.artist);
  } else {
    console.error("Artista não encontrado ou parâmetro inválido no URL.");
  }
}

function loadBasedOnArtist(artistName) {
  switch (artistName) {
    case "Otis McDonald":
      console.log("Carregando mix para Otis McDonald...");
      break;

    case "NEFFEX":
      console.log("Carregando mix para NEFFEX...");
      break;

    case "Emily Sprague":
      console.log("Carregando mix para Emily Sprague...");
      break;

    case "E's Jammy Jams":
      console.log("Carregando mix para E's Jammy Jams...");
      break;

    case "TrackTribe":
      console.log("Carregando mix para TrackTribe...");
      break;

    default:
      console.log("Página do", artistName, "não encontrado");
      return;
  }
}

function updateArtistInfo(artist) {
  document.getElementById("nameArtist").innerText = artist.artist;
  document.getElementById("about").innerText = artist.about;
  document.getElementById("seguidores").innerText = artist.seguidores + " Seguidores";
  document.getElementById("ouvintes").innerText = artist.ouvintes + " Ouvintes";
  document.getElementById(
    "backParallax"
  ).style.backgroundImage = `url(${artist.imgArtist})`;

  const songsList = document.getElementById("songs-list");
  songsList.innerHTML = "";
  artist.songs.forEach((song) => {
    const songItem = document.createElement("li");
    songItem.innerText = song;
    songsList.appendChild(songItem);
  });
}
