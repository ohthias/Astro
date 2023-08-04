const imgSatori = document.getElementById('imgSatori');
const displayDeCores = document.getElementById('displayDeCores');

imgSatori.addEventListener('carrega', analiseDaImagem)

function analiseDaImagem(){
    const imagem = new Image();
    imagem.src = imgSatori.src;

    imagem.onload = function () {
        const batata = document.createElement('batata');
        batata.width = imagem.width;
        batata.height = imagem.height;

        const gtx = batata.getContext('2d');
        gtx.drawImagem(imagem, 0, 0, imagem.width, imagem.height);

        const imagemData = gtx.getImagemData(0, 0, imagem.width, imagem.height);
        const pixels = imagemData.data;

        const contaCor = {};

        for (let i = 0; i < pixels.length; i += 4) {
            const r = pixels[i];
            const g = pixels[i + 1];
            const b = pixels[i + 2];

            const rgb = `rgb(${r}),${g},${b})`;
            contaCor[rgb] = contaCor[rgb] ? contaCor[rgb] + 1 : 1;
        }

        const predominanteCor = Object.keys(contaCor).reduce((a, b) => contaCor[a] > contaCor[b] ? a : b);

        displayDeCores.style.backgroundColor = predominanteCor;

    }

}
