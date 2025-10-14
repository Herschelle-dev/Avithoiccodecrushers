function login() {
  const username = document.getElementById('username').value;
  const institute = document.getElementById('institute').value;
  const afn = document.getElementById('afn').value;

  // Store in sessionStorage
  sessionStorage.setItem('username', username);
  sessionStorage.setItem('institute', institute);
  sessionStorage.setItem('afn', afn);

  window.location.href = 'dashboard.html';
}
