document.addEventListener('DOMContentLoaded', function () {
const form = document.getElementById("registration-form");
const feedbackDiv = document.getElementById("form-feedback");
const name = document.getElementById('name').value.trim();
const email = document.getElementById('email').value.trim();
const password = document.getElementById('password').value.trim();
const isValid = true;
const messages = [];

form.addEventListener ("submit" , (event) =>{

if (username.length < 3) {
  isValid = false;
  messages.push("Username must be at least 3 characters long.");
}
if (!email.includes('@') || !email.includes('.')) {
  isValid = false;
  messages.push("Email must include both '@' and '.' characters.");
}
if (isValid = false) {
  messages.push("Password must be at least 8 characters long.");
}
feedbackDiv.textContent = "Registration successful!";
feedbackDiv.style.color = "#28a745";
feedbackDiv.innerHTML = messages.join("<br>");
feedbackDiv.style.color = "#dc3545";
event.preventDefault();
})
})
