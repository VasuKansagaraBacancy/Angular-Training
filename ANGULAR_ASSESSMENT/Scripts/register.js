document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!validateEmail(email)) {
        showError("Invalid email format.");
        return;
    }

    if (!validatePassword(password)) {
        showError("Password must have 6+ chars, 1 uppercase, 1 special.");
        return;
    }

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const userExists = users.some(user => user.email === email);
    if (userExists) {
        showError("User already exists.");
        return;
    }

    const newUser = {
        id: users.length ? users[users.length - 1].id + 1 : 1,
        username,
        email,
        password
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registration successful! Please login.");
    window.location.href = "../Pages/index.html";
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
