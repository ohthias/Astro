import { addNewSong } from "./Settings/app.js";

// Chamada para adicionar uma nova música à playlist
const newSong = {
  src: "/Astro/Backend/JS/Playlist/song4.mp3",
  name: "Nome da Nova Música 2",
  artist: "Artista da Nova Música 2",
  imgSong: "/Astro/Backend/JS/Playlist/img4.jpg",
};

addNewSong(newSong);
