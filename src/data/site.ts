/**
 * ============================================================
 *  DAPUR MANIS — FILE DATA UTAMA (satu-satunya file yang perlu diedit)
 * ============================================================
 *  Semua teks, harga, nomor WhatsApp, alamat, jadwal PO, produk,
 *  dan koleksi musiman diatur dari file ini.
 *
 *  CATATAN: Seluruh data di bawah adalah DATA DEMO (paket YDSN UMKM FREE).
 *  Ganti sesuai bisnis Anda.
 *
 *  Gambar: letakkan file foto di `src/assets/images/` lalu tulis
 *  nama file TANPA ekstensi pada field `image` (mis. "risol-mayo").
 *  Gambar otomatis dioptimasi (WebP + ukuran responsif) saat build.
 * ============================================================
 */

// ------------------------------------------------------------
// 1. IDENTITAS BRAND & SEO
// ------------------------------------------------------------
export const brand = {
  name: 'Dapur Manis',
  tagline: 'Homemade with Love.',
  category: 'Home Bakery & Pastry',
  /** URL website setelah online (dipakai untuk SEO / canonical). */
  siteUrl: 'https://dapurmanis.example.com',
  seo: {
    title: 'Dapur Manis — Kue & Pastry Rumahan Pre-Order | Homemade with Love',
    description:
      'Dapur Manis, home bakery & pastry rumahan berbasis Pre-Order. Donat kentang, risol, kue bolu, pastel, nastar & kue kering dari bahan premium. Pesan mudah via WhatsApp.',
    keywords:
      'home bakery, kue rumahan, pre order kue, donat kentang, risol mayo, bolu cokelat, pastel ayam, nastar, putri salju, kue kering lebaran, hampers',
    ogImage: 'hero', // nama file gambar untuk preview saat dibagikan
  },
};

// ------------------------------------------------------------
// 2. KONTAK
// ------------------------------------------------------------
export const contact = {
  /** Format internasional tanpa tanda + / spasi. Contoh: 6281234567890 */
  whatsapp: '6281234567890',
  whatsappDisplay: '+62 812-3456-7890',
  instagram: 'dapurmanis.id',
  email: 'halo@dapurmanis.example.com',
  address: {
    street: 'Jl. Kenanga No. 12, Kel. Sukamaju',
    city: 'Bandung',
    region: 'Jawa Barat',
    postalCode: '40123',
    note: 'Pickup di rumah produksi (bukan toko). Mohon konfirmasi sebelum datang.',
  },
  /** Teks pencarian Google Maps (alamat atau nama tempat). */
  mapsQuery: 'Jl. Kenanga, Bandung, Jawa Barat',
  hours: [
    { days: 'Senin – Jumat', time: '08.00 – 17.00' },
    { days: 'Sabtu', time: '08.00 – 14.00' },
    { days: 'Minggu & Libur', time: 'Khusus pickup PO' },
  ],
  /** Jam buka untuk SEO (format schema.org). */
  openingHoursSchema: ['Mo-Fr 08:00-17:00', 'Sa 08:00-14:00'],
  delivery: 'Pickup, kurir instan (Gojek/Grab), atau pengiriman kue kering ke luar kota.',
};

