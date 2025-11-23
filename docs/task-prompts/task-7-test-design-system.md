# Task 7: Test Design System with Existing Components

## Context
The design system (colors, typography, spacing) has been implemented through Tasks 1-6. Now verify it works correctly by updating the existing components (Hero, Intro, EmailCapture, Footer) to use the new design tokens.

## Goal
Refactor existing components to use the design system, ensuring:
- Canvas Cream backgrounds
- Cormorant Garamond headings
- Inter body text
- Proper spacing (8px base unit)
- Design system color palette

This serves as both a test and a real-world application of the design system.

## Design System Reference

### Colors (Tailwind classes)
- `bg-canvas-cream` - Canvas Cream (#F5F1E8)
- `text-gallery-black` - Gallery Black (#1A1A1A)
- `text-iron-gray` - Iron Gray (#4A4A4A)
- `text-maui-blue` - Maui Blue (#0077BE)
- `bg-scroll-gold` - Scroll Gold (#B8860B)
- `text-lahaina-coral` - Lahaina Coral (#FF6F61)

### Typography (Tailwind classes)
- `font-heading` - Cormorant Garamond (for h1, h2, h3)
- `font-body` - Inter (for paragraphs, UI text)
- `text-h1` - 48px
- `text-h2` - 36px
- `text-h3` - 24px
- `text-body` - 16px
- `text-small` - 14px
- `text-tiny` - 12px

### Spacing (Tailwind classes)
- `p-xs`, `m-xs` - 4px
- `p-s`, `m-s` - 8px
- `p-m`, `m-m` - 16px
- `p-l`, `m-l` - 24px
- `p-xl`, `m-xl` - 32px
- `p-xxl`, `m-xxl` - 48px

## Requirements

Update all four existing components to:
1. Use Canvas Cream background where appropriate
2. Use proper font families (heading vs body)
3. Use design system colors for text, links, buttons
4. Use consistent spacing from the spacing scale
5. Remove any hardcoded colors or spacing values
6. Remove any pure white (#ffffff) backgrounds

## Component Files

- `components/Hero.tsx`
- `components/Intro.tsx`
- `components/EmailCapture.tsx`
- `components/Footer.tsx`

## Implementation Guidelines

### General Refactoring Pattern

**Before:**
```tsx
<div className="bg-white p-4">
  <h1 className="text-4xl font-bold">Heading</h1>
  <p className="text-gray-600">Text</p>
</div>
```

**After:**
```tsx
<div className="bg-canvas-cream p-m">
  <h1 className="font-heading text-h1">Heading</h1>
  <p className="font-body text-iron-gray">Text</p>
</div>
```

### Component-Specific Guidelines

#### Hero Component
- Use full-height section (min-h-screen)
- Canvas Cream background
- H1 should use `font-heading text-h1`
- Center content with proper spacing
- If there's a CTA button, use `bg-scroll-gold text-gallery-black`

#### Intro Component
- Canvas Cream background
- H2 for section title: `font-heading text-h2`
- Body text: `font-body text-body`
- Use `max-w-content` to constrain width
- Proper spacing between elements (m-l or m-xl)

#### EmailCapture Component
- Canvas Cream background
- H3 for title: `font-heading text-h3`
- Form inputs: border-iron-gray with focus:border-maui-blue
- Submit button: `bg-scroll-gold text-gallery-black`
- Proper form spacing (gap-m)

#### Footer Component
- Canvas Cream background (or slightly darker if needed)
- Small text: `text-small text-iron-gray`
- Links: `text-maui-blue hover:underline`
- Copyright info: `text-tiny`
- Top padding: `pt-xxl`

## Implementation Steps

### Step 1: Read All Components

Read each component file to understand current implementation:

```bash
# Files to read
components/Hero.tsx
components/Intro.tsx
components/EmailCapture.tsx
components/Footer.tsx
```

### Step 2: Identify Changes Needed

For each component, identify:
- Hardcoded colors (white, gray-600, etc.) → Replace with design system colors
- Generic font classes (font-bold, text-4xl) → Replace with design system typography
- Arbitrary spacing (p-4, mt-8) → Replace with spacing scale (p-m, mt-l)
- Background colors → Ensure Canvas Cream

### Step 3: Refactor Components

Update each component using the Edit tool, replacing:
- Colors with design system tokens
- Typography with font-heading/font-body + text-h1/h2/h3
- Spacing with xs/s/m/l/xl/xxl scale

### Step 4: Visual Testing

After refactoring all components:

```bash
npm run dev
```

Open `http://localhost:3000` and verify:
- [ ] Background is Canvas Cream (not pure white)
- [ ] Headings use serif font (Cormorant Garamond)
- [ ] Body text uses sans-serif font (Inter)
- [ ] Spacing feels consistent and balanced
- [ ] Colors match the design palette
- [ ] No console errors

### Step 5: Build Test

```bash
npm run build
```

Verify build succeeds with no errors.

## Success Criteria

### Visual Checks
- [ ] All backgrounds are Canvas Cream (#F5F1E8), not white
- [ ] All headings (h1, h2, h3) use Cormorant Garamond
- [ ] All body text uses Inter
- [ ] Links are Maui Blue (#0077BE)
- [ ] Buttons use Scroll Gold (#B8860B) background
- [ ] Secondary text uses Iron Gray (#4A4A4A)
- [ ] Spacing between elements feels consistent

### Code Checks
- [ ] No hardcoded color values (e.g., #ffffff, #000000)
- [ ] No generic Tailwind colors (bg-white, text-gray-600)
- [ ] All colors use design system tokens
- [ ] All typography uses font-heading or font-body
- [ ] All spacing uses the spacing scale (xs/s/m/l/xl/xxl)
- [ ] Components follow design system patterns

### Technical Checks
- [ ] No TypeScript errors
- [ ] No ESLint warnings
- [ ] `npm run build` succeeds
- [ ] Page renders correctly in browser
- [ ] No console errors or warnings

## Testing Checklist

Run through this checklist after refactoring:

**Hero Section:**
- [ ] Canvas Cream background
- [ ] Heading uses Cormorant Garamond at 48px
- [ ] Proper vertical spacing
- [ ] CTA button (if present) uses Scroll Gold

**Intro Section:**
- [ ] Canvas Cream background
- [ ] Section title uses Cormorant Garamond at 36px
- [ ] Body text uses Inter at 16px
- [ ] Content max-width constrained
- [ ] Proper spacing between paragraphs

**Email Capture Section:**
- [ ] Canvas Cream background
- [ ] Form title uses Cormorant Garamond
- [ ] Input fields have proper styling
- [ ] Submit button uses Scroll Gold background
- [ ] Form spacing is consistent

**Footer:**
- [ ] Canvas Cream background
- [ ] Links use Maui Blue and underline on hover
- [ ] Small text uses Iron Gray
- [ ] Copyright uses tiny text size (12px)
- [ ] Proper padding above and below

## Example Refactoring

### Before (Generic Tailwind)
```tsx
<section className="bg-white py-12 px-4">
  <h2 className="text-3xl font-bold mb-4">About the Family</h2>
  <p className="text-gray-700 mb-4">Four generations of artists...</p>
  <a href="/about" className="text-blue-600 hover:underline">Learn More</a>
</section>
```

### After (Design System)
```tsx
<section className="bg-canvas-cream py-xxl px-m">
  <h2 className="font-heading text-h2 mb-l">About the Family</h2>
  <p className="font-body text-gallery-black mb-m">Four generations of artists...</p>
  <a href="/about" className="text-maui-blue hover:underline">Learn More</a>
</section>
```

## Files to Modify

- `components/Hero.tsx` - Update to use design system
- `components/Intro.tsx` - Update to use design system
- `components/EmailCapture.tsx` - Update to use design system
- `components/Footer.tsx` - Update to use design system

## Notes

- Read each component first to understand its current structure
- Make targeted changes (colors, fonts, spacing)
- Don't change functionality, only styling
- If a component is already well-structured, changes will be minimal
- If a component has issues, now is the time to fix them
- Test after each component to catch issues early
- This task validates that the design system is working correctly
