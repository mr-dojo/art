# THE VISUAL LANGUAGE
**Context:** The website is a gallery, not a catalog. Every design choice echoes the family's artistic DNA.

---

## Core Design Philosophy

**The art takes up 80% of the screen.**

Everything else—navigation, text, buttons—is secondary. The user came to see the work. Show them the work.

---

## Color System

### Primary Palette: "The Canvas"

**Canvas Cream** `#F5F1E8`
- Background for everything
- Soft, textured off-white
- Never pure white (too harsh)
- Echoes actual canvas texture

**Gallery Black** `#1A1A1A`
- Text
- Navigation
- Borders
- Not pure black (too heavy)

**Iron Gray** `#4A4A4A`
- Secondary text
- Metadata
- Subtle dividers
- References the ironwork heritage

### Accent Colors: "The Lineage"

**Maui Blue** `#0077BE`
- Links
- Active states
- Ralph's Maui period
- Use sparingly

**Scroll Gold** `#B8860B`
- Call-to-action buttons ("Acquire," "Commission")
- Authentication badges
- Premium elements
- References ironwork patina

**Lahaina Coral** `#FF6F61`
- Sale/featured indicators
- Notifications
- Augustine's fish series
- Energy accent

### Usage Rules

1. **Background:** Always Canvas Cream
2. **Text:** Gallery Black for primary, Iron Gray for secondary
3. **Interactive:** Maui Blue for links, Scroll Gold for CTAs
4. **Never:** Bright backgrounds, high-contrast overlays on images

---

## Typography

### Headings: "Cormorant Garamond"
- Serif font
- Elegant but not precious
- Used for:
  - Artist names
  - Artwork titles
  - Section headers

**Sizes:**
- H1: 48px (Homepage hero)
- H2: 36px (Artist names)
- H3: 24px (Artwork titles)

### Body: "Inter"
- Sans-serif
- Clean, readable
- Used for:
  - Descriptions
  - Metadata
  - Navigation
  - UI elements

**Sizes:**
- Body: 16px
- Small: 14px (metadata)
- Tiny: 12px (copyright, footnotes)

### Rules
1. **Minimum contrast ratio:** 4.5:1 (accessibility)
2. **Line height:** 1.6 (readability)
3. **Max line length:** 70 characters
4. **No ALL CAPS** (except logo)

---

## Layout Patterns

### The Gallery Walk (Homepage)

**Structure:** Horizontal scroll
- Full-bleed images
- Minimal text overlays
- Sequential narrative

**Panels:**
1. **Panel 1:** Calogero's ironwork (B&W, tight crop)
   - Caption: "Iron."
2. **Panel 2:** Ralph's Gulf Coast abstract (moody, dark)
   - Caption: "Jazz."
3. **Panel 3:** Augustine's Lahaina Fish (vibrant, playful)
   - Caption: "Flow."
4. **Panel 4:** Current collection grid
   - Caption: "Now."

**Technical:**
- Snap scrolling
- Touch-friendly on mobile
- Arrow navigation for desktop
- Progress indicator (subtle dots)

### The Product Page

**Structure:** Art-dominant, minimal chrome

```
┌─────────────────────────────────────┐
│                                     │
│                                     │
│          [ARTWORK IMAGE]            │
│          (70% of viewport)          │
│                                     │
│                                     │
└─────────────────────────────────────┘
┌─────────────────────────────────────┐
│ "Lahaina Fish #47"                  │
│ Augustine Costantino                │
│ 2015 · Acrylic on canvas · 24x24"  │
│                                     │
│ [One-sentence story]                │
│                                     │
│ $1,200     [Acquire]                │
└─────────────────────────────────────┘
```

**Image Requirements:**
- **Zoom enabled** (critical for seeing brushwork)
- **High resolution** (300 DPI minimum)
- **Multiple angles** (front, detail, signature if available)
- **Color accurate** (calibrated)

