# Task 5: Add Spacing System to Tailwind Config

## Context
Implement the spacing system defined in `docs/visual-language.md` into the Tailwind configuration. This provides consistent spacing utilities throughout the application.

## Spacing Specifications

**Base unit:** 8px

### Spacing Scale

- **XS:** 4px (tight elements)
- **S:** 8px (related elements)
- **M:** 16px (standard spacing)
- **L:** 24px (section breaks)
- **XL:** 32px (major sections)
- **XXL:** 48px (page sections)

### Grid System

- **12-column grid**
- **Gutter:** 16px
- **Max width:** 1200px (for content containers)
- **Images:** Can exceed max width (full-bleed capability)

## Requirements

1. **Add custom spacing values** to Tailwind's spacing scale
2. **Configure max-width** for content containers
3. **Set up gap/gutter** values for grid layouts
4. **Preserve Tailwind's default spacing** (use extend)

## Implementation

### Update `tailwind.config.ts`

Add the spacing configuration to the `extend` object:

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
      // ... existing colors, fontFamily, fontSize ...

      spacing: {
        'xs': '4px',
        's': '8px',
        'm': '16px',
        'l': '24px',
        'xl': '32px',
        'xxl': '48px',
        'gutter': '16px',
      },
      maxWidth: {
        'content': '1200px',
        'full-bleed': '100vw',
      },
      gap: {
        'gutter': '16px',
      },
      gridTemplateColumns: {
        'gallery': 'repeat(12, 1fr)',
      },
    },
  },
  plugins: [],
};

export default config;
```

## Success Criteria

- [ ] Custom spacing values available as Tailwind utilities
- [ ] Can use `p-xs`, `m-s`, `gap-m`, `mt-l`, `px-xl`, `py-xxl`, etc.
- [ ] Max-width utilities include `max-w-content` (1200px)
- [ ] Gap utility includes `gap-gutter` (16px)
- [ ] Grid template includes `grid-cols-gallery` (12 columns)
- [ ] Tailwind IntelliSense shows custom spacing values
- [ ] Build completes successfully
- [ ] No TypeScript errors

## Files to Modify

- `tailwind.config.ts` - Add spacing system to theme.extend

## Testing

Test the spacing utilities in a component:

```tsx
// Test component
<div className="max-w-content mx-auto">
  <div className="grid grid-cols-gallery gap-gutter">
    <div className="col-span-12">
      <h1 className="mb-l">Heading with L spacing below</h1>
      <div className="p-m bg-canvas-cream">
        <p className="mb-s">Paragraph with S spacing below</p>
        <button className="px-l py-s">Button with custom padding</button>
      </div>
      <div className="mt-xxl">Section with XXL margin top</div>
    </div>
  </div>
</div>
```

Run:
```bash
npm run dev
# Verify spacing values apply correctly
npm run build
# Verify build succeeds
```

Verify in browser DevTools:
- `p-xs` → padding: 4px
- `m-s` → margin: 8px
- `gap-m` → gap: 16px
- `mt-l` → margin-top: 24px
- `px-xl` → padding-left/right: 32px
- `py-xxl` → padding-top/bottom: 48px
- `max-w-content` → max-width: 1200px

## Available Utilities After Implementation

### Spacing Classes

**Margin:**
- `m-xs`, `m-s`, `m-m`, `m-l`, `m-xl`, `m-xxl`
- Also: `mt-`, `mr-`, `mb-`, `ml-`, `mx-`, `my-` variants

**Padding:**
- `p-xs`, `p-s`, `p-m`, `p-l`, `p-xl`, `p-xxl`
- Also: `pt-`, `pr-`, `pb-`, `pl-`, `px-`, `py-` variants

**Gap (for flex/grid):**
- `gap-xs`, `gap-s`, `gap-m`, `gap-l`, `gap-xl`, `gap-xxl`, `gap-gutter`

**Width/Max-width:**
- `max-w-content` (1200px for content containers)
- `max-w-full-bleed` (100vw for full-width images)

**Grid:**
- `grid-cols-gallery` (12-column grid)

## Design System Alignment

These spacing values align with the visual hierarchy:

- **XS (4px):** Form elements, tight UI components
- **S (8px):** Related text elements, list items
- **M (16px):** Default spacing, paragraph separation, gutters
- **L (24px):** Section breaks within a page
- **XL (32px):** Major section dividers
- **XXL (48px):** Page-level section breaks

## Layout Examples

**Content Container:**
```tsx
<div className="max-w-content mx-auto px-m">
  {/* Centered content, max 1200px width, 16px horizontal padding */}
</div>
```

**12-Column Grid:**
```tsx
<div className="grid grid-cols-gallery gap-gutter">
  <div className="col-span-6">{/* Half width */}</div>
  <div className="col-span-6">{/* Half width */}</div>
</div>
```

**Section Spacing:**
```tsx
<section className="py-xxl">
  <h2 className="mb-l">Section Title</h2>
  <p className="mb-m">Paragraph text</p>
</section>
```

## Notes

- These values complement (not replace) Tailwind's default spacing scale
- Use custom values for design system compliance
- Use default Tailwind values (1, 2, 4, 8, etc.) for fine-tuning
- The base unit of 8px ensures consistent visual rhythm
- All values are multiples of 4px for pixel-perfect alignment
