const musicas = [
  {
    nome: "blinding lights",
    src: "http://physical-authority.surge.sh/music/2.mp3",
    artista: "the weekend",
    capaAlbum: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcz6vl7dthSyfdNh6Eg4ZrcAYSieDSn7yCmQ&usqp=CAU",
  },

  {
    src: "http://physical-authority.surge.sh/music/1.mp3",
    nome: "No Time",
    artista: "Lastlings",
    capaAlbum:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBuflyiNrBSP0o-7KM9YqUsAZN8HIx7VCExFerUh4FMg&s",
  },
  {
    src: "/Astro/Backend/JS/audio/1.mp3",
    nome: "On My Way",
    artista: "Alan Walker",
    capaAlbum: "/Astro/Backend/JS/ImageAudio/1.jpg",
  },

  {
    src: "/Astro/Backend/JS/audio/2.mp3",
    nome: "Faded",
    artista: "Alan Walker",
    capaAlbum: "/Astro/Backend/JS/ImageAudio/2.jpg",
  },

  {
    src: "/Astro/Backend/JS/audio/3.mp3",
    nome: "On and On",
    artista: "Pagali World",
    capaAlbum: "/Astro/Backend/JS/ImageAudio/3.jpg",
  },

  {
    src: "/Astro/Backend/JS/audio/13.mp3",
    nome: "Baarishein",
    artista: "Atif Aslam",
    capaAlbum:
      "/Astro/Backend/JS/ImageAudio/AlbumArt_{B5020207-474E-4720-7BF7-351BB9943900}_Small.jpg",
  },

  {
    src: "/Astro/Backend/JS/audio/12.mp3",
    nome: "Putt Jatt Da",
    artista: "Diljit Dosanjh",
    capaAlbum:
      "/Astro/Backend/JS/ImageAudio/AlbumArt_{B5020207-474E-4720-E590-731D38E15100}_Small.jpg",
  },

  {
    src: "/Astro/Backend/JS/audio/11.mp3",
    nome: "Lagdi Lahore",
    artista: "Guru Randhawa",
    capaAlbum:
      "/Astro/Backend/JS/ImageAudio/AlbumArt_{B5020207-474E-4720-63F6-EE1526A50100}_Small.jpg",
  },

  {
    src: "/Astro/Backend/JS/audio/7.mp3",
    nome: "Agar Tum Saath",
    artista: "Alka Yagnik",
    capaAlbum:
      "/Astro/Backend/JS/ImageAudio/AlbumArt_{B5020207-474E-4720-8980-A9187807E300}_Small.jpg",
  },

  {
    src: "/Astro/Backend/JS/audio/8.mp3",
    nome: "Suna Hai",
    artista: "Pagla",
    capaAlbum: "/Astro/Backend/JS/ImageAudio/8.jpg",
  },

];

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
