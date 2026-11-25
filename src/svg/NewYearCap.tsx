// File ini dibuat otomatis oleh scripts/svg-to-tsx.mjs dari public/svg/NewYearCap.svg. Jangan diedit manual.
import React from "react";

export const defs = (
  <defs>
    <style>{`.newyearcap-1{fill:none;}.newyearcap-2{clip-path:url(#newyearcap-clip-path);}.newyearcap-3{fill:#f93d2f;}.newyearcap-4{fill:#ffaf39;}.newyearcap-5{fill:#eb302a;opacity:0.3;}.newyearcap-6{fill:#feeaca;}.newyearcap-7{fill:#ffc036;}.newyearcap-8{fill:#fefdfe;opacity:0.1;}`}</style>
    <clipPath id="newyearcap-clip-path">
      <path className="newyearcap-1" d="M214.58,799.33,610.47,182.47l49.1,9.72L869.79,861.48S549.09,1052.52,214.58,799.33Z" />
    </clipPath>
  </defs>
);

/** Setiap elemen tingkat-atas ber-id pada SVG asli. */
export const parts = {
  bodyTopi: (
    <g id="body-topi">
      <g className="newyearcap-2">
        <path id="base-topi" className="newyearcap-3" d="M214.58,799.33,610.47,182.47l49.1,9.72L869.79,861.48S549.09,1052.52,214.58,799.33Z" />
        <path id="garis-kuning-topi" className="newyearcap-4" d="M317.39,589.11s58.31,118.15,224.8,202.55,338.35,92.07,338.35,92.07l15.34-73.66S731.69,797.8,561.37,696.52s-197.95-182.6-197.95-182.6L432.47,408s15.35,82.86,194.88,187.21S869.79,668.9,869.79,668.9L829.9,575.3s-58,9-208.69-82.86S467.76,308.3,467.76,308.3l46-81.33S601.26,385,767,432.59L705.61,162.53,529.14,136.44S311.25,510.85,317.39,589.11Z" />
        <path id="shadow-topi" className="newyearcap-5" d="M787.43,336.47s-119.92,39.34-191.72-6.78A124.38,124.38,0,0,1,556.09,335l-320,498.1L188.5,800.88,500.71,315.56,515.22,293l85-122.31,144.27,21.49Z" />
      </g>
    </g>
  ),
  buluTopi: (
    <path id="bulu-topi" className="newyearcap-6" d="M310.74,795.24s1-27.11-18.42-47.57S263.17,716,239.13,716s-63.43,11.25-51.66,50.63c0,0-43.48,41.95-22,92.58s62.92,32.23,62.92,32.23S222.76,921.58,254,941s54.22,13.3,54.22,13.3,14.83,22.51,52.17,28.13,59.33-10.23,59.33-10.23,31.72,35.3,82.87,34.78,77.74-26.59,77.74-26.59,24,30.17,80.31,24.55,76.21-35.81,76.21-35.81,28.64,16.37,74.67,4.1,40.41-40.92,40.41-40.92,36.83,3.07,58.82-27.62,0-70.59,0-70.59,7.68-54.73-37.85-64.45-50.63,37.85-50.63,37.85S754.71,775.29,721,838.2c0,0-84.91-37.34-139.64,16.37,0,0-63.93-53.71-140.14-14.32C441.17,840.25,397.18,771.2,310.74,795.24Z" />
  ),
  cepolTopi: (
    <path id="cepol-topi" className="newyearcap-7" d="M569.55,277.61s2.56,32.74,36.32,40.92,54.21-29.16,54.21-29.16,39.9,39,74.68,9.29,0-54.3,0-54.3,55.75-20.46,40.41-64.44-65.47-37.85-65.47-37.85S728.11,74,661.11,73s-68.54,51.67-68.54,51.67-47.57-36.32-76.73,9.2S523,196.35,523,196.35s-39.89,27.55-14.83,70S569.55,277.61,569.55,277.61Z" />
  ),
  highlightTopi: (
    <path id="highlight-topi" className="newyearcap-8" d="M391.55,734.37c-39.82-25.51,91.05-278.25,139.13-242.45S456.8,776.17,391.55,734.37Z" />
  ),
};

/** Isi dari grup pembungkus ber-clip (untuk grup yang hanya punya satu anak <g>). */
export const inner = {
  bodyTopi: (
    <>
      <path id="base-topi" className="newyearcap-3" d="M214.58,799.33,610.47,182.47l49.1,9.72L869.79,861.48S549.09,1052.52,214.58,799.33Z" />
      <path id="garis-kuning-topi" className="newyearcap-4" d="M317.39,589.11s58.31,118.15,224.8,202.55,338.35,92.07,338.35,92.07l15.34-73.66S731.69,797.8,561.37,696.52s-197.95-182.6-197.95-182.6L432.47,408s15.35,82.86,194.88,187.21S869.79,668.9,869.79,668.9L829.9,575.3s-58,9-208.69-82.86S467.76,308.3,467.76,308.3l46-81.33S601.26,385,767,432.59L705.61,162.53,529.14,136.44S311.25,510.85,317.39,589.11Z" />
      <path id="shadow-topi" className="newyearcap-5" d="M787.43,336.47s-119.92,39.34-191.72-6.78A124.38,124.38,0,0,1,556.09,335l-320,498.1L188.5,800.88,500.71,315.56,515.22,293l85-122.31,144.27,21.49Z" />
    </>
  ),
};

/** Nama class yang memberi clip-path pada pembungkus di atas. */
export const clipClass = {
  bodyTopi: "newyearcap-2",
};
