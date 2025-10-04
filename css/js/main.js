function login() {
  const username = document.getElementById('username').value.trim();
  const institute = document.getElementById('institute').value.trim();
  const afn = document.getElementById('afn').value.trim();
  const message = document.getElementById('message');

  if (!username || !institute || !afn) {
    message.textContent = "Please fill in all fields.";
  } else {
    message.style.color = "green";
    window.location.href = "dashboard.html";

  }
}
