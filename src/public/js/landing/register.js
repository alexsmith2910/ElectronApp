const { document, console } = require("globalthis/implementation");

const email_input = document.getElementById('register-email');
const username_input = document.getElementById('register-username');
const password_input = document.getElementById('register-password');
const repeat_password_input = document.getElementById('register-password-repeat');
const news_checkbox = document.getElementById('register-newsletter');

const button = document.getElementById('register-button');

function register() {
    console.log('Button Pressed');
}