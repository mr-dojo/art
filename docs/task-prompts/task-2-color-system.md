# Task 2: Implement Color System in globals.css

## Context
The Costantino Art website has a specific color palette defined in `docs/visual-language.md`. Implement this color system using CSS custom properties in `app/globals.css`.

## Color Specifications

### Primary Palette: "The Canvas"

**Canvas Cream** `#F5F1E8`
- Background for everything
- Soft, textured off-white
- Never pure white (too harsh)

**Gallery Black** `#1A1A1A`
- Text
- Navigation
- Borders
- Not pure black (too heavy)

**Iron Gray** `#4A4A4A`
- Secondary text
- Metadata
- Subtle dividers

### Accent Colors: "The Lineage"

**Maui Blue** `#0077BE`
- Links
- Active states
- Use sparingly

**Scroll Gold** `#B8860B`
- Call-to-action buttons ("Acquire," "Commission")
- Authentication badges
- Premium elements

**Lahaina Coral** `#FF6F61`
- Sale/featured indicators
- Notifications
- Energy accent

## Requirements

1. **Replace existing color variables** in `:root`
2. **Remove dark mode** color scheme (not in design spec)
3. **Set Canvas Cream as default background**
4. **Set Gallery Black as default text color**
5. **Create semantic color variables** for common use cases

## Implementation

### Update `app/globals.css`

Replace the existing `:root` section with:

```css
:root {
  /* Primary Palette */
  --canvas-cream: #F5F1E8;
  --gallery-black: #1A1A1A;
  --iron-gray: #4A4A4A;

  /* Accent Colors */
  --maui-blue: #0077BE;
  --scroll-gold: #B8860B;
  --lahaina-coral: #FF6F61;

  /* Semantic Variables */
  --background: var(--canvas-cream);
  --foreground: var(--gallery-black);
  --text-primary: var(--gallery-black);
  --text-secondary: var(--iron-gray);
  --link-color: var(--maui-blue);
  --cta-color: var(--scroll-gold);
  --accent-color: var(--lahaina-coral);

  /* Border */
  --border-color: var(--iron-gray);
}
```

### Update Body Styles

Replace the existing `body` styles with:

```css
body {
  color: var(--foreground);
  background: var(--background);
  font-family: var(--font-inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
```

### Remove Dark Mode

**DELETE** the entire dark mode media query block:

```css
/* DELETE THIS ENTIRE BLOCK */
@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
  }
}
```

## Success Criteria

- [ ] All 6 brand colors defined as CSS custom properties
- [ ] Semantic color variables created for common use cases
- [ ] Canvas Cream (#F5F1E8) set as default background
- [ ] Gallery Black (#1A1A1A) set as default text color
- [ ] Dark mode media query removed completely
- [ ] Body background is Canvas Cream, not white
- [ ] No console errors
- [ ] Page renders with the new color scheme

## Files to Modify

- `app/globals.css` - Update color system, remove dark mode

## Testing

Visual check:
1. Run `npm run dev`
2. Open browser to `http://localhost:3000`
3. Verify background is Canvas Cream (soft off-white, not pure white)
4. Verify text is Gallery Black (dark gray, not pure black)
5. Open DevTools > Elements > Computed styles
6. Verify `--canvas-cream`, `--gallery-black`, etc. are defined

## Notes

- Keep the existing Tailwind directives at the top
- Keep the `.text-balance` utility at the bottom
- DO NOT modify font-family references (Task 1 handles fonts)
- DO NOT modify Tailwind config (Task 3 handles that)
