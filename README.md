# Country Info SPA with AI Assistant  

## Ringkasan Proyek  
Country List SPA adalah aplikasi single-page (SPA) modern yang menampilkan informasi negara di seluruh dunia dengan data yang diambil dari API GraphQL. Aplikasi ini juga terintegrasi dengan API NVIDIA NIM untuk menyediakan fitur berbasis AI, seperti menjawab pertanyaan tentang negara, memberikan rekomendasi perjalanan, dan menerjemahkan informasi negara.  

Fitur tambahan mencakup autentikasi menggunakan Google OAuth untuk melindungi akses ke aplikasi utama, serta desain responsif yang memastikan pengalaman pengguna optimal di berbagai perangkat. 

Aplikasi ini juga memiliki dark and light mode untuk kenyamanan visual pengguna, selain itu juga memiliki fitur pencarian berdasarkan nama negara dan filter berdasarkan benua, pengurutan nama ascending descending

---

## Instruksi Pengaturan  

### 1. **Prasyarat**
Pastikan Anda telah menginstal:  
- **Node.js** 
- **npm**
- **Git**  


### 2. **Langkah-Langkah Instalasi**  
1. Clone repositori ini ke mesin lokal Anda:  
   ```bash
   git clone https://github.com/eengsf/country-list-ai.git
   cd country-ai
   npm run dev
   ```
2. Buka [http://localhost:3000](http://localhost:3000) dengan browser Anda untuk melihat hasilnya. Disarankan menggunakan Firefox agar emoji bendera didalam aplikasi bisa muncul


### 3. **Fitur yang Tersedia**
1. Tampilan Informasi Negara
    -Menampilkan daftar negara dengan data utama:
        --Nama negara
        --Emoji bendera
        --Ibu kota
        --Mata uang
    -Detail tambahan ketika pengguna mengklik negara:
        --Bahasa yang digunakan
        --Benua
        --Kode nomor telepon
2. Integrasi AI Asisten
    -Antarmuka obrolan interaktif dengan kemampuan menjawab pertanyaan
    -Indikator sedang mengetik untuk pengalaman yang lebih realistis.
3. Autentikasi OAuth
    -Login menggunakan akun Google.
    -Proteksi rute aplikasi utama sehingga hanya pengguna yang login dapat mengakses.
    -Menampilkan informasi profil pengguna setelah berhasil login.
4. Desain Responsif
    -Aplikasi dirancang agar kompatibel dan terlihat baik di berbagai ukuran layar, mulai dari ponsel, tablet, hingga desktop.


### 4. **Keputusan Teknis dan Arsitektur**
    -ReactJS sebagai library dan NextJS sebagai framework nya
        --Memudahkan integrasi dengan NextAuth.js untuk otentikasi Google
    -GraphQL Client (Apollo)
        --Memudahkan pengambilan data dari API dengan query yang fleksibel.
    -Styled-Components 
        --Menggunakan Tailwindcss untuk pengembangan yang lebih cepat dan efisien
    -OAuth 2.0
        --Implementasi autentikasi yang aman menggunakan Google.
    -State Management
        --Menggunakan Context API untuk mengelola state global aplikasi


### 5. **Rencana Perbaikan di Masa Depan**
    -Fitur Tambahan
        --Menambahkan fitur bookmark untuk menyimpan negara favorit pengguna.
    -Peningkatan AI Asisten
        --Membuat AI lebih responsif terhadap pertanyaan lanjutan (multi-turn conversations).
    -Skalabilitas Aplikasi
        --Mengembangkan backend API sendiri untuk menangani data negara jika GraphQL API eksternal menjadi tidak tersedia.