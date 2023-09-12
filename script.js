const ctaForm = document.querySelector(".cta-form");
const emailInput = document.querySelector(".email-input");
const errorMsg = document.querySelector(".error-msg");

const validateEmail = (email) => {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
};

const showError = (message, error) => {
  emailInput.style.borderColor = "red";
  errorMsg.textContent = message;
  errorMsg.style.display = "block";
  error.preventDefault();
};

ctaForm.addEventListener("submit", (error) => {
  if (emailInput.value === "") {
    showError("Whoops! It looks like you forgot to add your email", error);
  } else if (!validateEmail(emailInput.value)) {
    showError("Please provide a valid email address", error);
  }
});
