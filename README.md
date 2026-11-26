# remotion-claude

Animasi 4K (3840x2160, 30 fps) berbasis [Remotion](https://www.remotion.dev), dibuat dari ilustrasi SVG untuk dijual di situs microstock.

## Komposisi

| ID | Durasi | Loop | Gerakan |
| --- | --- | --- | --- |
| `Hourglass` | 10 dtk | tidak | muncul membal, pasir mengalir, jam bergoyang, getar kecil di akhir |
| `NewYearCap` | 8 dtk | ya | topi memantul 4x dengan squash & stretch, pom-pom berayun |
| `NewYearDrink` | 8 dtk | ya | gelas bergoyang "cheers", gelembung naik terus, kilauan berkedip |
| `NewYearGift` | 8 dtk | ya | kado melompat 4x, tutup terangkat, pita bergoyang, konfeti meledak |
| `NewYearHat` | 8 dtk | ya | topi tinggi melayang dan miring perlahan, garis kilau dan percikan berkedip |
| `NewYearMask` | 8 dtk | ya | topeng melayang, tiga bulu melambai bergantian, permata di tengah berdenyut |
| `NewYearStar` | 8 dtk | ya | bintang melompat 2x sambil miring, pom-pom berayun, mulut terbuka di puncak, pipi berdenyut |
| `StarGlasses` | 8 dtk | ya | kacamata melayang, bintang di lensa bergoyang berlawanan, kilau putih menyapu lensa, percikan berkedip |
| `FirecrackerCalendar` | 8 dtk | ya | kalender berayun dari paku atas, petasan bergoyang, empat percikan berkedip |
| `Petasan` | 8 dtk | ya | petasan melompat tiap 2 dtk dan bergetar, sinar api meletus saat mendarat, percikan berkedip |
| `TripleBaloon` | 8 dtk | ya | tiga balon melayang dan berayun dari simpul pita, tali ikut bergerak, kilau berdenyut |
| `BaloonFace` | 8 dtk | ya | dua balon berwajah melayang, berkedip bergantian, mulut tertawa, ekor tali dan pita bergoyang |

Semua komposisi punya dua props yang bisa diubah di Studio:

- `background`: nilai CSS (gradasi/warna), atau `transparent` untuk alpha
- `shadow`: bayangan lembut di bawah objek yang berdiri di lantai (`true`/`false`). Tidak berpengaruh pada `FirecrackerCalendar`, `TripleBaloon`, dan `BaloonFace` karena ketiganya menggantung atau melayang

## Mulai

```bash
npm install
npm run dev            # Remotion Studio untuk preview
```

## Render untuk microstock

```bash
npm run render:solid   # out/<Id>.mp4        H.264, latar gradasi
npm run render:alpha   # out/<Id>_alpha.mov  ProRes 4444, latar transparan
```

Render 4K cukup berat; render satu komposisi saja dengan
`npx remotion render <Id> out/<Id>.mp4 --codec=h264 --crf=12`.

Panduan spesifikasi dan strategi microstock ada di [docs/microstock.md](docs/microstock.md).

## Struktur

- `public/svg/animated/` — SVG yang sudah dianimasikan (12 objek, semua yang ada di tabel di atas)
- `public/svg/pending/` — SVG yang belum dianimasikan (saat ini kosong)
- `src/svg/` — SVG yang sudah diubah jadi komponen per bagian (dibuat otomatis)
- `src/animations/` — animasi per objek
- `src/components/Stage.tsx` — kanvas, latar, dan bayangan
- `scripts/svg-to-tsx.mjs` — generator SVG → TSX (`npm run svg:generate`)
- `scripts/render-all.mjs` — render semua komposisi
- `references/` — video dan GIF referensi gaya animasi (bukan untuk dijual)

## Menambah objek baru

1. Pindahkan SVG dari `public/svg/pending/` ke `public/svg/animated/` (pastikan tiap bagian punya `id` pada tiap bagian yang mau dianimasikan, mis. `tutup-atas`).
2. `npm run svg:generate`
3. Buat komponen animasi di `src/animations/` dan daftarkan di `src/Root.tsx` dan `scripts/render-all.mjs`.