// ------------------------------------------------------------
// 3. TEMPLATE PESAN WHATSAPP OTOMATIS
// ------------------------------------------------------------
export const waMessages = {
  general:
    'Halo Dapur Manis! 👋\nSaya ingin bertanya tentang menu dan jadwal Pre-Order terbaru. Terima kasih.',
  bulk:
    'Halo Dapur Manis! 👋\nSaya ingin pesan dalam jumlah besar untuk acara (arisan/kantor/syukuran). Boleh minta info paket & harganya?\n\nTanggal acara: \nPerkiraan jumlah: \nTerima kasih.',
  product: (name: string, price: string, unit: string) =>
    `Halo Dapur Manis! 👋\nSaya ingin memesan:\n\n• *${name}*\n  ${price} ${unit}\n  Jumlah: ...\n\nNama: \nTanggal ambil/kirim: \nAlamat (jika dikirim): \n\nApakah masih tersedia untuk batch PO terdekat? Terima kasih.`,
  category: (name: string) =>
    `Halo Dapur Manis! 👋\nSaya tertarik dengan menu *${name}*. Boleh minta info varian, harga, dan jadwal PO-nya? Terima kasih.`,
  batch: (batch: string, period: string) =>
    `Halo Dapur Manis! 👋\nSaya ingin ikut *${batch}* (periode order ${period}).\n\nPesanan saya:\n• ...\n\nNama: \nTanggal ambil/kirim: \nTerima kasih.`,
  seasonal: (name: string) =>
    `Halo Dapur Manis! 👋\nSaya tertarik dengan *${name}*. Boleh minta info isi paket, harga, dan jadwal PO-nya? Terima kasih.`,
};

// ------------------------------------------------------------
// 4. KATEGORI PRODUK
// ------------------------------------------------------------
export type Category = {
  id: string;
  name: string;
  description: string;
  image: string;
};

export const categories: Category[] = [
  {
    id: 'donat',
    name: 'Donat Kentang',
    description: 'Empuk, lembut, tetap fluffy sampai esok hari.',
    image: 'donat-kentang-cokelat',
  },
  {
    id: 'risol',
    name: 'Risol',
    description: 'Kulit tipis renyah dengan isian melimpah.',
    image: 'risol-mayo',
  },
  {
    id: 'bolu',
    name: 'Kue Bolu',
    description: 'Moist, wangi mentega, cocok untuk teman ngeteh.',
    image: 'bolu-cokelat',
  },
  {
    id: 'pastel',
    name: 'Pastel',
    description: 'Pinggiran pilin khas, gurih dan renyah.',
    image: 'pastel-ayam',
  },
  {
    id: 'kue-kering',
    name: 'Cookies & Kue Kering',
    description: 'Lumer di mulut, favorit hampers & hari raya.',
    image: 'nastar-premium',
  },
];

// ------------------------------------------------------------
// 5. PRODUK
//    featured: true  → tampil dengan label "Favorit"
//    available: false → tampil "Sedang Libur" & tombol nonaktif
// ------------------------------------------------------------
export type Product = {
  id: string;
  name: string;
  category: Category['id'];
  description: string;
  price: number;
  unit: string;
  image: string;
  badge?: string;
  featured?: boolean;
  available?: boolean;
};

export const products: Product[] = [
  {
    id: 'donat-kentang-cokelat',
    name: 'Donat Kentang Cokelat',
    category: 'donat',
    description: 'Donat kentang super lembut dengan glaze cokelat Belgia dan taburan meses premium.',
    price: 45000,
    unit: '/ box isi 6',
    image: 'donat-kentang-cokelat',
    badge: 'Best Seller',
    featured: true,
  },
  {
    id: 'risol-mayo',
    name: 'Risol Mayo',
    category: 'risol',
    description: 'Isian smoked beef, telur, dan mayones creamy dalam kulit panir yang renyah.',
    price: 40000,
    unit: '/ box isi 10',
    image: 'risol-mayo',
    featured: true,
  },
  {
    id: 'bolu-cokelat',
    name: 'Kue Bolu Cokelat',
    category: 'bolu',
    description: 'Bolu cokelat moist dengan ganache dark chocolate. Diameter 20 cm.',
    price: 95000,
    unit: '/ loyang',
    image: 'bolu-cokelat',
    featured: true,
  },
  {
    id: 'pastel-ayam',
    name: 'Pastel Ayam',
    category: 'pastel',
    description: 'Isian ayam, kentang, dan wortel berbumbu gurih dengan pinggiran pilin klasik.',
    price: 42000,
    unit: '/ box isi 10',
    image: 'pastel-ayam',
    featured: true,
  },
  {
    id: 'nastar-premium',
    name: 'Nastar Premium',
    category: 'kue-kering',
    description: 'Butter Wijsman & selai nanas homemade yang dimasak perlahan. Lumer di mulut.',
    price: 135000,
    unit: '/ toples 500 g',
    image: 'nastar-premium',
    badge: 'Premium',
    featured: true,
  },
  {
    id: 'putri-salju',
    name: 'Putri Salju',
    category: 'kue-kering',
    description: 'Kue kering lembut bertabur gula halus dingin, dengan aroma vanila yang wangi.',
    price: 115000,
    unit: '/ toples 500 g',
    image: 'putri-salju',
    featured: true,
  },
  {
    id: 'kastengel',
    name: 'Kastengel Keju',
    category: 'kue-kering',
    description: 'Keju edam & parmesan pilihan, gurih asin dan renyah di setiap gigitan.',
    price: 140000,
    unit: '/ toples 500 g',
    image: 'kastengel',
  },
  {
    id: 'choco-chip-cookies',
    name: 'Choco Chip Cookies',
    category: 'kue-kering',
    description: 'Chewy di tengah, crispy di pinggir, dengan potongan dark chocolate melimpah.',
    price: 85000,
    unit: '/ toples 400 g',
    image: 'cookies-coklat',
  },
];

