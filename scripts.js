const form = document.getElementById("sign_up_form");
const userPassword = document.getElementById("user_password");
const confirmPassword = document.getElementById("confirm_password");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (userPassword.value !== confirmPassword.value) {
    userPassword.setCustomValidity("Please make sure the two passwords match");
  } else {
    userPassword.setCustomValidity("");
  }
});
