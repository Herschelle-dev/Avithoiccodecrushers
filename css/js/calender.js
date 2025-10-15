const daysTag = document.querySelector(".days");
const currentDate = document.querySelector(".current-date");
const prevNextIcons = document.querySelectorAll(".icon");
const addEventBtn = document.getElementById("add-event-btn");

let date = new Date();
let currYear = date.getFullYear();
let currMonth = date.getMonth();

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

// Default Events
let events = [
  { date: "2025-10-15", title: "Design Review", color: "#28a745" },
  { date: "2025-10-20", title: "Team Meeting", color: "#dc3545" },
  { date: "2025-10-25", title: "Release Deadline", color: "#007bff" }
];

const renderCalendar = () => {
  let firstDayOfMonth = new Date(currYear, currMonth, 1).getDay();
  let lastDateOfMonth = new Date(currYear, currMonth + 1, 0).getDate();
  let lastDayOfMonth = new Date(currYear, currMonth, lastDateOfMonth).getDay();
  let lastDateOfLastMonth = new Date(currYear, currMonth, 0).getDate();

  let liTag = "";

  // Previous month days
  for (let i = firstDayOfMonth; i > 0; i--) {
    liTag += `<li class="inactive">${lastDateOfLastMonth - i + 1}</li>`;
  }

  // Current month days
  for (let i = 1; i <= lastDateOfMonth; i++) {
    let currentDateString = `${currYear}-${String(currMonth + 1).padStart(2, "0")}-${String(i).padStart(2, "0")}`;
    let isToday =
      i === new Date().getDate() &&
      currMonth === new Date().getMonth() &&
      currYear === new Date().getFullYear()
        ? "active"
        : "";

    let event = events.find(e => e.date === currentDateString);
    if (event) {
      liTag += `<li class="event ${isToday}" style="background-color:${event.color}" title="${event.title}">${i}</li>`;
    } else {
      liTag += `<li class="${isToday}">${i}</li>`;
    }
  }

  // Next month days
  for (let i = lastDayOfMonth; i < 6; i++) {
    liTag += `<li class="inactive">${i - lastDayOfMonth + 1}</li>`;
  }

  currentDate.innerText = `${months[currMonth]} ${currYear}`;
  daysTag.innerHTML = liTag;
};

// Navigation
prevNextIcons.forEach(icon => {
  icon.addEventListener("click", () => {
    currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

    if (currMonth < 0 || currMonth > 11) {
      date = new Date(currYear, currMonth);
      currYear = date.getFullYear();
      currMonth = date.getMonth();
    } else {
      date = new Date();
    }
    renderCalendar();
  });
});

// Add new event
addEventBtn.addEventListener("click", () => {
  const eventDate = document.getElementById("event-date").value;
  const eventTitle = document.getElementById("event-title").value.trim();
  const eventColor = document.getElementById("event-color").value;

  if (!eventDate || !eventTitle) {
    alert("Please fill all fields!");
    return;
  }

  events.push({ date: eventDate, title: eventTitle, color: eventColor });
  renderCalendar();

  // Reset fields
  document.getElementById("event-date").value = "";
  document.getElementById("event-title").value = "";
  alert("✅ Event added successfully!");
});

renderCalendar();