// ------------------------------------------------------------
// 6. PRE-ORDER: LANGKAH & JADWAL
//    status: 'open' | 'closed' | 'soon'
// ------------------------------------------------------------
export const preOrderSteps = [
  { title: 'Pilih Produk', text: 'Jelajahi katalog dan pilih menu favorit Anda.' },
  { title: 'Hubungi WhatsApp', text: 'Klik tombol pesan — format pesanan otomatis terisi.' },
  { title: 'Konfirmasi Pesanan', text: 'Kami konfirmasi jumlah, total harga, dan tanggal ambil.' },
  { title: 'Lakukan Pembayaran', text: 'Transfer sesuai instruksi admin untuk mengunci slot PO.' },
  { title: 'Diproduksi Sesuai Jadwal', text: 'Dipanggang fresh di hari produksi, siap diambil/dikirim.' },
];

export type PoStatus = 'open' | 'closed' | 'soon';

export type PoBatch = {
  name: string;
  orderPeriod: string;
  readyDate: string;
  menu: string;
  status: PoStatus;
  quota?: string;
};

export const poSchedule: PoBatch[] = [
  {
    name: 'PO Batch #46',
    orderPeriod: '9 – 12 Nov 2026',
    readyDate: 'Sabtu, 14 Nov 2026',
    menu: 'Donat, Risol, Pastel, Bolu',
    status: 'open',
    quota: 'Sisa ±15 box',
  },
  {
    name: 'PO Batch #47',
    orderPeriod: '16 – 19 Nov 2026',
    readyDate: 'Sabtu, 21 Nov 2026',
    menu: 'Semua menu + Kue Kering',
    status: 'open',
  },
  {
    name: 'PO Batch #45',
    orderPeriod: '2 – 5 Nov 2026',
    readyDate: 'Sabtu, 7 Nov 2026',
    menu: 'Donat, Risol, Pastel, Bolu',
    status: 'closed',
  },
  {
    name: 'PO Natal & Tahun Baru',
    orderPeriod: '1 – 15 Des 2026',
    readyDate: '18 – 23 Des 2026',
    menu: 'Kue Kering & Hampers',
    status: 'soon',
  },
];

export const preOrderNotes = [
  'Minimal pemesanan 1 box per varian.',
  'Pembayaran penuh/DP 50% untuk mengunci slot.',
  'Pesanan dibatalkan otomatis bila tidak dibayar dalam 1×24 jam.',
];

