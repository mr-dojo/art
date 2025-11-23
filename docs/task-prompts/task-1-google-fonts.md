# Task 1: Set up Google Fonts in Next.js App

## Context
The Costantino Art website uses a specific typography system defined in `docs/visual-language.md`. We need to integrate Google Fonts (Cormorant Garamond for headings, Inter for body text) into the Next.js application.

## Typography Specification

### Headings: Cormorant Garamond
- **Font Family:** "Cormorant Garamond" (serif)
- **Google Fonts URL:** https://fonts.google.com/specimen/Cormorant+Garamond
- **Weights Needed:** 400 (regular), 600 (semi-bold), 700 (bold)
- **Usage:** Artist names, artwork titles, section headers

### Body: Inter
- **Font Family:** "Inter" (sans-serif)
- **Google Fonts URL:** https://fonts.google.com/specimen/Inter
- **Weights Needed:** 400 (regular), 500 (medium), 600 (semi-bold)
- **Usage:** Descriptions, metadata, navigation, UI elements

## Requirements

1. **Use Next.js 14's built-in font optimization** (`next/font/google`)
2. **Configure both fonts in `app/layout.tsx`**
3. **Set up CSS variables** for use throughout the app
4. **Follow Next.js best practices** for font loading and optimization

## Implementation Steps

### 1. Update `app/layout.tsx`

Import both fonts from `next/font/google`:

```typescript
import { Cormorant_Garamond, Inter } from 'next/font/google';

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});
```

### 2. Apply Font Variables to HTML

Add the font variables to the `<html>` or `<body>` tag:

```typescript
<html lang="en" className={`${cormorantGaramond.variable} ${inter.variable}`}>
```

### 3. Update Global CSS

The CSS variables `--font-cormorant` and `--font-inter` will be automatically available for use in `globals.css` and Tailwind configuration.

## Success Criteria

- [ ] Cormorant Garamond loads correctly with weights 400, 600, 700
- [ ] Inter loads correctly with weights 400, 500, 600
- [ ] CSS variables `--font-cormorant` and `--font-inter` are available globally
- [ ] Fonts use `display: swap` for better performance
- [ ] No console errors related to font loading
- [ ] Build completes successfully (`npm run build`)

## Files to Modify

- `app/layout.tsx` - Add font imports and configuration

## Testing

Run these commands to verify:
```bash
npm run dev
# Check browser DevTools > Network tab for font requests
# Check browser DevTools > Elements > Computed styles for font families
npm run build
# Verify build succeeds
```

## Notes

- DO NOT modify `globals.css` or `tailwind.config.ts` in this task
- These fonts will be referenced by other tasks through CSS variables
- Next.js will automatically optimize and self-host these Google Fonts
