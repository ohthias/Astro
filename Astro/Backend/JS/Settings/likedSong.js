// Import the likedSongs array from musicPlayer.js (Assuming it's exported from that file)
import { likedSongs } from "/Astro/Backend/JS/musicPlayer.js";

// Function to generate the list of liked songs
const generateLikedSongsList = () => {
  const likedSongsList = document.getElementById("likedSongsList");
  likedSongsList.innerHTML = ""; // Clear the existing list before regenerating

  likedSongs.forEach((song) => {
    const listItem = document.createElement("li");
    const songInfo = document.createElement("p");
    const musicName = document.createElement("span");
    const artistName = document.createElement("span");
    const imgSong = document.createElement("img");

    musicName.textContent = song.musicName;
    artistName.textContent = song.artistName;
    imgSong.src = song.imgSong;
    imgSong.alt = song.musicName;

    songInfo.appendChild(musicName);
    songInfo.appendChild(document.createTextNode(" - "));
    songInfo.appendChild(artistName);

    listItem.appendChild(imgSong);
    listItem.appendChild(songInfo);

    likedSongsList.appendChild(listItem);
  });
};

// Call the function to generate the initial list of liked songs (when the page loads)
generateLikedSongsList();
