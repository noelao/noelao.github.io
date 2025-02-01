let index = 0;
var intervalIni

function moveSlide(step) {
    console.log('terpencet')
    const slides = document.querySelectorAll(".displayer .filman")

    const totalSlides = slides.length;

    var filmYangTampil = movieDisplay - 1

    if (index == 0){
        if(step > 0){
            index += step;
        } else {
            index = totalSlides - filmYangTampil - 1;
        }
    } else {
        index += step;
    }

    if (index < 0) {
        index = totalSlides - 1;

    } else if (index >= totalSlides - filmYangTampil) {
        index = 0;
    }

    const slideWidth = slides[0].clientWidth + 3;
    console.log(slideWidth)
    
    const slider = document.querySelector('.slider');
    slider.style.transform = `translateX(-${(index * slideWidth) + 3}px )`;


    clearAutoSlide();
}


function startAutoSlide() {
    intervalIni = setInterval(() => {
        moveSlide(1);
    }, 3000)
}
function clearAutoSlide() {
    clearInterval(intervalIni);
    startAutoSlide();
}
// startAutoSlide();
