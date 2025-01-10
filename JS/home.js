document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
});
document.querySelector('.get-started-btn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    window.location.href = '../HTML/signup.html'; // Redirect to the signup page
});
document.querySelector('.btn-primary').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    window.location.href = '../HTML/signup.html'; // Redirect to the signup page
});
document.querySelector('.btn-secondary').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    window.location.href = '../HTML/signup.html'; // Redirect to the signup page
});