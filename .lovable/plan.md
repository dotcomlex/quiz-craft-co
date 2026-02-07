

# EMERALD PAINTS — COMPLETE DESIGN RESET PLAN

## Overview

This plan implements a full visual overhaul across 9 files, replacing the old navy/gold color scheme with a new 3-color system (Bright Blue + Emerald Green + Gold accents). The hero background image uploaded by the user will be added, the logo will be moved to a sticky header instead of the hero, and all CTA buttons will change from gold to high-converting emerald green.

**Total Files Modified**: 9 files
**Total Lines Affected**: ~500 lines
**Critical Constraint**: Every color must comply with the new palette — no legacy navy (#0B2447) or gold CTAs (#D4920B)

---

## NEW COLOR SYSTEM REFERENCE

| Color | Hex | CSS Variable | Usage |
|-------|-----|--------------|-------|
| Bright Blue | `#2563EB` | `--secondary` | Headings on light backgrounds |
| Dark Blue | `#1E3A8A` | `--tertiary` | Dark section backgrounds |
| Emerald Green | `#1B6B3A` | `--primary` | CTA buttons, icons, labels |
| Gold | `#F5C518` | `--highlight` | Headline highlights only |
| Dark Slate | `#0F172A` | `--hero`, `--section-dark` | Dark section backgrounds |
| White | `#FFFFFF` | — | Text on dark, button text |
| Off-White | `#FEFDFB` | `--section-warm` | Light section backgrounds |
| Text Gray | `#374151` | `--foreground` | Body text |

---

## PHASE 0: COPY HERO BACKGROUND IMAGE

**Action**: Copy the uploaded hero image to project assets

The user uploaded a Colorado mountain landscape at golden hour with a cozy home and dark sky at the top — perfect for hero text overlay.

- **Source**: `user-uploads://hf_20260207_221118_5e2da819-8480-4ba5-bc9f-617046a8a075.png`
- **Destination**: `src/assets/hero-bg.png`

---

## FILE 1: CSS VARIABLES — `src/index.css`

### Changes (Lines 8-90)

**Replace the entire `:root` block with new 3-color system:**

```css
:root {
  /* Core brand colors - 3-COLOR SYSTEM */
  --background: 210 20% 99%;
  --foreground: 220 13% 26%;

  /* Primary CTA - EMERALD GREEN (high-converting) */
  --primary: 150 55% 26%;          /* #1B6B3A */
  --primary-foreground: 0 0% 100%;
  --primary-hover: 150 55% 22%;

  /* Secondary - Dark Blue for headings */
  --secondary: 226 71% 33%;        /* #1E3A8A */
  --secondary-foreground: 0 0% 100%;

  /* Tertiary - Bright Blue for accents */
  --tertiary: 217 91% 53%;         /* #2563EB */
  --tertiary-foreground: 0 0% 100%;

  /* Highlight - Gold for text highlights on dark backgrounds */
  --highlight: 48 95% 52%;         /* #F5C518 */
  --highlight-foreground: 220 13% 26%;

  /* Hero/dark sections */
  --hero: 222 47% 11%;             /* #0F172A dark slate */
  --hero-foreground: 0 0% 98%;

  /* Muted surfaces */
  --muted: 210 15% 96%;
  --muted-foreground: 220 9% 46%;

  /* Cards */
  --card: 0 0% 100%;
  --card-foreground: 220 13% 26%;
  --popover: 0 0% 100%;
  --popover-foreground: 220 13% 26%;

  /* Accent */
  --accent: 210 40% 96%;
  --accent-foreground: 217 91% 53%;

  /* Destructive */
  --destructive: 0 84% 60%;
  --destructive-foreground: 0 0% 98%;

  /* Borders */
  --border: 214 32% 91%;
  --input: 214 32% 91%;
  --ring: 150 55% 26%;

  --radius: 0.75rem;

  /* Semantic tokens */
  --success: 150 55% 26%;
  --success-foreground: 0 0% 100%;

  /* Section backgrounds */
  --section-warm: 40 20% 98%;
  --section-dark: 222 47% 11%;
}
```

### Update CTA Glow Animation (Lines 341-358)

**Replace gold glow with green glow:**

```css
@keyframes ctaGlow {
  0%, 100% {
    box-shadow:
      0 4px 20px rgba(27, 107, 58, 0.4),
      0 0 40px rgba(27, 107, 58, 0.2),
      0 20px 40px -10px rgba(0, 0, 0, 0.4);
  }
  50% {
    box-shadow:
      0 4px 30px rgba(27, 107, 58, 0.6),
      0 0 60px rgba(27, 107, 58, 0.4),
      0 20px 40px -10px rgba(0, 0, 0, 0.4);
  }
}
```

### Update Hero Overlay (Lines 143-151)

**Replace old navy overlay with dark slate:**

```css
.hero-overlay-dark {
  background: linear-gradient(
    to bottom,
    rgba(15, 23, 42, 0.85) 0%,
    rgba(15, 23, 42, 0.60) 30%,
    rgba(15, 23, 42, 0.40) 60%,
    rgba(15, 23, 42, 0.70) 100%
  );
}
```

### Update Premium Shadow (Lines 394-396)

**Replace gold shadow with green shadow:**

```css
.shadow-premium {
  box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.15), 0 4px 20px rgba(27, 107, 58, 0.3);
}
```

---

## FILE 2: BUTTON COMPONENT — `src/components/ui/button.tsx`

### Changes (Lines 10-21)

**Update CTA variant to use explicit emerald green with inline styles:**

The button component uses CSS variables, so changing `--primary` will automatically update CTA buttons. However, to ensure explicit green colors, update the `cta` variant:

```tsx
cta: "bg-[#1B6B3A] text-white hover:bg-[#155C30] shadow-xl hover:shadow-2xl active:scale-[0.98] text-lg font-bold",
```

---

## FILE 3: HERO SECTION — `src/components/HeroSection.tsx`

### Complete Rewrite Required

**Current Issues:**
- Uses solid navy `#0B2447` background (banned)
- Logo in hero takes up valuable space
- Missing background image

**New Structure:**

```tsx
import { Link } from "react-router-dom";
import { Shield, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.png";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Colorado mountain landscape at golden hour"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 hero-overlay-dark" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-10 pb-12 sm:pt-14 sm:pb-16 min-h-screen flex flex-col justify-center">
        {/* NO LOGO — logo moves to sticky header */}

        {/* Single centered column */}
        <div className="max-w-3xl mx-auto">
          {/* Urgency badge */}
          <div className="flex justify-center mb-6">
            <span 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium"
              style={{
                backgroundColor: 'rgba(245, 197, 24, 0.15)',
                color: '#F5C518',
                border: '1px solid rgba(245, 197, 24, 0.3)'
              }}
            >
              Spring 2025 Special — Limited Availability
            </span>
          </div>

          {/* Headline */}
          <div className="text-center mb-8">
            <h1 
              className="text-[28px] sm:text-4xl lg:text-5xl text-white leading-[1.15] mb-6 sm:mb-8"
              style={{ 
                fontWeight: 800,
                textShadow: '0 2px 8px rgba(0, 0, 0, 0.8), 0 4px 20px rgba(0, 0, 0, 0.6)',
                letterSpacing: '-0.01em'
              }}
            >
              The{" "}
              <span style={{ color: '#F5C518', textShadow: '0 2px 8px rgba(0, 0, 0, 0.6), 0 0 20px rgba(245, 197, 24, 0.3)' }}>
                Home Refresh Program
              </span>{" "}
              Is Helping Colorado Homeowners Save{" "}
              <span style={{ color: '#F5C518', textShadow: '0 2px 8px rgba(0, 0, 0, 0.6), 0 0 20px rgba(245, 197, 24, 0.3)' }}>
                25%
              </span>{" "}
              On Their Painting Project
            </h1>

            {/* Subheadline - ONE paragraph */}
            <p 
              className="text-[15px] sm:text-lg lg:text-xl text-white/90 leading-relaxed max-w-2xl mx-auto"
              style={{ textShadow: '0 1px 4px rgba(0, 0, 0, 0.5)' }}
            >
              <span className="font-bold uppercase">Limited Spots Available</span> — Click below to see if your zip code qualifies for a FREE estimate and 25% off your painting project.
            </p>
          </div>

          {/* CTA Button - GREEN */}
          <div className="flex flex-col items-center">
            <div className="animate-subtle-rock w-full sm:w-auto">
              <Link to="/qualify" className="block">
                <Button
                  variant="cta"
                  size="xl"
                  className="group shadow-2xl text-lg px-10 py-7 animate-cta-glow w-full sm:w-auto min-h-[56px]"
                  style={{ backgroundColor: '#1B6B3A' }}
                >
                  See If I Qualify
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="mt-6 flex items-center justify-center gap-6">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: '#F5C518' }} />
                <span className="text-xs sm:text-sm font-medium text-white/90 whitespace-nowrap">
                  Licensed & Insured
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 flex-shrink-0" style={{ color: '#F5C518' }} />
                <span className="text-xs sm:text-sm font-medium text-white/90 whitespace-nowrap">
                  Satisfaction Guaranteed
                </span>
              </div>
            </div>

            {/* Social proof */}
            <p 
              className="mt-4 text-xs text-white/60"
              style={{ textShadow: '0 1px 2px rgba(0,0,0,0.4)' }}
            >
              🏠 127 Colorado homes transformed this year
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
```

**Key Changes:**
- Remove logo from hero (moves to sticky header)
- Add hero background image with dark overlay
- Add urgency badge above headline
- CTA button explicitly uses `#1B6B3A` green
- Trust indicator icons use gold `#F5C518`
- Add social proof counter

---

## FILE 4: GALLERY SECTION — `src/components/GallerySection.tsx`

### Changes (Lines 43-55)

**Update section heading colors:**

```tsx
<section className="py-16 lg:py-24 texture-overlay" style={{ backgroundColor: '#FEFDFB' }}>
  <div className="container mx-auto px-4">
    <div className="text-center mb-10">
      <span 
        className="inline-block font-semibold text-sm uppercase tracking-wider mb-3"
        style={{ color: '#1B6B3A' }}
      >
        Our Work
      </span>
      <h2 
        className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4"
        style={{ color: '#1E3A8A' }}
      >
        See What's Possible — Real Home Transformations
      </h2>
      <p className="text-base max-w-xl mx-auto" style={{ color: '#374151' }}>
        From single rooms to full exteriors, we deliver flawless results that transform your home.
      </p>
    </div>
```

### Update Thumbnail Selection (Lines 95-99)

**Change selected ring from gold to blue:**

```tsx
className={`rounded-lg overflow-hidden transition-all duration-300 flex-shrink-0 bg-muted min-h-[44px] border-2 ${
  index === currentIndex
    ? "border-[#2563EB] ring-2 ring-[#2563EB] ring-offset-2 shadow-lg"
    : "border-transparent opacity-50 hover:opacity-100"
}`}
```

### Update CTA Button (Lines 118-125)

**Explicitly set green color:**

```tsx
<Button 
  variant="cta" 
  size="xl" 
  className="group shadow-2xl text-lg px-8 py-6 animate-cta-glow w-full sm:w-auto min-h-[44px]"
  style={{ backgroundColor: '#1B6B3A' }}
>
```

---

## FILE 5: REVIEWS SECTION — `src/components/ReviewsSection.tsx`

### Changes (Line 97)

**Update dark background color from banned navy to dark slate:**

```tsx
<section className="py-12 sm:py-16 lg:py-24" style={{ background: 'linear-gradient(180deg, #0F172A 0%, #1E293B 100%)' }}>
```

### Update Star Colors (Lines 133-135)

**Stars should remain gold — use explicit hex:**

```tsx
<Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4" style={{ fill: '#F5C518', color: '#F5C518' }} />
```

### Remove whileInView Animation (Lines 99-105)

**Replace scroll animation with immediate visibility:**

```tsx
<div className="text-center mb-10">
  {/* Remove motion.div wrapper or keep with immediate animation */}
```

### Update CTA Button (Lines 189-196)

**Explicitly set green color:**

```tsx
<Button 
  variant="cta" 
  size="xl" 
  className="group shadow-2xl text-lg px-8 py-6 animate-cta-glow w-full sm:w-auto min-h-[44px]"
  style={{ backgroundColor: '#1B6B3A' }}
>
```

---

## FILE 6: PROCESS SECTION — `src/components/ProcessSection.tsx`

### Changes (Line 34)

**Verify background is warm off-white:**

```tsx
<section className="py-16 lg:py-24 texture-overlay" style={{ backgroundColor: '#FEFDFB' }}>
```

### Update Section Header Colors

**Label: emerald green, Headline: dark blue:**

```tsx
<span 
  className="inline-block font-semibold text-sm uppercase tracking-wider mb-3"
  style={{ color: '#1B6B3A' }}
>
  How It Works
</span>
<h2 
  className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4"
  style={{ color: '#1E3A8A' }}
>
  Your Path to a Beautiful Home
</h2>
```

### Update Step Icons (Line 70)

**Icons: emerald green, Number badges: bright blue:**

```tsx
{/* Icon container */}
<div 
  className="w-16 h-16 rounded-xl flex items-center justify-center shadow-md"
  style={{ 
    backgroundColor: 'rgba(27, 107, 58, 0.1)',
    border: '1px solid rgba(27, 107, 58, 0.2)'
  }}
>
  <step.icon className="w-8 h-8" style={{ color: '#1B6B3A' }} />
</div>

{/* Number badge */}
<div 
  className="absolute -top-2 -right-2 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold shadow-lg"
  style={{ backgroundColor: '#2563EB', color: '#FFFFFF' }}
>
  {step.number}
</div>
```

---

## FILE 7: FAQ SECTION — `src/components/FAQSection.tsx`

### Changes (Lines 37-47)

**Update section header colors and add texture:**

```tsx
<section className="py-16 lg:py-24 texture-overlay" style={{ backgroundColor: '#FEFDFB' }}>
  <div className="container max-w-3xl px-4">
    <div className="text-center mb-10">
      <span 
        className="inline-block font-semibold text-sm uppercase tracking-wider mb-3"
        style={{ color: '#1B6B3A' }}
      >
        Questions & Answers
      </span>
      <h2 
        className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4"
        style={{ color: '#1E3A8A' }}
      >
        Common Questions
      </h2>
    </div>
```

### Update CTA Button (Lines 73-80)

**Explicitly set green color:**

```tsx
<Button
  variant="cta"
  size="xl"
  className="group shadow-2xl text-lg px-8 py-6 animate-cta-glow w-full sm:w-auto min-h-[44px]"
  style={{ backgroundColor: '#1B6B3A' }}
>
```

---

## FILE 8: FINAL CTA SECTION — `src/components/FinalCTASection.tsx`

### Changes (Line 7)

**Replace banned navy with dark slate:**

```tsx
<section className="py-16 lg:py-24 text-white" style={{ background: 'linear-gradient(180deg, #0F172A 0%, #1E293B 100%)' }}>
```

### Update CTA Button

**Explicitly set green background:**

```tsx
<Button 
  variant="cta" 
  size="xl" 
  className="group w-full sm:w-auto min-h-[44px] animate-cta-glow"
  style={{ backgroundColor: '#1B6B3A' }}
>
```

---

## FILE 9: FLOATING CTA — `src/components/FloatingCTA.tsx`

### Changes (Lines 31-37)

**Update button styling with explicit green and frosted glass bar:**

```tsx
<motion.div
  initial={{ opacity: 0, y: 100 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: 100 }}
  transition={{ duration: 0.3, ease: "easeOut" }}
  className="fixed bottom-5 left-4 right-4 sm:bottom-6 sm:left-auto sm:right-6 z-50"
>
  <Link to="/qualify">
    <Button
      variant="cta"
      size="lg"
      className="w-full sm:w-auto shadow-premium text-sm sm:text-base font-semibold px-6 py-4 h-auto animate-cta-glow"
      style={{ backgroundColor: '#1B6B3A' }}
    >
      See If You Qualify
    </Button>
  </Link>
</motion.div>
```

---

## NEW FILE: STICKY HEADER — `src/components/StickyHeader.tsx`

**Create new component for slim sticky header with logo:**

```tsx
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import logo from "@/assets/emerald-paints-logo.png";

const StickyHeader = () => {
  return (
    <header 
      className="fixed top-0 left-0 right-0 z-50 py-2 px-4"
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(0, 0, 0, 0.08)'
      }}
    >
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/">
          <img
            src={logo}
            alt="Emerald Paints"
            className="h-8 w-auto object-contain"
          />
        </Link>
        <a 
          href="tel:7204475654" 
          className="flex items-center gap-1.5 text-sm font-medium"
          style={{ color: '#1B6B3A' }}
        >
          <Phone className="w-4 h-4" />
          (720) 447-5654
        </a>
      </div>
    </header>
  );
};

export default StickyHeader;
```

**Update `src/pages/Index.tsx` to include StickyHeader:**

```tsx
import StickyHeader from "@/components/StickyHeader";

const Index = () => {
  return (
    <main className="min-h-screen">
      <StickyHeader />
      <HeroSection />
      {/* ... rest of sections */}
    </main>
  );
};
```

---

## ANIMATION CLEANUP

### Files to Update

Remove `whileInView`, `viewport`, and `initial={{ opacity: 0 }}` from:

1. **ReviewsSection.tsx** (Lines 99-105, 121-127)
2. **ProcessSection.tsx** (any motion.div with scroll triggers)
3. **FinalCTASection.tsx** (any motion.div with scroll triggers)

**Keep these animations:**
- `animate-subtle-rock` on CTA wrappers
- `animate-cta-glow` on CTA buttons
- FloatingCTA entrance/exit animation
- Review carousel auto-scroll

---

## QUIZ PAGE UPDATES — `src/components/Quiz.tsx`

### Changes (Lines 701, 723-726)

**Progress bar: bright blue:**

```tsx
<div className="h-full rounded-full" style={{ backgroundColor: '#2563EB' }} />
```

**Disqualification screen icon: emerald green on off-white:**

```tsx
<div
  className="w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center"
  style={{ backgroundColor: '#FEFDFB' }}
>
  <MapPin className="w-7 h-7" style={{ color: '#1B6B3A' }} />
</div>
```

### Quiz CTA Buttons

All "Continue", "Submit" buttons should use:

```tsx
style={{ backgroundColor: '#1B6B3A', color: '#FFFFFF' }}
```

### Selected Tile Border

Change from gold ring to blue ring:

```tsx
className={`... ${selected ? "ring-2 ring-[#2563EB] ring-offset-2" : ""}`}
```

---

## EXECUTION ORDER

1. Copy hero background image to `src/assets/hero-bg.png`
2. Update `src/index.css` — CSS variables and animations
3. Update `src/components/ui/button.tsx` — CTA variant
4. Rewrite `src/components/HeroSection.tsx` — full rebuild
5. Create `src/components/StickyHeader.tsx` — new component
6. Update `src/pages/Index.tsx` — add StickyHeader
7. Update `src/components/GallerySection.tsx` — colors
8. Update `src/components/ReviewsSection.tsx` — colors, remove animations
9. Update `src/components/ProcessSection.tsx` — colors
10. Update `src/components/FAQSection.tsx` — colors
11. Update `src/components/FinalCTASection.tsx` — colors
12. Update `src/components/FloatingCTA.tsx` — colors
13. Update `src/components/Quiz.tsx` — colors

---

## VERIFICATION CHECKLIST

| # | Check | Expected Result |
|---|-------|-----------------|
| 1 | Hero background | Mountain landscape visible through dark overlay |
| 2 | Hero logo | NO logo in hero — moves to sticky header |
| 3 | Sticky header | Logo + phone number visible at top |
| 4 | Hero CTA | GREEN `#1B6B3A` button |
| 5 | All CTAs | GREEN `#1B6B3A` across site |
| 6 | Light section headings | Dark blue `#1E3A8A` |
| 7 | Light section labels | Emerald green `#1B6B3A` |
| 8 | Dark sections | Dark slate `#0F172A` (NOT `#0B2447`) |
| 9 | Light sections | Warm off-white `#FEFDFB` with texture |
| 10 | Process icons | Emerald green icons, bright blue badges |
| 11 | Stars/ratings | Gold `#F5C518` |
| 12 | No banned colors | Zero `#0B2447`, `#D4920B`, orange, amber |
| 13 | No scroll animations | All sections visible immediately |
| 14 | Quiz progress bar | Bright blue `#2563EB` |

