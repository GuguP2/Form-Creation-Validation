document.addEventListener('DOMContentLoaded', function () {
const form = document.getElementById("registration-form");
const feedbackDiv = document.getElementById("form-feedback");
const name = document.getElementById('name').value.trim();
const email = document.getElementById('email').value.trim();
const password = document.getElementById('password').value.trim();
const isValid = true;
const messages = [];

form.addEventListener ("submit" , (event) =>{
event.preventDefault();
})

if (username.length < 3) {
  isValid = false;
  messages.push("Username must be at least 3 characters long.");
}
if (username.length < 3) {
  isValid = false;
  messages.push("Username must be at least 3 characters long.");
}
}
