const palavras = ['no carro', 'no ônibus', 'nas galaxias', 'em casa' ];
let indice = 0;

const spanElement = document.getElementById('palavra');

setInterval(() => {
  spanElement.innerText = palavras[indice];
  indice = (indice + 1) % palavras.length;
}, 10000);
