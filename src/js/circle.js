const labelCircleAll = document.querySelectorAll('[data-circle]');

labelCircleAll.forEach(function(item) {
    item.addEventListener('click', function(e) {
        let circleData = e.target.dataset.circle;
        let carouselItemActive = document.querySelector('.owl-item.active');
        carouselItemActive.querySelector('.carousel-shop__gallery-item.carousel-shop__gallery-item--active').classList.remove('carousel-shop__gallery-item--active');
        let itemText = carouselItemActive.querySelector(`[data-item='${circleData}']`);
        itemText.classList.add('carousel-shop__gallery-item--active');
        itemText.click();
    })
});