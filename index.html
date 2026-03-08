/**
 * Story Maker Pro — js/script.js
 * ============================================================
 * TikTok-style text story generator.
 * Pure Vanilla JS, no frameworks or build tools required.
 *
 * Architecture:
 *   1. Configuration  — edit COLORS, FONTS, BACKGROUNDS here
 *   2. State          — single S object, render() is the only writer
 *   3. DOM Refs       — all getElementById calls in one place
 *   4. Helpers        — pure utility functions
 *   5. render()       — single source of truth → DOM sync
 *   6. Build UI       — inject dynamic elements (swatches, thumbs, chips)
 *   7. Event Handlers — each feature wired up separately
 *   8. Drag & Drop    — mouse + touch, absolute top/left for html2canvas
 *   9. Export         — html2canvas PNG download
 *  10. Init           — entry point
 *
 * Open-source contribution guide:
 *   • Add a new color  → append to COLORS array
 *   • Add a new font   → append to FONTS array (also add @import to style.css)
 *   • Add a background → append to BACKGROUNDS array
 * ============================================================
 */

'use strict';

/* ============================================================
   1. CONFIGURATION ARRAYS
   ────────────────────────────────────────────────────────────
   Contributors: this is the place to add new options.
   All arrays are consumed by buildUI() — no other changes needed.
   ============================================================ */

/**
 * COLORS — The color palette swatches.
 * Each object needs:
 *   c    {string}  CSS color value (hex recommended for hexToRgb helper)
 *   name {string}  Arabic label shown as tooltip (title attribute)
 */
const COLORS = [
  { c: '#ffffff', name: 'أبيض'       },
  { c: '#000000', name: 'أسود'       },
  { c: '#fe2c55', name: 'أحمر'       },
  { c: '#ffea00', name: 'أصفر'       },
  { c: '#39ff14', name: 'أخضر نيون'  },
  { c: '#00b4ff', name: 'أزرق'       },
  { c: '#bf5fff', name: 'بنفسجي'     },
  { c: '#ff69b4', name: 'وردي'       },
  { c: '#ff8c00', name: 'برتقالي'    },
  { c: '#00ffcc', name: 'فيروزي'     },
  { c: '#e91e63', name: 'وردي داكن'  },
  { c: '#4caf50', name: 'أخضر'       },
];

/**
 * FONTS — Arabic Google Font options.
 * Each object needs:
 *   family  {string}  Exact Google Fonts family name (used in font-family CSS)
 *   label   {string}  Short display label shown on the chip button
 *
 * ⚠️  If you add a font here, you MUST also add it to the
 *     Google Fonts @import URL in css/style.css.
 */
const FONTS = [
  { family: 'Cairo',                 label: 'Cairo'     },
  { family: 'Tajawal',               label: 'Tajawal'   },
  { family: 'Lalezar',               label: 'Lalezar'   },
  { family: 'Aref Ruqaa',            label: 'Aref Ruqaa'},
  { family: 'Marhey',                label: 'Marhey'    },
  { family: 'Reem Kufi Fun',         label: 'Reem Kufi' },
  { family: 'IBM Plex Sans Arabic',  label: 'IBM Plex'  },
];

/**
 * BACKGROUNDS — Background options for the story card.
 * Two supported types:
 *
 *   type: 'css'
 *     css  {string}  Full CSS property string applied to #preview-bg's style.
 *                    Can include background, background-image, background-size, etc.
 *
 *   type: 'image'
 *     src  {string}  Path to image file, relative to index.html.
 *                    Put images in assets/backgrounds/ and reference them here.
 *
 * The thumbnail previews each type correctly:
 *   - 'css'   → same CSS string applied to the thumb's inner div
 *   - 'image' → background-image: url(src) applied to the thumb's inner div
 */
