# remotion-claude

Proyek video berbasis [Remotion](https://www.remotion.dev) (video dengan React).

## Mulai

```bash
npm install
npm run dev      # buka Remotion Studio untuk preview
```

## Render

```bash
npm run render   # hasil: out/HelloWorld.mp4
```

## Struktur

- `src/index.ts` — entry point, mendaftarkan root
- `src/Root.tsx` — daftar komposisi
- `src/HelloWorld.tsx` — komposisi contoh (1920x1080, 30 fps, 5 detik)
- `remotion.config.ts` — konfigurasi Remotion
