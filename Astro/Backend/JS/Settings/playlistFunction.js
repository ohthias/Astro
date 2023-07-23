const musicas = [
  {
    src: "http://physical-authority.surge.sh/music/1.mp3",
    name: "No Time",
    artist: "Lastlings",
    imgSong:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBuflyiNrBSP0o-7KM9YqUsAZN8HIx7VCExFerUh4FMg&s",
  },

  {
    src: "http://physical-authority.surge.sh/music/2.mp3",
    name: "blinding lights",
    artist: "the weekend",
    imgSong:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcz6vl7dthSyfdNh6Eg4ZrcAYSieDSn7yCmQ&usqp=CAU",
  },

  {
    src: "http://physical-authority.surge.sh/music/3.mp3",
    name: "джованна",
    artist: "enrasta",
    imgSong: "https://source.unsplash.com/featured/60x60",
  },


  {
    src: "/Astro/Backend/Assets-Songs/Audio/1.mp3",
    name: "On My Way",
    artist: "Alan Walker",
    imgSong: "/Astro/Backend/Assets-Songs/ImageAudio/1.jpg",
  },

  {
    src: "/Astro/Backend/Assets-Songs/Audio/2.mp3",
    name: "Faded",
    artist: "Alan Walker",
    imgSong: "/Astro/Backend/Assets-Songs/ImageAudio/2.jpg",
  },

  {
    src: "/Astro/Backend/Assets-Songs/Audio/3.mp3",
    name: "On and On",
    artist: "Pagali World",
    imgSong: "/Astro/Backend/Assets-Songs/ImageAudio/3.jpg",
  },

  {
    src: "/Astro/Backend/Assets-Songs/Audio/13.mp3",
    name: "Baarishein",
    artist: "Atif Aslam",
    imgSong: "/Astro/Backend/Assets-Songs/ImageAudio/AlbumArt_{B5020207-474E-4720-7BF7-351BB9943900}_Small.jpg",
  }
];

// Criação de playlists e a interação com o player

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
                            <p class='nomeArtista_playlist'>${musica.artista}</p></div>`;
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
    // Pausa a música
    player.pause();
    isPlaying = false;
  } else {
    // Inicia a reprodução ou alterna para a próxima música
    currentSongIndex = index;
    const musica = musicas[index];
    player.src = musica.src;
    musicName.innerHTML = musica.nome;
    artistName.innerHTML = musica.artista;
    imgSong.src = musica.capaAlbum;
    player.play();
    isPlaying = true;

    // Evento para detectar quando a música atual terminou
    player.addEventListener("ended", proximaMusica);
  }
}

function proximaMusica() {
  // Remove o evento "ended" para evitar que ele seja chamado várias vezes
  const player = document.querySelector("#player");
  player.removeEventListener("ended", proximaMusica);

  // Avança para a próxima música
  currentSongIndex++;
  if (currentSongIndex >= musicas.length) {
    currentSongIndex = 0; // Volta para a primeira música quando atingir o fim da playlist
  }

  // Reproduz a próxima música
  const musica = musicas[currentSongIndex];
  player.src = musica.src;
  musicName.innerHTML = musica.nome;
  artistName.innerHTML = musica.artista;
  imgSong.src = musica.capaAlbum;
  player.play();
  isPlaying = true;

  // Adiciona novamente o evento "ended" para a próxima música
  player.addEventListener("ended", proximaMusica);
}

exibirMusicas();
