document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "testuser" && password === "password123") {
      alert("Login successful!");
      // Redirect to another page or proceed with logged-in actions
  } else {
      alert("Invalid username or password. Please try again.");
  }
});

function togglePasswordVisibility() {
  const passwordField = document.getElementById("password");
  const eyeIcon = document.querySelector(".eye-icon");

  if (passwordField.type === "password") {
      passwordField.type = "text";
      eyeIcon.style.transform = "translateY(-50%) rotate(180deg)";
  } else {
      passwordField.type = "password";
      eyeIcon.style.transform = "translateY(-50%) rotate(0deg)";
  }
}
