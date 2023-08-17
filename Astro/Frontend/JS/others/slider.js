const carousel = document.querySelector(".carousel"),
firstImg = carousel.querySelectorAll("img")[0],
arrowIcons = document.querySelectorAll(".wrapper i");

let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;

// Function to activate the clicked carousel and deactivate others
const activateCarousel = (carouselId) => {
    const carousels = document.querySelectorAll(".carousel");
    carousels.forEach((carousel) => {
        if (carousel.id === carouselId) {
            carousel.classList.add("active");
        } else {
            carousel.classList.remove("active");
        }
    });
};

// Function to show or hide the arrow icons based on the carousel scroll position
const showHideIcons = (carousel) => {
    const scrollWidth = carousel.scrollWidth - carousel.clientWidth;
    const arrowIcons = carousel.parentNode.querySelectorAll(".fa-solid");
    arrowIcons[0].style.display = carousel.scrollLeft === 0 ? "none" : "block";
    arrowIcons[1].style.display =
        carousel.scrollLeft === scrollWidth ? "none" : "block";
};

// Event listener for arrow icon clicks
arrowIcons.forEach((icon) => {
    icon.addEventListener("click", () => {
        const carousel = icon.closest(".wrapper").querySelector(".carousel");
        const firstImgWidth = carousel.querySelector(".songButton").clientWidth + 14;
        carousel.scrollLeft += icon.id === "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(carousel), 60);
    });
});

// Event listeners for the carousels to activate on click
const carousels = document.querySelectorAll(".carousel");
carousels.forEach((carousel) => {
    carousel.addEventListener("click", (e) => {
        const carouselId = e.currentTarget.id;
        activateCarousel(carouselId);
    });
});

// Rest of the existing code for dragging and autoslide remains unchanged.


const autoSlide = () => {
    // if there is no image left to scroll then return from here
    if(carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 || carousel.scrollLeft <= 0) return;

    positionDiff = Math.abs(positionDiff); // making positionDiff value to positive
    let firstImgWidth = firstImg.clientWidth + 14;
    // getting difference value that needs to add or reduce from carousel left to take middle img center
    let valDifference = firstImgWidth - positionDiff;

    if(carousel.scrollLeft > prevScrollLeft) { // if user is scrolling to the right
        return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    }
    // if user is scrolling to the left
    carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
}

const dragStart = (e) => {
    // updatating global variables value on mouse down event
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    // scrolling images/carousel to left according to mouse pointer
    if(!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    carousel.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
}

const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");

    if(!isDragging) return;
    isDragging = false;
    autoSlide();
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

document.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

document.addEventListener("mouseup", dragStop);
carousel.addEventListener("touchend", dragStop);