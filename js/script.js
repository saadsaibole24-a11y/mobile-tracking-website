function registerUser() {
    const username = document.getElementById("regUser").value;
    const email = document.getElementById("regEmail").value;
    const password = document.getElementById("regPass").value;

    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    localStorage.setItem("password", password);

    alert("Registration Successful!");

    window.location.href = "login.html";

    return false;
}

function loginUser() {
    const username = document.getElementById("loginUser").value;
    const password = document.getElementById("loginPass").value;

    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");

    if (username === savedUsername && password === savedPassword) {
        alert("Login Successful!");
        window.location.href = "dashboard.html";
    } else {
        document.getElementById("loginMsg").innerHTML =
        "<span style='color:red;'>Invalid Username or Password</span>";
    }

    return false;
}
