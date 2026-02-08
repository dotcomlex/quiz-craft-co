

# FIX: REMOVE EXCESSIVE HERO SECTION SPACING

## Problem

The hero section has way too much margin above and below the logo because:
1. `min-h-screen` + `justify-center` vertically centers content in full viewport = massive gap above logo
2. Multiple `mb-8` margins stacking up

## Solution

Change from vertical centering to top-aligned layout with proper padding.

**File to Modify**: `src/components/HeroSection.tsx`

---

## CHANGE 1: FIX CONTAINER LAYOUT

### Line 22 - Current:
```tsx
className="relative z-10 container mx-auto px-3 pt-6 pb-12 sm:pt-8 sm:pb-16 min-h-screen flex flex-col justify-center items-center text-center"
```

### New:
```tsx
className="relative z-10 container mx-auto px-3 pt-8 pb-8 sm:pt-12 sm:pb-12 min-h-screen flex flex-col items-center text-center"
```

**Changes:**
- Remove `justify-center` (was centering content vertically)
- Adjust padding: `pt-8 pb-8` (mobile), `sm:pt-12 sm:pb-12` (tablet+)

---

## CHANGE 2: REDUCE LOGO BOTTOM MARGIN

### Line 31 - Current:
```tsx
className="h-28 sm:h-32 lg:h-36 w-auto mx-auto mb-8"
```

### New:
```tsx
className="h-28 sm:h-32 lg:h-36 w-auto mx-auto mb-4"
```

Reduce `mb-8` (32px) to `mb-4` (16px).

---

## CHANGE 3: REDUCE PARENT DIV MARGIN

### Line 26 - Current:
```tsx
<div className="text-center mb-8">
```

### New:
```tsx
<div className="text-center mb-4">
```

Reduce `mb-8` to `mb-4`.

---

## SUMMARY

| Location | Before | After |
|----------|--------|-------|
| Container | `justify-center` (vertical centering) | Removed (top-aligned) |
| Container padding | `pt-6 pb-12` | `pt-8 pb-8` |
| Logo margin | `mb-8` (32px) | `mb-4` (16px) |
| Parent div margin | `mb-8` (32px) | `mb-4` (16px) |

This will push the logo much closer to the top of the screen and tighten the spacing between elements.

