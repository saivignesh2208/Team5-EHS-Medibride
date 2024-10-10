document.getElementById("registerForm")?.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    const fullName = document.getElementById("fullName").value;
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const age = document.getElementById("age").value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match. Please try again.");
        return;
    }

    if (!gender) {
        alert("Please select your gender.");
        return;
    }

    alert("Registration successful!");
    // You can add code here to handle the registration (e.g., sending data to a server)
});

document.getElementById("loginForm")?.addEventListener("submit", function(event) {
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

function togglePasswordVisibility(fieldId) {
    const passwordField = document.getElementById(fieldId);
    const eyeIcon = document.querySelector(`[onclick*="${fieldId}"]`);

    if (passwordField.type === "password") {
        passwordField.type = "text";
        eyeIcon.style.transform = "translateY(-50%) rotate(180deg)";
    } else {
        passwordField.type = "password";
        eyeIcon.style.transform = "translateY(-50%) rotate(0deg)";
    }
}
