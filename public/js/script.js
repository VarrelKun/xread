
// Add any custom JavaScript here, if needed
window.onload = async () => {
  try {
    const response = await fetch('/'); // Mengambil data dari server
    const manhwaList = await response.json();

    const manhwaContainer = document.getElementById('manhwa-list');

    manhwaList.forEach(manhwa => {
      const manhwaCard = document.createElement('div');
      manhwaCard.classList.add('manhwa-card');
      manhwaCard.innerHTML = `
        <img src="${manhwa.imageSrc}" alt="${manhwa.title}">
        <div class="info">
          <h3>${manhwa.title}</h3>
          <p>${manhwa.description}</p>
        </div>
      `;

      manhwaCard.onclick = () => {
        window.location.href = `/manhwa/${manhwa.id}`;
      };

      manhwaContainer.appendChild(manhwaCard);
    });
  } catch (error) {
    console.error('Error loading manhwa list', error);
  }
};