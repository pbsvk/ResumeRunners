// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function () {
  const signupForm = document.querySelector('form');
  const nameField = document.getElementById('name');
  const dobField = document.getElementById('dob');
  const emailField = document.getElementById('email');
  const passwordField = document.getElementById('password');

  signupForm.addEventListener('submit', function (event) {
      let isValid = true;
      let errorMessage = '';

      // Check if the name field is filled
      if (nameField.value.trim() === '') {
          isValid = false;
          errorMessage += 'Name is required.\n';
      }

      // Check if the date of birth field is filled
      if (dobField.value === '') {
          isValid = false;
          errorMessage += 'Date of birth is required.\n';
      }

      // Check if the email field is filled
      if (emailField.value.trim() === '') {
          isValid = false;
          errorMessage += 'Email is required.\n';
      } else if (!validateEmail(emailField.value)) {
          isValid = false;
          errorMessage += 'Enter a valid email address.\n';
      }

      // Check if the password field is filled
      if (passwordField.value.trim() === '') {
          isValid = false;
          errorMessage += 'Password is required.\n';
      } else if (passwordField.value.length < 6) {
          isValid = false;
          errorMessage += 'Password must be at least 6 characters long.\n';
      }

      // If the form is not valid, prevent submission and show errors
      if (!isValid) {
          event.preventDefault();
          alert(errorMessage);
      } else {
          // Redirect to the next page if validation is successful
          window.location.href = "../HTML/planselector.html";
      }
  });

  // Function to validate email format
  function validateEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
  }

  // Open Sign In Page
  document.getElementById("signinw").addEventListener("click", function(){
    window.location.href = "../HTML/signin.html";
  });
});
