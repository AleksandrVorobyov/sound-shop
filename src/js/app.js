const burgerBtn = document.querySelector('.header__burger');
const sidebar = document.getElementById('sidebar');

burgerBtn.addEventListener('click', function() {
    sidebar.classList.toggle('active');
})