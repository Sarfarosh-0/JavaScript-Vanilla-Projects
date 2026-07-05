document.getElementById("authForm").addEventListener("submit", function (e) {
  e.preventDefault();
  validateForm();
});

function validateForm() {
  const emailInput = document.getElementById("userEmail");
  const emailValue = emailInput.value.trim();
  const emailHint = document.getElementById("emailHint");

  const passwordInput = document.getElementById("userPassword");
  const passwordValue = passwordInput.value;
  const passwordHint = document.getElementById("passwordHint");

  const cnfPasswordInput = document.getElementById("cnfUserPassword");
  const cnfPasswordVaule = cnfPasswordInput.value;
  const cnfPasswordHint = document.getElementById("cnfPasswordHint");

  // Regex pattern for realistic standard email checking
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  // Lookahead checking for at least 1 special character
  const specialCharRegex = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

  let isEmailValid = false;
  let isPasswordValid = false;
  let isCnfPasswordValid = false;

  // --- Email Validation ---
  if (emailValue === "") {
    showError(emailInput, emailHint, "Email cannot be empty.");
  } else if (!emailRegex.test(emailValue)) {
    showError(emailInput, emailHint, "Please enter a valid email address.");
  } else {
    showSuccess(emailInput, emailHint, "Valid Email");
    isEmailValid = true;
  }

  if (passwordValue === "") {
    showError(passwordInput, passwordHint, "Password cannot be empty.");
  } else if (passwordValue.length <= 6) {
    showError(
      passwordInput,
      passwordHint,
      "Password must be longer than 6 characters.",
    );
  } else if (!specialCharRegex.test(passwordValue)) {
    showError(
      passwordInput,
      passwordHint,
      "Must contain at least one special character.",
    );
  } else {
    showSuccess(passwordInput, passwordHint, "Valid Password");
    isPasswordValid = true;
  }

  if (isPasswordValid === false) {
    showError(cnfPasswordInput, cnfPasswordHint, "Invaild Password");
  } else {
    if (cnfPasswordVaule != passwordValue) {
      showError(cnfPasswordInput, cnfPasswordHint, "Password Does not Match");
    } else if (cnfPasswordVaule === passwordValue) {
      showSuccess(cnfPasswordInput, cnfPasswordHint, "Password Match");
      isCnfPasswordValid = true;
    }
  }

  if (isEmailValid && isPasswordValid && isCnfPasswordValid) {
    console.log("Form submitted successfully!");
  }
}

function showError(inputElement, hintElement, message) {
  hintElement.textContent = message;
  hintElement.style.color = "var(--error-color)";
  inputElement.style.borderColor = "var(--error-color)";
}

function showSuccess(inputElement, hintElement, message) {
  hintElement.textContent = message;
  hintElement.style.color = "var(--success-color)";
  inputElement.style.borderColor = "var(--success-color)";
}

document.getElementById("userEmail").addEventListener("input", function () {
  this.style.borderColor = "var(--border-color)";
  document.getElementById("emailHint").textContent = "";
});

document.getElementById("userPassword").addEventListener("input", function () {
  this.style.borderColor = "var(--border-color)";
  document.getElementById("passwordHint").textContent = "";
});

// Toggle Password Visibility
const showButton = document.getElementById("showPassword");
const passwordIn = document.getElementById("userPassword");
const cnfPassword = document.getElementById("cnfUserPassword");

showButton.addEventListener("click", function () {
  if (passwordIn.type === "password") {
    passwordIn.type = "text";
    cnfPassword.type = "text";
    showButton.textContent = "Hide";
  } else {
    passwordIn.type = "password";
    cnfPassword.type = "password";
    showButton.textContent = "Show";
  }
});
