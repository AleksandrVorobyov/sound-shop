const btnFavorites = document.getElementById('header-favorite');

btnFavorites.addEventListener('click', function(e) {
    e.target.classList.toggle('header__navbar-favorite--on');
});

$(document).ready(function(){
    $(".carousel-shop").owlCarousel({
        nav: true,
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

