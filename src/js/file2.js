const btnFavorites = document.getElementById('header-favorite');

btnFavorites.addEventListener('click', function(e) {
    e.target.classList.toggle('header__navbar-favorite--on');
});