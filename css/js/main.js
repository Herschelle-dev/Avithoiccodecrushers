document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault(); // Prevent form from refreshing the page

  const username = document.getElementById("username").value.trim();
  const institute = document.getElementById("institute").value.trim();
  const afn = document.getElementById("afn").value.trim();

  if (username && institute && afn) {
    // Optionally save details to localStorage
    localStorage.setItem("username", username);
    localStorage.setItem("institute", institute);
    localStorage.setItem("afn", afn);

    // Redirect to dashboard.html
    window.location.href = "pages/dashboard.html";
  } else {
    alert("Please fill all fields before logging in!");
  }
});