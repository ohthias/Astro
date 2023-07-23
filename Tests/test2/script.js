const musicas = [
  {
    nome: "Beyond",
    src: "/Assets/Music/Beyond.mp3",
    artista: "Achour",
    capaAlbum: "/Astro/Backend/JS/ImageAudio/2.jpg",
  },
  {
    nome: "Nome da Música 2",
    src: "/Astro/Backend/JS/audio/10.mp3",
    artista: "Artista 2",
    capaAlbum: "",
  },
  // Adicione mais objetos de música aqui, se desejar
];

let isPlaying = false;
let currentSongIndex = -1;

function exibirMusicas() {
  const musicList = document.getElementById("music-list");

  musicas.forEach((musica, index) => {
    const listItem = document.createElement("li");

    const capaAlbum = document.createElement("img");
    capaAlbum.src = musica.capaAlbum;
    listItem.appendChild(capaAlbum);

    const infoMusica = document.createElement("div");
    infoMusica.innerHTML = `<strong>${musica.nome}</strong><br>
                                    Artista: ${musica.artista}<br>
                                    <button onclick="tocarMusica(${index})">Tocar</button>`;
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
