# Task 4: Set Up Typography System in globals.css

## Context
Establish the complete typography system in `app/globals.css` using the specifications from `docs/visual-language.md`. This creates base styles for all heading and text elements.

## Typography Specifications

### Heading Styles (Cormorant Garamond)

**H1: 48px**
- Usage: Homepage hero
- Font: Cormorant Garamond
- Weight: 700 (bold)
- Line height: 1.2

**H2: 36px**
- Usage: Artist names
- Font: Cormorant Garamond
- Weight: 600 (semi-bold)
- Line height: 1.3

**H3: 24px**
- Usage: Artwork titles
- Font: Cormorant Garamond
- Weight: 600 (semi-bold)
- Line height: 1.4

### Body Text Styles (Inter)

**Body: 16px**
- Usage: Descriptions, standard text
- Font: Inter
- Weight: 400 (regular)
- Line height: 1.6

**Small: 14px**
- Usage: Metadata (year, medium, dimensions)
- Font: Inter
- Weight: 400 (regular)
- Line height: 1.6
- Color: Iron Gray (#4A4A4A)

**Tiny: 12px**
- Usage: Copyright, footnotes
- Font: Inter
- Weight: 400 (regular)
- Line height: 1.5
- Color: Iron Gray (#4A4A4A)

## Typography Rules

1. **Minimum contrast ratio:** 4.5:1 (accessibility)
2. **Line height:** 1.6 for body text
3. **Max line length:** 70 characters (for readability)
4. **No ALL CAPS** (except logo and specific UI elements)

## Implementation

### Add to `app/globals.css`

Add this typography system **after** the `body` styles and **before** the `@layer utilities`:

```css
/* Typography System */

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-cormorant, serif);
  color: var(--gallery-black);
  font-weight: 600;
  margin: 0;
  line-height: 1.3;
}

h1 {
  font-size: 48px;
  font-weight: 700;
  line-height: 1.2;
}

h2 {
  font-size: 36px;
  font-weight: 600;
  line-height: 1.3;
}

h3 {
  font-size: 24px;
  font-weight: 600;
  line-height: 1.4;
}

h4 {
  font-size: 20px;
  line-height: 1.4;
}

h5 {
  font-size: 18px;
  line-height: 1.5;
}

h6 {
  font-size: 16px;
  line-height: 1.5;
}

p {
  font-family: var(--font-inter, sans-serif);
  font-size: 16px;
  line-height: 1.6;
  color: var(--gallery-black);
  margin: 0;
  max-width: 70ch; /* 70 character max line length */
}

/* Text Size Utilities */
.text-small {
  font-size: 14px;
  line-height: 1.6;
  color: var(--iron-gray);
}

.text-tiny {
  font-size: 12px;
  line-height: 1.5;
  color: var(--iron-gray);
}

/* Link Styles */
a {
  color: var(--maui-blue);
  text-decoration: none;
  transition: text-decoration 0.2s ease;
}

a:hover {
  text-decoration: underline;
}

a:focus {
  outline: 2px solid var(--maui-blue);
  outline-offset: 2px;
}

/* Strong/Bold */
strong, b {
  font-weight: 600;
}

/* Emphasis */
em, i {
  font-style: italic;
}
```

## Success Criteria

- [ ] All heading elements (h1-h6) use Cormorant Garamond
- [ ] H1 is 48px, H2 is 36px, H3 is 24px
- [ ] All paragraph text uses Inter font
- [ ] Body text has 1.6 line height
- [ ] Paragraphs max-width is 70ch (70 characters)
- [ ] Links are Maui Blue (#0077BE)
- [ ] Links underline on hover
- [ ] Small text (14px) uses Iron Gray color
- [ ] Tiny text (12px) uses Iron Gray color
- [ ] Focus states are visible on links (accessibility)

## Files to Modify

- `app/globals.css` - Add typography styles after body, before @layer utilities

## Testing

Create a test page with all typography elements:

```tsx
<div>
  <h1>Heading 1 - 48px</h1>
  <h2>Heading 2 - 36px</h2>
  <h3>Heading 3 - 24px</h3>
  <p>Body paragraph text at 16px with 1.6 line height and max 70 characters width.</p>
  <p className="text-small">Small text at 14px in Iron Gray</p>
  <p className="text-tiny">Tiny text at 12px in Iron Gray</p>
  <a href="#">Test link in Maui Blue</a>
</div>
```

Visual checks:
1. Run `npm run dev`
2. Verify headings use serif font (Cormorant Garamond)
3. Verify body text uses sans-serif font (Inter)
4. Verify heading sizes: H1 (48px), H2 (36px), H3 (24px)
5. Verify paragraph max-width constrains line length
6. Hover over link - should underline
7. Tab to link - should show focus outline

## Accessibility Requirements

- **Color contrast:** All text meets WCAG AA (4.5:1 for normal text, 3:1 for large text)
  - Gallery Black on Canvas Cream: ✓ Passes
  - Iron Gray on Canvas Cream: ✓ Passes
  - Maui Blue on Canvas Cream: ✓ Passes
- **Focus indicators:** Visible on all interactive elements
- **Font sizes:** Minimum 12px for readability

## Notes

- Font families reference CSS variables created by Next.js font optimization (Task 1)
- Color variables reference values from globals.css (Task 2)
- DO NOT modify Tailwind utilities section
- These are base styles; Tailwind utilities can still override them
- The max-width: 70ch ensures readable line lengths for paragraphs
