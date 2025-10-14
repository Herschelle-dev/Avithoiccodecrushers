const alumniData = [
  {
    name: "Rahul Sharma",
    batch: "Batch of 2020",
    job: "Software Engineer at Google",
    img: "https://via.placeholder.com/400x250?text=Rahul+Sharma"
  },
  {
    name: "Priya Verma",
    batch: "Batch of 2019",
    job: "Product Designer at Microsoft",
    img: "https://via.placeholder.com/400x250?text=Priya+Verma"
  },
  {
    name: "Arjun Patel",
    batch: "Batch of 2021",
    job: "Data Analyst at Amazon",
    img: "https://via.placeholder.com/400x250?text=Arjun+Patel"
  }
];

// Target container
const alumniContainer = document.getElementById("alumni-list");

// Generate cards dynamically
alumniData.forEach(alum => {
  const card = document.createElement("div");
  card.classList.add("alumni-card");

  card.innerHTML = `
    <img src="${alum.img}" alt="${alum.name}">
    <div class="alumni-info">
      <h3>${alum.name}</h3>
      <p>${alum.batch}</p>
      <p>${alum.job}</p>
    </div>
  `;

  alumniContainer.appendChild(card);
});