**Metadata Display:**
- Title (H3)
- Artist name (H2, linked)
- Year · Medium · Dimensions (small gray text)
- Story (one sentence, normal text)
- Price + CTA (prominent)

### The Collection Grid

**Structure:** Masonry layout (Pinterest-style)

- Variable heights (based on artwork dimensions)
- Fixed width (responsive breakpoints)
- Hover state: Artist name + title appear
- Click: Opens product page

**Filters:**
- By Artist
- By Era
- By Style (Abstract, Portrait, Landscape, etc.)
- By Availability (Available, Sold, Commission)
- By Price (Range slider)

**Sorting:**
- Featured (default)
- Newest
- Oldest
- Price: Low to High
- Price: High to Low
- Artist (alphabetical)

### Navigation

**Primary Nav:** Hidden hamburger menu (top right)
- About the Family
- The Collection
- Commissions
- Authentication
- Contact

**Secondary Nav:** Filter/sort (collection pages only)

**Sticky Elements:** None (let the art breathe)

---

## Interactive Elements

### Buttons

**Primary (CTA):**
- Scroll Gold background
- Gallery Black text
- Rounded corners (4px)
- Padding: 12px 24px
- Hover: Darken 10%

**Secondary:**
- Canvas Cream background
- Gallery Black border (1px)
- Gallery Black text
- Hover: Subtle background shift

**Text Links:**
- Maui Blue
- Underline on hover
- No underline default

### Forms

**Input Fields:**
- Canvas Cream background
- Iron Gray border (1px)
- Gallery Black text
- Focus: Maui Blue border
- Padding: 12px

**Labels:**
- Iron Gray
- 14px
- Above field (not placeholder)

**Validation:**
- Error: Lahaina Coral border + message
- Success: Scroll Gold border

### Image Gallery

**Thumbnails:**
- Square crop (1:1 ratio)
- Subtle border (Iron Gray, 1px)
- Hover: Scale 1.05, add shadow
- Active: Scroll Gold border

**Lightbox:**
- Canvas Cream background (80% opacity)
- Close button: Top right
- Navigation: Arrow keys + on-screen arrows
- Zoom: Click image or pinch

---

## Spacing System

**Base unit:** 8px

- **XS:** 4px (tight elements)
- **S:** 8px (related elements)
- **M:** 16px (standard spacing)
- **L:** 24px (section breaks)
- **XL:** 32px (major sections)
- **XXL:** 48px (page sections)

**Grid:**
- 12-column grid
- Gutter: 16px
- Max width: 1200px (content)
- Images: Can exceed max width (full-bleed)

---

## Responsive Breakpoints

**Desktop:** 1200px+
- Horizontal scroll homepage
- Multi-column grid (3-4 columns)
- Large images

**Tablet:** 768px - 1199px
- Horizontal scroll (touch-optimized)
- Two-column grid
- Medium images

**Mobile:** < 768px
- Vertical scroll
- Single-column grid
- Full-width images
- Simplified nav (full-screen menu)

---

## Motion & Animation

### Subtle Only

**Acceptable:**
- Fade in on scroll (100ms)
- Button hover transitions (200ms)
- Image zoom (300ms ease-out)
- Menu slide (250ms ease)

**Never:**
- Autoplay carousels
- Parallax scrolling
- Spinning elements
- Bouncing effects
- Anything distracting from the art

### Loading States

**Image Loading:**
- Canvas Cream placeholder
- Fade in when loaded
- Progressive loading (blur-up)

**Content Loading:**
- Skeleton screens (subtle gray shapes)
- No spinners (too distracting)

---

## The Costantino Scroll (Design Motif)

**Visual Element:** Subtle curved line
- Appears in:
  - Page dividers
  - Section breaks
  - Logo detail
  - Decorative elements

**Rules:**
- Never over art
- Always subtle (Iron Gray, thin)
- References ironwork heritage
- Used sparingly

