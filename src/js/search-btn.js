const btnSearch = document.getElementById('header-search-btn');
const inputSearch = document.getElementById('navbar-search');
btnSearch.addEventListener('click', (e) => {
    if (inputSearch.classList.contains('header__navbar-input--active')) {
        if (inputSearch.value.length > null) {
            window.location.reload();
        } else {
            e.preventDefault();
        }
    } else {
        inputSearch.classList.add('header__navbar-input--active');
        e.preventDefault();
    }
});