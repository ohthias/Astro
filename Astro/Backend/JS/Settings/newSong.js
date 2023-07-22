import { addNewSong } from "/Astro/Backend/JS/Settings/app.js";

const newSong = {
  src: "/Astro/Backend/JS/Playlist/song3.mp3",
  name: "Nome da Nova Música",
  artist: "Artista da Nova Música",
  imgSong: "/Astro/Backend/JS/Playlist/img3.jpg",
};

addNewSong(newSong);
