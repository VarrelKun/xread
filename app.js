const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const port = 3000;

// Middleware untuk melayani file statis
app.use(express.static(path.join(__dirname, 'public')));

// Route untuk halaman utama (menampilkan manhwa baru)
app.get('/', async (req, res) => {
  try {
    const response = await axios.get('https://kurokami.vercel.app/api/manhwa-new');
    const manhwaList = response.data;
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
  } catch (error) {
    res.status(500).send('Error fetching manhwa data');
  }
});

app.get('/komik/:id', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'detail.html'));
});

app.get('/saved', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'saved.html'));
});

// Route untuk detail manhwa
app.get('/manhwa/:manhwaId', async (req, res) => {
  const manhwaId = req.params.manhwaId;
  try {
    const response = await axios.get(`https://kurokami.vercel.app/api/manhwa-detail/${manhwaId}`);
    const manhwaDetail = response.data;
    res.json(manhwaDetail); // Bisa ditampilkan di frontend
  } catch (error) {
    res.status(500).send('Error fetching manhwa detail');
  }
});

// Route untuk chapter manhwa
app.get('/chapter/:chapterId', async (req, res) => {
  const chapterId = req.params.chapterId;
  try {
    const response = await axios.get(`https://kurokami.vercel.app/api/chapter/${chapterId}`);
    const chapterData = response.data;
    
    // Kirim data ke frontend dalam bentuk JSON
    res.sendFile(path.join(__dirname, 'views', 'chapter.html'));
  } catch (error) {
    console.error('Error fetching chapter:', error);
    res.status(500).send('Error fetching chapter data');
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});