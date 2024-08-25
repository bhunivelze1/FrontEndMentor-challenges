const emailField = document.getElementById("email-field");
const emailText = document.getElementById("email-text");
const errorMessage = document.getElementById("error-message");
const submitButton = document.getElementById("submit-button");
const successModal = document.getElementById("success-modal");

emailField.addEventListener("focus", (e) => {
  errorMessage.style.visibility = "hidden";
  emailField.style.backgroundColor = "hsl(0, 0%, 100%)";
  emailField.style.borderColor = "hsl(231, 7%, 60%)";
  emailField.style.color = "grey";
});

function showModal() {
  successModal.style.visibility = "visible";
  errorMessage.style.visibility = "hidden";
  emailField.style.backgroundColor = "hsl(0, 0%, 100%)";
  emailField.style.borderColor = "hsl(231, 7%, 60%)";
  emailField.style.color = "grey";
  emailText.textContent = emailField.value;
}

function hideModal() {
  successModal.style.visibility = "hidden";
}

function submitEmail() {
  if (emailField.value.trim().length == 0) {
    showEmailError();
    return;
  } else {
    if (
      emailField.value
        .trim()
        .match(/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/)
    ) {
      showModal();
    } else {
      showEmailError();
    }
  }
}

function showEmailError() {
  errorMessage.style.visibility = "visible";
  emailField.style.backgroundColor = "rgb(255, 232, 230)";
  emailField.style.borderColor = "hsl(4, 100%, 67%)";
  emailField.style.color = "hsl(4, 100%, 67%)";
}
