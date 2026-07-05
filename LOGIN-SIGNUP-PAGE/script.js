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
  const cnfPasswordHint = document.getElementById("cnfPasswordHint");
  const cnfPasswordValue = cnfPasswordInput ? cnfPasswordInput.value : null;

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
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

  // --- Password Validation ---
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

  // --- Confirm Password Validation (Only runs if element exists) ---
  if (cnfPasswordInput && cnfPasswordHint) {
    if (isPasswordValid === false) {
      showError(cnfPasswordInput, cnfPasswordHint, "Invalid Password");
    } else {
      if (cnfPasswordValue !== passwordValue) {
        showError(cnfPasswordInput, cnfPasswordHint, "Password Does not Match");
      } else {
        showSuccess(cnfPasswordInput, cnfPasswordHint, "Password Match");
        isCnfPasswordValid = true;
      }
    }
  } else {
    // If we are on login.html, confirm password is automatically "valid"
    isCnfPasswordValid = true;
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

// Input listeners
document.getElementById("userEmail").addEventListener("input", function () {
  this.style.borderColor = "var(--border-color)";
  document.getElementById("emailHint").textContent = "";
});

document.getElementById("userPassword").addEventListener("input", function () {
  this.style.borderColor = "var(--border-color)";
  document.getElementById("passwordHint").textContent = "";
});

const showButton = document.getElementById("showPassword");
const passwordIn = document.getElementById("userPassword");
const cnfPassword = document.getElementById("cnfUserPassword");

if (showButton && passwordIn) {
  showButton.addEventListener("click", function () {
    const isPassword = passwordIn.type === "password";

    passwordIn.type = isPassword ? "text" : "password";
    if (cnfPassword) cnfPassword.type = isPassword ? "text" : "password";

    showButton.textContent = isPassword ? "Hide" : "Show";
  });
}
