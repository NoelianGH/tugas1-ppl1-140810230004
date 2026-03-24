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