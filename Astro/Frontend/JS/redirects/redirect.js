//Redirect playlists do astro

const tophitsPlaylist = document.querySelector("#topHits")
tophitsPlaylist.onclick = () => {
    window.location.href = "/Astro/Frontend/Html/Playlists/Astro_Playlists/topHits.html"
};

const debutsSemanaPlaylist = document.querySelector("#debutsSemana")
debutsSemanaPlaylist.onclick = () => {
    window.location.href = "/Astro/Frontend/Html/Playlists/Astro_Playlists/debutsWeek.html"
};

const seuUniversoPlaylist = document.querySelector("#seuUniverso")
seuUniversoPlaylist.onclick = () => {
    window.location.href = "/Astro/Frontend/Html/Playlists/Astro_Playlists/universe.html"
};

const noPiquePlaylist = document.querySelector("#noPique")
noPiquePlaylist.onclick = () => {
    window.location.href = "/Astro/Frontend/Html/Erro/404.html"
};

const naCalmaPlaylist = document.querySelector("#naCalma")
naCalmaPlaylist.onclick = () => {
    window.location.href = "/Astro/Frontend/Html/Erro/404.html"
};

var logo = document.querySelector("#logo")
logo.addEventListener("click", function() {
    window.location.href = "/Astro/Frontend/Html/Base/home.html"
});

const othersSongs = document.querySelector("#othersSongs")
othersSongs.onclick = () => {
    window.location.href = "/Astro/Frontend/Html/Artistas/A01-AK.html"
}