const artistpage = {
  idAt001: {
    nameArtist: "",
    about: "Descrição do Artista 1.",
    follows: "1000",
    ouvintes: "50000",
  },
  idAt002: {
    nameArtist: "",
    about: "Descrição do Artista 1.",
    follows: "1000",
    ouvintes: "50000",
  },
  idAt003: {
    nameArtist: "",
    about: "Descrição do Artista 1.",
    follows: "1000",
    ouvintes: "50000",
  },
  idAt004: {
    nameArtist: "",
    about: "Descrição do Artista 1.",
    follows: "1000",
    ouvintes: "50000",
  },
  idAt005: {
    nameArtist: "",
    about: "Descrição do Artista 1.",
    follows: "1000",
    ouvintes: "50000",
  },
  idAt006: {
    nameArtist: "",
    about: "Descrição do Artista 1.",
    follows: "1000",
    ouvintes: "50000",
  },
  idAt007: {
    nameArtist: "",
    about: "Descrição do Artista 1.",
    follows: "1000",
    ouvintes: "50000",
  },
  idAt008: {
    nameArtist: "",
    about: "Descrição do Artista 1.",
    follows: "1000",
    ouvintes: "50000",
  },
};

function redirectToArtist(artistId) {
  const artistInfo = artistpage[artistId];
  if (artistInfo) {
    const artistQueryString = encodeURIComponent(JSON.stringify(artistInfo));
    window.location.href = `artist.html?info=${artistQueryString}`;
  }
}