**SVG Pattern:**
```svg
<svg viewBox="0 0 100 10">
  <path d="M0,5 Q25,0 50,5 T100,5"
        stroke="#4A4A4A"
        fill="none"
        stroke-width="1"/>
</svg>
```

---

## Image Treatment Rules

### The Art (Primary Images)

**Never:**
- Crop the artwork (show full piece)
- Add filters or effects
- Overlay text directly on art
- Use as background image

**Always:**
- High resolution (min 2000px on long edge)
- Color calibrated
- Clean background (studio shot preferred)
- Multiple views if possible

**Acceptable:**
- Subtle drop shadow (for depth)
- Border (1px Iron Gray) if needed
- Zoom/pan on hover or click

### Supporting Images (Studio shots, process, etc.)

**Style:**
- Natural light preferred
- Minimal editing
- Authentic (not overly produced)
- Canvas Cream backdrop when possible

---

## Accessibility

### Minimum Requirements

1. **Color Contrast:** 4.5:1 for text, 3:1 for UI
2. **Alt Text:** Every image (descriptive, not generic)
3. **Keyboard Navigation:** Full site navigable
4. **Screen Reader:** Semantic HTML, ARIA labels
5. **Focus States:** Visible on all interactive elements

### Image Alt Text Format

**Artwork:**
```
"[Title] by [Artist], [Year]. [Medium]. [Brief visual description]."

Example:
"Lahaina Fish #47 by Augustine Costantino, 2015. Acrylic on canvas. A vibrant, mosaic-style fish in coral, blue, and gold geometric patterns against a white background."
```

**Decorative:**
```
alt=""
```

---

## Print Specifications

### For Prints/Reproductions

**Resolution:** 300 DPI minimum
**Color Space:** Adobe RGB (for printing), sRGB (for web)
**File Format:**
- Original: TIFF (uncompressed)
- Web: JPEG (85% quality) or WebP
**Dimensions:** Match original artwork aspect ratio

### Proofing

- Calibrated monitor required
- Test prints for color accuracy
- Document color profile used

---

## Brand Assets

### Logo

**Primary:** "COSTANTINO" in Cormorant Garamond
- All caps
- Gallery Black
- Subtle scroll detail integrated

**Variations:**
- Lockup with "Family of Artists" subtitle
- Icon-only version (scroll motif)

**Usage:**
- Header: Left-aligned or center
- Footer: Center
- Documents: Top left

### Tagline

**Primary:** "Four Generations. One Vision."

**Alternate:** "From Iron to Canvas"

**Usage:**
- About page
- Email signatures
- Print materials

---

## Iconography

**Style:** Line icons
- Stroke width: 2px
- Color: Gallery Black or Iron Gray
- Size: 24px standard

**Common Icons:**
- Hamburger menu (☰)
- Close (✕)
- Zoom (+)
- Share (⤴)
- Cart (🛒)
- Search (🔍)

---

## The Golden Rules

1. **Art dominates.** Everything else is secondary.
2. **Canvas Cream background.** Always.
3. **Never obscure the artwork.** No overlays, filters, crops.
4. **Subtle motion only.** Nothing distracting.
5. **Typography hierarchy.** Artist name > Title > Metadata.
6. **Mobile-first thinking.** But art-first always.
7. **Accessibility is not optional.** Everyone should see the art.
8. **When in doubt, use more white space.**

---

## Decision Tree for Design Choices

**Question:** Should I add this element?
**Test:** Does it help the user see or understand the art better?
- **Yes:** Add it (subtly)
- **No:** Remove it

**Question:** What color should this be?
**Test:** Is it the art?
- **Yes:** True to original
- **No:** Canvas Cream, Gallery Black, or Iron Gray

**Question:** How much animation?
**Test:** Would it distract from the art?
- **Yes:** Too much, dial back
- **No:** Proceed (but still keep subtle)

**Question:** Where should this text go?
**Test:** Is it covering the artwork?
- **Yes:** Move it
- **No:** Assess hierarchy and alignment
