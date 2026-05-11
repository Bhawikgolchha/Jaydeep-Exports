# Jaydeep Exports — Heritage Clay since 1967

Static landing page for **Jaydeep Exports / National Potteries**, Morbi, Gujarat.
Showcases the full range — clay roofing tiles, terracotta jali blocks, the
Biletral premium collection, decorative clay tiles and wall cladding bricks —
80 products across 6 categories with image hover/tap, spec drawer, and
WhatsApp + email enquiry CTAs.

## Stack

Plain HTML / CSS / JavaScript. No build step, no framework.
Hostable on any static service (GitHub Pages, Netlify, Vercel, S3, etc.).

## Project layout

```
index.html            Page markup
src/
  styles.css          Editorial design system (OKLCH palette, Cormorant + Manrope + JetBrains Mono)
  products.js         Data layer — window.JAYDEEP_DATA: company, categories, products[80], features[8]
  main.js             All interactions:
                        - animated hero jali wallpaper
                        - parallax + scroll fade
                        - count-up stats
                        - reveal-on-scroll (IntersectionObserver)
                        - magnetic CTA buttons
                        - category tabs + product grid
                        - bottom-sheet product detail drawer (swipe-down to dismiss)
                        - mobile menu
images/
  products/   89 .webp product photos
  lifestyle/   8 .webp install photos
  logo/        2 .webp logo files
```

## Run locally

Any static server. Examples:

```bash
# Python
python -m http.server 8000

# Node
npx serve .
```

Then open `http://localhost:8000/`.

## Contact

**Jaydeep Exports** — C-15, Parshwanath Complex - 2, Opp. Kuber Cinema,
B-N National Highway, Morbi - 363 642, Gujarat, India.

- Phone (Gautam Bhansali): +91 84602 12807, +91 92277 38035
- Email: jaydeepexporrts@gmail.com
- WhatsApp: <https://wa.me/918460212807>

---

© Jaydeep Exports / National Potteries · Manufactured in Morbi since 1967.
