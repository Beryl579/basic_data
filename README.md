# Kelas Basic Data & Data Lab Interaktif

Media pembelajaran interaktif untuk mendalami dasar-dasar data (Basic Data) yang dilengkapi dengan **Data Lab**, sebuah prototipe aplikasi web bergaya Excel untuk manajemen data (CRUD), perhitungan otomatis, dan visualisasi *real-time*.

## ✨ Fitur Utama

### 📚 Modul Pembelajaran (10 Topik)
Materi komprehensif seputar dasar data, lengkap dengan kuis interaktif dan *progress tracking* yang tersimpan di *browser*:
*   **Konsep Dasar:** Understanding Data, Business Process, Data Story, Data to Insight.
*   **Aplikasi Bisnis:** Data Story vs Dashboard, Data-Driven Decision, Business Value from Data.
*   **Manajemen & Karir:** Data & Information Management, Getting Started to Data Project, Career Preparation.

### 🧪 Data Lab Interaktif (Excel-like)
Laboratorium data berbasis *frontend* murni tanpa *backend* berat, menerapkan konsep *reactivity* secara *native*:
*   **Grid Interaktif:** *In-place editing* dan navigasi *keyboard* (Panah, Enter, Tab, F2, Delete) layaknya *spreadsheet*.
*   **Perhitungan Otomatis:** Rumus baris (`Total = Harga * Jumlah`) dan fungsi agregat (`SUM`, `AVERAGE`, `MAX`, `MIN`, `COUNT`).
*   **Visualisasi Real-Time:** Grafik batang dan donat (Chart.js) yang memperbarui diri otomatis saat data di grid diubah.
*   **Persistensi Data:** Penyimpanan otomatis ke `localStorage` dengan sistem *debounce autosave* (menghemat *resource* saat mengetik cepat).
*   **Manajemen Data:** Fitur Tambah Baris, Hapus Terpilih, Muat Data Contoh, dan Reset.

## 🛠️ Tech Stack
Proyek ini dirancang *zero-build* (tanpa *build step*) agar ringan, mudah dijalankan, dan edukatif:
*   **Core:** HTML5, Vanilla JavaScript (ES6+)
*   **Styling:** Tailwind CSS (via CDN)
*   **Visualisasi:** Chart.js v4 (via CDN)
*   **Database:** `localStorage` (Penyimpanan lokal browser sebagai pengganti *backend*)
*   **Font:** Plus Jakarta Sans (Fontsource CDN)

> **Catatan Arsitektur:** Untuk skala produksi/enterprise, stack ini dapat dengan mudah dimigrasikan ke React/Vue + TanStack Table/Handsontable + Recharts. Namun, untuk prototipe dan portofolio, Vanilla JS + Chart.js memberikan *footprint* yang jauh lebih kecil dan *load time* instan.

## 🚀 Cara Menjalankan
Karena tidak menggunakan *framework* yang membutuhkan *compilation*, kamu bisa langsung menjalankannya:
1.  *Clone* repositori ini: 
    ```bash
    git clone https://github.com/Beryl579/basic_data.git
    ```
2.  Buka file `index.html` langsung di browser (Chrome/Firefox/Edge).
3.  **Opsional (Local Server):** Untuk menghindari isu CORS pada beberapa browser, gunakan ekstensi *Live Server* di VS Code atau jalankan via Python:
    ```bash
    python -m http.server 8000
    ```

## 🌐 Live Demo
Akses langsung aplikasi tanpa perlu instalasi:
👉 [https://berylnathaniel.my.id/excel/](https://berylnathaniel.my.id/excel/)

## 📄 Lisensi
Proyek ini dirilis di bawah lisensi MIT. Lihat file [LICENSE](LICENSE) untuk detail selengkapnya.

---
Dikembangkan oleh **Beryl Nathaniel Sinaga** 🎓