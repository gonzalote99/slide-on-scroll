

const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide() {
  sliderImages.forEach((sliderImage) => {
    const sildeInAt = window.scrollY + window.innerHeight - sliderImage.height / 2;
    const imageBottom = sliderImage.offsetTop + sliderImage.height;

    const isHalfShown = sildeInAt > sliderImage.offsetTop;
    const isNotScrolledPast = window.scrollY < imageBottom;

    if(isHalfShown && isNotScrolledPast) {
      sliderImage.classList.add('active');
    } else {
      sliderImage.classList.remove('active');
    }
  });
}

window.addEventListener('scroll', checkSlide)
