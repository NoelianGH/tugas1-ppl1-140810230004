# Task Management API

### 1. Deskripsi Project
Task API adalah sebuah layanan RESTful sederhana yang dibuat menggunakan Node.js, Express, dan MongoDB. API ini berfungsi untuk mengelola data pengguna atau tugas (CRUD) sebagai bagian dari ekosistem manajemen digital BeliBiji.

### 2. Dokumentasi API
API ini mengikuti standar RESTful dengan format respons JSON.

| Method | Endpoint | Deskripsi |
| :--- | :--- | :--- |
| **GET** | `/users` | Mengambil semua daftar data. |
| **POST** | `/users` | Menambahkan data baru (Body: `title`). |
| **PATCH** | `/users/:id` | Memperbarui data berdasarkan ID. |
| **DELETE** | `/users/:id` | Menghapus data berdasarkan ID. |

**Contoh Response (Success):**
```json
{
  "status": "success",
  "data": [
    { "_id": "64f1...", "title": "Belajar Docker", "completed": false }
  ]
}
```
### 3. Panduan Instalasi (Docker)
Proyek ini sudah terintegrasi sepenuhnya dengan Docker. Pastikan Docker Desktop sudah berjalan di komputermu.

Langkah-langkah menjalankan aplikasi:
#### 1. Clone Repository ini
#### 2. Jalankan perintah berikut di terminal:
```bash
docker-compose up --build
```
#### 3. Informasi Port:
a. Host Port: 3000 (Akses fi http://localhost:3000)
b. Container Port: 3000
c. Database (MongoDB): 27017

#### 4. Alur Kerja Git:
Proyek ini menggunakan Feature Branch Flow:
- main: Kode produksi yang stabil.
- develop: Cabang utama untuk pengembangan.
- feature/: Cabang spesifik untuk fitur baru (misal: feature/crud-users).

Bukti Conventional Commits:
Setiap pesan commit mengikuti format: type: description (Contoh: feat: implement crud logic atau fix: connection string).

#### 5. Status Automasi (GitHub Actions)
Proyek ini dilengkapi dengan pipeline CI/CD/CS otomatis melalui GitHub Actions:
- Unit Testing (CI): Menjalankan pengujian otomatis menggunakan Jest & Supertest setiap kali ada Push atau Pull Request.
- Security Scan (CS): Melakukan audit keamanan pada dependensi menggunakan npm audit.

### Tips Tambahan:
1. **Lakukan Commit Akhir:** Setelah file ini dibuat, lakukan commit dengan pesan yang benar:
   `git add .`
   `git commit -m "docs: add project documentation in README"`
2. **Badge Status:** Jika kamu ingin poin tambahan, kamu bisa menambahkan "Badge Status" dari GitHub Actions di bagian paling atas README setelah kamu push ke GitHub.

**Apakah ada bagian dari alur Git atau Docker yang masih membuatmu bingung sebelum kamu mengumpulkan tugas ini?**