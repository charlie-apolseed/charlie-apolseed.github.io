const track = document.querySelector(".carousel1__track");
const slides = Array.from(track.children);
const leftButton = document.querySelector(".carousel1__button--left")
const rightButton = document.querySelector(".carousel1__button--right")

const slideWidth = slides[0].getBoundingClientRect().width;

const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + "px";
}

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove("current-slide");
    targetSlide.classList.add("current-slide");
}

slides.forEach(setSlidePosition);

rightButton.addEventListener('click', e => {
    const currentSlide = track.querySelector(".current-slide");
    const nextSlide = currentSlide.nextElementSibling;
    moveToSlide(track, currentSlide, nextSlide)
});

leftButton.addEventListener('click', e => {
    const currentSlide = track.querySelector(".current-slide");
    const prevSlide = currentSlide.previousElementSibling;
    moveToSlide(track, currentSlide, prevSlide);
});

console.log(track);
console.log(slides);
console.log(leftButton);
console.log(slideWidth);