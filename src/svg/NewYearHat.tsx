// File ini dibuat otomatis oleh scripts/svg-to-tsx.mjs dari public/svg/animated/NewYearHat.svg. Jangan diedit manual.
import React from "react";

export const defs = (
  <defs>
    <style>{`.newyearhat-1,.newyearhat-10{fill:none;}.newyearhat-2{clip-path:url(#newyearhat-clip-path);}.newyearhat-3{fill:#794334;}.newyearhat-4{fill:#6a3828;}.newyearhat-5{fill:#945641;}.newyearhat-6{clip-path:url(#newyearhat-clip-path-2);}.newyearhat-7{fill:#6f3d2e;}.newyearhat-8{fill:#fa4134;}.newyearhat-9{fill:#ffc036;}.newyearhat-10{stroke:#9d5b45;stroke-linecap:round;stroke-linejoin:round;stroke-width:19.29px;}`}</style>
    <clipPath id="newyearhat-clip-path">
      <path className="newyearhat-1" d="M48.16,661.86C90.23,485.47,962.6,582.44,923.33,803.07S-14.86,926.18,48.16,661.86Z" />
    </clipPath>
    <clipPath id="newyearhat-clip-path-2">
      <path className="newyearhat-1" d="M241.38,213.62c-13.43,54.76,1,467.55,1,467.55s40.29,70.52,213.11,94.54,264.25-31,264.25-31S786.94,461.6,823.11,289.05Z" />
    </clipPath>
  </defs>
);

/** Setiap elemen tingkat-atas ber-id pada SVG asli. */
export const parts = {
  lidahTopi: (
    <g id="lidah-topi">
      <g className="newyearhat-2">
        <path id="base-lidah" className="newyearhat-3" d="M48.16,661.86C90.23,485.47,962.6,582.44,923.33,803.07S-14.86,926.18,48.16,661.86Z" />
        <path id="shadow-1" className="newyearhat-4" d="M153.56,570.65s32.94,69.18,91.93,114.93l65.12-142.35S209.89,531.94,153.56,570.65Z" />
        <path id="shadow-2" className="newyearhat-4" d="M539,781.78s345.11,47.66,398.84-50.5S774.54,600.06,663,602.13,539,781.78,539,781.78Z" />
        <path id="highlight" className="newyearhat-5" d="M790.37,846.34A645,645,0,0,1,661.2,881.62c-18.33,3-10.55,30.9,7.69,27.9a644.5,644.5,0,0,0,129.17-35.29C815.23,867.57,807.77,839.58,790.37,846.34Z" />
        <path id="shadow-3" className="newyearhat-4" d="M924.31,781.78S883.22,930.7,484.81,896.6,48.16,661.86,48.16,661.86,3.73,723,36.8,801.54s304.81,226.29,594.12,182.89S948,844.68,924.31,781.78Z" />
      </g>
    </g>
  ),
  bodyTopi: (
    <g id="body-topi">
      <g className="newyearhat-6">
        <path id="base-body" className="newyearhat-7" d="M241.38,213.62c-13.43,54.76,1,467.55,1,467.55s40.29,70.52,213.11,94.54,264.25-31,264.25-31S786.94,461.6,823.11,289.05Z" />
        <path id="aksen-merah" className="newyearhat-8" d="M214.52,536S287.88,620.72,477,645.52s325.47-50.63,325.47-50.63L747.68,768.48s-130.19,56.83-319.28,24.8S197,674.45,197,674.45Z" />
        <path id="bintang" className="newyearhat-9" d="M492.72,440.16c20.15,0,29.06,65.87,32.55,68.2s67,10.85,67.42,30.22-48.43,39.52-50,44.17,13.56,73.23,0,78.66S485.36,621.5,474.9,618,428,642.42,407.48,638.55s8.52-64.71,8.52-71.3S370.28,520.76,380.36,501s59.67,3.48,67-4.65S472.57,440.2,492.72,440.16Z" />
      </g>
    </g>
  ),
  atasTopi: (
    <path id="atas-topi" className="newyearhat-3" d="M241.38,213.62c46.5-116.76,599.29-42.36,581.73,75.43C803.59,419.94,194.89,330.38,241.38,213.62Z" />
  ),
  garisHighlight: (
    <g id="garis-highlight">
      <path className="newyearhat-10" d="M765.2,338.61c-97.1,30.76-293.26,11.7-416.77-30.52" />
      <path className="newyearhat-10" d="M318.66,296.85a285.85,285.85,0,0,1-40.13-20.18" />
    </g>
  ),
  percikanAtas: (
    <path id="percikan-atas" className="newyearhat-9" d="M848.42,549.43c-25-12.29,43.4-174.62,94-148.79S882,566,848.42,549.43Z" />
  ),
  percikanBawah: (
    <path id="percikan-bawah" className="newyearhat-9" d="M899.29,623.31c-22.57-29.86,116-120.25,134.09-72.52S913,641.39,899.29,623.31Z" />
  ),
};

