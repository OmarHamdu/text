/* ==============================================================
   Story Maker Pro — css/style.css
   ==============================================================
   Table of Contents:
     1. Google Fonts Import
     2. Design Tokens (CSS Custom Properties)
     3. Reset & Base
     4. Top Bar
     5. App Layout
     6. Preview Card
        6a. Card Shell (glow ring)
        6b. Preview Box (9:16 container)
        6c. Draggable Text Container
        6d. Preview Span — TikTok Clone Effect
        6e. Text Style States (0–3)
        6f. Drag Hint Overlay
     7. Control Panels
     8. Toolbar (Alignment + Style Cycler)
     9. Font Chips
    10. Sliders (Size + Line Height)
    11. Color Palette
    12. Background Picker
    13. Download Button
    14. Animations
    15. Scrollbar Styling
    16. Responsive (Mobile ≤ 680px)
   ============================================================== */


/* ──────────────────────────────────────────────────────────────
   1. GOOGLE FONTS IMPORT
   Arabic display & text families loaded from Google Fonts CDN.
   Adding a new font here? Also add it to the FONTS array in js/script.js.
   ────────────────────────────────────────────────────────────── */
@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;900&family=Tajawal:wght@300;400;500;700&family=Lalezar&family=Aref+Ruqaa:wght@400;700&family=Marhey:wght@400;600;700&family=Reem+Kufi+Fun:wght@400;700&family=IBM+Plex+Sans+Arabic:wght@400;500;700&display=swap');


/* ──────────────────────────────────────────────────────────────
   2. DESIGN TOKENS (CSS Custom Properties)
   Central source of truth for the dark theme.
   ────────────────────────────────────────────────────────────── */
:root {
  /* Brand accent colors */
  --red:          #fe2c55;
  --teal:         #25f4ee;
  --purple:       #bf5fff;
  --red-glow:     rgba(254, 44,  85,  0.40);
  --teal-glow:    rgba(37,  244, 238, 0.22);
  --purple-glow:  rgba(191, 95,  255, 0.22);

  /* Surface layers (darkest → lightest) */
  --bg:    #0a0a0d;
  --bg2:   #111116;
  --bg3:   #17171e;
  --bg4:   #1d1d26;
  --bg5:   #23232f;

  /* Border shades */
  --bdr:    rgba(255, 255, 255, 0.07);
  --bdr-md: rgba(255, 255, 255, 0.14);
  --bdr-hi: rgba(255, 255, 255, 0.26);

  /* Text shades */
  --t1: #f0f0f0;
  --t2: rgba(240, 240, 240, 0.55);
  --t3: rgba(240, 240, 240, 0.28);

  /* Shared radius & transition */
  --r:   10px;
  --r2:  14px;
  --tr:  0.17s cubic-bezier(0.4, 0, 0.2, 1);
}


/* ──────────────────────────────────────────────────────────────
   3. RESET & BASE
   ────────────────────────────────────────────────────────────── */
*,
*::before,
*::after {
  box-sizing: border-box;
  margin:     0;
  padding:    0;
}

html,
body {
  height: 100%;
}

body {
  font-family:              'Cairo', sans-serif;
  background:               var(--bg);
  color:                    var(--t1);
  min-height:               100vh;
  display:                  flex;
  flex-direction:           column;
  -webkit-font-smoothing:   antialiased;
  -moz-osx-font-smoothing:  grayscale;
}

/* Reset buttons so we start from a consistent baseline */
button {
  cursor:       pointer;
  font-family:  'Cairo', sans-serif;
  border:       none;
  background:   none;
  color:        inherit;
}

/* Prevent SVG from stretching flex containers */
svg {
  display:    block;
  flex-shrink: 0;
}


/* ──────────────────────────────────────────────────────────────
   4. TOP BAR
   Sticky frosted-glass header.
   ────────────────────────────────────────────────────────────── */
.topbar {
  display:              flex;
  align-items:          center;
  justify-content:      space-between;
  padding:              11px 24px;
  border-bottom:        1px solid var(--bdr);
  background:           rgba(10, 10, 13, 0.94);
  backdrop-filter:      blur(18px);
  -webkit-backdrop-filter: blur(18px);
  position:             sticky;
  top:                  0;
  z-index:              200;
}

