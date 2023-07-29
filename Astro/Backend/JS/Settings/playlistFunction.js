const musicas = [
  {
    src: "http://physical-authority.surge.sh/music/1.mp3",
    nome: "No Time",
    artista: "Lastlings",
    capaAlbum: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBuflyiNrBSP0o-7KM9YqUsAZN8HIx7VCExFerUh4FMg&s",
  },

  {
    src: "http://physical-authority.surge.sh/music/2.mp3",
    nome: "blinding lights",
    artista: "the weekend",
    capaAlbum: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcz6vl7dthSyfdNh6Eg4ZrcAYSieDSn7yCmQ&usqp=CAU",
  },

  {
    src: "/Astro/Backend/Assets-Songs/Audio/NoMercy.mp3",
    nome: "No Mercy",
    artista: "TrackTribe",
    capaAlbum: "/Assets/Images/Astro_main-caps/11.png",
  },

  {
    src: "/Astro/Backend/Assets-Songs/Audio/IWishIKnew.mp3",
    nome: "I Wish I Knew",
    artista: "Otis McDonald",
    capaAlbum: "/Assets/Images/Astro_main-caps/15.png",
  },

  {
    src: "/Astro/Backend/Assets-Songs/Audio/HTML.mp3",
    nome: "HTML",
    artista: "Riot",
    capaAlbum: "https://source.unsplash.com/featured/80x80",
  },

  {
    src: "/Astro/Backend/Assets-Songs/Audio/Fingers.mp3",
    nome: "Fingers",
    artista: "Otis McDonald",
    capaAlbum: "/Assets/Images/Astro_main-caps/13.png",
  },

  {
    src: "/Astro/Backend/Assets-Songs/Audio/YouWillNeverSeeMeComing.mp3",
    nome: "You Will Never See Me Coming",
    artista: "NEFFEX",
    capaAlbum: "/Assets/Images/Astro_main-caps/8.png",
  },

];

// Criação de playlists e a interação com o player

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
        duracaoTotalElement.textContent = `${duracaoTotalFormatada} duração da playlist`;
      }
    });
  });
}

function formatarDuracao(segundos) {
  const minutos = Math.floor(segundos / 60);
  const segundosRestantes = Math.floor(segundos % 60);

  return `${minutos}:${segundosRestantes.toString().padStart(2, "0")}`;
}

let currentPlaylist = "Playlist 1"; // Definir a playlist inicial
let isPlaying = false;
let currentSongIndex = -1;

function exibirMusicas() {
  const musicList = document.getElementById("music-list");

  musicas.forEach((musica, index) => {
    const listItem = document.createElement("li");

    const albumContainer = document.createElement("div");
    albumContainer.classList.add("album-container");

    const capaAlbum = document.createElement("img");
    capaAlbum.src = musica.capaAlbum;

    const playIcon = document.createElement("i");
    playIcon.classList.add("bx", "bx-caret-right", "play-icon");

    albumContainer.appendChild(capaAlbum);
    albumContainer.appendChild(playIcon);

    albumContainer.addEventListener("click", () => {
      tocarMusica(index);
    });

    listItem.appendChild(albumContainer);

    const infoMusica = document.createElement("div");
    infoMusica.innerHTML = `<div class='infoMusica'><div class='infoMusica_play'><strong class='musicnome_playlist'>${musica.nome}</strong><br>
                            <p class='nomeArtista_playlist'>${musica.artista}</p></div>
                            <button id='buttonSongPlay' onclick="tocarMusica(${index})"><i class='bx bx-caret-right'></i></button></div>`;
    listItem.appendChild(infoMusica);

    musicList.appendChild(listItem);
  });
}

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
    const musica = musicas[index];
    player.src = musica.src;
    musicName.innerHTML = musica.nome;
    artistName.innerHTML = musica.artista;
    imgSong.src = musica.capaAlbum;
    player.play();
    isPlaying = true;

    player.addEventListener("ended", proximaMusica);
  }
}

function proximaMusica() {
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

// Event listener para o botão "Próxima Música"
const nextButton = document.querySelector("#nextButton");
nextButton.addEventListener("click", () => {
  proximaMusica();
});

// Event listener para o botão "Música Anterior"
const prevButton = document.querySelector("#prevButton");
prevButton.addEventListener("click", () => {
  musicaAnterior();
});

calcularDuracaoTotal();
exibirMusicas();