const BACKGROUNDS = [
  // ── Solid / Dark ──────────────────────────────────────────
  {
    id: 'bg-black',
    type: 'css',
    css: 'background: #0d0d0d;',
  },
  {
    id: 'bg-dark-purple',
    type: 'css',
    css: 'background: linear-gradient(160deg, #0f0c29, #302b63, #24243e);',
  },
  {
    id: 'bg-deep-navy',
    type: 'css',
    css: 'background: linear-gradient(145deg, #1a1a2e, #16213e, #0f3460);',
  },
  {
    id: 'bg-blood',
    type: 'css',
    css: 'background: linear-gradient(145deg, #200122, #6f0000);',
  },
  {
    id: 'bg-dark-emerald',
    type: 'css',
    css: 'background: linear-gradient(145deg, #093028, #237a57);',
  },

  // ── Vibrant Gradients ──────────────────────────────────────
  {
    id: 'bg-pink-burst',
    type: 'css',
    css: 'background: linear-gradient(135deg, #f093fb, #f5576c);',
  },
  {
    id: 'bg-golden',
    type: 'css',
    css: 'background: linear-gradient(135deg, #fceabb, #f8b500);',
  },
  {
    id: 'bg-rose',
    type: 'css',
    css: 'background: linear-gradient(145deg, #fce4ec, #f8bbd0, #fce4ec);',
  },
  {
    id: 'bg-ocean',
    type: 'css',
    css: 'background: linear-gradient(135deg, #005c97, #363795);',
  },
  {
    id: 'bg-mint',
    type: 'css',
    css: 'background: linear-gradient(135deg, #11998e, #38ef7d);',
  },
  {
    id: 'bg-sunset',
    type: 'css',
    css: 'background: linear-gradient(180deg, #ff416c, #ff4b2b);',
  },
  {
    id: 'bg-aurora',
    type: 'css',
    css: 'background: linear-gradient(135deg, #0d0d0d 0%, #1a0533 50%, #0d0d0d 100%);',
  },

  // ── Textured / Patterned ──────────────────────────────────
  {
    id: 'bg-parchment',
    type: 'css',
    css: 'background-color: #f0ddb8; background-image: radial-gradient(ellipse at top, rgba(200,160,60,.2), transparent 60%);',
  },
  {
    id: 'bg-dots',
    type: 'css',
    css: 'background: #111; background-image: radial-gradient(rgba(255,255,255,.045) 1px, transparent 1px); background-size: 22px 22px;',
  },

  // ── Image Backgrounds ─────────────────────────────────────
  // To activate: add image files to assets/backgrounds/
  // and uncomment or add entries like these:
  //
  // {
  //   id:   'bg-photo-1',
  //   type: 'image',
  //   src:  'assets/backgrounds/bg1.jpg',
  // },
  // {
  //   id:   'bg-photo-2',
  //   type: 'image',
  //   src:  'assets/backgrounds/bg2.jpg',
  // },
  // {
  //   id:   'bg-photo-3',
  //   type: 'image',
  //   src:  'assets/backgrounds/bg3.jpg',
  // },
];

/**
 * STYLE_STATES — Metadata for the 4-state text style cycler.
 * Order matters: index maps to S.textStyle value.
 *
 *   id       {number}  State index (0–3)
 *   label    {string}  Short Arabic label shown on the cycle button
 *   desc     {string}  Longer description shown in state indicator strip
 *   pipColor {string}  CSS color for the indicator pip dot
 *   btnClass {string}  CSS class applied to #style-btn to change its border color
 *
 * The actual visual rendering of each state lives in render() → applyTextStyle().
 */
const STYLE_STATES = [
  {
    id:       0,
    label:    'عادي',
    desc:     'نص بلون مختار',
    pipColor: '#ffffff',
    btnClass: 'active-0',
    pillCls:  'state0',
    pillText: 'لون النص',
  },
  {
    id:       1,
    label:    'خلفية',
    desc:     'خلفية ملونة صلبة',
    pipColor: '#fe2c55',
    btnClass: 'active-1',
    pillCls:  'state1',
    pillText: 'لون الخلفية',
  },
  {
    id:       2,
    label:    'شفاف',
    desc:     'خلفية شفافة 50٪',
    pipColor: '#25f4ee',
    btnClass: 'active-2',
    pillCls:  'state2',
    pillText: 'لون الخلفية',
  },
  {
    id:       3,
    label:    'نيون',
    desc:     'توهج ملون',
    pipColor: '#bf5fff',
    btnClass: 'active-3',
    pillCls:  'state3',
    pillText: 'لون التوهج',
  },
];


/* ============================================================
   2. APPLICATION STATE
   ────────────────────────────────────────────────────────────
   Single S object. render() reads S and updates the DOM.
   No direct DOM writes happen outside of render() or the
   drag handlers (which only touch top/left for performance).
   ============================================================ */
const S = {
  text:       'اكتب قصتك هنا...',  // textarea content
  font:       'Cairo',              // active font family
  size:       26,                   // font-size in px
  lineHeight: 2.0,                  // unitless line-height multiplier
  align:      'center',             // 'right' | 'center' | 'left'
  color:      '#ffffff',            // active palette color (hex)
  textStyle:  0,                    // 0=Normal 1=Solid 2=Translucent 3=Neon
  bgId:       'bg-black',           // active BACKGROUNDS entry id
  bgImage:    null,                 // data-URL of uploaded image (overrides bgId)
};