.brand {
  display:      flex;
  align-items:  center;
  gap:          10px;
}

.brand-mark {
  width:            30px;
  height:           30px;
  border-radius:    8px;
  background:       linear-gradient(135deg, var(--red), #ff7088);
  display:          flex;
  align-items:      center;
  justify-content:  center;
  font-size:        15px;
  box-shadow:       0 0 18px var(--red-glow);
}

.brand-name {
  font-size:      16px;
  font-weight:    800;
  letter-spacing: -0.01em;
  color:          #fff;
}

.brand-name em {
  font-style: normal;
  color:       var(--red);
}

.brand-ver {
  font-size:      10px;
  font-weight:    700;
  letter-spacing: 0.06em;
  color:          var(--teal);
  background:     rgba(37, 244, 238, 0.10);
  border:         1px solid rgba(37, 244, 238, 0.22);
  border-radius:  20px;
  padding:        1px 7px;
}

.topbar-sub {
  font-size:      11px;
  color:          var(--t3);
  letter-spacing: 0.06em;
}


/* ──────────────────────────────────────────────────────────────
   5. APP LAYOUT
   Two-column flex on desktop.
   ────────────────────────────────────────────────────────────── */
.app {
  display:    flex;
  flex:       1;
  gap:        22px;
  padding:    22px 24px 60px;
  max-width:  1080px;
  width:      100%;
  margin:     0 auto;
}

/* ── Preview column — sticky so card stays visible while scrolling controls ── */
.col-preview {
  flex:             0 0 auto;
  display:          flex;
  flex-direction:   column;
  align-items:      center;
  gap:              13px;
  position:         sticky;
  top:              72px;
  align-self:       flex-start;
}

/* ── Controls column — scrollable, takes remaining width ── */
.col-controls {
  flex:      1;
  min-width: 0;
  display:   flex;
  flex-direction: column;
  gap:       10px;
}


/* ──────────────────────────────────────────────────────────────
   6a. CARD SHELL — Animated conic glow ring
   Uses animation to spin a conic gradient behind the card.
   Compatible with all modern browsers; falls back gracefully.
   ────────────────────────────────────────────────────────────── */
.card-shell {
  position:  relative;
  width:     210px;
}

/* The spinning glow ring is the ::before pseudo-element */
.card-shell::before {
  content:       '';
  position:      absolute;
  inset:         -4px;
  border-radius: 24px;
  background:    conic-gradient(
    from 0deg,
    var(--red)    0%,
    var(--teal)   33%,
    #a855f7       66%,
    var(--red)    100%
  );
  opacity:       0.4;
  filter:        blur(10px);
  z-index:       0;
  animation:     ring-spin 6s linear infinite;
}


/* ──────────────────────────────────────────────────────────────
   6b. PREVIEW BOX — The 9:16 card
   ────────────────────────────────────────────────────────────── */
#preview-box {
  position:          relative;
  z-index:           1;
  width:             100%;
  aspect-ratio:      9 / 16;
  border-radius:     20px;
  overflow:          hidden;     /* clip dragged text at card edges */
  background:        #111;
  isolation:         isolate;   /* new stacking context */
  user-select:       none;      /* disable text-selection during drag */
  -webkit-user-select: none;
}

/* Layer 0: Background gradient or image */
#preview-bg {
  position:            absolute;
  inset:               0;
  z-index:             0;
  background:          #111;
  background-size:     cover;
  background-position: center;
  transition:          background 0.32s ease;
}

/* Vignette: subtle edge darkening applied above the background */
#preview-box::after {
  content:         '';
  position:        absolute;
  inset:           0;
  z-index:         1;
  background:      radial-gradient(
    ellipse at 50% 50%,
    transparent 48%,
    rgba(0, 0, 0, 0.30) 100%
  );
  pointer-events:  none;
}


