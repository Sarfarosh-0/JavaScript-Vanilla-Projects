const btn = document.getElementById("submitButton");

// For Form Validation
btn.addEventListener("click", function validate() {
  // Email Input
  const emailInput = document.getElementById("userEmail");
  const email = document.getElementById("userEmail").value;
  const emailHint = document.getElementById("emailHint");

  // Password Input
  const password = document.getElementById("userPassword").value;
  const passwordInput = document.getElementById("userPassword");
  const passwordHint = document.getElementById("passwordHint");
  const passwordLength = password.length;

  // Special Characters
  const charactersList = /[`!@#$%^&*()`]/g;
  const matches = password.match(charactersList);

  // For Empty Gmail
  if (email === "") {
    emailHint.textContent = "Enter a Email First";
    emailHint.style.color = "red";
    emailInput.style.border = "2px  solid red";
  }
  // For vaild Email or NOT
  else if (email.includes("@gmail.com")) {
    emailHint.textContent = "Vaild Email";
    emailHint.style.color = "green";
    emailInput.style.border = "2px  solid green";
  }
  // For Invaild Email
  else {
    emailHint.textContent = "Invaild Email";
    emailHint.style.color = "red";
    emailInput.style.border = "2px  solid red";
  }

  // For Empty Password
  if (password === "") {
    passwordHint.textContent = "Enter a password First.";
    passwordHint.style.color = "red";
    passwordInput.style.border = "2px solid red";
  }
  // For Password Shorter than 6 Characters
  else if (passwordLength <= 6) {
    passwordHint.textContent = "Password Length Too Short.";
    passwordHint.style.color = "red";
    passwordInput.style.border = "2px solid red";
  }
  // for Missing Special Character
  else if (matches == null) {
    passwordHint.textContent = "Special Charcter Missing.";
    passwordHint.style.color = "red";
    passwordInput.style.border = "2px solid red";
  }
  // For Vaild Password
  else {
    passwordHint.textContent = "Vaild Password";
    passwordHint.style.color = "green";
    passwordInput.style.border = "2px solid green";
  }
});

const showButton = document.getElementById("showPassword");
const passwordIn = document.getElementById("userPassword");

// Toggle Button to Show Password or Not
showButton.addEventListener("click", function showPassword() {
  if (passwordIn.type == "password") {
    passwordIn.type = "text";
    showButton.textContent = "Hide";
  } else {
    passwordIn.type = "password";
    showButton.textContent = "Show";
  }
});