/* ============================================================
   3. DOM ELEMENT REFERENCES
   ────────────────────────────────────────────────────────────
   All getElementById calls consolidated here.
   If you rename an element in HTML, update it once here.
   ============================================================ */
const $ = (id) => document.getElementById(id);

const DOM = {
  previewBox:   $('preview-box'),
  previewBg:    $('preview-bg'),
  textContainer: $('text-container'),
  pvSpan:       $('preview-span'),
  textarea:     $('story-input'),
  charCount:    $('char-count'),
  sizeSlider:   $('size-slider'),
  sizeVal:      $('size-val'),
  lhSlider:     $('lh-slider'),
  lhVal:        $('lh-val'),
  styleBtn:     $('style-btn'),
  stylePreview: $('style-preview'),
  styleLabel:   $('style-label'),
  stateDesc:    $('state-desc'),
  modePill:     $('mode-pill'),
  swatchWrap:   $('swatches'),
  fontRow:      $('font-row'),
  bgRow:        $('bg-row'),
  bgFile:       $('bg-file'),
  dragHint:     $('drag-hint'),
  dlBtn:        $('dl-btn'),
  dlLbl:        $('dl-lbl'),
  dlIcon:       $('dl-icon'),
  dlSpin:       $('dl-spin'),
  dlOkIcon:     $('dl-ok'),
};


/* ============================================================
   4. HELPER FUNCTIONS
   ============================================================ */

/**
 * hexToRgb
 * Converts a 6-character hex color string to an {r, g, b} object.
 * Required to build rgba() strings for the translucent background state.
 *
 * @param  {string} hex  e.g. '#fe2c55'
 * @returns {{r:number, g:number, b:number}}
 */
function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return { r, g, b };
}

/**
 * contrastColor
 * Returns '#000000' or '#ffffff' based on the relative luminance of hex.
 * Used in the Solid Background state to auto-pick legible text color.
 *
 * Formula: W3C relative luminance approximation.
 *
 * @param  {string} hex  e.g. '#ffea00'
 * @returns {string}     '#000000' or '#ffffff'
 */
function contrastColor(hex) {
  const { r, g, b } = hexToRgb(hex);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.55 ? '#000000' : '#ffffff';
}

/**
 * setSliderTrack
 * Updates the --pct CSS custom property on a range input so the teal
 * "filled" portion of the track correctly reflects the current value.
 *
 * The CSS on the track uses:
 *   background: linear-gradient(to right, var(--teal) 0%, var(--teal) var(--pct), var(--bg4) var(--pct))
 *
 * @param {HTMLInputElement} el   The range input element
 * @param {number}           min  Slider minimum
 * @param {number}           max  Slider maximum
 * @param {number}           val  Current value
 */
function setSliderTrack(el, min, max, val) {
  const pct = ((val - min) / (max - min)) * 100;
  el.style.setProperty('--pct', `${pct.toFixed(1)}%`);
}

/**
 * bgCssForEntry
 * Returns the CSS string to apply to an element's style.cssText
 * for a given BACKGROUNDS entry.
 *
 * @param  {Object} entry  An entry from the BACKGROUNDS array
 * @returns {string}       CSS string
 */
function bgCssForEntry(entry) {
  if (entry.type === 'image') {
    return `background-image: url('${entry.src}'); background-size: cover; background-position: center;`;
  }
  return entry.css;
}


/* ============================================================
   5. RENDER — Single source of truth → DOM
   ────────────────────────────────────────────────────────────
   render() reads the S state object and updates ONLY the DOM.
   It is the ONLY function that should write visual properties.
   Event handlers mutate S then call render().
   ============================================================ */

/**
 * render
 * Synchronises the entire UI with the current S state.
 * Called after any state mutation.
 */
