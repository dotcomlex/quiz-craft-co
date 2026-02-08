
## Problem
The headline and subheadline are currently center-aligned, which causes awkward text wrapping on mobile. Left-aligning them will create a cleaner, more professional look with better readability.

## Current State
- Line 22: Container has `text-center` and `items-center`
- Line 26: Inner wrapper has `text-center`
- Line 56: Subheadline has `mx-auto` which centers it

## Solution
Change the text alignment to left for both the headline and subheadline while keeping the logo centered, then center the CTA button.

## Implementation

**File to Modify**: `src/components/HeroSection.tsx`

### Change 1: Update inner wrapper alignment (Line 26)

**Current:**
```tsx
<div className="text-center mb-4">
```

**New:**
```tsx
<div className="text-left mb-4">
```

### Change 2: Keep logo centered (Line 31)

The logo already has `mx-auto` so it will stay centered. No change needed.

### Change 3: Update headline alignment (Line 36)

**Current:**
```tsx
className="text-[26px] sm:text-4xl lg:text-5xl text-white leading-[1.15] mb-6 sm:mb-8"
```

**New:**
```tsx
className="text-[26px] sm:text-4xl lg:text-5xl text-white leading-[1.15] mb-6 sm:mb-8 text-left"
```

### Change 4: Update subheadline alignment (Line 56)

**Current:**
```tsx
className="text-[14px] sm:text-base lg:text-lg text-white leading-relaxed max-w-xl mx-auto px-1"
```

**New:**
```tsx
className="text-[14px] sm:text-base lg:text-lg text-white leading-relaxed max-w-xl px-1"
```

Removes `mx-auto` so the subheadline aligns left with the headline.

## Verification
- Logo remains centered at the top
- Headline text flows left-to-right with natural line breaks
- Subheadline aligns left under the headline
- CTA button remains centered
- Overall layout looks cleaner with less awkward wrapping
