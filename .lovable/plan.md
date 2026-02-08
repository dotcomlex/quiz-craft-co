

## Problem
The Emerald Paints logo in the hero section needs to be bigger. Currently it's set to:
- `h-28` (112px) on mobile
- `sm:h-32` (128px) on tablet
- `lg:h-36` (144px) on desktop

## Solution
Increase the logo height values across all breakpoints to make it more prominent.

## Implementation

**File to Modify**: `src/components/HeroSection.tsx`

**Change**: Line 31 - Increase logo height

**Current:**
```tsx
className="h-28 sm:h-32 lg:h-36 w-auto mx-auto mb-4"
```

**New:**
```tsx
className="h-36 sm:h-44 lg:h-52 w-auto mx-auto mb-4"
```

**Size Increase Details:**
- Mobile: `h-28` (112px) → `h-36` (144px) — **+32px**
- Tablet: `sm:h-32` (128px) → `sm:h-44` (176px) — **+48px**
- Desktop: `lg:h-36` (144px) → `lg:h-52` (208px) — **+64px**

## Verification
- Logo should appear noticeably larger on all screen sizes
- Logo should remain centered and properly spaced from the headline below

