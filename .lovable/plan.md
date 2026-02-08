

# FIX: SCALE UP HERO LOGO TO XL SIZE

## Overview

The current logo is too small. Increasing from `h-12/h-14/h-16` to `h-20/h-24/h-28` — approximately doubling the size for proper visibility.

**File to Modify**: 1 file

---

## CHANGE: HERO SECTION LOGO SIZE

### File: `src/components/HeroSection.tsx`

**Current (too small):**
```tsx
className="h-12 sm:h-14 lg:h-16 w-auto mx-auto mb-6"
```

**New (XL visible):**
```tsx
className="h-20 sm:h-24 lg:h-28 w-auto mx-auto mb-8"
```

**Size comparison:**
| Breakpoint | Current | New |
|------------|---------|-----|
| Mobile | 48px (h-12) | 80px (h-20) |
| Tablet | 56px (h-14) | 96px (h-24) |
| Desktop | 64px (h-16) | 112px (h-28) |

Also increased margin-bottom from `mb-6` to `mb-8` for better spacing with the larger logo.

---

## VERIFICATION CHECKLIST

| Check | Expected |
|-------|----------|
| Logo visibility | Large, prominent white Emerald Paints logo clearly visible above headline |
| Mobile sizing | 80px tall (h-20) — bold presence |
| Desktop sizing | 112px tall (h-28) — elegant XL appearance |
| Spacing | mb-8 (32px) breathing room before headline |