function render() {
  /* ── 5a. Text content ── */
  DOM.pvSpan.textContent = S.text || 'اكتب قصتك هنا...';

  /* ── 5b. Typography ── */
  DOM.pvSpan.style.fontFamily = `'${S.font}', sans-serif`;
  DOM.pvSpan.style.fontSize   = `${S.size}px`;
  DOM.pvSpan.style.lineHeight = S.lineHeight;
  DOM.textContainer.style.textAlign = S.align;

  /* ── 5c. Text Style (4 states) ── */
  applyTextStyle();

  /* ── 5d. Background ── */
  applyBackground();

  /* ── 5e. Style Cycler Button UI ── */
  updateStyleCyclerUI();

  /* ── 5f. Swatch active marks ── */
  document.querySelectorAll('.swatch').forEach((sw) => {
    sw.classList.toggle('sel', sw.dataset.c === S.color);
  });

  /* ── 5g. Background thumb active marks ── */
  document.querySelectorAll('.bg-thumb').forEach((t) => {
    t.classList.toggle('active', !S.bgImage && t.dataset.id === S.bgId);
  });

  /* ── 5h. Character counter ── */
  const len = S.text.length;
  DOM.charCount.textContent = `${len} / 300`;
  DOM.charCount.style.color = len >= 300 ? '#ef4444'
                            : len >= 250 ? '#f59e0b'
                            : 'var(--t3)';

  /* ── 5i. Slider track fills ── */
  setSliderTrack(DOM.sizeSlider, 13, 62, S.size);
  setSliderTrack(DOM.lhSlider,   10, 30, S.lineHeight * 10);
}


/**
 * applyTextStyle
 * Applies one of 4 visual text styles to #preview-span.
 * ────────────────────────────────────────────────────────────
 * This function is deliberately isolated so the 4-state logic
 * stays readable and easy to extend.
 *
 * IMPORTANT: We reset all style properties first, then
 * re-apply only what the current state needs. This prevents
 * stale values (e.g., leftover textShadow from Neon state
 * bleeding into Normal state on the next cycle).
 */
function applyTextStyle() {
  const ts       = S.textStyle;
  const col      = S.color;
  const { r, g, b } = hexToRgb(col);
  const span     = DOM.pvSpan;

  /* 1. Full CSS reset on the span (wipes all previous inline styles) */
  span.style.cssText = '';

  /* 2. Re-apply structural properties that render() needs on every call */
  span.style.display     = 'inline';
  span.style.whiteSpace  = 'pre-wrap';
  span.style.wordBreak   = 'break-word';
  span.style.fontFamily  = `'${S.font}', sans-serif`;
  span.style.fontSize    = `${S.size}px`;
  span.style.lineHeight  = S.lineHeight;

  /* 3. Remove all state classes, then add the correct one */
  span.classList.remove('style-solid', 'style-translucent', 'style-neon');

  /* 4. Apply state-specific styles */
  switch (ts) {

    /*
     * STATE 0 — Normal
     * ─────────────────────────────────────────────────────────────
     * Text is the selected palette color.
     * A very subtle drop-shadow adds readability over any background.
     */
    case 0:
      span.style.color      = col;
      span.style.textShadow = '0 1px 6px rgba(0, 0, 0, 0.50)';
      break;

    /*
     * STATE 1 — Solid Background
     * ─────────────────────────────────────────────────────────────
     * Background = selected color at 100% opacity.
     * Text auto-contrasts (black or white) for legibility.
     *
     * KEY TRICK: display:inline + box-decoration-break:clone
     * → CSS "clones" the padding, background, and border-radius
     *   onto EACH line box when text wraps to a new line.
     * → Result: every line gets its own pill-shaped background,
     *   exactly like the TikTok text highlight feature.
     * → The CSS class .style-solid sets box-decoration-break:clone.
     */
    case 1:
      span.classList.add('style-solid');
      span.style.backgroundColor = col;
      span.style.color           = contrastColor(col);
      span.style.padding         = '4px 11px';
      span.style.borderRadius    = '8px';
      // Explicitly set both prefixed and standard for max compatibility
      span.style.boxDecorationBreak         = 'clone';
      span.style.webkitBoxDecorationBreak   = 'clone';
      break;

    /*
     * STATE 2 — Translucent Background
     * ─────────────────────────────────────────────────────────────
     * Same as Solid, but background at 50% opacity.
     * We use rgba() (built via hexToRgb) because CSS transitions
     * can't interpolate between a named color and rgba.
     * Text stays white — dark text on semi-transparent bg is hard to read.
     */
    case 2:
      span.classList.add('style-translucent');
      span.style.backgroundColor = `rgba(${r}, ${g}, ${b}, 0.50)`;
      span.style.color           = '#ffffff';
      span.style.textShadow      = '0 1px 4px rgba(0, 0, 0, 0.55)';
      span.style.padding         = '4px 11px';
      span.style.borderRadius    = '8px';
      span.style.boxDecorationBreak         = 'clone';
      span.style.webkitBoxDecorationBreak   = 'clone';
      break;

    /*
     * STATE 3 — Neon / Outline
     * ─────────────────────────────────────────────────────────────
     * White text with:
     *   1. -webkit-text-stroke: outlines each glyph with the color.
     *   2. Multi-layer text-shadow: tight core glow + wide soft halo.
     *
     * The layered shadows create a luminous "sign" effect where:
     *   • Layer 1 (0 0 4px)  → bright inner core
     *   • Layer 2 (0 0 12px) → mid-range bloom
     *   • Layer 3 (0 0 28px) → wide halo at 70% opacity
     *   • Layer 4 (0 0 55px) → very wide diffuse glow at 35% opacity
     */
    case 3:
      span.classList.add('style-neon');
      span.style.color             = '#ffffff';
      span.style.webkitTextStroke  = `1.5px ${col}`;
      span.style.textShadow = [
        `0 0  4px ${col}`,
        `0 0 12px ${col}`,
        `0 0 28px rgba(${r}, ${g}, ${b}, 0.70)`,
        `0 0 55px rgba(${r}, ${g}, ${b}, 0.35)`,
      ].join(', ');
      break;
  }
}


