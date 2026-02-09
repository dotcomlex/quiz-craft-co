
## Summary
Optimize the hero section for desktop viewing while keeping the mobile layout unchanged. The current desktop layout has inconsistent alignment (centered container with left-aligned text) and needs better proportions.

---

## Issues Identified

Looking at the screenshot:
1. **Misaligned layout** - Content container is centered but headline/subheadline are left-aligned, creating awkward asymmetry
2. **Excessive width** - The headline spans too wide on large screens
3. **Insufficient vertical spacing** - Desktop needs more breathing room at top/bottom
4. **Trust indicators too small** - Icons and text could be slightly larger on desktop

---

## Changes (Desktop-Only via Breakpoints)

### File: `src/components/HeroSection.tsx`

**1. Add minimum height for desktop hero**
- Add `lg:min-h-[85vh]` to the section to give it proper height on large screens

**2. Center-align text on desktop**
- Change the text container from `text-left` to `text-left lg:text-center`
- This keeps mobile left-aligned but centers on desktop

**3. Center the subheadline on desktop**
- Add `lg:mx-auto lg:text-center` to the subheadline paragraph
- Increase max-width on desktop: `max-w-xl lg:max-w-2xl`

**4. Improve desktop padding**
- Add `lg:pt-20 lg:pb-32` for more vertical breathing room on desktop

**5. Constrain headline width on large screens**
- Add `lg:max-w-3xl lg:mx-auto` to the headline wrapper

**6. Scale up trust indicators on desktop**
- Add `lg:text-base` to trust indicator text
- Add `lg:w-5 lg:h-5` to trust icons

---

## Code Changes

```tsx
// Line 9 - Add min-height for desktop
<section id="hero" className="relative overflow-hidden lg:min-h-[85vh]">

// Line 22 - Enhanced desktop padding
<div className="relative z-10 px-3 pt-2 pb-16 sm:pt-8 sm:pb-20 lg:pt-20 lg:pb-32 flex flex-col items-center text-center">

// Line 26 - Center text on desktop
<div className="text-left lg:text-center mb-6">

// Line 35-36 - Center headline and constrain width on desktop
<h1 
  className="text-[24px] sm:text-4xl lg:text-5xl xl:text-6xl text-white leading-[1.25] mb-6 sm:mb-10 text-left lg:text-center lg:max-w-4xl lg:mx-auto"
  ...
>

// Line 53-54 - Center subheadline on desktop with wider max-width
<p 
  className="text-[14px] sm:text-base lg:text-lg text-white leading-relaxed max-w-xl lg:max-w-2xl px-1 lg:px-0 lg:mx-auto lg:text-center"
  ...
>

// Lines 85-86, 91-92 - Larger icons and text on desktop for trust indicators
<CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 flex-shrink-0" />
<span className="text-xs sm:text-sm lg:text-base font-medium ...">

<Shield className="w-4 h-4 lg:w-5 lg:h-5 flex-shrink-0" />
<span className="text-xs sm:text-sm lg:text-base font-medium ...">
```

---

## Result
- Desktop hero will have proper centered layout with balanced proportions
- More vertical breathing room on large screens
- Trust indicators scaled appropriately for desktop
- Mobile layout remains completely unchanged (all changes use `lg:` breakpoint)
