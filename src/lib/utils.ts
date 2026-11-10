import { contact } from '../data/site';
import type { ImageMetadata } from 'astro';

/** Buat link WhatsApp (wa.me) dengan pesan otomatis. */
export const waLink = (message: string) =>
  `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(message)}`;

/** Format harga ke Rupiah, mis. 45000 → "Rp45.000". */
export const rupiah = (value: number) => `Rp${value.toLocaleString('id-ID')}`;

const images = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/images/*.{png,jpg,jpeg,webp,avif}',
  { eager: true },
);

/** Ambil gambar dari src/assets/images berdasarkan nama file (tanpa ekstensi). */
export function img(name: string): ImageMetadata {
  const key = Object.keys(images).find((p) => p.split('/').pop()!.replace(/\.[^.]+$/, '') === name);
  if (!key) throw new Error(`[Dapur Manis] Gambar "${name}" tidak ditemukan di src/assets/images/`);
  return images[key].default;
}
