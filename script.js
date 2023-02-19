// JavaScript code for the app
const loginForm = document.querySelector('form');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');

loginForm.addEventListener('submit', e => {
    e.preventDefault();
    const email = emailInput.value;
    const password = passwordInput.value;
    // Authenticate the user and redirect to the chat page
    window.location.href = 'chat.html';
});

const googleLoginButton = document.querySelector('.google-login');
googleLoginButton.addEventListener('click', e => {
    e.preventDefault();
    // Authenticate the user using Google and redirect to the chat page
    window.location.href = 'chat.html';
});
``