/* ──────────────────────────────────────────────────────────────
   6c. DRAGGABLE TEXT CONTAINER
   ────────────────────────────────────────────────────────────────
   Position strategy:
   ┌─────────────────────────────────────────────────────────────┐
   │  CSS Initial: top:50%; left:50%; transform:translate(-50%,-50%)  │
   │  → Pure-CSS centering, no JS required for first paint.      │
   │                                                             │
   │  On first drag: JS calls initDragPosition() which:          │
   │    1. Reads getBoundingClientRect() to get pixel coords.    │
   │    2. Sets explicit top / left px values.                   │
   │    3. Removes the transform.                                │
   │                                                             │
   │  After that: only top / left are mutated.                   │
   │  html2canvas reads top/left directly — no offset bugs.      │
   └─────────────────────────────────────────────────────────────┘
   ────────────────────────────────────────────────────────────── */
#text-container {
  position:     absolute;
  z-index:      2;
  top:          50%;
  left:         50%;
  transform:    translate(-50%, -50%);
  width:        88%;        /* wraps text inside the card width */
  text-align:   center;     /* overridden by alignment buttons */
  cursor:       grab;
  touch-action: none;       /* prevent browser scroll during drag */
}

#text-container.dragging {
  cursor: grabbing;
}


/* ──────────────────────────────────────────────────────────────
   6d. PREVIEW SPAN — The TikTok Clone Effect
   ────────────────────────────────────────────────────────────────
   KEY CSS PROPERTIES:
   • display: inline          → creates inline line boxes (not a block)
   • white-space: pre-wrap    → preserves newlines, wraps at boundaries
   • box-decoration-break: clone
     → When a line wraps, CSS "clones" the box-model decorations
       (background, padding, border-radius) onto EACH line fragment.
     → This is exactly how TikTok creates per-line highlight bubbles.
   ────────────────────────────────────────────────────────────── */
#preview-span {
  display:         inline;
  white-space:     pre-wrap;
  word-break:      break-word;
  font-family:     'Cairo', sans-serif;
  font-size:       26px;
  line-height:     2;
  color:           #ffffff;
  /* Transitions make real-time slider updates feel smooth */
  transition:      color 0.15s ease, font-size 0.1s ease;
}


/* ──────────────────────────────────────────────────────────────
   6e. TEXT STYLE STATES  (applied via JS className + inline styles)
   ────────────────────────────────────────────────────────────────
   State 0 – Normal:        color only, subtle shadow (inline via JS)
   State 1 – Solid BG:      colored background, full opacity
   State 2 – Translucent:   colored background at 50% opacity
   State 3 – Neon Outline:  color glow + -webkit-text-stroke (inline via JS)

   States 1 & 2 share the box-decoration-break trick (class applied
   by JS; the actual color values are set inline to follow the palette).
   ────────────────────────────────────────────────────────────── */

/* Shared: States 1 and 2 both need padding, radius, and the clone decoration */
#preview-span.style-solid,
#preview-span.style-translucent {
  padding:                      4px 11px;
  border-radius:                8px;
  box-decoration-break:         clone;
  -webkit-box-decoration-break: clone;
}

/* State 3: Neon — extra letter-spacing gives the stroke visual breathing room */
#preview-span.style-neon {
  letter-spacing: 0.03em;
}


/* ──────────────────────────────────────────────────────────────
   6f. DRAG HINT OVERLAY
   Shown on first load; JS hides it permanently after first drag.
   ────────────────────────────────────────────────────────────── */
#drag-hint {
  position:        absolute;
  bottom:          14px;
  left:            50%;
  transform:       translateX(-50%);
  z-index:         10;
  display:         flex;
  align-items:     center;
  gap:             6px;
  background:      rgba(0, 0, 0, 0.55);
  border:          1px solid rgba(255, 255, 255, 0.15);
  border-radius:   20px;
  padding:         5px 12px;
  font-size:       10px;
  color:           rgba(255, 255, 255, 0.65);
  pointer-events:  none;
  white-space:     nowrap;
  transition:      opacity 0.4s ease;
}

#drag-hint.hidden {
  opacity: 0;
}

/* Caption below the card */
.preview-label {
  display:        flex;
  align-items:    center;
  gap:            6px;
  font-size:      10px;
  color:          var(--t3);
  letter-spacing: 0.10em;
  text-transform: uppercase;
}


