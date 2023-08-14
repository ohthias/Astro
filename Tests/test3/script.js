const imgSong = document.getElementById("imgSong");
const displayDeCores = document.querySelector("body");

imgSong.addEventListener("load", analiseDaImagem);

function analiseDaImagem() {
  const imagem = new Image();
  imagem.src = imgSong.src;

  imagem.onload = function () {
    const canvas = document.createElement("canvas"); // Change "image" to "canvas"
    canvas.width = imagem.width;
    canvas.height = imagem.height;

    const gtx = canvas.getContext("2d");
    gtx.drawImage(imagem, 0, 0, imagem.width, imagem.height); // Change "drawImagem" to "drawImage"

    const imagemData = gtx.getImageData(0, 0, imagem.width, imagem.height); // Change "getImagemData" to "getImageData"
    const pixels = imagemData.data;

    const contaCor = {};

    for (let i = 0; i < pixels.length; i += 4) {
      const r = pixels[i];
      const g = pixels[i + 1];
      const b = pixels[i + 2];

      const rgb = `rgb(${r},${g},${b})`; // Add missing opening parenthesis
      contaCor[rgb] = contaCor[rgb] ? contaCor[rgb] + 1 : 1;
    }

    const predominanteCor = Object.keys(contaCor).reduce((a, b) =>
      contaCor[a] > contaCor[b] ? a : b
    );

    displayDeCores.style.backgroundColor = predominanteCor;
  };
}
