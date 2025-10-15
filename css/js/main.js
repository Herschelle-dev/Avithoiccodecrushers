function login() {
  const username = document.getElementById("username").value.trim();
  const institute = document.getElementById("institute").value.trim();
  const afn = document.getElementById("afn").value.trim();
  const message = document.getElementById("message");

  if (username === "" || institute === "" || afn === "") {
    message.style.color = "red";
    message.textContent = "⚠️ Please fill all the fields!";
    return;
  }

  // Save details in localStorage
  const userData = { username, institute, afn };
  localStorage.setItem("userData", JSON.stringify(userData));

  message.style.color = "lightgreen";
  message.textContent = "✅ Login successful! Redirecting...";

  // Redirect after a short delay
  setTimeout(() => {
    window.location.href = "home.html"; // Change this to your home page
  }, 1500);
}