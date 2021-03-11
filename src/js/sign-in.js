const signInLinks = document.querySelectorAll('[data-link]').forEach((item)=> {
    item.addEventListener('click', toggleForm);
});

function toggleForm() {
    const signInWrap = document.querySelector('.sign-in-wrap');
    signInWrap.classList.toggle('active');
    const signIn = document.querySelector('.sign-in');
    signIn.classList.toggle('active');
}

const signInBtn = document.getElementById('sign-in-btn');
signInBtn.addEventListener('click', function() {
    const signIn = document.querySelector('.sign-in');
    signIn.classList.add('sign-in--active');
})

const signInBtnExit = document.querySelectorAll('[data-signin-exit]');

signInBtnExit.forEach((item)=> {
    item.addEventListener('click', function() {
        const signIn = document.querySelector('.sign-in');
        signIn.classList.remove('sign-in--active');
    })
})
