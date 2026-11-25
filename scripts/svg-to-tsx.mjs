// Mengubah setiap file di public/svg/*.svg menjadi modul TSX di src/svg/.
// Setiap elemen tingkat-atas yang punya id (mis. "tutup-atas") diekspor sebagai
// bagian terpisah supaya bisa dianimasikan sendiri-sendiri.
//
// Pakai: npm run svg:generate
import { readdirSync, readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join, basename, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const inDir = join(root, "public", "svg");
const outDir = join(root, "src", "svg");
mkdirSync(outDir, { recursive: true });

const parseAttrs = (s) => {
  const attrs = [];
  const re = /([\w:-]+)="([^"]*)"/g;
  let m;
  while ((m = re.exec(s))) attrs.push([m[1], m[2]]);
  return attrs;
};

const parse = (src) => {
  const rootNode = { tag: "root", attrs: [], children: [] };
  const stack = [rootNode];
  const re = /<(\/?)([a-zA-Z][\w:-]*)((?:[^>"']|"[^"]*"|'[^']*')*?)(\/?)>|([^<]+)/g;
  let m;
  while ((m = re.exec(src))) {
    if (m[5] !== undefined) {
      if (m[5].trim()) stack[stack.length - 1].children.push({ text: m[5] });
      continue;
    }
    const [, close, tag, attrStr, self] = m;
    if (close) {
      stack.pop();
      continue;
    }
    const node = { tag, attrs: parseAttrs(attrStr), children: [] };
    stack[stack.length - 1].children.push(node);
    if (!self) stack.push(node);
  }
  return rootNode;
};

const reactAttr = (name) => {
  if (name === "class") return "className";
  if (name.startsWith("data-") || name.startsWith("aria-")) return name;
  return name.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
};

const ser = (node, pad) => {
  if (node.text !== undefined) return "";
  if (node.tag === "title") return "";
  const attrs = node.attrs
    .filter(([k]) => !k.startsWith("xmlns"))
    .map(([k, v]) => `${reactAttr(k)}="${v}"`)
    .join(" ");
  const open = `<${node.tag}${attrs ? " " + attrs : ""}`;
  if (node.tag === "style") {
    const css = node.children.map((c) => c.text ?? "").join("");
    return `${pad}${open}>{\`${css}\`}</style>`;
  }
  const kids = node.children.map((c) => ser(c, pad + "  ")).filter(Boolean);
  if (!kids.length) return `${pad}${open} />`;
  return `${pad}${open}>\n${kids.join("\n")}\n${pad}</${node.tag}>`;
};

const camel = (id) => id.replace(/[-_ ]+(.)/g, (_, c) => c.toUpperCase());
const attrOf = (n, k) => n.attrs.find(([a]) => a === k)?.[1];

for (const file of readdirSync(inDir).filter((f) => f.endsWith(".svg"))) {
  const name = basename(file, ".svg");
  const prefix = name.toLowerCase();
  let src = readFileSync(join(inDir, file), "utf8");

  // Awali class dan id supaya tidak bentrok antar-SVG.
  src = src
    .replace(/cls-/g, `${prefix}-`)
    .replace(/id="clip-path/g, `id="${prefix}-clip-path`)
    .replace(/url\(#clip-path/g, `url(#${prefix}-clip-path`);

  const svg = parse(src).children.find((c) => c.tag === "svg");
  const defs = svg.children.find((c) => c.tag === "defs");
  const parts = svg.children.filter((c) => c.tag && c.tag !== "defs" && c.tag !== "title" && attrOf(c, "id"));

  const partLines = [];
  const innerLines = [];
  const clipLines = [];
  for (const p of parts) {
    const key = camel(attrOf(p, "id"));
    partLines.push(`  ${key}: (\n${ser(p, "    ")}\n  ),`);
    const elKids = p.children.filter((c) => c.tag);
    if (p.tag === "g" && elKids.length === 1 && elKids[0].tag === "g" && attrOf(elKids[0], "class")) {
      const w = elKids[0];
      const inner = w.children.map((c) => ser(c, "      ")).filter(Boolean).join("\n");
      innerLines.push(`  ${key}: (\n    <>\n${inner}\n    </>\n  ),`);
      clipLines.push(`  ${key}: "${attrOf(w, "class")}",`);
    }
  }

  const out = `// File ini dibuat otomatis oleh scripts/svg-to-tsx.mjs dari public/svg/${file}. Jangan diedit manual.
import React from "react";

export const defs = (
${ser(defs, "  ")}
);

/** Setiap elemen tingkat-atas ber-id pada SVG asli. */
export const parts = {
${partLines.join("\n")}
};

/** Isi dari grup pembungkus ber-clip (untuk grup yang hanya punya satu anak <g>). */
export const inner = {
${innerLines.join("\n")}
};

/** Nama class yang memberi clip-path pada pembungkus di atas. */
export const clipClass = {
${clipLines.join("\n")}
};
`;
  writeFileSync(join(outDir, `${name}.tsx`), out);
  console.log(`✓ src/svg/${name}.tsx  (${parts.length} bagian: ${parts.map((p) => camel(attrOf(p, "id"))).join(", ")})`);
}
