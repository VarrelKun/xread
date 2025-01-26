// Mendapatkan elemen tombol dan ikon
const favoriteButton = document.getElementById('favorite-btn');
const favoriteIcon = document.getElementById('favorite-icon');

// Fungsi untuk menambahkan atau menghapus manhwa dari daftar favorit
favoriteButton.addEventListener('click', () => {
  const manhwaId = window.location.pathname.split('/').pop(); // Mengambil ID manhwa dari URL
  const manhwaTitle = document.getElementById('manhwa-title').textContent; // Mengambil title dari elemen HTML
  const manhwaImageSrc = document.getElementById('manhwa-image').src; // Mengambil imageSrc dari elemen HTML

  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

  const newFavorite = { manhwaId, title: manhwaTitle, imageSrc: manhwaImageSrc };

  if (favorites.some(fav => fav.manhwaId === manhwaId)) {
    // Jika manhwa sudah ada di daftar favorit, hapus
    const updatedFavorites = favorites.filter(fav => fav.manhwaId !== manhwaId);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));

    // Update ikon dan tombol
    favoriteIcon.classList.remove('fa-solid', 'fa-bookmark');
    favoriteIcon.classList.add('fa-regular', 'fa-bookmark');
    favoriteButton.classList.remove('bookmarked');
  } else {
    // Jika belum ada, tambahkan ke daftar favorit
    favorites.push(newFavorite);
    localStorage.setItem('favorites', JSON.stringify(favorites));

    // Update ikon dan tombol
    favoriteIcon.classList.remove('fa-regular', 'fa-bookmark');
    favoriteIcon.classList.add('fa-solid', 'fa-bookmark');
    favoriteButton.classList.add('bookmarked');
  }
});

// Memeriksa apakah manhwa sudah ada di favorit saat halaman dimuat
const manhwaId = window.location.pathname.split('/').pop();
const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

if (favorites.some(fav => fav.manhwaId === manhwaId)) {
  // Jika manhwa ada di favorit, tampilkan ikon solid
  favoriteIcon.classList.remove('fa-regular', 'fa-bookmark');
  favoriteIcon.classList.add('fa-solid', 'fa-bookmark');
  favoriteButton.classList.add('bookmarked');
} else {
  // Jika manhwa tidak ada di favorit, tampilkan ikon regular
  favoriteIcon.classList.remove('fa-solid', 'fa-bookmark');
  favoriteIcon.classList.add('fa-regular', 'fa-bookmark');
  favoriteButton.classList.remove('bookmarked');
}