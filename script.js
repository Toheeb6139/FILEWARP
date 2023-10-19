const logIn = document.getElementById("logIn");
const signUp = document.getElementById("signUp");
const logInModal = document.getElementById("modal-log-in");
const signUpModal = document.getElementById("modal-sign-up");
const closeUp = document.getElementById("close");

// Show modal
logIn.addEventListener("click", () => logInModal.classList.add("showmodal"));
signUp.addEventListener("click", () => signUpModal.classList.add("showmodal"));

// Hide modal
closeUp.addEventListener("click", () => {
  logInModal.classList.remove("showmodal");
  signUpModal.classList.remove("showmodal");
});

// Hide modal on external click
window.addEventListener("click", (e) => {
  if (e.target == logInModal || e.target == signUpModal) {
    logInModal.classList.remove("showmodal");
    signUpModal.classList.remove("showmodal");
  }
});
