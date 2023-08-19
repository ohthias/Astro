import allSongs from "/Astro/Backend/JS/songs.js";

function filterByRhythm(rhythm) {
  const filteredSongs = Object.values(allSongs).filter(
    (song) => song.ritmo === rhythm
  );
  return filteredSongs;
}

// Função para filtrar músicas com base no gênero
function filterByGenre(genre) {
  const filteredSongs = Object.values(allSongs).filter(
    (song) => song.genero === genre
  );
  return filteredSongs;
}

// Exemplos de uso
const rockSongs = filterByGenre("Rock");
const agitatedSongs = filterByRhythm("agitado");

console.log("Músicas de Rock:", rockSongs);
console.log("Músicas Agitadas:", agitatedSongs);
