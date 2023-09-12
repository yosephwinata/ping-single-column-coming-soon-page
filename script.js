const ctaForm = document.querySelector(".cta-form");
const emailInput = document.querySelector(".email-input");
const errorMsg = document.querySelector(".error-msg");

const validateEmail = (email) => {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
};

ctaForm.addEventListener("submit", (error) => {
  if (emailInput.value === "" || !validateEmail(emailInput.value)) {
    emailInput.style.borderColor = "red";
    errorMsg.style.display = "block";
    error.preventDefault();
  }
});
