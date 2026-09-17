# QA Checklist

## Content

- [ ] nama sekolah benar;
- [ ] tagline benar;
- [ ] target 3–6 juz benar;
- [ ] semua mata pelajaran benar;
- [ ] timeline benar;
- [ ] biaya benar;
- [ ] alamat benar;
- [ ] nomor WA benar;
- [ ] email benar;
- [ ] URL Instagram benar;
- [ ] URL daftar benar;
- [ ] tidak ada placeholder.

## Visual

- [ ] logo tidak terdistorsi;
- [ ] foto tidak pecah;
- [ ] foto tidak stretched;
- [ ] kuning tidak terlalu dominan;
- [ ] navy cukup kontras;
- [ ] tidak ada section terlalu ramai;
- [ ] tidak ada ornamen tidak perlu;
- [ ] spacing konsisten;
- [ ] tidak semua informasi menjadi card.

## Responsive

- [ ] 360px;
- [ ] 390px;
- [ ] 430px;
- [ ] 768px;
- [ ] 1024px;
- [ ] 1280px;
- [ ] 1440px;
- [ ] no horizontal scroll;
- [ ] nav usable;
- [ ] CTA tidak menutup konten;
- [ ] tables/lists tidak overflow.

## Accessibility

- [ ] skip link;
- [ ] H1 tunggal;
- [ ] heading order logis;
- [ ] all interactive controls keyboard accessible;
- [ ] focus state visible;
- [ ] touch target cukup;
- [ ] contrast baik;
- [ ] image alt sesuai;
- [ ] decorative image punya empty alt;
- [ ] form controls punya label bila ada form.

## Functional

- [ ] WhatsApp link membuka nomor benar;
- [ ] prefixed message benar;
- [ ] Instagram link benar;
- [ ] registration link benar;
- [ ] email link benar;
- [ ] internal anchor benar;
- [ ] mobile menu close setelah memilih link;
- [ ] FAQ bisa dibuka dengan keyboard.

## Performance

- [ ] hero image optimized;
- [ ] image dimension explicit;
- [ ] below-fold images lazy;
- [ ] no unnecessary JS;
- [ ] no unnecessary dependencies;
- [ ] font optimized;
- [ ] no giant CSS bundle.

## SEO

- [ ] title;
- [ ] description;
- [ ] canonical;
- [ ] OG image;
- [ ] OG URL;
- [ ] robots;
- [ ] sitemap bila domain production;
- [ ] JSON-LD valid.

## Anti-Slop

- [ ] tidak ada generic SaaS layout;
- [ ] tidak ada bento grid tanpa alasan;
- [ ] tidak ada fake badges;
- [ ] tidak ada pulsing status dot;
- [ ] tidak ada gradient blobs;
- [ ] tidak ada glass;
- [ ] tidak ada decorative sparkles;
- [ ] tidak ada stock/AI generated student images;
- [ ] tidak ada overdone shadows;
- [ ] tidak ada fake stat;
- [ ] tidak ada fake testimonial;
- [ ] tidak ada CTA generik;
- [ ] tidak ada copy berlebihan;
- [ ] mobile/tablet/desktop benar-benar ditinjau.

## Build

```bash
pnpm astro check
pnpm build
pnpm preview
```

Semua harus sukses sebelum delivery.
