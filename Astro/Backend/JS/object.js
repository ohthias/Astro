import playlist from '/Astro/Backend/JS/ArtistsPage/artistsArray.js';
import allSongs from '/Astro/Backend/JS/songs.js';

// Crie um novo objeto para armazenar as músicas associadas aos artistas
const playlistWithSongs = playlist.map(artistObj => {
  const songs = artistObj.songs.map(songName => {
    // Encontre a música no objeto allSongs com base no nome da música
    const songKey = Object.keys(allSongs).find(key => allSongs[key].nameSong === songName);
    return allSongs[songKey];
  });

  return { ...artistObj, songs };
});

// Exiba o objeto resultante com as músicas associadas
console.log(playlistWithSongs);