/* ──────────────────────────────────────────────────────────────
   7. CONTROL PANELS
   Stacked cards with a shared dark surface + border.
   Stagger animation via nth-child delay.
   ────────────────────────────────────────────────────────────── */
.panel {
  background:    var(--bg2);
  border:        1px solid var(--bdr);
  border-radius: var(--r2);
  padding:       13px 15px;
  display:       flex;
  flex-direction: column;
  gap:           10px;
  animation:     fadeup 0.38s ease both;
}

/* Stagger each panel's entrance animation */
.panel:nth-child(1) { animation-delay: 0.02s; }
.panel:nth-child(2) { animation-delay: 0.07s; }
.panel:nth-child(3) { animation-delay: 0.12s; }
.panel:nth-child(4) { animation-delay: 0.17s; }
.panel:nth-child(5) { animation-delay: 0.22s; }

.panel-hdr {
  display:     flex;
  align-items: center;
  gap:         8px;
}

.panel-icon {
  width:            22px;
  height:           22px;
  border-radius:    6px;
  background:       var(--bg4);
  border:           1px solid var(--bdr);
  display:          flex;
  align-items:      center;
  justify-content:  center;
  font-size:        12px;
  flex-shrink:      0;
}

.panel-title {
  font-size:      10px;
  font-weight:    700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color:          var(--t3);
}

/* Horizontal rule inside panels */
.divider {
  height:     1px;
  background: var(--bdr);
}

/* Textarea for story text */
#story-input {
  width:         100%;
  background:    var(--bg3);
  border:        1px solid var(--bdr);
  border-radius: var(--r);
  color:         var(--t1);
  font-family:   'Cairo', sans-serif;
  font-size:     15px;
  line-height:   1.75;
  padding:       11px 13px;
  resize:        none;
  outline:       none;
  direction:     rtl;
  min-height:    92px;
  transition:    border-color var(--tr), box-shadow var(--tr);
}

#story-input:focus {
  border-color: rgba(254, 44, 85, 0.50);
  box-shadow:   0 0 0 3px rgba(254, 44, 85, 0.07);
}

#story-input::placeholder {
  color: var(--t3);
}

#char-count {
  font-size:             11px;
  color:                 var(--t3);
  direction:             ltr;
  font-variant-numeric:  tabular-nums;
  transition:            color 0.2s;
}


/* ──────────────────────────────────────────────────────────────
   8. TOOLBAR  (Alignment segmented group + Style Cycler)
   ────────────────────────────────────────────────────────────── */
.toolbar {
  display:     flex;
  gap:         8px;
  align-items: center;
  flex-wrap:   wrap;
}

/* Alignment button group */
.seg-group {
  display:       flex;
  background:    var(--bg3);
  border:        1px solid var(--bdr);
  border-radius: var(--r);
  padding:       3px;
  gap:           2px;
}

.seg-btn {
  display:          flex;
  align-items:      center;
  justify-content:  center;
  width:            34px;
  height:           34px;
  border-radius:    7px;
  background:       transparent;
  color:            var(--t2);
  transition:       all var(--tr);
}

.seg-btn:hover {
  color:       var(--t1);
  background:  rgba(255, 255, 255, 0.07);
}

.seg-btn.active {
  color:       #fff;
  background:  rgba(255, 255, 255, 0.13);
}

/* ──────────────────────────────────────────────────────────────
   4-STATE STYLE CYCLER  (The "A" Button)
   ────────────────────────────────────────────────────────────────
   One button cycles through:  Normal → Solid → Translucent → Neon
   Border color shifts to signal the active state.
   ────────────────────────────────────────────────────────────── */
.style-cycler {
  display:       flex;
  align-items:   center;
  gap:           8px;
  height:        40px;
  padding:       0 14px;
  border-radius: var(--r);
  border:        1.5px solid var(--bdr-md);
  background:    transparent;
  color:         var(--t2);
  font-size:     13px;
  font-weight:   700;
  transition:    all var(--tr);
  white-space:   nowrap;
  flex-shrink:   0;
}

.style-cycler:hover {
  border-color: var(--bdr-hi);
  color:        var(--t1);
}

