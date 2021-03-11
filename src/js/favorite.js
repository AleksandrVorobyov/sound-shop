const btnFavorites = document.getElementById('header-favorite');
const btnFavoritesFooter = document.getElementById('footer-favorite');

btnFavorites.addEventListener('click', function(e) {
    e.target.classList.toggle('header__navbar-favorite--on');
});

btnFavoritesFooter.addEventListener('click', function(e) {
    e.target.classList.toggle('header__navbar-favorite--on');
});