# Portofolio Showcase — Achmad Zulfikri

[![SvelteKit](https://img.shields.io/badge/SvelteKit-5-FF3E00?style=for-the-badge&logo=svelte&logoColor=white)](https://kit.svelte.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)

Web portofolio personal dan showcase studi kasus rekayasa perangkat lunak oleh **Achmad Zulfikri** — Fullstack Developer, Computer Vision, dan IoT Specialist. Dirancang dengan estetika **Neo-brutalism** yang modern, tegas, dan berkinerja tinggi.

---

## 🚀 Fitur Unggulan

- **Sistem Desain Neo-brutalism:** Border tebal (3px), hard offset box-shadows, tipografi kontras (*Space Grotesk* & *Space Mono*), dan palet warna retro-modern yang playful namun profesional.
- **Mode Gelap/Terang (Dark Mode):** Toggle tema dengan penyimpanan preferensi di `localStorage` dan skrip pencegah kedipan (*Anti-FOUC*).
- **Showcase Proyek Lengkap:** Setiap proyek dilengkapi halaman studi kasus detail yang mendokumentasikan Masalah, Solusi Arsitektur, Peran, Hasil Terukur, serta Galeri Tangkapan Layar.
- **Filter Proyek Interaktif:** Filter kartu portofolio berdasarkan tag teknologi (`AI`, `Computer Vision`, `Web`, `Fullstack`, `Mobile`, `IoT`).
- **Timeline Pengalaman & Pendidikan:** Menampilkan riwayat studi independen MSIB Batch 7 (PT. Stechoq Robotika Indonesia), Bootcamp Laravel, proyek IoT Cah Fungi, dan kelulusan S1 Teknik Informatika Universitas Madura.
- **Riset & Publikasi Ilmiah:** Terintegrasi dengan metrik profil **Google Scholar** (161 Sitasi, h-index 4, i10-index 4) dan daftar 4 publikasi ilmiah terindeks.
- **Formulir Kontak Cepat:** Formulir interaktif siap kirim ke email resmi dan kartu kontak langsung (WhatsApp, LinkedIn, Email).
- **Mega Footer:** Footer solid yang informatif dengan marquee ticker teks berjalan (*running text*).
- **100% Static Prerender (SSG):** Menggunakan `@sveltejs/adapter-static` untuk kecepatan loading instan, keamanan maksimal, dan ramah SEO tanpa memerlukan server runtime.

---

## 🛠️ Stack Teknologi

| Kategori | Teknologi |
|---|---|
| **Frontend Framework** | [SvelteKit](https://kit.svelte.dev/) (Svelte 5 Runes) |
| **Bahasa** | [TypeScript](https://www.typescriptlang.org/) |
| **Styling & CSS** | [Tailwind CSS v4](https://tailwindcss.com/) (`@tailwindcss/vite`) |
| **Build Tool** | [Vite](https://vitejs.dev/) |
| **Adapter** | `@sveltejs/adapter-static` (Fully Prerendered) |
| **Linter & Code Style** | ESLint, Prettier, Svelte-Check |

---

## 📁 Proyek yang Ditampilkan

1. **Deteksi Kematangan Cabai Rawit (2026)**
   * *Stack:* YOLOv8, FastAPI, Vue.js, Tailwind CSS, Roboflow.
   * *Repo:* [github.com/azulfikri/smart-chili-harvest](https://github.com/azulfikri/smart-chili-harvest)
   * *Sorotan:* Proyek skripsi mandiri dengan akurasi model mAP50 > 90% dan inferensi real-time < 200ms.
2. **Material Supply Warehouse Management System (2024)**
   * *Stack:* Vue.js, Express.js, Prisma ORM, Bootstrap, PostgreSQL.
   * *Repo:* [Frontend](https://github.com/azulfikri/inventory-management-frontend-axicode) & [Backend](https://github.com/azulfikri/inventory-management-backend-axicode)
   * *Sorotan:* Studi independen MSIB Batch 7 di PT. Stechoq Robotika Indonesia (Industri 4.0 Manufaktur).
3. **Sistem Misting Otomatis Kumbung Jamur (2025)**
   * *Stack:* ESP32, DHT22, Blynk IoT, Relay Module, Pompa & Misting Sprayer.
   * *Sorotan:* Proyek Praktik Kerja di Cah Fungi Sampang untuk otomatisasi pengabutan & stabilisasi mikroklimat kumbung via aplikasi mobile Blynk.
4. **Monitoring Kandang Ayam Petelur (2026)**
   * *Stack:* Flutter, Supabase, ESP32, Sensor Lingkungan IoT.
   * *Repo:* [github.com/azulfikri/kandang-monitoring-app](https://github.com/azulfikri/kandang-monitoring-app)
   * *Sorotan:* Aplikasi mobile untuk pemantauan suhu, kelembapan, dan gas amonia secara real-time.
5. **Sistem Booking Lapangan Olahraga (2025)**
   * *Stack:* Laravel, Tailwind CSS, MySQL.
   * *Repo:* [github.com/azulfikri/sistem-booking-lapangan](https://github.com/azulfikri/sistem-booking-lapangan)
   * *Sorotan:* Manajemen reservasi slot jadwal lapangan interaktif dan validasi bukti pembayaran.

---

## 💻 Panduan Menjalankan Secara Lokal

### Prasyarat
* [Node.js](https://nodejs.org/) v18+ atau v20+
* NPM / PNPM / Bun

### 1. Kloning Repositori
```bash
git clone https://github.com/azulfikri/my-portofolio.git
cd my-portofolio
```

### 2. Instalasi Dependensi
```bash
npm install
```

### 3. Menjalankan Server Pengembangan
```bash
npm run dev
```
Buka browser di `http://localhost:5173`.

### 4. Menjalankan Pengecekan Kode (Type Check & Lint)
```bash
# Type check Svelte & TypeScript
npm run check

# Linting kode
npm run lint
```

### 5. Membangun untuk Produksi (Static Build)
```bash
npm run build
```
File static siap deploy akan dihasilkan di direktori `build/`.

### 6. Preview Hasil Build Lokal
```bash
npm run preview
```

---

## 🚢 Deployment

Proyek ini telah dikonfigurasi dengan `@sveltejs/adapter-static` (`prerender = true`), sehingga dapat di-deploy tanpa biaya server di berbagai platform:
- **Vercel:** Deteksi otomatis framework SvelteKit.
- **Netlify:** Publish directory: `build`.
- **Cloudflare Pages:** Build command: `npm run build`, Output directory: `build`.
- **GitHub Pages:** Deploy direktori `build/` via GitHub Actions.

---

## 👤 Kontak & Penulis

* **Nama:** Achmad Zulfikri
* **Email:** [achamadzulfikri20@gmail.com](mailto:achamadzulfikri20@gmail.com)
* **GitHub:** [@azulfikri](https://github.com/azulfikri)
* **LinkedIn:** [linkedin.com/in/achmadzulfikri](https://linkedin.com/in/achmadzulfikri)
* **Google Scholar:** [Achmad Zulfikri](https://scholar.google.co.id/citations?user=f95HcAoAAAAJ&hl=id)

---

## 📄 Lisensi

Proyek ini dilisensikan di bawah lisensi MIT.
