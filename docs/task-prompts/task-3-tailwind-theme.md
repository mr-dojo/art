# Task 3: Configure Tailwind Custom Theme

## Context
Configure Tailwind CSS to use the Costantino Art design system colors and fonts. This enables using design tokens via Tailwind utility classes (e.g., `bg-canvas-cream`, `text-gallery-black`).

## Design System Reference

### Colors (from visual-language.md)

**Primary Palette:**
- Canvas Cream: `#F5F1E8`
- Gallery Black: `#1A1A1A`
- Iron Gray: `#4A4A4A`

**Accent Colors:**
- Maui Blue: `#0077BE`
- Scroll Gold: `#B8860B`
- Lahaina Coral: `#FF6F61`

### Typography

**Heading Font:** Cormorant Garamond (serif)
**Body Font:** Inter (sans-serif)

**Font Sizes:**
- H1: 48px
- H2: 36px
- H3: 24px
- Body: 16px
- Small: 14px
- Tiny: 12px

**Line Height:** 1.6 (for body text)

## Requirements

1. **Extend Tailwind's default theme** (don't replace it)
2. **Add custom colors** to the color palette
3. **Configure font families** using CSS variables from Task 1
4. **Add custom font sizes** matching the design spec
5. **Set default line height** to 1.6

## Implementation

### Update `tailwind.config.ts`

Replace the content with:

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Palette
        'canvas-cream': '#F5F1E8',
        'gallery-black': '#1A1A1A',
        'iron-gray': '#4A4A4A',

        // Accent Colors
        'maui-blue': '#0077BE',
        'scroll-gold': '#B8860B',
        'lahaina-coral': '#FF6F61',
      },
      fontFamily: {
        'heading': ['var(--font-cormorant)', 'serif'],
        'body': ['var(--font-inter)', 'sans-serif'],
        'sans': ['var(--font-inter)', 'sans-serif'],
        'serif': ['var(--font-cormorant)', 'serif'],
      },
      fontSize: {
        'h1': '48px',
        'h2': '36px',
        'h3': '24px',
        'body': '16px',
        'small': '14px',
        'tiny': '12px',
      },
      lineHeight: {
        'normal': '1.6',
      },
      backgroundColor: {
        'default': '#F5F1E8', // Canvas Cream
      },
      textColor: {
        'default': '#1A1A1A', // Gallery Black
      },
    },
  },
  plugins: [],
};

export default config;
```

## Success Criteria

- [ ] Custom colors accessible via Tailwind classes (e.g., `bg-canvas-cream`, `text-gallery-black`)
- [ ] Font families use CSS variables from Next.js font optimization
- [ ] Custom font sizes available (e.g., `text-h1`, `text-h2`)
- [ ] Default line height set to 1.6
- [ ] Tailwind IntelliSense shows custom colors and fonts
- [ ] Build completes successfully
- [ ] No TypeScript errors

## Files to Modify

- `tailwind.config.ts` - Extend theme with design system

## Testing

Create a test component to verify:

```tsx
// Test in any component
<div className="bg-canvas-cream text-gallery-black">
  <h1 className="font-heading text-h1">Test Heading</h1>
  <p className="font-body text-body text-iron-gray">Test body text</p>
  <button className="bg-scroll-gold">Test Button</button>
  <a className="text-maui-blue">Test Link</a>
</div>
```

Run:
```bash
npm run dev
# Verify classes apply correctly
npm run build
# Verify build succeeds
```

## Usage Examples

After implementation, these Tailwind classes will be available:

**Colors:**
- `bg-canvas-cream` - Canvas Cream background
- `text-gallery-black` - Gallery Black text
- `text-iron-gray` - Iron Gray text
- `text-maui-blue` - Maui Blue links
- `bg-scroll-gold` - Scroll Gold buttons
- `border-iron-gray` - Iron Gray borders

**Typography:**
- `font-heading` - Cormorant Garamond
- `font-body` - Inter
- `text-h1` - 48px
- `text-h2` - 36px
- `text-h3` - 24px

## Notes

- Use `extend` to preserve Tailwind's default utilities
- Font family references use CSS variables created by Next.js (Task 1)
- DO NOT modify spacing system here (Task 5 handles that)
- The `content` array ensures Tailwind scans all component files
