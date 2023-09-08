/**
 * Script utlizado para a criação automatiza do obejto 'allSongs',
 * com seus atributos.
 */

// Características padrões
const nameSong = document.querySelector("#nameSong");
const artist = document.querySelector("#artist");
const songAudio = document.querySelector("#songAudio");
const imageSong = document.querySelector("#imageSong");
const genero = document.querySelector("#genero");
const album = document.querySelector("#album");

//Botões de ritmo
let selectRitmo = "";
const calmo = document.querySelector("#calmo");
calmo.addEventListener("click", function () {
  selectRitmo = "Calmo";
});

const moderado = document.querySelector("#moderado");
moderado.addEventListener("click", function () {
  selectRitmo = "moderado";
});

const agitado = document.querySelector("#agitado");
agitado.addEventListener("click", function () {
  selectRitmo = "agitado";
});

const intenso = document.querySelector("#intenso");
intenso.addEventListener("click", function () {
  selectRitmo = "intenso";
});

const raiva = document.querySelector("#raiva");
raiva.addEventListener("click", function () {
  selectRitmo = "raiva";
});

const sombrio = document.querySelector("#sombrio");
sombrio.addEventListener("click", function () {
  selectRitmo = "sombrio";
});

const romantico = document.querySelector("#romantico");
romantico.addEventListener("click", function () {
  selectRitmo = "romantico";
});

const dramatico = document.querySelector("#dramatico");
dramatico.addEventListener("click", function () {
  selectRitmo = "dramatico";
});

/**
 * @param - selectRitmo:
 *      A partir do momento que o botão é selecionado,
 *      ele entra num evento em que ele substituí o valor
 *      anterior da variável "selectRitmo" pelo qual
 *      ritmo foi selecionado.
 */

//Geração da lista a partir do botão "done" na função newSong()
const done = document.querySelector("#done");
const resultados = document.querySelector("#results");
done.onclick = () => newSong();
const musicList = [];

/**
 * Pega as informações coletadas nos inputs e botões e insere elas
 * no objeto 'newSong' que é utlizado para inserir na tela para a 
 * criação da lista para cópia
*/
const newSong = () => {
  let SongName = nameSong.value;
  let artistName = artist.value;
  let songAudioName = songAudio.value;
  let imageSongName = imageSong.value;
  let generoMusic = genero.value;
  let albumMusic = album.value;
  if(albumMusic == " ") {
    return none
  }

  const newMusic = {
    nameSong: SongName,
    artist: artistName,
    src: songAudioName,
    imgSong: imageSongName,
    genero: generoMusic,
    ritmo: selectRitmo,
    album: albumMusic
  };
  musicList.push(newMusic);

  nameSong.value = "";
  artist.value = "";
  songAudio.value = "";
  imageSong.value = "";
  genero.value = "";
  album.value = "";

  updateMusicList();

  /**
   * @param - newSong():
   *    Nesta função, ele insere os valor assumidos nos
   *    inputs e nos botões, e atribui eles dentro do objeto newMusic,
   *    que em cada atributo ele associa com seu respectivo dado coletado.
   *    Após adcionar essa informação no objeto, ele reseta todos os valores,
   *    aguardando novos dados
   */
};

const updateMusicList = () => {
  resultados.innerHTML = "";
  const ul = document.createElement("ul");
  let i = 41;

  for (const music of musicList) {
    const li = document.createElement("li");
    li.innerHTML = `<br> aa00${[i]}: {<br>
            nameSong: "${music.nameSong}",<br>
            artist: "${music.artist}",<br>
            src: "/Astro/Backend/Assets-Songs/Audio/${music.src}.mp3",<br>
            imgSong: "/Assets/Images/${music.imgSong}",<br>
            genero: "${music.genero}", <br>
            ritmo: "${music.ritmo}",<br>
            album: "${music.album}",<br>
        }, <br>`;
    ul.appendChild(li);
    i++;
  }
  resultados.appendChild(ul);

  /**
   * @param - updateMusicList()
   *    Criação de lista a partir dos dados do objeto.
   *    Com o seu output, o formato padrão de um objeto para ser
   *    inserido no arquivo songs.js
   */
};
