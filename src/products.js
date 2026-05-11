// Jaydeep Exports — product catalog data
// Each product has: id, name, category, image, specs[{label, value}]
// Categories drive the filter bar in the product grid.

window.JAYDEEP_DATA = {
  company: {
    name: "Jaydeep Exports",
    tagline: "The Ultimate Roofing & Decorative Solution",
    sub: "Manufactured by National Potteries — crafting clay artistry since 1967.",
    contact: "Gautam Bhansali",
    phonePrimary: "+91 84602 12807",
    phoneSecondary: "+91 92277 38035",
    email: "jaydeepexporrts@gmail.com",
    whatsapp: "918460212807", // E.164 without '+', for wa.me links
    address: "C-15, Parshwanath Complex - 2, Opp. Kuber Cinema, B-N National Highway, Morbi - 363 642, Gujarat, India.",
    establishedYear: 1967
  },

  categories: [
    { id: "all",        label: "All Products" },
    { id: "roof",       label: "Modern Roof Tiles" },
    { id: "clay",       label: "Classic Clay Tiles" },
    { id: "jali",       label: "Terracotta Jali" },
    { id: "biletral",   label: "Biletral Premium" },
    { id: "cladding",   label: "Wall Cladding" }
  ],

  products: [
    // ===== Modern Roof Tiles — Elbano Series =====
    {
      id: "elbano-artistic", category: "roof", name: "Elbano Artistic",
      sub: "Elbano Series · Brick Red", image: "images/products/elbano-artistic.webp",
      specs: [
        { label: "Length", value: "400 mm" },
        { label: "Width",  value: "300 mm" },
        { label: "Thickness", value: "10 mm" },
        { label: "Weight", value: "2.40 Kg" }
      ]
    },
    {
      id: "elbano-antique-red", category: "roof", name: "Elbano Antique Red",
      sub: "Elbano Series · Antique Red", image: "images/products/elbano-antique-red.webp",
      specs: [
        { label: "Length", value: "400 mm" }, { label: "Width", value: "300 mm" },
        { label: "Thickness", value: "10 mm" }, { label: "Weight", value: "2.40 Kg" }
      ]
    },
    {
      id: "elbano-terracotta", category: "roof", name: "Elbano Terracotta",
      sub: "Elbano Series · Terracotta", image: "images/products/elbano-terracotta.webp",
      specs: [
        { label: "Length", value: "400 mm" }, { label: "Width", value: "300 mm" },
        { label: "Thickness", value: "10 mm" }, { label: "Weight", value: "2.40 Kg" }
      ]
    },
    {
      id: "elbano-steel-gray", category: "roof", name: "Elbano Steel Gray",
      sub: "Elbano Series · Steel Gray", image: "images/products/elbano-steel-gray.webp",
      specs: [
        { label: "Length", value: "400 mm" }, { label: "Width", value: "300 mm" },
        { label: "Thickness", value: "10 mm" }, { label: "Weight", value: "2.40 Kg" }
      ]
    },
    {
      id: "elbano-blue-gray", category: "roof", name: "Elbano Blue Gray",
      sub: "Elbano Series · Blue Gray", image: "images/products/elbano-blue-gray.webp",
      specs: [
        { label: "Length", value: "400 mm" }, { label: "Width", value: "300 mm" },
        { label: "Thickness", value: "10 mm" }, { label: "Weight", value: "2.40 Kg" }
      ]
    },
    {
      id: "elbano-coffee", category: "roof", name: "Elbano Coffee",
      sub: "Elbano Series · Coffee", image: "images/products/elbano-coffee.webp",
      specs: [
        { label: "Length", value: "400 mm" }, { label: "Width", value: "300 mm" },
        { label: "Thickness", value: "10 mm" }, { label: "Weight", value: "2.40 Kg" }
      ]
    },

    // ===== Modern Roof Tiles — Bend Flat Series =====
    {
      id: "bendflat-artistic", category: "roof", name: "Bend Flat Artistic",
      sub: "Bend Flat Series · Terracotta", image: "images/products/bendflat-artistic.webp",
      specs: [
        { label: "Length", value: "400 mm" }, { label: "Width", value: "270 mm" },
        { label: "Thickness", value: "9 mm" }, { label: "Weight", value: "2.55 Kg" }
      ]
    },
    {
      id: "bendflat-antique-red", category: "roof", name: "Bend Flat Antique Red",
      sub: "Bend Flat Series · Antique Red", image: "images/products/bendflat-antique-red.webp",
      specs: [
        { label: "Length", value: "400 mm" }, { label: "Width", value: "270 mm" },
        { label: "Thickness", value: "9 mm" }, { label: "Weight", value: "2.55 Kg" }
      ]
    },
    {
      id: "bendflat-red-coffee", category: "roof", name: "Bend Flat Red Coffee",
      sub: "Bend Flat Series · Red Coffee", image: "images/products/bendflat-red-coffee.webp",
      specs: [
        { label: "Length", value: "400 mm" }, { label: "Width", value: "270 mm" },
        { label: "Thickness", value: "9 mm" }, { label: "Weight", value: "2.55 Kg" }
      ]
    },
    {
      id: "bendflat-steel-gray", category: "roof", name: "Bend Flat Steel Gray",
      sub: "Bend Flat Series · Steel Gray", image: "images/products/bendflat-steel-gray.webp",
      specs: [
        { label: "Length", value: "400 mm" }, { label: "Width", value: "270 mm" },
        { label: "Thickness", value: "9 mm" }, { label: "Weight", value: "2.55 Kg" }
      ]
    },

    // ===== Terracotta Jali Blocks =====
    {
      id: "opel", category: "jali", name: "Opel",
      sub: "Geometric circles · Exclusive Terracotta Jali", image: "images/products/opel.webp",
      specs: [
        { label: "Size", value: "8 × 8 inch" },
        { label: "Thickness", value: "2.5 inch" },
        { label: "Weight", value: "2.5 Kg" },
        { label: "Per Box", value: "4 pcs" },
        { label: "Per Sq.ft", value: "2.25 nos" }
      ]
    },
    {
      id: "amber", category: "jali", name: "Amber",
      sub: "Floral pinwheel · Exclusive Terracotta Jali", image: "images/products/amber.webp",
      specs: [
        { label: "Size", value: "8 × 8 inch" }, { label: "Thickness", value: "2.5 inch" },
        { label: "Weight", value: "2.5 Kg" }, { label: "Per Box", value: "4 pcs" },
        { label: "Per Sq.ft", value: "2.25 nos" }
      ]
    },
    {
      id: "petal", category: "jali", name: "Petal",
      sub: "Lotus petal · Exclusive Terracotta Jali", image: "images/products/petal.webp",
      specs: [
        { label: "Size", value: "8 × 8 inch" }, { label: "Thickness", value: "2.5 inch" },
        { label: "Weight", value: "2.5 Kg" }, { label: "Per Box", value: "4 pcs" },
        { label: "Per Sq.ft", value: "2.25 nos" }
      ]
    },
    {
      id: "jude", category: "jali", name: "Jude",
      sub: "Interlocking knot · Exclusive Terracotta Jali", image: "images/products/jude.webp",
      specs: [
        { label: "Size", value: "8 × 8 inch" }, { label: "Thickness", value: "2.5 inch" },
        { label: "Weight", value: "2.5 Kg" }, { label: "Per Box", value: "4 pcs" },
        { label: "Per Sq.ft", value: "2.25 nos" }
      ]
    },
    {
      id: "zebra", category: "jali", name: "Zebra",
      sub: "Diagonal stripes · Exclusive Terracotta Jali", image: "images/products/zebra.webp",
      specs: [
        { label: "Size", value: "8 × 8 inch" }, { label: "Thickness", value: "2.5 inch" },
        { label: "Weight", value: "2.5 Kg" }, { label: "Per Box", value: "4 pcs" },
        { label: "Per Sq.ft", value: "2.25 nos" }
      ]
    },
    {
      id: "tv", category: "jali", name: "TV",
      sub: "Window grid · Exclusive Terracotta Jali", image: "images/products/tv.webp",
      specs: [
        { label: "Size", value: "8 × 8 inch" }, { label: "Thickness", value: "2.5 inch" },
        { label: "Weight", value: "2.5 Kg" }, { label: "Per Box", value: "4 pcs" },
        { label: "Per Sq.ft", value: "2.25 nos" }
      ]
    },
    {
      id: "pearl", category: "jali", name: "Pearl",
      sub: "Bordered medallion · Exclusive Terracotta Jali", image: "images/products/pearl.webp",
      specs: [
        { label: "Size", value: "8 × 8 inch" }, { label: "Thickness", value: "2.5 inch" },
        { label: "Weight", value: "2.5 Kg" }, { label: "Per Box", value: "4 pcs" },
        { label: "Per Sq.ft", value: "2.25 nos" }
      ]
    },
    {
      id: "lotus", category: "jali", name: "Lotus",
      sub: "Floral fan · Exclusive Terracotta Jali", image: "images/products/lotus.webp",
      specs: [
        { label: "Size", value: "8 × 8 inch" }, { label: "Thickness", value: "2.5 inch" },
        { label: "Weight", value: "2.5 Kg" }, { label: "Per Box", value: "4 pcs" },
        { label: "Per Sq.ft", value: "2.25 nos" }
      ]
    },
    {
      id: "camp", category: "jali", name: "Camp",
      sub: "Tent silhouette · Exclusive Terracotta Jali", image: "images/products/camp.webp",
      specs: [
        { label: "Size", value: "8 × 8 inch" }, { label: "Thickness", value: "2.5 inch" },
        { label: "Weight", value: "2.5 Kg" }, { label: "Per Box", value: "4 pcs" },
        { label: "Per Sq.ft", value: "2.25 nos" }
      ]
    },
    {
      id: "jali-w", category: "jali", name: "W",
      sub: "Tall vertical pillar · Exclusive Terracotta Jali", image: "images/products/jali-w.webp",
      specs: [
        { label: "Size", value: "12.5 × 8 inch" },
        { label: "Thickness", value: "3 inch" },
        { label: "Weight", value: "4.2 Kg" },
        { label: "Per Box", value: "3 pcs" },
        { label: "Per Sq.ft", value: "1.5 nos" }
      ]
    },

    // ===== Biletral Premium Collection =====
    {
      id: "viano", category: "biletral", name: "Viano",
      sub: "Biletral Collection · Slot weave",
      image: "images/products/viano.webp",
      thumb: "images/products/viano-block.webp",
      specs: [
        { label: "Size", value: "200 × 200 mm" }, { label: "Thickness", value: "60 mm" },
        { label: "Weight / piece", value: "3 Kg" }, { label: "Packing", value: "5 pcs / box" },
        { label: "Weight / box", value: "15 Kg" }, { label: "Per Sq.ft", value: "2.25 nos" }
      ]
    },
    {
      id: "phase", category: "biletral", name: "Phase",
      sub: "Biletral Collection · Stepped block",
      image: "images/products/phase.webp",
      thumb: "images/products/phase-block.webp",
      specs: [
        { label: "Size", value: "200 × 200 mm" }, { label: "Thickness", value: "60 mm" },
        { label: "Weight / piece", value: "3.4 Kg" }, { label: "Packing", value: "5 pcs / box" },
        { label: "Weight / box", value: "17 Kg" }, { label: "Per Sq.ft", value: "2.25 nos" }
      ]
    },
    {
      id: "little-master", category: "biletral", name: "Little Master",
      sub: "Biletral Collection · Pyramid square",
      image: "images/products/little-master.webp",
      thumb: "images/products/little-master-block.webp",
      specs: [
        { label: "Size", value: "200 × 200 mm" }, { label: "Thickness", value: "60 mm" },
        { label: "Weight / piece", value: "3.5 Kg" }, { label: "Packing", value: "5 pcs / box" },
        { label: "Weight / box", value: "17.5 Kg" }, { label: "Per Sq.ft", value: "2.25 nos" }
      ]
    },
    {
      id: "wing", category: "biletral", name: "Wing",
      sub: "Biletral Collection · Folded fan",
      image: "images/products/wing.webp",
      thumb: "images/products/wing-block.webp",
      specs: [
        { label: "Size", value: "200 × 200 mm" }, { label: "Thickness", value: "60 mm" },
        { label: "Weight / piece", value: "2.2 Kg" }, { label: "Packing", value: "4 pcs / box" },
        { label: "Weight / box", value: "8.8 Kg" }, { label: "Per Sq.ft", value: "2.25 nos" }
      ]
    },
    {
      id: "edan", category: "biletral", name: "Edan",
      sub: "Biletral Collection · Tall W pillar",
      image: "images/products/edan.webp",
      thumb: "images/products/edan-block.webp",
      specs: [
        { label: "Size", value: "300 × 200 mm" }, { label: "Thickness", value: "80 mm" },
        { label: "Weight / piece", value: "4.1 Kg" }, { label: "Packing", value: "3 pcs / box" },
        { label: "Weight / box", value: "12.5 Kg" }, { label: "Per Sq.ft", value: "1.5 nos" }
      ]
    },
    {
      id: "crisscross", category: "biletral", name: "Crisscross",
      sub: "Biletral Collection · Triangle weave",
      image: "images/products/crisscross.webp",
      thumb: "images/products/crisscross-block.webp",
      specs: [
        { label: "Size", value: "200 × 200 mm" }, { label: "Thickness", value: "60 mm" },
        { label: "Weight / piece", value: "2.9 Kg" }, { label: "Packing", value: "5 pcs / box" },
        { label: "Weight / box", value: "14.5 Kg" }, { label: "Per Sq.ft", value: "2.25 nos" }
      ]
    },
    {
      id: "spectra", category: "biletral", name: "Spectra",
      sub: "Biletral Collection · Square frame",
      image: "images/products/spectra.webp",
      thumb: "images/products/spectra-block.webp",
      specs: [
        { label: "Size", value: "200 × 200 mm" }, { label: "Thickness", value: "60 mm" },
        { label: "Weight / piece", value: "3.4 Kg" }, { label: "Packing", value: "5 pcs / box" },
        { label: "Weight / box", value: "17 Kg" }, { label: "Per Sq.ft", value: "2.25 nos" }
      ]
    },
    {
      id: "curl", category: "biletral", name: "Curl",
      sub: "Biletral Collection · Round porthole",
      image: "images/products/curl.webp",
      thumb: "images/products/curl-block.webp",
      specs: [
        { label: "Size", value: "200 × 200 mm" }, { label: "Thickness", value: "60 mm" },
        { label: "Weight / piece", value: "3.8 Kg" }, { label: "Packing", value: "5 pcs / box" },
        { label: "Weight / box", value: "19 Kg" }, { label: "Per Sq.ft", value: "2.25 nos" }
      ]
    },
    {
      id: "crosstine", category: "biletral", name: "Crosstine",
      sub: "Biletral Collection · Diagonal accent",
      image: "images/products/crosstine.webp",
      thumb: "images/products/crosstine-block.webp",
      specs: [
        { label: "Size", value: "200 × 200 mm" }, { label: "Thickness", value: "60 mm" },
        { label: "Weight / piece", value: "2.3 Kg" }, { label: "Packing", value: "5 pcs / box" },
        { label: "Weight / box", value: "11.5 Kg" }, { label: "Per Sq.ft", value: "2.25 nos" }
      ]
    },

    // ===== Classic Clay Tiles (50 designs from the Decorative Tiles catalogue) =====
    { id: "clay-single-grove-15x9", category: "clay", name: "Single Grove Roofing Tile", sub: "Clay Roofing · Single Grove", image: "images/products/clay-single-grove-15x9.webp", specs: [{ label: "Size", value: "15 × 9 inch" }, { label: "Weight", value: "2.100 Kg" }, { label: "Pieces / 100 sq.ft", value: "145" }] },
    { id: "clay-single-grove-14x85", category: "clay", name: "Single Grove Roofing Tile (Compact)", sub: "Clay Roofing · Single Grove", image: "images/products/clay-single-grove-14x85.webp", specs: [{ label: "Size", value: "14 × 8.5 inch" }, { label: "Weight", value: "1.900 Kg" }, { label: "Pieces / 100 sq.ft", value: "150" }] },
    { id: "clay-big-roofing-tile", category: "clay", name: "Big Roofing Tile", sub: "Clay Roofing · Standard", image: "images/products/clay-big-roofing-tile.webp", specs: [{ label: "Size", value: "9 × 6 inch" }, { label: "Weight", value: "725 gm" }, { label: "Pieces / 100 sq.ft", value: "330" }] },
    { id: "clay-medium-roofing-tile", category: "clay", name: "Medium Roofing Tile", sub: "Clay Roofing · Standard", image: "images/products/clay-medium-roofing-tile.webp", specs: [{ label: "Size", value: "8 × 5 inch" }, { label: "Weight", value: "475 gm" }, { label: "Pieces / 100 sq.ft", value: "460" }] },
    { id: "clay-micro-roofing-tile", category: "clay", name: "Micro Roofing Tile", sub: "Clay Roofing · Standard", image: "images/products/clay-micro-roofing-tile.webp", specs: [{ label: "Size", value: "5 × 3 inch" }, { label: "Weight", value: "150 gm" }, { label: "Pieces / 100 sq.ft", value: "1350" }] },
    { id: "clay-taylor", category: "clay", name: "Taylor", sub: "Clay Roofing · Taylor Series", image: "images/products/clay-taylor.webp", specs: [{ label: "Size", value: "12 × 8 inch" }, { label: "Weight", value: "1.500 Kg" }, { label: "Pieces / 100 sq.ft", value: "240" }] },
    { id: "clay-big-taylor", category: "clay", name: "Big Taylor", sub: "Clay Roofing · Taylor Series", image: "images/products/clay-big-taylor.webp", specs: [{ label: "Size", value: "10 × 8 inch" }, { label: "Weight", value: "1.200 Kg" }, { label: "Pieces / 100 sq.ft", value: "230" }] },
    { id: "clay-medium-taylor", category: "clay", name: "Medium Taylor", sub: "Clay Roofing · Taylor Series", image: "images/products/clay-medium-taylor.webp", specs: [{ label: "Size", value: "9 × 7 inch" }, { label: "Weight", value: "1.000 Kg" }, { label: "Pieces / 100 sq.ft", value: "300" }] },
    { id: "clay-mini-taylor", category: "clay", name: "Mini Taylor", sub: "Clay Roofing · Taylor Series", image: "images/products/clay-mini-taylor.webp", specs: [{ label: "Size", value: "7 × 5 inch" }, { label: "Weight", value: "450 gm" }, { label: "Pieces / 100 sq.ft", value: "550" }] },
    { id: "clay-ahmedabadi-taylor", category: "clay", name: "Ahmedabadi Taylor", sub: "Clay Roofing · Taylor Series", image: "images/products/clay-ahmedabadi-taylor.webp", specs: [{ label: "Size", value: "5.5 × 4 inch" }, { label: "Weight", value: "250 gm" }, { label: "Pieces / 100 sq.ft", value: "800" }] },
    { id: "clay-sample-taylor", category: "clay", name: "Sample Taylor", sub: "Clay Roofing · Taylor Series", image: "images/products/clay-sample-taylor.webp", specs: [{ label: "Size", value: "4 × 3 inch" }, { label: "Weight", value: "150 gm" }, { label: "Pieces / 100 sq.ft", value: "1500" }] },
    { id: "clay-medium-italian-taylor", category: "clay", name: "Medium Italian Taylor", sub: "Clay Roofing · Italian Style", image: "images/products/clay-medium-italian-taylor.webp", specs: [{ label: "Size", value: "9 × 7 inch" }, { label: "Weight", value: "1.000 Kg" }, { label: "Pieces / 100 sq.ft", value: "300" }] },
    { id: "clay-italian-taylor", category: "clay", name: "Italian Taylor", sub: "Clay Roofing · Italian Style", image: "images/products/clay-italian-taylor.webp", specs: [{ label: "Size", value: "7 × 5 inch" }, { label: "Weight", value: "450 gm" }, { label: "Pieces / 100 sq.ft", value: "550" }] },
    { id: "clay-sample-italian-taylor", category: "clay", name: "Sample Italian Taylor", sub: "Clay Roofing · Italian Style", image: "images/products/clay-sample-italian-taylor.webp", specs: [{ label: "Size", value: "4 × 3 inch" }, { label: "Weight", value: "150 gm" }, { label: "Pieces / 100 sq.ft", value: "1500" }] },
    { id: "clay-medium-rajwadi-taylor", category: "clay", name: "Medium Rajwadi Taylor", sub: "Clay Roofing · Rajwadi Style", image: "images/products/clay-medium-rajwadi-taylor.webp", specs: [{ label: "Size", value: "9 × 7 inch" }, { label: "Weight", value: "1.000 Kg" }, { label: "Pieces / 100 sq.ft", value: "300" }] },
    { id: "clay-rajwadi-taylor", category: "clay", name: "Rajwadi Taylor", sub: "Clay Roofing · Rajwadi Style", image: "images/products/clay-rajwadi-taylor.webp", specs: [{ label: "Size", value: "7 × 5 inch" }, { label: "Weight", value: "450 gm" }, { label: "Pieces / 100 sq.ft", value: "550" }] },
    { id: "clay-big-roofing-ridge", category: "clay", name: "Big Roofing Ridge", sub: "Clay Roofing · Ridge", image: "images/products/clay-big-roofing-ridge.webp", specs: [{ label: "Size", value: "15 × 10 inch" }, { label: "Weight", value: "2.500 Kg" }, { label: "Pieces / 100 sq.ft", value: "100" }] },
    { id: "clay-v-type-roofing-ridge", category: "clay", name: "V-Type Roofing Ridge", sub: "Clay Roofing · Ridge", image: "images/products/clay-v-type-roofing-ridge.webp", specs: [{ label: "Size", value: "8 × 4 inch" }, { label: "Weight", value: "400 gm" }, { label: "Pieces / 100 sq.ft", value: "175" }] },
    { id: "clay-sample-roofing-ridge", category: "clay", name: "Sample Roofing Ridge", sub: "Clay Roofing · Ridge", image: "images/products/clay-sample-roofing-ridge.webp", specs: [{ label: "Size", value: "5 × 3 inch" }, { label: "Weight", value: "150 gm" }, { label: "Pieces / 100 sq.ft", value: "300" }] },
    { id: "clay-round-ridge", category: "clay", name: "Round Ridge", sub: "Clay Roofing · Ridge", image: "images/products/clay-round-ridge.webp", specs: [{ label: "Size", value: "10 × 6 inch" }, { label: "Weight", value: "1.000 Kg" }, { label: "Pieces / 100 sq.ft", value: "135" }] },
    { id: "clay-paras-flower", category: "clay", name: "Paras Flower", sub: "Decorative · Flower", image: "images/products/clay-paras-flower.webp", specs: [{ label: "Size", value: "7 × 7 inch" }, { label: "Weight", value: "400 gm" }, { label: "Pieces / 100 sq.ft", value: "625" }] },
    { id: "clay-pencil-flower", category: "clay", name: "Pencil Flower", sub: "Decorative · Flower", image: "images/products/clay-pencil-flower.webp", specs: [{ label: "Size", value: "7 × 7 inch" }, { label: "Weight", value: "400 gm" }, { label: "Pieces / 100 sq.ft", value: "625" }] },
    { id: "clay-plain-flower", category: "clay", name: "Plain Flower", sub: "Decorative · Flower", image: "images/products/clay-plain-flower.webp", specs: [{ label: "Size", value: "7 × 7 inch" }, { label: "Weight", value: "400 gm" }, { label: "Pieces / 100 sq.ft", value: "625" }] },
    { id: "clay-mini-white-house", category: "clay", name: "Mini White House", sub: "Clay Roofing · White House", image: "images/products/clay-mini-white-house.webp", specs: [{ label: "Size", value: "8 × 4 inch" }, { label: "Weight", value: "450 gm" }, { label: "Pieces / 100 sq.ft", value: "450" }] },
    { id: "clay-big-white-house", category: "clay", name: "Big White House", sub: "Clay Roofing · White House", image: "images/products/clay-big-white-house.webp", specs: [{ label: "Size", value: "7.5 × 6 inch" }, { label: "Weight", value: "650 gm" }, { label: "Pieces / 100 sq.ft", value: "320" }] },
    { id: "clay-double-rajwadi-overlapping", category: "clay", name: "Double Rajwadi Over-Lapping", sub: "Clay Roofing · Rajwadi Style", image: "images/products/clay-double-rajwadi-overlapping.webp", specs: [{ label: "Size", value: "8 × 5 inch" }, { label: "Weight", value: "500 gm" }, { label: "Pieces / 100 sq.ft", value: "360" }] },
    { id: "clay-round-channel", category: "clay", name: "Round Channel", sub: "Clay Roofing · Channel", image: "images/products/clay-round-channel.webp", specs: [{ label: "Size", value: "8 × 5 inch" }, { label: "Weight", value: "500 gm" }, { label: "Pieces / 100 sq.ft", value: "360" }] },
    { id: "clay-royal-channel", category: "clay", name: "Royal Channel", sub: "Clay Roofing · Channel", image: "images/products/clay-royal-channel.webp", specs: [{ label: "Size", value: "8 × 5 inch" }, { label: "Weight", value: "500 gm" }, { label: "Pieces / 100 sq.ft", value: "360" }] },
    { id: "clay-silver-bamboo", category: "clay", name: "Silver Bamboo", sub: "Clay Roofing · Bamboo", image: "images/products/clay-silver-bamboo.webp", specs: [{ label: "Size", value: "8 × 4 inch" }, { label: "Weight", value: "450 gm" }, { label: "Pieces / 100 sq.ft", value: "450" }] },
    { id: "clay-m-channel", category: "clay", name: "M-Channel", sub: "Clay Roofing · Channel", image: "images/products/clay-m-channel.webp", specs: [{ label: "Size", value: "8 × 4 inch" }, { label: "Weight", value: "450 gm" }, { label: "Pieces / 100 sq.ft", value: "450" }] },
    { id: "clay-double-bamboo", category: "clay", name: "Double Bamboo", sub: "Clay Roofing · Bamboo", image: "images/products/clay-double-bamboo.webp", specs: [{ label: "Size", value: "9 × 3 inch" }, { label: "Weight", value: "375 gm" }, { label: "Pieces / 100 sq.ft", value: "540" }] },
    { id: "clay-varam-bamboo", category: "clay", name: "Varam Bamboo", sub: "Clay Roofing · Bamboo", image: "images/products/clay-varam-bamboo.webp", specs: [{ label: "Size", value: "9 × 3 inch" }, { label: "Weight", value: "375 gm" }, { label: "Pieces / 100 sq.ft", value: "540" }] },
    { id: "clay-rajwadi-bamboo", category: "clay", name: "Rajwadi Bamboo", sub: "Clay Roofing · Bamboo", image: "images/products/clay-rajwadi-bamboo.webp", specs: [{ label: "Size", value: "9 × 3 inch" }, { label: "Weight", value: "375 gm" }, { label: "Pieces / 100 sq.ft", value: "540" }] },
    { id: "clay-triple-royal-channel", category: "clay", name: "Triple Royal Channel", sub: "Clay Roofing · Channel", image: "images/products/clay-triple-royal-channel.webp", specs: [{ label: "Size", value: "8 × 5 inch" }, { label: "Weight", value: "650 gm" }, { label: "Pieces / 100 sq.ft", value: "360" }] },
    { id: "clay-triple-channel", category: "clay", name: "Triple Channel", sub: "Clay Roofing · Channel", image: "images/products/clay-triple-channel.webp", specs: [{ label: "Size", value: "8 × 5 inch" }, { label: "Weight", value: "650 gm" }, { label: "Pieces / 100 sq.ft", value: "360" }] },
    { id: "clay-triple-rajwadi-channel", category: "clay", name: "Triple Rajwadi Channel", sub: "Clay Roofing · Channel", image: "images/products/clay-triple-rajwadi-channel.webp", specs: [{ label: "Size", value: "8 × 5 inch" }, { label: "Weight", value: "650 gm" }, { label: "Pieces / 100 sq.ft", value: "360" }] },
    { id: "clay-four-bamboo", category: "clay", name: "Four Bamboo", sub: "Clay Roofing · Bamboo", image: "images/products/clay-four-bamboo.webp", specs: [{ label: "Size", value: "9 × 6 inch" }, { label: "Weight", value: "850 gm" }, { label: "Pieces / 100 sq.ft", value: "270" }] },
    { id: "clay-four-rajwadi-bamboo", category: "clay", name: "Four Rajwadi Bamboo", sub: "Clay Roofing · Bamboo", image: "images/products/clay-four-rajwadi-bamboo.webp", specs: [{ label: "Size", value: "9 × 6 inch" }, { label: "Weight", value: "850 gm" }, { label: "Pieces / 100 sq.ft", value: "270" }] },
    { id: "clay-big-chex-patti", category: "clay", name: "Big Chex Patti", sub: "Decorative · Pattern Tile", image: "images/products/clay-big-chex-patti.webp", specs: [{ label: "Size", value: "8 × 4 inch" }, { label: "Weight", value: "450 gm" }, { label: "Pieces / 100 sq.ft", value: "450" }] },
    { id: "clay-small-chex-patti", category: "clay", name: "Small Chex Patti", sub: "Decorative · Pattern Tile", image: "images/products/clay-small-chex-patti.webp", specs: [{ label: "Size", value: "8 × 4 inch" }, { label: "Weight", value: "450 gm" }, { label: "Pieces / 100 sq.ft", value: "450" }] },
    { id: "clay-button-floor-tile", category: "clay", name: "Button Floor Tile", sub: "Floor · Patterned", image: "images/products/clay-button-floor-tile.webp", specs: [{ label: "Size", value: "8 × 8 inch" }, { label: "Weight", value: "1.100 Kg" }, { label: "Pieces / 100 sq.ft", value: "225" }] },
    { id: "clay-plain-floor-tile-8x8", category: "clay", name: "Plain Floor Tile (8 × 8)", sub: "Floor · Plain", image: "images/products/clay-plain-floor-tile-8x8.webp", specs: [{ label: "Size", value: "8 × 8 inch" }, { label: "Weight", value: "1.000 Kg" }, { label: "Pieces / 100 sq.ft", value: "225" }] },
    { id: "clay-plain-floor-tile-6x6", category: "clay", name: "Plain Floor Tile (6 × 6)", sub: "Floor · Plain", image: "images/products/clay-plain-floor-tile-6x6.webp", specs: [{ label: "Size", value: "6 × 6 inch" }, { label: "Weight", value: "500 gm" }, { label: "Pieces / 100 sq.ft", value: "400" }] },
    { id: "clay-circle-flooring-tile", category: "clay", name: "Circle Flooring Tile", sub: "Floor · Patterned", image: "images/products/clay-circle-flooring-tile.webp", specs: [{ label: "Size", value: "8 × 8 inch" }, { label: "Weight", value: "1.200 Kg" }, { label: "Pieces / 100 sq.ft", value: "225" }] },
    { id: "clay-hexagon-tile", category: "clay", name: "Hexagon Tile", sub: "Floor · Hexagon", image: "images/products/clay-hexagon-tile.webp", specs: [{ label: "Size", value: "6 × 6 inch" }, { label: "Weight", value: "450 gm" }, { label: "Pieces / 100 sq.ft", value: "400" }] },
    { id: "clay-master-bamboo", category: "clay", name: "Master Bamboo", sub: "Clay Roofing · Bamboo", image: "images/products/clay-master-bamboo.webp", specs: [{ label: "Size", value: "8 × 6 inch" }, { label: "Weight", value: "900 gm" }, { label: "Pieces / 100 sq.ft", value: "300" }] },
    { id: "clay-cut-m-channel", category: "clay", name: "Cut M-Channel", sub: "Clay Roofing · Channel", image: "images/products/clay-cut-m-channel.webp", specs: [{ label: "Size", value: "8 × 4.5 inch" }, { label: "Weight", value: "450 gm" }, { label: "Pieces / 100 sq.ft", value: "400" }] },
    { id: "clay-iden-patti", category: "clay", name: "Iden Patti", sub: "Trim · Patti", image: "images/products/clay-iden-patti.webp", specs: [{ label: "Size", value: "6 × 3 inch" }, { label: "Weight", value: "250 gm" }, { label: "Pieces / 100 sq.ft", value: "1200" }] },
    { id: "clay-varam-bamboo-6x1", category: "clay", name: "Varam Bamboo Strip", sub: "Trim · Patti", image: "images/products/clay-varam-bamboo-6x1.webp", specs: [{ label: "Size", value: "6 × 1 inch" }, { label: "Weight", value: "100 gm" }, { label: "Pieces / 100 sq.ft", value: "2400" }] },
    { id: "clay-elevation-patti-6x1", category: "clay", name: "Elevation Patti", sub: "Trim · Patti", image: "images/products/clay-elevation-patti-6x1.webp", specs: [{ label: "Size", value: "6 × 1 inch" }, { label: "Weight", value: "100 gm" }, { label: "Pieces / 100 sq.ft", value: "2400" }] },

    // ===== Wall Cladding =====
    {
      id: "wall-cladding-bricks", category: "cladding", name: "Wall Cladding Bricks",
      sub: "Terracotta clay · facing brick",
      image: "images/products/wall-cladding-bricks.webp",
      specs: [
        { label: "Size", value: "9 × 3 inch" },
        { label: "Weight", value: "400 gm" },
        { label: "Per Box", value: "20 pcs" },
        { label: "Per Sq.ft", value: "5 nos" }
      ]
    }
  ],

  features: [
    { icon: "sun",       title: "Natural Sunlight",      desc: "Filters daylight beautifully into spaces." },
    { icon: "wind",      title: "Natural Ventilation",   desc: "Cross-breeze without compromising privacy." },
    { icon: "tools",     title: "Easy Installation",     desc: "Stack like bricks with mortar or tile adhesive." },
    { icon: "shield",    title: "All-Weather Resistant", desc: "Resists fungus, termites & monsoon damage." },
    { icon: "fire",      title: "Fire Resistance",       desc: "Up to 30 minutes of fire resistance." },
    { icon: "leaf",      title: "100% Eco-Friendly",     desc: "Asbestos-free natural clay with low embodied carbon." },
    { icon: "brush",     title: "Paintable",             desc: "Apply any water-based paint of your choice." },
    { icon: "calendar",  title: "20 Year Durability",    desc: "Tested for two decades of weatherproof life." }
  ]
};
