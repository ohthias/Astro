import {faded, OnMyWay} from "/Astro/Backend/JS/Playlist/playlist-Main.js";

const player = document.querySelector("#player");
const songButton1 = document.querySelector("#arroz");
const songButton2 = document.querySelector("#arroz2")
let index = 0

songButton1.onclick = () => musicBox1();

const musicBox1 = (type = "next") => {
  player.src = OnMyWay[index].src;
  musicName.innerHTML = OnMyWay[index].name;
  artistName.innerHTML = OnMyWay[index].artist;
  imgSong.src = OnMyWay[index].imgSong;
  updateTime();
};

songButton2.onclick = () => musicBox2() 

const musicBox2 = (type = "next") => {
  player.src = faded[index].src;
  musicName.innerHTML = faded[index].name;
  artistName.innerHTML = faded[index].artist;
  imgSong.src = faded[index].imgSong;
  updateTime();
};
