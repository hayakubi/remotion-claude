# Panduan microstock untuk animasi ini

Dirangkum dari halaman bantuan kontributor masing-masing situs (dicek 25 Nov 2026).
Aturan bisa berubah, selalu cek ulang sebelum upload.

## Spesifikasi teknis

| | Shutterstock | Adobe Stock | Envato | Storyblocks |
| --- | --- | --- | --- | --- |
| Resolusi | 3840x2160 diterima (4096x2160 lebih disukai) | 3840x2160 diterima | min. 3840x2160 untuk 4K | 3840x2160 diterima |
| Durasi | 5-60 dtk | 5-60 dtk | min. 5 dtk | animasi sampai 5 menit |
| Frame rate | 23,98-60 fps (termasuk 30) | 23,98-60 fps (termasuk 30) | bebas, pilih yang sesuai | 23,98-60 fps (termasuk 30) |
| Codec | H.264 (kualitas terbaik), ProRes, PNG untuk alpha | ProRes atau H.264 | H.264, ProRes, Photo-JPEG | H.264 (min. 50 Mbps), ProRes, DNxHD |
| Alpha | PNG codec saja | tidak disebut di halaman spesifikasi | diterima (embedded atau matte) | Animation atau PNG codec |
| Audio | tidak boleh, kecuali menambah nilai | - | - | umumnya tidak diterima |
| Ukuran file | maks. 10 GB | maks. 3,9 GB | zip maks. 3 GB | 4K maks. 6 GB |

Catatan penting:

- **Loop**: Envato hanya menerima label loop jika benar-benar mulus. Ditolak: terlalu banyak frame di akhir, putar balik instan, atau crossfade ke awal.
  `NewYearCap`, `NewYearDrink`, `NewYearGift` sudah dibuat loop mulus (frame 0 identik dengan frame akhir). `Hourglass` bukan loop, jangan diberi label loop.
- **Satu resolusi saja** ke Storyblocks (4K otomatis dikonversi ke HD). Envato membolehkan satu varian tambahan (mis. 4K + HD).
- **Adobe Stock**: aturan video melarang video dari gambar diam kecuali timelapse/stop motion. Animasi vektor berbeda dari itu, tetapi cek panduan terbaru
  dan baca bagian ketentuan konten AI jika ada elemen AI.

## Strategi konten

1. **Isolated element + alpha**: editor video paling sering memakai elemen yang bisa ditumpuk di atas footage. Sediakan versi `_alpha.mov` (ProRes 4444) dan versi latar polos.
2. **Loop mulus**: nilai jual tinggi untuk latar, countdown, dan overlay. Prioritaskan objek loop.
3. **Keyword evergreen, bukan hanya Tahun Baru**: topi = pesta/ulang tahun, minuman = toast/perayaan, kado = Natal/ulang tahun/promo, jam pasir = countdown/deadline/manajemen waktu.
   Jam pasir adalah konsep bisnis sepanjang tahun, kemungkinan paling laris.
4. **Seri/paket**: unggah sebagai set bertema ("New Year Celebration Icons") dengan gaya, warna, dan durasi seragam.
5. **Varian**: latar polos (hitam, putih, hijau), alpha, dan nanti versi vertikal 9:16 (2160x3840) untuk konten sosial.

## Waktu upload

Vecteezy menyarankan membuat konten musiman minimal 90 hari sebelum hari-H. Dari 25 Nov 2026:

- Tahun Baru (1 Jan 2027): sisa ~37 hari, sudah mepet. Upload secepatnya.
- Tahun Baru Imlek (sekitar 6 Feb 2027, verifikasi tanggal): sisa ~73 hari, masih terkejar.
- Konten evergreen (jam pasir, kado, pesta) tidak terikat musim.

## Hak cipta

- Pastikan Anda pemilik atau punya lisensi yang membolehkan menjual karya turunan dari SVG di `public/svg/`. Banyak lisensi stok melarang penjualan ulang ilustrasi sebagai konten stok.
- File di `references/` milik pihak lain dan hanya untuk referensi gaya. Jangan direproduksi atau dijual.

## Sumber

- Shutterstock: https://submit.shutterstock.com/help/en/articles/10594637-what-are-the-technical-requirements-for-video
- Adobe Stock: https://helpx.adobe.com/stock/contributor/submit-your-content/submit-videos/technical-requirements-for-video-submissions.html
- Envato: https://help.author.envato.com/hc/en-us/articles/360000555746-Stock-Footage-Requirements
- Storyblocks: https://contribute-faq.storyblocks.com/en/articles/4543771-what-are-the-submission-requirements-for-video-and-animations
- Vecteezy (kalender musiman): https://www.vecteezy.com/blog/contributor/calendar
- Adobe Community (loop dan motion graphics): https://community.adobe.com/questions-38/are-seamless-loops-animated-in-after-effects-from-ai-generated-still-images-allowed-as-motion-graphics-1651453
