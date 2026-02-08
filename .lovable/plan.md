

# FIX: MOVE LOGO TO HERO + UPDATE SUBHEADLINE + REMOVE LOGO FROM QUIZ PAGE

## Overview

I mixed up the pages. Here's the correction:
1. **Remove** the logo from the Quiz Page (QualifyPage.tsx)
2. **Add** the white logo to the Hero Section (HeroSection.tsx) — scaled up, elegant placement above headline
3. **Update** the homepage subheadline to match your exact wording

**Files to Modify**: 2 files

---

## FIX 1: HERO SECTION — ADD LOGO + UPDATE SUBHEADLINE

### File: `src/components/HeroSection.tsx`

**Add import for the white logo:**
```tsx
import emeraldLogo from "@/assets/emerald-logo-white.png";
```

**Add logo above the headline (inside the text-center div):**
```tsx
{/* White Emerald Paints Logo - scaled up */}
<img 
  src={emeraldLogo}
  alt="Emerald Paints"
  className="h-12 sm:h-14 lg:h-16 w-auto mx-auto mb-6"
  style={{ filter: 'brightness(1.1)' }}
/>
```

Logo sizing:
- `h-12` (48px) on mobile — larger than quiz page was
- `h-14` (56px) on tablet
- `h-16` (64px) on desktop
- `mb-6` (24px) spacing below logo before headline

**Update the subheadline (lines 46-57) to match exactly:**
```tsx
<p 
  className="text-[15px] sm:text-lg lg:text-xl text-white/90 leading-relaxed max-w-xl mx-auto px-1"
  style={{ 
    textShadow: '0 2px 4px rgba(0,0,0,0.8), 0 4px 8px rgba(0,0,0,0.6), 0 8px 16px rgba(0,0,0,0.4)',
    fontWeight: 500
  }}
>
  <span style={{ color: '#F5C518', fontWeight: 700, textTransform: 'uppercase' }}>
    Limited Spots Available
  </span>
  {" "} — Homeowners across Colorado are taking advantage. Click below to see if you qualify for a FREE estimate and 25% off your painting project.
</p>
```

**Key change:** "Check below to see if your zip code qualifies" → "Homeowners across Colorado are taking advantage. Click below to see if you qualify"

---

## FIX 2: QUIZ PAGE — REMOVE LOGO

### File: `src/pages/QualifyPage.tsx`

**Remove the logo import (line 5):**
```tsx
// DELETE THIS LINE:
import emeraldLogo from "@/assets/emerald-logo-white.png";
```

**Remove the logo JSX (lines 30-36):**
```tsx
// DELETE THIS BLOCK:
<img 
  src={emeraldLogo}
  alt="Emerald Paints"
  className="h-8 sm:h-10 w-auto mx-auto mb-6"
  style={{ filter: 'brightness(1.1)' }}
/>
```

The quiz page header will just show:
- "See If You Qualify for the" (white)
- "Home Refresh Program" (gold with glow)
- "Takes less than 30 seconds" (subtle)

No logo on quiz page.

---

## SUMMARY

| # | File | Change |
|---|------|--------|
| 1 | `src/components/HeroSection.tsx` | ADD logo import |
| 2 | `src/components/HeroSection.tsx` | ADD logo above headline (h-12/h-14/h-16) |
| 3 | `src/components/HeroSection.tsx` | UPDATE subheadline wording |
| 4 | `src/pages/QualifyPage.tsx` | REMOVE logo import |
| 5 | `src/pages/QualifyPage.tsx` | REMOVE logo JSX |

---

## VERIFICATION CHECKLIST

| # | Check | Expected |
|---|-------|----------|
| 1 | Homepage logo | White Emerald Paints logo centered above headline, h-12/h-14/h-16, mb-6 spacing |
| 2 | Homepage headline | "The **Home Refresh Program** Is Helping Colorado Homeowners Save **25%** On Their Painting Project" (gold on key words) |
| 3 | Homepage subheadline | "**LIMITED SPOTS AVAILABLE** — Homeowners across Colorado are taking advantage. Click below to see if you qualify for a FREE estimate and 25% off your painting project." |
| 4 | Quiz page | NO logo — just the simple "See If You Qualify for the Home Refresh Program" text |

