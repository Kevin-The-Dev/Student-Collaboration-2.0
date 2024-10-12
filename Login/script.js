document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Fetch username (email/enrollment number) and password
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Define correct credentials
  var correctUsername = '220090107159';
  var correctPassword = '1234567890';

  // Get the error message element
  var errorMessage = document.getElementById('error-message');

  // Check the entered credentials
  if (username === correctUsername) {
    if (password === correctPassword) {
      // Successful login, redirect to home page
      window.location.href = '../Home/home.html';  // Replace with your home page path
    } else {
      // Username is correct, but password is incorrect
      errorMessage.textContent = 'Incorrect password. Please try again.';
      errorMessage.style.display = 'block'; // Show the error message
    }
  } else {
    // Username is incorrect
    errorMessage.textContent = 'Data is not in the database. Please check your credentials.';
    errorMessage.style.display = 'block'; // Show the error message
  }
});
