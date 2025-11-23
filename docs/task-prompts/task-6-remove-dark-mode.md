# Task 6: Remove Dark Mode Support

## Context
The Costantino Art design system (documented in `docs/visual-language.md`) specifies a single, consistent color scheme centered around Canvas Cream backgrounds. Dark mode is not part of the design specification and should be removed.

## Design Philosophy
> **Canvas Cream background. Always.**
> — Visual Language, Golden Rules

The website maintains a consistent visual identity that mimics a physical gallery space with Canvas Cream walls. Dark mode would conflict with this carefully crafted aesthetic.

## Requirements

1. **Remove all dark mode CSS** from globals.css
2. **Remove dark mode color scheme** meta tag (if present)
3. **Ensure consistent Canvas Cream background** in all scenarios
4. **Verify no dark mode artifacts** remain in the codebase

## Implementation

### 1. Update `app/globals.css`

**DELETE** the dark mode media query (if it exists):

```css
/* DELETE THIS ENTIRE BLOCK */
@media (prefers-color-scheme: dark) {
  :root {
    --background: #0a0a0a;
    --foreground: #ededed;
  }
}
```

Ensure only the light color scheme remains:

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
  /* ... rest of color system ... */
}
```

### 2. Check `app/layout.tsx`

Verify there's NO `color-scheme` meta tag or similar dark mode configurations:

```tsx
// REMOVE if found:
<meta name="color-scheme" content="dark light" />
<meta name="theme-color" content="#0a0a0a" media="(prefers-color-scheme: dark)" />
```

If a theme-color meta tag exists, ensure it only uses Canvas Cream:

```tsx
// KEEP (if needed for mobile browsers):
<meta name="theme-color" content="#F5F1E8" />
```

### 3. Search for Dark Mode References

Search the codebase for any remaining dark mode code:

```bash
# Search for dark mode related code
grep -r "prefers-color-scheme: dark" .
grep -r "dark:" .  # Tailwind dark mode classes
grep -r "darkMode" .
grep -r "dark-mode" .
```

**Remove any found instances** that relate to dark mode styling.

### 4. Check Tailwind Config

Verify `tailwind.config.ts` does NOT have dark mode enabled:

```typescript
// ENSURE this is NOT present:
darkMode: 'class', // or 'media'

// If found, REMOVE the darkMode configuration
```

## Success Criteria

- [ ] No dark mode media query in globals.css
- [ ] Background remains Canvas Cream (#F5F1E8) in all scenarios
- [ ] Text remains Gallery Black (#1A1A1A) in all scenarios
- [ ] No `color-scheme` meta tag with dark mode support
- [ ] No Tailwind dark mode configuration
- [ ] No `dark:` variant classes in components
- [ ] Testing with system dark mode preference shows Canvas Cream background
- [ ] Build completes successfully

## Files to Check/Modify

- `app/globals.css` - Remove dark mode media query
- `app/layout.tsx` - Remove/update color-scheme meta tags
- `tailwind.config.ts` - Verify no dark mode configuration
- All component files - Remove any `dark:` Tailwind classes

## Testing

### Manual Testing

1. Run `npm run dev`
2. Open browser to `http://localhost:3000`
3. Open browser DevTools
4. **Toggle system dark mode preference:**
   - Chrome/Edge: DevTools > Rendering > Emulate CSS media feature `prefers-color-scheme`
   - Firefox: about:config > `ui.systemUsesDarkTheme` > toggle between 0 and 1
   - Safari: Develop > Experimental Features > Dark Mode CSS Support
5. **Verify:** Background stays Canvas Cream in both light AND dark system preferences
6. **Verify:** Text stays Gallery Black in both light AND dark system preferences

### Automated Check

```bash
# Search for dark mode remnants
grep -r "prefers-color-scheme: dark" app/
grep -r "dark:" components/
grep -r "darkMode" tailwind.config.ts

# Should return no results (or only comments)
```

### Build Test

```bash
npm run build
# Should complete successfully
npm run start
# Visual check: background should be Canvas Cream
```

## Expected Visual Result

**Before:** Background might change based on system preference
**After:** Background is ALWAYS Canvas Cream (#F5F1E8), regardless of system preference

## Why We're Removing Dark Mode

From `docs/visual-language.md`:

1. **Art First:** The art was photographed/scanned with specific lighting. Dark backgrounds would misrepresent colors.
2. **Gallery Aesthetic:** Physical galleries use neutral, light walls (Canvas Cream) to let art stand out.
3. **Color Accuracy:** Canvas Cream provides consistent color perception across all devices.
4. **Brand Consistency:** Single color scheme maintains the Costantino Art visual identity.
5. **Simplicity:** One well-designed color scheme is better than two mediocre ones.

## Notes

- This is not about accessibility (Canvas Cream has excellent contrast with Gallery Black)
- This is a deliberate design decision to maintain visual consistency
- The color scheme meets WCAG AA standards for accessibility
- Users expecting dark mode will see a thoughtfully designed light interface instead
