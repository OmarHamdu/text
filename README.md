# ✦ Story Maker Pro — صانع القصص

A TikTok-style text story generator. Create beautiful, shareable story cards with custom text styles, Arabic fonts, animated backgrounds, and one-click PNG export — all in pure HTML, CSS, and Vanilla JavaScript. No frameworks, no build tools, no dependencies beyond html2canvas.

![Story Maker Pro](assets/preview.png)

---

## ✨ Features

| Feature | Details |
|---|---|
| **4-State Text Style Cycler** | Normal → Solid Background → Translucent → Neon Glow |
| **TikTok Per-Line Highlight** | `box-decoration-break: clone` creates per-line text bubbles |
| **Draggable Text** | Mouse & touch drag with absolute `top`/`left` for correct export |
| **7 Arabic Fonts** | Cairo · Tajawal · Lalezar · Aref Ruqaa · Marhey · Reem Kufi · IBM Plex |
| **Font Size Slider** | 13px → 62px |
| **Line Height Slider** | 1.0× → 3.0× (solves squished highlight lines) |
| **Smart Color Palette** | 12 swatches; affects text OR highlight/glow depending on active style |
| **14 Backgrounds** | Gradients, solid colors, and dot-grid patterns |
| **Custom Image Upload** | Drag-drop or click to upload any device image as background |
| **PNG Export** | html2canvas at 3× resolution for crisp social-media output |
| **RTL / Arabic Support** | Full right-to-left layout throughout |
| **Responsive** | Two-column desktop → single-column mobile |

---

## 🚀 Getting Started

### Option 1 — Open directly (quickest)
```bash
git clone https://github.com/YOUR_USERNAME/story-maker-pro.git
cd story-maker-pro
open index.html          # macOS
xdg-open index.html      # Linux
start index.html         # Windows
```
> No build step required. Works in any modern browser.

### Option 2 — Local dev server (recommended)
Using [VS Code Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer), [Vite](https://vitejs.dev/), or Python:
```bash
# Python 3
python -m http.server 8080
# then open http://localhost:8080
```

---

## 📁 Project Structure

```
story-maker-pro/
│
├── index.html                  # Semantic HTML shell (no inline JS/CSS)
│
├── css/
│   └── style.css               # All styles, design tokens, animations
│
├── js/
│   └── script.js               # All logic — config arrays at the top
│
├── assets/
│   └── backgrounds/            # Drop your background images here
│       ├── bg1.jpg             # (example — not included)
│       └── ...
│
└── README.md
```

---

## 🎨 Adding a New Background Image

1. Drop your image into `assets/backgrounds/`
2. Open `js/script.js` and find the `BACKGROUNDS` array
3. Add a new entry:

```js
{
  id:   'bg-my-photo',
  type: 'image',
  src:  'assets/backgrounds/my-photo.jpg',
},
```

That's it — the thumbnail and preview update automatically.

---

## 🔤 Adding a New Arabic Font

1. Find your font on [Google Fonts](https://fonts.google.com/?subset=arabic)
2. Add the family to the `@import` URL in `css/style.css`:
   ```css
   @import url('https://fonts.googleapis.com/css2?family=Cairo&family=YOUR_FONT&display=swap');
   ```
3. Add an entry to the `FONTS` array in `js/script.js`:
   ```js
   { family: 'Your Font Name', label: 'Short Label' },
   ```

---

## 🎨 Adding a New Swatch Color

Open `js/script.js` and append to the `COLORS` array:
```js
{ c: '#your-hex-color', name: 'اسم اللون' },
```

---

## 🏗️ Architecture

The app follows a single-direction data flow:

```
User Interaction
      │
      ▼
  Mutate S{}  ← single state object
      │
      ▼
  render()    ← sole writer to the DOM
      │
      ├── applyTextStyle()       ← 4-state style logic
      ├── applyBackground()      ← CSS or image background
      └── updateStyleCyclerUI()  ← button + pip indicators
```

Each event handler (textarea, sliders, swatches, etc.) does exactly two things:
1. Mutates one or more properties on `S`
2. Calls `render()`

The drag handler is the only exception — it writes `top`/`left` directly for 60fps performance and calls `render()` only indirectly (via `initDragPosition()` on first drag).

---

## 🌐 Browser Support

| Browser | Support |
|---|---|
| Chrome 90+ | ✅ Full (including `box-decoration-break: clone`) |
| Edge 90+ | ✅ Full |
| Firefox 90+ | ✅ Full |
| Safari 15+ | ✅ Full |
| Mobile Chrome/Safari | ✅ Full (touch drag tested) |

> `box-decoration-break: clone` requires the `-webkit-` prefix for Safari — both are applied in the CSS.

---

## 📦 Dependencies

| Library | Version | Usage |
|---|---|---|
| [html2canvas](https://html2canvas.hertzen.com/) | 1.4.1 | PNG export via CDN |
| Google Fonts | — | Arabic typography via CDN |

Everything else is pure Vanilla HTML/CSS/JS.

---

## 📄 License

MIT © 2024 — free to use, modify, and distribute.

---

## 🤝 Contributing

Pull requests are welcome! Please:
- Keep JavaScript in `js/script.js` (no inline scripts)
- Keep CSS in `css/style.css` (no inline styles except what render() writes)
- Add new fonts/colors/backgrounds only via the config arrays at the top of `script.js`
- Test on both desktop and mobile before submitting