/* Active state border colors */
.style-cycler.active-0 { border-color: rgba(255, 255, 255, 0.20); color: var(--t1); }
.style-cycler.active-1 { border-color: var(--red);    color: var(--t1); box-shadow: 0 0 0 3px rgba(254, 44,  85,  0.08); }
.style-cycler.active-2 { border-color: var(--teal);   color: var(--t1); box-shadow: 0 0 0 3px rgba(37,  244, 238, 0.08); }
.style-cycler.active-3 { border-color: var(--purple); color: var(--t1); box-shadow: 0 0 0 3px rgba(191, 95,  255, 0.08); }

/* Mini "A" preview box inside the button */
.style-preview {
  width:            24px;
  height:           24px;
  border-radius:    5px;
  display:          flex;
  align-items:      center;
  justify-content:  center;
  font-size:        13px;
  font-weight:      900;
  flex-shrink:      0;
  transition:       all 0.2s;
}

/* State indicator pips row */
.state-indicator {
  display:     flex;
  align-items: center;
  gap:         5px;
}

.pip {
  width:         8px;
  height:        8px;
  border-radius: 50%;
  background:    rgba(255, 255, 255, 0.2);
  flex-shrink:   0;
  transition:    all 0.22s ease;
}

/* Each pip gets a brand color — JS toggles .pip--active */
#state-pip-0 { background: rgba(255, 255, 255, 0.55); }
#state-pip-1 { background: var(--red);    opacity: 0.30; }
#state-pip-2 { background: var(--teal);   opacity: 0.30; }
#state-pip-3 { background: var(--purple); opacity: 0.30; }

.pip.pip--active {
  opacity:   1 !important;
  transform: scale(1.35);
}

.state-desc {
  font-size:   11px;
  color:       var(--t3);
  margin-right: 4px;
}

/* Mode pill: updates text + color based on active style state */
.color-mode-row {
  display:     flex;
  align-items: center;
  gap:         7px;
  font-size:   11.5px;
  color:       var(--t3);
}

.mode-pill {
  padding:        2px 9px;
  border-radius:  20px;
  font-size:      10px;
  font-weight:    700;
  letter-spacing: 0.07em;
  text-transform: uppercase;
  transition:     all 0.2s;
}

.mode-pill.state0 { background: rgba(255, 255, 255, 0.08); color: var(--t2); }
.mode-pill.state1 { background: rgba(254, 44,  85,  0.20); color: var(--red); }
.mode-pill.state2 { background: rgba(37,  244, 238, 0.15); color: var(--teal); }
.mode-pill.state3 { background: rgba(191, 95,  255, 0.20); color: var(--purple); }


/* ──────────────────────────────────────────────────────────────
   9. FONT CHIPS  (horizontally scrollable, injected by JS)
   ────────────────────────────────────────────────────────────── */
.chip-scroll {
  display:    flex;
  gap:        7px;
  overflow-x: auto;
  padding-bottom: 3px;
  scrollbar-width: none;
}

.chip-scroll::-webkit-scrollbar {
  display: none;
}

.font-chip {
  flex-shrink:   0;
  padding:       6px 15px;
  border-radius: 30px;
  border:        1.5px solid var(--bdr);
  background:    var(--bg3);
  color:         var(--t2);
  font-size:     14px;
  transition:    all var(--tr);
  white-space:   nowrap;
}

.font-chip:hover {
  border-color: var(--bdr-hi);
  color:        var(--t1);
}

.font-chip.active {
  border-color: var(--teal);
  color:        var(--teal);
  background:   rgba(37, 244, 238, 0.07);
  box-shadow:   0 0 0 3px rgba(37, 244, 238, 0.06);
}


/* ──────────────────────────────────────────────────────────────
   10. SLIDERS  (Font Size + Line Height)
   The track fill is driven by a CSS custom property --pct,
   set by JS on every input event.
   ────────────────────────────────────────────────────────────── */
.slider-row {
  display:     flex;
  align-items: center;
  gap:         11px;
}

.slider-lbl {
  font-size:   12px;
  color:       var(--t3);
  white-space: nowrap;
  min-width:   52px;
}