/**
 * applyBackground
 * Writes the active background CSS to #preview-bg.
 * Handles both CSS-string backgrounds and uploaded image data-URLs.
 */
function applyBackground() {
  if (S.bgImage) {
    /* Uploaded image: override everything with the data-URL */
    DOM.previewBg.style.cssText           = '';
    DOM.previewBg.style.backgroundImage   = `url(${S.bgImage})`;
    DOM.previewBg.style.backgroundSize    = 'cover';
    DOM.previewBg.style.backgroundPosition = 'center';
    return;
  }

  const entry = BACKGROUNDS.find((b) => b.id === S.bgId);
  if (entry) {
    DOM.previewBg.style.cssText = bgCssForEntry(entry);
  }
}


/**
 * updateStyleCyclerUI
 * Updates the #style-btn button appearance and the surrounding
 * state indicator strip to reflect the current S.textStyle.
 */
function updateStyleCyclerUI() {
  const ts    = S.textStyle;
  const state = STYLE_STATES[ts];
  const col   = S.color;
  const { r, g, b } = hexToRgb(col);

  /* ── Button border class ── */
  DOM.styleBtn.className = `style-cycler ${state.btnClass}`;

  /* ── Button text label ── */
  DOM.styleLabel.textContent = state.label;

  /* ── State description strip ── */
  DOM.stateDesc.textContent = state.desc;

  /* ── Pip dots (one per state) ── */
  STYLE_STATES.forEach(({ id }) => {
    const pip = $(`state-pip-${id}`);
    if (!pip) return;
    pip.classList.toggle('pip--active', id === ts);
  });

  /* ── Mini "A" preview box inside the button ── */
  const preview = DOM.stylePreview;

  switch (ts) {
    case 0: // Normal
      preview.style.background        = 'transparent';
      preview.style.color             = col;
      preview.style.textShadow        = 'none';
      preview.style.border            = '1.5px solid rgba(255,255,255,0.22)';
      preview.style.webkitTextStroke  = '';
      break;

    case 1: // Solid
      preview.style.background        = col;
      preview.style.color             = contrastColor(col);
      preview.style.textShadow        = 'none';
      preview.style.border            = 'none';
      preview.style.webkitTextStroke  = '';
      break;

    case 2: // Translucent
      preview.style.background        = `rgba(${r}, ${g}, ${b}, 0.50)`;
      preview.style.color             = '#ffffff';
      preview.style.textShadow        = 'none';
      preview.style.border            = 'none';
      preview.style.webkitTextStroke  = '';
      break;

    case 3: // Neon
      preview.style.background        = 'transparent';
      preview.style.color             = col;
      preview.style.textShadow        = `0 0 8px ${col}, 0 0 20px ${col}`;
      preview.style.border            = '1.5px solid rgba(255,255,255,0.22)';
      preview.style.webkitTextStroke  = `0.5px ${col}`;
      break;
  }

  /* ── Mode pill (below swatches) ── */
  DOM.modePill.textContent = state.pillText;
  DOM.modePill.className   = `mode-pill ${state.pillCls}`;
}


/* ============================================================
   6. BUILD UI  — Inject dynamic elements
   ────────────────────────────────────────────────────────────
   Called once during init. Reads configuration arrays and
   generates DOM nodes so contributors only edit the arrays.
   ============================================================ */

/**
 * buildSwatches
 * Creates a circular color swatch button for each COLORS entry
 * and appends it to #swatches.
 */
function buildSwatches() {
  COLORS.forEach(({ c, name }) => {
    const btn             = document.createElement('button');
    btn.className         = 'swatch';
    btn.dataset.c         = c;
    btn.title             = name;
    btn.style.background  = c;
    btn.setAttribute('aria-label', name);

    btn.addEventListener('click', () => {
      S.color = c;
      render();
    });

    DOM.swatchWrap.appendChild(btn);
  });
}

