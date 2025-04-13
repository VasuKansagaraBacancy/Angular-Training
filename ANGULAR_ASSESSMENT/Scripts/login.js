document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(u => u.email === email && u.password === password);

    if (!validateEmail(email)) {
        showError("Invalid email format.");
        return;
    }

    if (!validatePassword(password)) {
        showError("Password must have 6+ chars, 1 uppercase, 1 special.");
        return;
    }

    if (user) {
        localStorage.setItem("loggedInUser", JSON.stringify(user));
        window.location.href = "../Pages/dashboard.html";
    } else {
        showError("Invalid credentials.");
    }
});

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePassword(pwd) {
    return /^(?=.*[A-Z])(?=.*\W).{6,}$/.test(pwd);
}

function showError(msg) {
    document.getElementById("errorMsg").innerText = msg;
}