.slider-val {
  font-size:             12px;
  color:                 var(--t2);
  min-width:             36px;
  text-align:            center;
  font-variant-numeric:  tabular-nums;
  background:            var(--bg4);
  border-radius:         5px;
  padding:               2px 6px;
}

/* Range input base */
input[type="range"] {
  flex:               1;
  -webkit-appearance: none;
  appearance:         none;
  height:             3px;
  border-radius:      2px;
  background:         var(--bg4);
  outline:            none;
  cursor:             pointer;
}

/* Teal fill on the left portion of the track */
input[type="range"]::-webkit-slider-runnable-track {
  background: linear-gradient(
    to right,
    var(--teal) 0%,
    var(--teal) var(--pct, 32%),
    var(--bg4)  var(--pct, 32%)
  );
  height:        3px;
  border-radius: 2px;
}

/* Thumb — Chrome/Safari */
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance:         none;
  width:              17px;
  height:             17px;
  border-radius:      50%;
  background:         #fff;
  margin-top:         -7px;
  box-shadow:         0 1px 6px rgba(0, 0, 0, 0.50);
  transition:         transform var(--tr), box-shadow var(--tr);
}

input[type="range"]::-webkit-slider-thumb:hover {
  transform:   scale(1.25);
  box-shadow:  0 0 0 4px rgba(37, 244, 238, 0.22);
}

/* Thumb — Firefox */
input[type="range"]::-moz-range-thumb {
  width:         17px;
  height:        17px;
  border-radius: 50%;
  background:    #fff;
  border:        none;
  box-shadow:    0 1px 6px rgba(0, 0, 0, 0.50);
}


/* ──────────────────────────────────────────────────────────────
   11. COLOR PALETTE  (swatch grid, injected by JS)
   ────────────────────────────────────────────────────────────── */
.swatches {
  display:   flex;
  gap:       8px;
  flex-wrap: wrap;
}

.swatch {
  width:         32px;
  height:        32px;
  border-radius: 50%;
  border:        2.5px solid transparent;
  cursor:        pointer;
  position:      relative;
  transition:    transform var(--tr), box-shadow var(--tr), border-color var(--tr);
}

.swatch:hover {
  transform: scale(1.18);
}

/* Selected state: white ring */
.swatch.sel {
  border-color: #fff;
  box-shadow:   0 0 0 2px rgba(255, 255, 255, 0.25), 0 3px 10px rgba(0, 0, 0, 0.4);
}

/* White swatch always needs a visible border */
.swatch[data-c="#ffffff"] {
  border-color: rgba(255, 255, 255, 0.35);
}

/* Checkmark overlay on selected swatch */
.swatch.sel::after {
  content:    '';
  position:   absolute;
  inset:      0;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpolyline points='2,6 5,9 10,3' stroke='%23fff' stroke-width='2.2' fill='none' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")
              center / 12px no-repeat;
  filter:     drop-shadow(0 1px 2px rgba(0, 0, 0, 0.60));
}

/* Invert checkmark for light swatches */
.swatch[data-c="#ffea00"].sel::after,
.swatch[data-c="#ffffff"].sel::after {
  filter: invert(1) drop-shadow(0 1px 1px rgba(0, 0, 0, 0.30));
}


/* ──────────────────────────────────────────────────────────────
   12. BACKGROUND PICKER  (horizontally scrollable)
   ────────────────────────────────────────────────────────────── */
.bg-row {
  display:     flex;
  gap:         8px;
  overflow-x:  auto;
  padding-bottom: 5px;
  align-items: center;
  scrollbar-width: none;
}

.bg-row::-webkit-scrollbar {
  display: none;
}

/* Individual background thumbnail */
.bg-thumb {
  flex-shrink:   0;
  width:         46px;
  height:        70px;
  border-radius: 10px;
  border:        2.5px solid transparent;
  cursor:        pointer;
  overflow:      hidden;
  position:      relative;
  transition:    transform var(--tr), border-color var(--tr), box-shadow var(--tr);
}

.bg-thumb:hover {
  transform: scale(1.07);
}

.bg-thumb.active {
  border-color: var(--teal);
  box-shadow:   0 0 0 2px rgba(37, 244, 238, 0.22);
}

