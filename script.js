document.addEventListener('DOMContentLoaded', () => {
    const images = [
        'assets/nature.png',
        'assets/exterior.png',
        'assets/interior.png',
        'assets/nandi.png'
    ];
    let currentIndex = 0;

    const sliderImage = document.getElementById('slider-image');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');

    function updateImage() {
        sliderImage.style.opacity = '0';
        setTimeout(() => {
            sliderImage.src = images[currentIndex];
            sliderImage.style.opacity = '1';
        }, 300); // Wait for fade out
    }

    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
        updateImage();
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
        updateImage();
    });

    // Optional: Auto-slide
    setInterval(() => {
        currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
        updateImage();
    }, 5000); // Change image every 5 seconds
});
