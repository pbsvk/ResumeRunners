import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.0.0/firebase-auth.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.addEventListener('DOMContentLoaded', function () {
  const signupForm = document.querySelector('form');
  const nameField = document.getElementById('name');
  const dobField = document.getElementById('dob');
  const emailField = document.getElementById('email');
  const passwordField = document.getElementById('password');

  signupForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Validation checks
    let isValid = true;
    let errorMessage = '';

    // Name validation
    if (nameField.value.trim() === '') {
      isValid = false;
      errorMessage += 'Name is required.\n';
    }

    // Date of Birth validation
    if (dobField.value === '') {
      isValid = false;
      errorMessage += 'Date of birth is required.\n';
    }

    // Email validation
    if (emailField.value.trim() === '') {
      isValid = false;
      errorMessage += 'Email is required.\n';
    } else if (!validateEmail(emailField.value)) {
      isValid = false;
      errorMessage += 'Enter a valid email address.\n';
    }

    // Password validation
    if (passwordField.value.trim() === '') {
      isValid = false;
      errorMessage += 'Password is required.\n';
    } else if (passwordField.value.length < 6) {
      isValid = false;
      errorMessage += 'Password must be at least 6 characters long.\n';
    }

    // If validation fails, show error and prevent submission
    if (!isValid) {
      alert(errorMessage);
    } else {
      // If validation is successful, create user with Firebase Auth
      const email = emailField.value;
      const password = passwordField.value;

      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log('User created:', user);

          // Redirect to the next page upon successful sign-up
          window.location.href = "../HTML/planselector.html";
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error("Error signing up:", errorCode, errorMessage);
          alert("Error: " + errorMessage); // Show Firebase error message
        });
    }
  });

  // Function to validate email format
  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Open Sign In Page on click
  document.getElementById("signinw").addEventListener("click", function() {
    window.location.href = "../HTML/signin.html";
  });
});