/**
 * buildFontChips
 * Creates a scrollable chip button for each FONTS entry
 * and appends it to #font-row.
 */
function buildFontChips() {
  FONTS.forEach(({ family, label }, index) => {
    const btn = document.createElement('button');
    btn.className         = `font-chip${index === 0 ? ' active' : ''}`;
    btn.dataset.font      = family;
    btn.textContent       = label;
    btn.style.fontFamily  = `'${family}', sans-serif`;
    btn.setAttribute('role', 'listitem');

    btn.addEventListener('click', () => {
      S.font = family;
      document.querySelectorAll('.font-chip').forEach((c) => c.classList.remove('active'));
      btn.classList.add('active');
      render();
    });

    DOM.fontRow.appendChild(btn);
  });
}

/**
 * buildBackgroundThumbs
 * Creates a thumbnail card for each BACKGROUNDS entry and inserts
 * them before the upload label in #bg-row.
 *
 * Each thumb has an inner div that receives the background CSS/image,
 * preserving the card's border-radius clipping.
 */
function buildBackgroundThumbs() {
  const uploadLabel = DOM.bgRow.querySelector('label');

  BACKGROUNDS.forEach((bg) => {
    const wrap      = document.createElement('div');
    wrap.className  = `bg-thumb${bg.id === S.bgId ? ' active' : ''}`;
    wrap.dataset.id = bg.id;
    wrap.setAttribute('role', 'listitem');
    wrap.setAttribute('title', bg.id);

    const inner           = document.createElement('div');
    inner.className       = 't-inner';
    inner.style.cssText   = bgCssForEntry(bg);

    wrap.appendChild(inner);

    wrap.addEventListener('click', () => {
      S.bgId    = bg.id;
      S.bgImage = null;          // clear any uploaded image
      render();
    });

    /* Insert before the upload label so upload is always last */
    DOM.bgRow.insertBefore(wrap, uploadLabel);
  });
}


/* ============================================================
   7. EVENT HANDLERS
   ============================================================ */

/**
 * wireTextarea
 * Live-syncs textarea → S.text → render().
 */
function wireTextarea() {
  DOM.textarea.addEventListener('input', function () {
    S.text = this.value;
    render();
  });
}

/**
 * wireAlignment
 * Reads data-align from each .seg-btn and updates S.align.
 */
function wireAlignment() {
  document.querySelectorAll('.seg-btn[data-align]').forEach((btn) => {
    btn.addEventListener('click', function () {
      S.align = this.dataset.align;

      /* Update aria-pressed and active class */
      document.querySelectorAll('.seg-btn[data-align]').forEach((b) => {
        b.classList.remove('active');
        b.removeAttribute('aria-pressed');
      });
      this.classList.add('active');
      this.setAttribute('aria-pressed', 'true');

      render();
    });
  });
}

/**
 * wireStyleCycler
 * Advances S.textStyle through 0 → 1 → 2 → 3 → 0 … on each click.
 */
function wireStyleCycler() {
  DOM.styleBtn.addEventListener('click', () => {
    S.textStyle = (S.textStyle + 1) % STYLE_STATES.length;
    render();
  });
}

/**
 * wireSizeSlider
 * Updates S.size and the display value label on every slider move.
 */
function wireSizeSlider() {
  DOM.sizeSlider.addEventListener('input', function () {
    S.size                   = parseInt(this.value, 10);
    DOM.sizeVal.textContent  = `${S.size}px`;
    render();
  });
}

/**
 * wireLineHeightSlider
 * The slider stores integers 10–30 (representing 1.0×–3.0×).
 * Dividing by 10 avoids floating-point drift from step="0.1".
 */
function wireLineHeightSlider() {
  DOM.lhSlider.addEventListener('input', function () {
    S.lineHeight            = parseInt(this.value, 10) / 10;
    DOM.lhVal.textContent   = `${S.lineHeight.toFixed(1)}×`;
    render();
  });
}

/**
 * wireImageUpload
 * Converts the selected file to a data-URL and stores it in S.bgImage.
 * Input value is reset afterward so the same file can be re-uploaded.
 */
function wireImageUpload() {
  DOM.bgFile.addEventListener('change', function () {
    const file = this.files[0];
    if (!file) return;

    const reader    = new FileReader();
    reader.onload   = (e) => {
      S.bgImage = e.target.result;
      S.bgId    = null;
      render();
    };
    reader.readAsDataURL(file);

    /* Allow re-selecting the same file */
    this.value = '';
  });
}


