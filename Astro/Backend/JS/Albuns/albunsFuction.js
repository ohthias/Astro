import allSongs from "/Astro/Backend/JS/songs.js";

/**
 * @param {function} getUniqueAlbums - Usada para obter um ambum unico,
 * com seus autores e a URL da imagem da capa do primeiro álbum.
 * Pois as informações que chegam atráves de 'allSongs', vem embaralhadas
 * e todas juntsas. Essa função crir um objeto para cada album com seus 
 * respectivos dados, retornando essa informação ao final para ser usada
 */

function getUniqueAlbums(songsObject) {
  const uniqueAlbums = [];
  const albumSet = new Set();

  for (const songId in songsObject) {
    const album = songsObject[songId].album;
    if (album && !albumSet.has(album)) {
      albumSet.add(album);
      uniqueAlbums.push({
        name: album,
        author: songsObject[songId].artist,
        coverImage: songsObject[songId].imgSong,
      });
    }
  }

  return uniqueAlbums;
}

/**
 * @param {function} displayAlbumSongs - cria a lista 'li' das faixas
 * dos respectivo album, exibindo nome da faixa e o artista
 */
function displayAlbumSongs(songs) {
  const container = document.getElementById("music-list");

  songs.forEach((song) => {
    const listItem = document.createElement("li");

    const infoMusica = document.createElement("div");
    infoMusica.innerHTML = `<div class='infoMusica'><div class='infoMusica_play'><strong class='musicnome_playlist'>${song.nameSong}</strong><br>
                            <p class='nomeArtista_playlist'>${song.artist}</p></div>
                            <button id='buttonSongPlay'><i class='bx bx-caret-right'></i></button></div>`;
    listItem.appendChild(infoMusica);

    container.appendChild(listItem);
  });
}

/**
 * @constant uniqueAlbums= chama a função getUniqueAlbums e armazena o 
 * resultado retornado por essa função na variável uniqueAlbums.
 */

const uniqueAlbums = getUniqueAlbums(allSongs);

// Extração do parametro 'album' da URL
const urlParams = new URLSearchParams(window.location.search);
const albumParam = urlParams.get("album");

/**
 * @param {const} albumParam - A variável armazena o valor do parâmetro 'album' 
 * extraído da URL usando o URLSearchParams. Esse valor de parâmetro é 
 * então convertido para um inteiro (albumIndex) para ser usado em 
 * processamentos posteriores. O script verifica se o albumIndex 
 * fornecido é válido e está dentro do intervalo de álbuns disponíveis. 
 * Se as condições forem atendidas, ele recupera as informações do álbum 
 * selecionado de uniqueAlbums e filtra as músicas com base no nome do álbum 
 * selecionado. Em seguida, exibe a lista de músicas do álbum selecionado 
 * usando a função displayAlbumSongs.
*/

if (!albumParam) {
  console.error(
    "Parâmetro 'album' ausente na URL. Por favor, forneça um índice de álbum válido."
  );
} else {
  const albumIndex = parseInt(albumParam, 10);

  if (
    !isNaN(albumIndex) &&
    albumIndex >= 0 &&
    albumIndex < uniqueAlbums.length
  ) {
    const selectedAlbum = uniqueAlbums[albumIndex - 1];
    console.log("Álbum selecionado:", selectedAlbum);

    // Filter songs based on the selected album name
    const albumSongs = Object.values(allSongs).filter(
      (song) => song.album === selectedAlbum.name
    );

    // Display the list of songs in the selected album
    displayAlbumSongs(albumSongs);
    loadBasedOnAlbum(selectedAlbum, allSongs)
  } else {
    console.error("Álbum não encontrado ou parâmetro inválido na URL.");
  }
}

/**
 *  @param {function} loadBasedOnAlbum - Com base nas informações do
 *  album selecionado, ele exibe na tela.
 *
 * example:
 *    selectedAlbum = "Lost In Space"
 *    displayAlbumSongs(selectedAlbum,songsObject)
 */

function loadBasedOnAlbum(selectedAlbum, songsObject) {
  console.log(`Músicas do álbum "${selectedAlbum.name}":`);

  for (const songId in songsObject) {
    if (songsObject[songId].album === selectedAlbum.name) {
      document.getElementById("nameAlbum").innerHTML = selectedAlbum.name;
      document.getElementById("creatorAlbum").innerHTML = songsObject[songId].artist;
      document.getElementById("imagePlay").src = selectedAlbum.coverImage;
      displayAlbumSongs(selectedAlbum);

      //Console
      console.log(`Música: ${songsObject[songId].nameSong}`);
      console.log(`Artista: ${songsObject[songId].artist}`);
      console.log("---");
    }
  }
}
