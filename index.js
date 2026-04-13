const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
    try {
        // Mengambil data 10 produk dari FakeStore API
        const response = await axios.get('https://fakestoreapi.com/products?limit=12');
        const products = response.data;

        // Mengirim data produk ke file view 'index.ejs'
        res.render('index', { products });
    } catch (error) {
        console.error("Gagal mengambil data dari API:", error.message);
        res.status(500).send('Terjadi kesalahan pada server saat memuat produk.');
    }
});

app.listen(PORT, () => {
    console.log(`Server E-Commerce berjalan di http://localhost:${PORT}`);
});