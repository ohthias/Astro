import { likedSongs } from "/Astro/Backend/JS/musicPlayer.js";

/**
 * @param {function} generateLikedSongsList - gera a playlist de musicas curtidas
 * pelo usuário, com base nas musicas do objeto geral,e nas musicas que curtiu e 
 * entram no array 'likedSongs'.
 */
const generateLikedSongsList = () => { 
  const likedSongsList = document.getElementById("likedSongsList");
  likedSongsList.innerHTML = "";

  likedSongs.forEach((song) => {
    const listItem = document.createElement("li");
    const songInfo = document.createElement("p");
    const musicName = document.createElement("span");
    const artistName = document.createElement("span");
    const imgSong = document.createElement("img");

    musicName.textContent = song.musicName;
    artistName.textContent = song.artistName;
    imgSong.src = song.imgSong;
    imgSong.alt = song.musicName;

    songInfo.appendChild(musicName);
    songInfo.appendChild(document.createTextNode(" - "));
    songInfo.appendChild(artistName);

    listItem.appendChild(imgSong);
    listItem.appendChild(songInfo);

    likedSongsList.appendChild(listItem);
  });
};

generateLikedSongsList();