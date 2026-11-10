# DAPUR MANIS — Home Bakery & Pastry Pre-Order Demo
> **Paket Demo YDSN UMKM FREE**  
> Website resmi & katalog digital untuk usaha kue dan pastry rumahan berbasis Pre-Order.

---

## 🥐 Fitur Utama Website

1. **Warm Modern Editorial Design**
   - Palette warna: Warm Cream (`#f6efe4`), Ivory (`#fcf9f4`), Soft Beige (`#ecdfcc`), Caramel (`#b9783f`), dan Chocolate Brown (`#3a2419`).
   - Tipografi: Pasangan elegan serif (*Fraunces*) untuk heading dan sans-serif (*Plus Jakarta Sans*) untuk kenyamanan membaca di mobile & desktop.
   - Food photography berkualitas tinggi dengan optimasi otomatis ke format WebP responsif.

2. **Katalog & Pre-Order Berbasis WhatsApp**
   - **Tanpa cart / payment gateway rumit**: Semua tombol pemesanan langsung membuka chat WhatsApp admin dengan pesan otomatis terisi sesuai nama produk, harga, dan format pesanan.
   - Konsultasi pesanan skala besar (arisan, kantor, syukuran).
   - Floating WhatsApp button di sudut kanan bawah dengan status *"Online & Respon Cepat"*.

3. **8 Section Lengkap Sesuai Permintaan**
   - **Header**: Logo custom Dapur Manis, navigasi halus, tombol WhatsApp, mobile menu overlay.
   - **Hero**: Headline *"Kue & Pastry Rumahan"*, subheadline *"Lezat, Fresh, Penuh Cinta"*, kartu status Open PO batch aktif, stempel grafis.
   - **Kategori Produk**: Donat Kentang, Risol, Kue Bolu, Pastel, Cookies & Kue Kering (bisa diklik untuk filter otomatis).
   - **Produk Unggulan**: Donat Kentang Cokelat, Risol Mayo, Kue Bolu Cokelat, Pastel Ayam, Nastar Premium, Putri Salju, Kastengel, Choco Chip Cookies lengkap dengan filter tab dinamis.
   - **Pre-Order Information**: 5 langkah pemesanan dan jadwal batch PO dengan status (*Open PO*, *Closed PO*, *Segera Dibuka*).
   - **About Us**: Cerita dapur rumahan, 3 pilar kualitas bahan (Butter asli, tanpa pengawet, hand-crafted), statistik pencapaian, dan ulasan pelanggan.
   - **Seasonal Collection**: Paket Lebaran, Paket Natal, dan Hampers Momen Spesial yang fleksibel diaktifkan/dinonaktifkan kapan saja.
   - **Contact**: Kartu WhatsApp, Instagram, jadwal jam operasional, alamat rumah produksi, badge metode pengiriman, dan sematan interaktif Google Maps.

4. **SEO & Standar Web Modern**
   - Meta title, description, keywords, Open Graph, dan Twitter Cards lengkap.
   - Structured Data Schema.org tipe `Bakery` dan `Menu` untuk mesin pencari Google.
   - Semantic HTML5, accessible ARIA, dan performa kilat (100% static HTML).

---

## 🛠️ Cara Mengubah Data (Hanya 1 File Config)

Seluruh konten, harga, nomor WhatsApp, alamat, jadwal PO, dan produk dapat diubah dengan mudah di:

📁 `src/data/site.ts`

### 1. Mengganti Nomor WhatsApp & Kontak
```typescript
export const contact = {
  whatsapp: '6281234567890',          // format internasional tanpa '+'
  whatsappDisplay: '+62 812-3456-7890',
  instagram: 'dapurmanis.id',
  email: 'halo@dapurmanis.example.com',
  address: {
    street: 'Jl. Kenanga No. 12, Kel. Sukamaju',
    city: 'Bandung',
    region: 'Jawa Barat',
    postalCode: '40123',
    note: 'Pickup di rumah produksi (bukan toko).',
  },
  mapsQuery: 'Jl. Kenanga, Bandung, Jawa Barat',
  // ...
};
```

### 2. Mengubah / Menambah Menu Produk
```typescript
export const products: Product[] = [
  {
    id: 'donat-kentang-cokelat',
    name: 'Donat Kentang Cokelat',
    category: 'donat',
    description: 'Donat kentang super lembut dengan glaze cokelat Belgia...',
    price: 45000,
    unit: '/ box isi 6',
    image: 'donat-kentang-cokelat', // letakkan file foto di src/assets/images/
    badge: 'Best Seller',
    featured: true,
  },
  // ...
];
```

### 3. Mengatur Jadwal Pre-Order (Open / Closed / Soon)
```typescript
export const poSchedule: PoBatch[] = [
  {
    name: 'PO Batch #46',
    orderPeriod: '9 – 12 Nov 2026',
    readyDate: 'Sabtu, 14 Nov 2026',
    menu: 'Donat, Risol, Pastel, Bolu',
    status: 'open', // 'open' | 'closed' | 'soon'
    quota: 'Sisa ±15 box',
  },
  // ...
];
```

### 4. Mengatur Koleksi Musiman
Di `src/data/site.ts`:
- Ubah `enabled: false` jika sedang tidak ingin menampilkan section musiman.
- Ubah status paket (`'active'` = promo dibuka, `'upcoming'` = segera hadir, `'seasonal'` = arsip katalog).

---

## 🚀 Menjalankan Project

### Mode Pengembangan (Development)
```bash
npm run dev
```
Buka `http://localhost:4321` di browser Anda.

### Build untuk Produksi (Static Hosting)
```bash
npm run build
```
Folder output statis siap deploy berada di direktori `dist/`. Dapat langsung di-upload ke Vercel, Netlify, Cloudflare Pages, GitHub Pages, atau shared hosting cPanel biasa.

---
*Dibuat untuk YDSN UMKM FREE Demo — DAPUR MANIS*
