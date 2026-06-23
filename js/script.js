function registerUser() {
  let user = document.getElementById("regUser").value;
  let email = document.getElementById("regEmail").value;
  let pass = document.getElementById("regPass").value;

  localStorage.setItem("username", user);
  localStorage.setItem("email", email);
  localStorage.setItem("password", pass);

  document.getElementById("registerMsg").innerHTML = "Registration Successful!";
  return false;
}

function loginUser() {
  let user = document.getElementById("loginUser").value;
  let pass = document.getElementById("loginPass").value;

  let savedUser = localStorage.getItem("username");
  let savedPass = localStorage.getItem("password");

  if (user === savedUser && pass === savedPass) {
    window.location.href = "dashboard.html";
  } else {
    document.getElementById("loginMsg").innerHTML = "Invalid Username or Password";
  }

  return false;
}

function trackMobile() {
  let mobile = document.getElementById("mobileNumber").value;

  document.getElementById("trackingResult").innerHTML = `
    <h3>Tracking Result</h3>
    <p><strong>Mobile Number:</strong> ${mobile}</p>
    <p><strong>Status:</strong> Active</p>
    <p><strong>Location:</strong> Nagpur, Maharashtra</p>
    <p><strong>Last Updated:</strong> Just now</p>
  `;

  return false;
}

function reportLostMobile() {
  let owner = document.getElementById("ownerName").value;
  let mobile = document.getElementById("lostMobile").value;

  document.getElementById("reportMsg").innerHTML =
    "Lost mobile report submitted successfully for " + owner + " (" + mobile + ")";

  return false;
}