/* ============================================================
   8. DRAG & DROP — Mouse + Touch  (absolute top/left)
   ────────────────────────────────────────────────────────────
   Design rationale for using top/left instead of transform:
   ┌──────────────────────────────────────────────────────────┐
   │  html2canvas reads the *painted* layout of DOM elements  │
   │  and reconstructs it on a canvas.                        │
   │                                                          │
   │  CSS transform-based positioning (translate) is applied  │
   │  AFTER layout and is NOT reliably captured by html2canvas │
   │  — the exported image often shows text at the original   │
   │  un-dragged position.                                    │
   │                                                          │
   │  Using top + left (which ARE layout properties) ensures  │
   │  html2canvas reads the correct dragged position.         │
   └──────────────────────────────────────────────────────────┘

   Two-phase position strategy:
   Phase 1 (CSS):  Container starts centered via:
                   top:50%; left:50%; transform:translate(-50%,-50%)
                   → pure CSS, zero JS needed for first paint.

   Phase 2 (JS):   On the first drag, initDragPosition() runs once:
                   1. Reads getBoundingClientRect() → pixel coords.
                   2. Sets explicit top/left px values.
                   3. Strips the CSS transform.
                   After that, only top/left are mutated.
   ============================================================ */

/** @type {boolean} Whether the user is currently dragging */
let isDragging = false;

/** @type {number} Client X/Y at drag start */
let dragStartX = 0;
let dragStartY = 0;

/** @type {number} Container top/left at drag start */
let containerStartX = 0;
let containerStartY = 0;

/** @type {boolean} True after initDragPosition() has run once */
let dragPositionInitialised = false;

/**
 * initDragPosition
 * One-time conversion from CSS transform-centering to explicit px coords.
 * Called on the first mousedown/touchstart on the text container.
 */
function initDragPosition() {
  if (dragPositionInitialised) return;

  const boxRect   = DOM.previewBox.getBoundingClientRect();
  const contRect  = DOM.textContainer.getBoundingClientRect();

  /* Current pixel position of the container relative to the card */
  const relTop    = contRect.top  - boxRect.top;
  const relLeft   = contRect.left - boxRect.left;

  /* Switch to explicit px — strip the centering transform */
  DOM.textContainer.style.transform = 'none';
  DOM.textContainer.style.top       = `${relTop}px`;
  DOM.textContainer.style.left      = `${relLeft}px`;

  dragPositionInitialised = true;
}

/**
 * clampDragPosition
 * Prevents the text container from being dragged completely out of frame.
 * Keeps at least MARGIN px of the container inside the card on all sides.
 *
 * @param {number} x  Desired left value
 * @param {number} y  Desired top value
 * @returns {{x:number, y:number}}
 */
function clampDragPosition(x, y) {
  const MARGIN = 20;
  const boxW   = DOM.previewBox.offsetWidth;
  const boxH   = DOM.previewBox.offsetHeight;
  const contW  = DOM.textContainer.offsetWidth;
  const contH  = DOM.textContainer.offsetHeight;

  return {
    x: Math.min(Math.max(x, MARGIN - contW), boxW - MARGIN),
    y: Math.min(Math.max(y, MARGIN - contH), boxH - MARGIN),
  };
}

/**
 * onDragStart  (shared by mouse and touch)
 * Records the pointer start position and the container's current position.
 */
function onDragStart(clientX, clientY) {
  /* Ensure we're working with top/left (not transform) */
  initDragPosition();

  isDragging      = true;
  dragStartX      = clientX;
  dragStartY      = clientY;
  containerStartX = parseFloat(DOM.textContainer.style.left) || 0;
  containerStartY = parseFloat(DOM.textContainer.style.top)  || 0;

  DOM.textContainer.classList.add('dragging');

  /* Hide the drag hint permanently after first interaction */
  DOM.dragHint.classList.add('hidden');
}

/**
 * onDragMove  (shared by mouse and touch)
 * Calculates new position from delta and applies it as top/left.
 */
function onDragMove(clientX, clientY) {
  if (!isDragging) return;

  const dx      = clientX - dragStartX;
  const dy      = clientY - dragStartY;
  const { x, y } = clampDragPosition(containerStartX + dx, containerStartY + dy);

  /* Direct DOM mutation here (not via render) for 60fps performance */
  DOM.textContainer.style.left = `${x}px`;
  DOM.textContainer.style.top  = `${y}px`;
}

/**
 * onDragEnd  (shared by mouse and touch)
 */
function onDragEnd() {
  if (!isDragging) return;
  isDragging = false;
  DOM.textContainer.classList.remove('dragging');
}

