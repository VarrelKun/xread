// Mendapatkan elemen tombol
const favoriteButton = document.getElementById('favorite-btn');

// Menambahkan event listener untuk klik tombol
favoriteButton.addEventListener('click', () => {
  const manhwaId = window.location.pathname.split('/').pop(); // Mengambil ID manhwa dari URL
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

  if (favorites.includes(manhwaId)) {
    // Jika manhwa sudah ada di daftar favorit, hapus
    const updatedFavorites = favorites.filter(id => id !== manhwaId);
    localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    favoriteButton.textContent = 'Bookmark'; // Mengubah teks tombol kembali ke 'Bookmark'
  } else {
    // Jika belum ada, tambahkan ke daftar favorit
    favorites.push(manhwaId);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    favoriteButton.textContent = 'Bookmarked'; // Mengubah teks tombol menjadi 'Bookmarked'
  }
});

// Memeriksa apakah manhwa sudah ada di favorit saat halaman dimuat
const manhwaId = window.location.pathname.split('/').pop();
const favorites = JSON.parse(localStorage.getItem('favorites')) || [];

if (favorites.includes(manhwaId)) {
  favoriteButton.textContent = 'Bookmarked'; // Jika sudah ada di favorit, ubah teks menjadi 'Bookmarked'
} else {
  favoriteButton.textContent = 'Bookmark'; // Jika belum ada, tetap 'Bookmark'
}