// ------------------------------------------------------------
// 7. TENTANG KAMI
// ------------------------------------------------------------
export const about = {
  eyebrow: 'Cerita Kami',
  title: 'Berawal dari dapur kecil, untuk meja makan Anda.',
  paragraphs: [
    'Dapur Manis lahir pada 2019 dari kebiasaan sederhana: memanggang kue untuk keluarga setiap akhir pekan. Resep warisan ibu kami racik ulang, diuji berkali-kali, hingga menemukan rasa yang membuat orang ingin kembali.',
    'Kami sengaja memilih sistem Pre-Order. Setiap kue dibuat dalam jumlah terbatas dan dipanggang fresh di hari produksi — tanpa stok menumpuk, tanpa pengawet.',
  ],
  values: [
    { icon: 'wheat', title: 'Bahan Premium', text: 'Butter asli, cokelat Belgia, telur segar, tanpa margarin murahan.' },
    { icon: 'leaf', title: 'Tanpa Pengawet', text: 'Dibuat fresh per batch, aman untuk si kecil.' },
    { icon: 'heart', title: 'Dibuat dengan Tangan', text: 'Setiap risol dilipat dan setiap nastar dibentuk satu per satu.' },
  ],
  stats: [
    { value: '2019', label: 'Mulai memanggang' },
    { value: '8.000+', label: 'Box terkirim' },
    { value: '4.9★', label: 'Rating pelanggan' },
  ],
  images: { main: 'about-kitchen', secondary: 'about-ingredients' },
};

// ------------------------------------------------------------
// 8. KOLEKSI MUSIMAN (fleksibel)
//    enabled: false → seluruh section disembunyikan
//    status per paket:
//      'active'   → tampil sebagai promo aktif + label "PO Dibuka"
//      'upcoming' → label "Segera Hadir"
//      'seasonal' → tampil sebagai katalog musiman (tanpa promo)
// ------------------------------------------------------------
export type SeasonalStatus = 'active' | 'upcoming' | 'seasonal';

export const seasonal = {
  enabled: true,
  eyebrow: 'Koleksi Musiman',
  title: 'Hampers & kue untuk setiap momen istimewa.',
  description:
    'Paket spesial yang hadir di waktu-waktu tertentu. Jadwal & isi paket dapat berubah — tanyakan ketersediaannya via WhatsApp.',
  collections: [
    {
      id: 'natal',
      name: 'Paket Natal',
      period: 'PO 1 – 15 Desember',
      items: ['Christmas Cookies', 'Nastar', 'Putri Salju', 'Hampers'],
      priceFrom: 250000,
      image: 'seasonal-natal',
      status: 'upcoming' as SeasonalStatus,
    },
    {
      id: 'lebaran',
      name: 'Paket Lebaran',
      period: 'PO mulai awal Ramadan',
      items: ['Nastar', 'Putri Salju', 'Kastengel', 'Cookies'],
      priceFrom: 375000,
      image: 'seasonal-lebaran',
      status: 'seasonal' as SeasonalStatus,
    },
    {
      id: 'spesial',
      name: 'Hari Raya & Momen Spesial',
      period: 'Tersedia sepanjang tahun',
      items: ['Imlek', 'Ulang Tahun', 'Syukuran', 'Hampers Kantor'],
      priceFrom: 150000,
      image: 'seasonal-spesial',
      status: 'active' as SeasonalStatus,
    },
  ],
};

// ------------------------------------------------------------
// 9. TESTIMONI SINGKAT (opsional, tampil di bawah About)
// ------------------------------------------------------------
export const testimonials = [
  { quote: 'Donat kentangnya lembut banget, besoknya masih empuk. Anak-anak rebutan!', name: 'Rina, Antapani' },
  { quote: 'Nastarnya juara, nanasnya terasa asli. Langganan tiap Lebaran.', name: 'Bu Dewi, Buah Batu' },
  { quote: 'Pesan hampers kantor, packaging rapi & cantik. Recommended.', name: 'Andi, Dago' },
];

// ------------------------------------------------------------
// 10. NAVIGASI
// ------------------------------------------------------------
export const navigation = [
  { label: 'Beranda', href: '#beranda' },
  { label: 'Produk', href: '#produk' },
  { label: 'Tentang Kami', href: '#tentang' },
  { label: 'Pesanan', href: '#pesanan' },
  { label: 'Kontak', href: '#kontak' },
];