/**
 * wireDrag
 * Attaches all mouse and touch listeners.
 * Mouse events are on the container (start) and window (move/end).
 * Touch events need passive:false on move to call preventDefault().
 */
function wireDrag() {
  /* ── Mouse ── */
  DOM.textContainer.addEventListener('mousedown', (e) => {
    e.preventDefault();
    onDragStart(e.clientX, e.clientY);
  });

  window.addEventListener('mousemove', (e) => {
    onDragMove(e.clientX, e.clientY);
  });

  window.addEventListener('mouseup', onDragEnd);

  /* ── Touch ── */
  DOM.textContainer.addEventListener('touchstart', (e) => {
    e.preventDefault(); /* prevents page scroll while dragging */
    const touch = e.touches[0];
    onDragStart(touch.clientX, touch.clientY);
  }, { passive: false });

  window.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const touch = e.touches[0];
    onDragMove(touch.clientX, touch.clientY);
  }, { passive: false });

  window.addEventListener('touchend', onDragEnd);
}


/* ============================================================
   9. EXPORT — html2canvas PNG download
   ────────────────────────────────────────────────────────────
   We render #preview-box at 3× device pixel ratio for a
   high-resolution output suitable for sharing on social media.

   html2canvas compatibility notes:
   • scale:3          → 3× resolution
   • useCORS:true     → allows images from same origin / CORS headers
   • allowTaint:true  → captures images that can't be served CORS-clean
   • backgroundColor:null → preserves transparency where applicable
   • initDragPosition() is called before capture so the text container
     has explicit top/left coords (not a CSS transform).
   ============================================================ */

/**
 * wireExport
 * Attaches the click handler to #dl-btn.
 * Manages three button states: default → loading → success.
 */
function wireExport() {
  DOM.dlBtn.addEventListener('click', async () => {
    if (DOM.dlBtn.disabled) return;

    /* Ensure text container uses top/left before html2canvas reads layout */
    initDragPosition();

    /* ── Loading state ── */
    DOM.dlBtn.disabled          = true;
    DOM.dlIcon.style.display    = 'none';
    DOM.dlSpin.style.display    = 'block';
    DOM.dlLbl.textContent       = 'جاري التصدير...';

    try {
      const canvas = await html2canvas(DOM.previewBox, {
        scale:           3,
        useCORS:         true,
        allowTaint:      true,
        backgroundColor: null,
        logging:         false,
      });

      /* Trigger browser download */
      const link      = document.createElement('a');
      link.download   = `story-${Date.now()}.png`;
      link.href       = canvas.toDataURL('image/png');
      link.click();

      /* ── Success state ── */
      DOM.dlBtn.classList.add('ok');
      DOM.dlSpin.style.display    = 'none';
      DOM.dlOkIcon.style.display  = 'block';
      DOM.dlLbl.textContent       = 'تم الحفظ بنجاح ✓';

      /* Reset after 2.7 s */
      setTimeout(() => {
        DOM.dlBtn.classList.remove('ok');
        DOM.dlBtn.disabled          = false;
        DOM.dlOkIcon.style.display  = 'none';
        DOM.dlIcon.style.display    = 'block';
        DOM.dlLbl.textContent       = 'تنزيل القصة';
      }, 2700);

    } catch (err) {
      /* ── Error state — restore button ── */
      console.error('[Story Maker Pro] Export failed:', err);
      DOM.dlBtn.disabled       = false;
      DOM.dlSpin.style.display = 'none';
      DOM.dlIcon.style.display = 'block';
      DOM.dlLbl.textContent    = 'تنزيل القصة';
      alert('حدث خطأ أثناء التصدير. يرجى المحاولة مرة أخرى.');
    }
  });
}


/* ============================================================
   10. INIT — Application entry point
   ────────────────────────────────────────────────────────────
   Execution order matters:
     1. Build dynamic UI (swatches, chips, thumbs)
     2. Wire all event handlers
     3. Initial render to paint the correct default state
   ============================================================ */

function init() {
  /* 1. Build dynamic UI elements from config arrays */
  buildSwatches();
  buildFontChips();
  buildBackgroundThumbs();

  /* 2. Wire event handlers */
  wireTextarea();
  wireAlignment();
  wireStyleCycler();
  wireSizeSlider();
  wireLineHeightSlider();
  wireImageUpload();
  wireDrag();
  wireExport();

  /* 3. Paint initial state */
  render();

  console.info('[Story Maker Pro] ✦ Ready — صانع القصص جاهز');
}

/* ── Run ── */
init();
