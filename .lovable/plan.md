

## Problem
1. There's too much space above and below the logo, pushing the headline down and making the spacing look uneven
2. The "Limited Spots Available" text is currently gold (#F5C518) but should be white

## Current State
Looking at the HeroSection.tsx:
- Line 22: Container has `pt-8` (32px) top padding on mobile, `sm:pt-12` (48px) on larger screens
- Line 31: Logo has `mb-4` (16px) margin-bottom
- Line 62: "Limited Spots Available" uses `color: '#F5C518'` (gold)

## Solution
1. **Reduce top padding** on the main container to bring the logo up
2. **Reduce logo bottom margin** from `mb-4` to `mb-2` for tighter spacing with headline
3. **Change "Limited Spots Available" color** from gold to white

## Implementation

**File to Modify**: `src/components/HeroSection.tsx`

### Change 1: Reduce container top padding (Line 22)

**Current:**
```tsx
<div className="relative z-10 container mx-auto px-3 pt-8 pb-16 sm:pt-12 sm:pb-20 flex flex-col items-center text-center">
```

**New:**
```tsx
<div className="relative z-10 container mx-auto px-3 pt-4 pb-16 sm:pt-6 sm:pb-20 flex flex-col items-center text-center">
```

- Mobile: `pt-8` (32px) → `pt-4` (16px)
- Desktop: `sm:pt-12` (48px) → `sm:pt-6` (24px)

### Change 2: Reduce logo bottom margin (Line 31)

**Current:**
```tsx
className="h-36 sm:h-44 lg:h-52 w-auto mx-auto mb-4"
```

**New:**
```tsx
className="h-36 sm:h-44 lg:h-52 w-auto mx-auto mb-2"
```

- Reduces gap between logo and headline from 16px to 8px

### Change 3: Change "Limited Spots Available" to white (Line 62)

**Current:**
```tsx
<span style={{ color: '#F5C518', fontWeight: 700, textTransform: 'uppercase' }}>
```

**New:**
```tsx
<span style={{ color: '#FFFFFF', fontWeight: 700, textTransform: 'uppercase' }}>
```

## Verification
- Logo should sit higher on the page with less empty space above it
- Headline should be closer to the logo for a more cohesive look
- "LIMITED SPOTS AVAILABLE" will appear in white instead of gold
- Overall hero section will look more balanced and uniform

