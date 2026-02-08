

## Problem
The hero section needs more bottom padding to create more space between the trust indicators and the next section below ("TRUSTED & CERTIFIED"). Currently the bottom padding is `pb-8` (32px) on mobile and `sm:pb-12` (48px) on larger screens - not enough separation.

## Solution
Increase the bottom padding on the hero content container to add more breathing room at the bottom of the entire hero section.

## Implementation

**File to Modify**: `src/components/HeroSection.tsx`

**Change**: Line 22 - Increase bottom padding

**Current:**
```tsx
<div className="relative z-10 container mx-auto px-3 pt-8 pb-8 sm:pt-12 sm:pb-12 flex flex-col items-center text-center">
```

**New:**
```tsx
<div className="relative z-10 container mx-auto px-3 pt-8 pb-16 sm:pt-12 sm:pb-20 flex flex-col items-center text-center">
```

**Details:**
- Increase `pb-8` (32px) to `pb-16` (64px) on mobile
- Increase `sm:pb-12` (48px) to `sm:pb-20` (80px) on larger screens
- This adds roughly 40px more space at the bottom of the hero section

## Verification
- Trust indicators will have noticeably more space below them before the next section starts
- The hero section background will extend further down, creating a clear visual break between sections

