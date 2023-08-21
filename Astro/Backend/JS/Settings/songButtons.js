//Absoleto

import {faded, OnMyWay, blindingLights, onAndOn, Beyond} from "/Astro/Backend/JS/songsRedirects.js";

const player = document.querySelector("#player");
const songButton1 = document.querySelector("#arroz");
const songButton2 = document.querySelector("#arroz2")
const songButton3 = document.querySelector("#arroz3")
const songButton4 = document.querySelector("#arroz4")
const songButton5 = document.querySelector("#arroz5")

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

songButton3.onclick = () => musicBox3() 

const musicBox3 = (type = "next") => {
  player.src = blindingLights[index].src;
  musicName.innerHTML = blindingLights[index].name;
  artistName.innerHTML = blindingLights[index].artist;
  imgSong.src = blindingLights[index].imgSong;
  updateTime();
};

songButton4.onclick = () => musicBox4() 

const musicBox4 = (type = "next") => {
  player.src = onAndOn[index].src;
  musicName.innerHTML = onAndOn[index].name;
  artistName.innerHTML = onAndOn[index].artist;
  imgSong.src = onAndOn[index].imgSong;
  updateTime();
};

songButton5.onclick = () => musicBox5() 

const musicBox5 = (type = "next") => {
  player.src = Beyond[index].src;
  musicName.innerHTML = Beyond[index].name;
  artistName.innerHTML = Beyond[index].artist;
  imgSong.src = Beyond[index].imgSong;
  updateTime();
};