document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const institute = document.getElementById("institute").value.trim();
  const afn = document.getElementById("afn").value.trim();

  if (username && institute && afn) {
    
    // Future: You can redirect to home page or save details to localStorage
    // localStorage.setItem("username", username);
    // window.location.href = "home.html";
  } else {
    alert("Please fill all fields before logging in!");
  }
});