document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("signupForm")) {
        document.getElementById("signupForm").addEventListener("submit", (e) => {
            e.preventDefault();
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
            localStorage.setItem(email, JSON.stringify({ name, password }));
            alert("Signup successful!");
            window.location.href = "login.html";
        });
    }

    if (document.getElementById("loginForm")) {
        document.getElementById("loginForm").addEventListener("submit", (e) => {
            e.preventDefault();
            const email = document.getElementById("loginEmail").value;
            const password = document.getElementById("loginPassword").value;
            const user = JSON.parse(localStorage.getItem(email));
            if (user && user.password === password) {
                localStorage.setItem("loggedInUser", email);
                window.location.href = "index.html";
            } else {
                alert("Invalid credentials!");
            }
        });
    }

    if (document.getElementById("userName")) {
        const userEmail = localStorage.getItem("loggedInUser");
        const user = JSON.parse(localStorage.getItem(userEmail));
        document.getElementById("userName").innerText = user?.name || "Guest";
    }
});

function logout() {
    localStorage.removeItem("loggedInUser");
    window.location.href = "index.html";
}
document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("signupForm")) {
        document.getElementById("signupForm").addEventListener("submit", (e) => {
            e.preventDefault();
            const name = document.getElementById("name").value;
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
            localStorage.setItem(email, JSON.stringify({ name, password }));
            alert("Signup successful!");
            window.location.href = "login.html";
        });
    }

    if (document.getElementById("loginForm")) {
        document.getElementById("loginForm").addEventListener("submit", (e) => {
            e.preventDefault();
            const email = document.getElementById("loginEmail").value;
            const password = document.getElementById("loginPassword").value;
            const user = JSON.parse(localStorage.getItem(email));
            if (user && user.password === password) {
                localStorage.setItem("loggedInUser", email);
                window.location.href = "index.html";
            } else {
                alert("Invalid credentials!");
            }
        });
    }

    if (document.getElementById("userName")) {
        const userEmail = localStorage.getItem("loggedInUser");
        const user = JSON.parse(localStorage.getItem(userEmail));
        document.getElementById("userName").innerText = user?.name || "Guest";
    }
});

function logout() {
    localStorage.removeItem("loggedInUser");
    window.location.href = "landing.html";
}