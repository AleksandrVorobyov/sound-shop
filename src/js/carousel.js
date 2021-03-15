$(document).ready(function(){
    $(".carousel-shop").owlCarousel({
        nav: false,
        dots: true,
        items: 1,
        animateOut: 'animate__backOutDown',
        animateIn: 'animate__backInDown',
        smartSpeed: 850,
        margin:30,
        stagePadding:30,
        dotsContainer: '#carousel-custom-dots',
        mouseDrag: false,
        touchDrag: false,
    });

    $('.owl-dots').click(function () {
        $('.carousel-shop').trigger('to.owl.carousel', [$(this).index(), 300]);
    });

    $('.carousel-shop__nav-next').click(function() {
        $(".carousel-shop").trigger('next.owl.carousel', [2500]);
    })
    $('.carousel-shop__nav-prev').click(function() {
        $(".carousel-shop").trigger('prev.owl.carousel', [2500]);
    })
});

const carouselGalleryItems = document.querySelectorAll('.carousel-shop__gallery-item');

carouselGalleryItems.forEach( function(item) {
    item.addEventListener('click', function(e) {
        let parentBlock = e.target.closest('.carousel-shop__item');
        parentBlock.querySelectorAll('.carousel-shop__gallery-item').forEach(function(item) {
            item.classList.remove('carousel-shop__gallery-item--active');
        });
        item.classList.add('carousel-shop__gallery-item--active');
        let imgClick = e.target.querySelector('img');
        let imgClickSrc = imgClick.src;
        let imgBig = parentBlock.querySelector('.carousel-shop__item-img');
        imgBig.classList.add('animate-gallery');
        let imgBigItem = parentBlock.querySelector('.carousel-shop__item-img img');
        imgBigItem.src = imgClickSrc;
        setTimeout(() => {
            imgBig.classList.remove('animate-gallery');
        }, 900);
    })
})