/* Inner div receives the full CSS background string */
.bg-thumb .t-inner {
  position:            absolute;
  inset:               0;
  background-size:     cover;
  background-position: center;
}

/* Upload label (acts as a styled file input trigger) */
.bg-upload {
  flex-shrink:      0;
  width:            46px;
  height:           70px;
  border-radius:    10px;
  border:           1.5px dashed var(--bdr-md);
  background:       var(--bg3);
  display:          flex;
  flex-direction:   column;
  align-items:      center;
  justify-content:  center;
  gap:              5px;
  cursor:           pointer;
  transition:       all var(--tr);
  color:            var(--t3);
}

.bg-upload:hover {
  border-color: var(--bdr-hi);
  color:        var(--t2);
  background:   var(--bg4);
}

.bg-upload span {
  font-size:    10px;
  text-align:   center;
  line-height:  1.3;
}

/* Hidden native file input */
#bg-file {
  display: none;
}


/* ──────────────────────────────────────────────────────────────
   13. DOWNLOAD BUTTON
   ────────────────────────────────────────────────────────────── */
#dl-btn {
  width:          100%;
  padding:        15px 20px;
  border-radius:  var(--r2);
  background:     linear-gradient(110deg, var(--red) 0%, #ff5c75 100%);
  color:          #fff;
  font-size:      15px;
  font-weight:    700;
  display:        flex;
  align-items:    center;
  justify-content: center;
  gap:            10px;
  position:       relative;
  overflow:       hidden;
  transition:     transform var(--tr), box-shadow var(--tr), background var(--tr);
  box-shadow:     0 4px 22px var(--red-glow);
  letter-spacing: 0.02em;
}

/* Sheen overlay */
#dl-btn::before {
  content:    '';
  position:   absolute;
  inset:      0;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.18), transparent 60%);
  opacity:    0;
  transition: opacity var(--tr);
}

#dl-btn:hover::before { opacity: 1; }
#dl-btn:hover  { transform: translateY(-1px); box-shadow: 0 8px 30px var(--red-glow); }
#dl-btn:active { transform: scale(0.98); }
#dl-btn:disabled { opacity: 0.65; cursor: wait; }

/* Success state */
#dl-btn.ok {
  background: linear-gradient(110deg, #00c853, #69f0ae);
  box-shadow: 0 4px 22px rgba(0, 200, 83, 0.35);
}

/* Loading spinner inside the button */
.dl-spin {
  width:        18px;
  height:       18px;
  border:       2.5px solid rgba(255, 255, 255, 0.30);
  border-top-color: #fff;
  border-radius: 50%;
  animation:    spin 0.75s linear infinite;
}


/* ──────────────────────────────────────────────────────────────
   14. ANIMATIONS
   ────────────────────────────────────────────────────────────── */

/* Panel entrance */
@keyframes fadeup {
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0);    }
}

/* Glow ring rotation */
@keyframes ring-spin {
  to { transform: rotate(360deg); }
}

/* Button spinner */
@keyframes spin {
  to { transform: rotate(360deg); }
}


/* ──────────────────────────────────────────────────────────────
   15. SCROLLBAR STYLING  (minimal, dark-theme)
   ────────────────────────────────────────────────────────────── */
::-webkit-scrollbar          { width: 4px; height: 4px; }
::-webkit-scrollbar-track    { background: transparent; }
::-webkit-scrollbar-thumb    { background: rgba(255, 255, 255, 0.09); border-radius: 2px; }


/* ──────────────────────────────────────────────────────────────
   16. RESPONSIVE  — Mobile ≤ 680px
   Stack preview above controls, remove sticky positioning.
   ────────────────────────────────────────────────────────────── */
@media (max-width: 680px) {
  .app {
    flex-direction: column;
    align-items:    center;
    padding:        16px 14px 60px;
    gap:            16px;
  }

  .col-preview {
    position:  static;          /* remove sticky on mobile */
    width:     100%;
    max-width: 250px;
  }

  .card-shell {
    width: 100%;
  }

  .col-controls {
    width: 100%;
  }

  .style-cycler {
    padding: 0 10px;
  }
}
