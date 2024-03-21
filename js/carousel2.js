const track2 = document.querySelector(".carousel2__track");
const slides2 = Array.from(track2.children);
const carouselNav = document.querySelector(".carousel2__nav");
const dots = Array.from(carouselNav.children)

const slideSize = slides2[0].getBoundingClientRect.width;
    
//Arange slides horizontaly
slides2.forEach(setSlidePosition);

//When button is clicked, switch sides

carouselNav.addEventListener('click', e => {
    const targetDot = e.target.closest('button');

    if (!targetDot) return;

    const currentSlide = track2.querySelector('.current-slide');
    const currentDot = carouselNav.querySelector('.current-slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides2[targetIndex];

    moveToSlide(track2, currentSlide, targetSlide);

    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');

})