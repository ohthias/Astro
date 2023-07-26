const playSongByImg = document.querySelector("#playSongByImg")
const location = document.querySelector(".topkit")

const textplaySongByImgNormal = "<i class='bx bx-caret-right'></i>";
const textplaySongByImgActive = "<i class='bx bx-pause'></i>";

playSongByImg.onclick = () => mudarButton()
let state = false

const mudarButton = () => {
    state = !state
    playSongByImg.mudarButton = state;

    if(location.mudarButton = state){
        location.innerHTML = textplaySongByImgActive;
    } else {
        location.innerHTML = textplaySongByImgNormal;
    }
}
