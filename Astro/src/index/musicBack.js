function salvarEstadoAudio() {
  const audio = document.getElementById("audio");
  audio.volume = 0.3;
  const currentTime = audio.currentTime;
  localStorage.setItem("audioEstado", currentTime);
}

// Função para restaurar o estado do áudio do LocalStorage
function restaurarEstadoAudio() {
  const audio = document.getElementById("audio");
  audio.volume = 0.2;
  const estadoSalvo = localStorage.getItem("audioEstado");
  if (estadoSalvo) {
    audio.currentTime = parseFloat(estadoSalvo);
  }
}

// Evento para salvar o estado do áudio quando a página for trocada
window.addEventListener("beforeunload", salvarEstadoAudio);

// Evento para restaurar o estado do áudio quando a próxima página for carregada
window.addEventListener("load", restaurarEstadoAudio);

function resetarAudio() {
  const audio = document.getElementById("audio");
  audio.currentTime = 0.0;
  window.location.href = "/Astro/Frontend/Html/Base/index.html";
}

// Evento para resetar o áudio quando o botão for clicado
const resetButton = document.getElementById("logo");
resetButton.addEventListener("click", resetarAudio);
