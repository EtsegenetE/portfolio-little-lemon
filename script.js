const slides = document.querySelector('.slides');
let index = 0;

function showNextImage() {
    index = (index + 1)% slides.children.length;
    slides.style.transform = `translateX(-${index * 100}%)`
}

setInterval(showNextImage, 3000);