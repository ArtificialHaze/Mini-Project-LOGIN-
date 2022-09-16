// VARIABLES

const passwordElement = document.getElementById("password");
const eyeIconElement = document.getElementById("eye");

// FUNCTIONS

// EVENT LISTENER

eyeIconElement.addEventListener("click", () => {
  if (eyeIconElement.classList.contains("fa-eye")) {
    passwordElement.setAttribute("type", "text");
    eyeIconElement.classList.replace("fa-eye", "fa-eye-slash");
  } else {
    passwordElement.setAttribute("type", "password");
    eyeIconElement.classList.replace("fa-eye-slash", "fa-eye");
  }
});