/** Isi dari grup pembungkus ber-clip (untuk grup yang hanya punya satu anak <g>). */
export const inner = {
  lidahTopi: (
    <>
      <path id="base-lidah" className="newyearhat-3" d="M48.16,661.86C90.23,485.47,962.6,582.44,923.33,803.07S-14.86,926.18,48.16,661.86Z" />
      <path id="shadow-1" className="newyearhat-4" d="M153.56,570.65s32.94,69.18,91.93,114.93l65.12-142.35S209.89,531.94,153.56,570.65Z" />
      <path id="shadow-2" className="newyearhat-4" d="M539,781.78s345.11,47.66,398.84-50.5S774.54,600.06,663,602.13,539,781.78,539,781.78Z" />
      <path id="highlight" className="newyearhat-5" d="M790.37,846.34A645,645,0,0,1,661.2,881.62c-18.33,3-10.55,30.9,7.69,27.9a644.5,644.5,0,0,0,129.17-35.29C815.23,867.57,807.77,839.58,790.37,846.34Z" />
      <path id="shadow-3" className="newyearhat-4" d="M924.31,781.78S883.22,930.7,484.81,896.6,48.16,661.86,48.16,661.86,3.73,723,36.8,801.54s304.81,226.29,594.12,182.89S948,844.68,924.31,781.78Z" />
    </>
  ),
  bodyTopi: (
    <>
      <path id="base-body" className="newyearhat-7" d="M241.38,213.62c-13.43,54.76,1,467.55,1,467.55s40.29,70.52,213.11,94.54,264.25-31,264.25-31S786.94,461.6,823.11,289.05Z" />
      <path id="aksen-merah" className="newyearhat-8" d="M214.52,536S287.88,620.72,477,645.52s325.47-50.63,325.47-50.63L747.68,768.48s-130.19,56.83-319.28,24.8S197,674.45,197,674.45Z" />
      <path id="bintang" className="newyearhat-9" d="M492.72,440.16c20.15,0,29.06,65.87,32.55,68.2s67,10.85,67.42,30.22-48.43,39.52-50,44.17,13.56,73.23,0,78.66S485.36,621.5,474.9,618,428,642.42,407.48,638.55s8.52-64.71,8.52-71.3S370.28,520.76,380.36,501s59.67,3.48,67-4.65S472.57,440.2,492.72,440.16Z" />
    </>
  ),
};

/** Nama class yang memberi clip-path pada pembungkus di atas. */
export const clipClass = {
  lidahTopi: "newyearhat-2",
  bodyTopi: "newyearhat-6",
};

/** Elemen ber-id yang bersarang di dalam bagian tingkat-atas. */
export const nested = {
  baseLidah: (
    <path id="base-lidah" className="newyearhat-3" d="M48.16,661.86C90.23,485.47,962.6,582.44,923.33,803.07S-14.86,926.18,48.16,661.86Z" />
  ),
  shadow1: (
    <path id="shadow-1" className="newyearhat-4" d="M153.56,570.65s32.94,69.18,91.93,114.93l65.12-142.35S209.89,531.94,153.56,570.65Z" />
  ),
  shadow2: (
    <path id="shadow-2" className="newyearhat-4" d="M539,781.78s345.11,47.66,398.84-50.5S774.54,600.06,663,602.13,539,781.78,539,781.78Z" />
  ),
  highlight: (
    <path id="highlight" className="newyearhat-5" d="M790.37,846.34A645,645,0,0,1,661.2,881.62c-18.33,3-10.55,30.9,7.69,27.9a644.5,644.5,0,0,0,129.17-35.29C815.23,867.57,807.77,839.58,790.37,846.34Z" />
  ),
  shadow3: (
    <path id="shadow-3" className="newyearhat-4" d="M924.31,781.78S883.22,930.7,484.81,896.6,48.16,661.86,48.16,661.86,3.73,723,36.8,801.54s304.81,226.29,594.12,182.89S948,844.68,924.31,781.78Z" />
  ),
  baseBody: (
    <path id="base-body" className="newyearhat-7" d="M241.38,213.62c-13.43,54.76,1,467.55,1,467.55s40.29,70.52,213.11,94.54,264.25-31,264.25-31S786.94,461.6,823.11,289.05Z" />
  ),
  aksenMerah: (
    <path id="aksen-merah" className="newyearhat-8" d="M214.52,536S287.88,620.72,477,645.52s325.47-50.63,325.47-50.63L747.68,768.48s-130.19,56.83-319.28,24.8S197,674.45,197,674.45Z" />
  ),
  bintang: (
    <path id="bintang" className="newyearhat-9" d="M492.72,440.16c20.15,0,29.06,65.87,32.55,68.2s67,10.85,67.42,30.22-48.43,39.52-50,44.17,13.56,73.23,0,78.66S485.36,621.5,474.9,618,428,642.42,407.48,638.55s8.52-64.71,8.52-71.3S370.28,520.76,380.36,501s59.67,3.48,67-4.65S472.57,440.2,492.72,440.16Z" />
  ),
};

/** Anak tanpa id dari grup (mis. kumpulan percikan), diakses lewat indeks. */
export const kids = {
  garisHighlight: [
    (
      <path className="newyearhat-10" d="M765.2,338.61c-97.1,30.76-293.26,11.7-416.77-30.52" />
    ),
    (
      <path className="newyearhat-10" d="M318.66,296.85a285.85,285.85,0,0,1-40.13-20.18" />
    ),
  ],
};
