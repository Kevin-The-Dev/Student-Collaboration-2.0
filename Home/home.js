// JavaScript for Navigation Bar options
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.nav-links a');

  // Function to handle navigation
  const navigateTo = (link) => {
    window.location.href = link; // Simple navigation
  };

  // Event listener for navigation links
  navLinks.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent default link behavior
      const destination = this.getAttribute('href');
      navigateTo(destination);
    });
  });
});
