//Redirect playlists do astro

const logo = document.querySelector("#logo")
logo.addEventListener("click", function() {
    window.location.href = "/Astro/src/home/home.html"
});

const tophitsPlaylist = document.querySelector("#topHits")
tophitsPlaylist.onclick = () => {
    window.location.href = "/Astro/src/playlist/astro/topHits.html"
};

const debutsSemanaPlaylist = document.querySelector("#debutsSemana")
debutsSemanaPlaylist.onclick = () => {
    window.location.href = "/Astro/src/playlist/astro/debutsWeek.html"
};

const seuUniversoPlaylist = document.querySelector("#seuUniverso")
seuUniversoPlaylist.onclick = () => {
    window.location.href = "/Astro/src/playlist/astro/universe.html"
};

const noPiquePlaylist = document.querySelector("#noPique")
noPiquePlaylist.onclick = () => {
    window.location.href = "/Astro/src/erro/404.html"
};

const naCalmaPlaylist = document.querySelector("#naCalma")
naCalmaPlaylist.onclick = () => {
    window.location.href = "/Astro/src/erro/404.html"
};