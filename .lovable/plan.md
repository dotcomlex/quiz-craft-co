
## Problem
The logo section and the trust indicators (Licensed & Insured / Satisfaction Guaranteed) are too close together. There's insufficient visual separation between the main hero messaging and the trust badges at the bottom.

## Root Cause
The trust indicators container at line 85 has only `mt-6` (24px) margin-top, which creates a tight spacing that makes the section feel cramped on mobile devices.

## Solution
Increase the margin-top on the trust indicators container to create more breathing room between:
1. The CTA button and the trust indicators
2. The logo/headline messaging and the trust indicators

This visual separation will help the page feel less cluttered and improves the mobile viewing experience.

## Implementation

**File to Modify**: `src/components/HeroSection.tsx`

**Change**: Line 85 - Increase margin-top on trust indicators

**Current:**
```tsx
<div className="mt-6 flex items-center justify-center gap-6">
```

**New:**
```tsx
<div className="mt-8 sm:mt-10 flex items-center justify-center gap-6">
```

**Details:**
- Increase from `mt-6` (24px) to `mt-8` (32px) on mobile
- Add `sm:mt-10` (40px) on tablet and larger screens
- This creates better visual hierarchy and breathing room between the main call-to-action and the trust indicators

## Verification
- Trust indicators should have noticeably more space below the CTA button
- The "logo section" and "trust badge row" should feel like distinct visual groups
- The layout should feel spacious without looking stretched on mobile (375–428px)
