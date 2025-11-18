document.getElementById('loginForm').addEventListener('submit', function(e) {
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorMessage = document.getElementById('error-message');
    if (!email || !password) {
        e.preventDefault();
        errorMessage.textContent = "Email or password required";
    } else if (password.length > 6) {
        e.preventDefault();
        errorMessage.textContent = "Password must not be more than 6 characters";
    } else {
        e.preventDefault();
        errorMessage.textContent = "";
        window.location.href = "adeyinka.html";
    }
});

document.getElementById('colorPickerBtn').addEventListener('click', function() {
    document.getElementById('colorPicker').click();
});

// Optional: Use the selected color for something, e.g., change background
document.getElementById('colorPicker').addEventListener('input', function(e) {
    document.body.style.backgroundColor = e.target.value;
});