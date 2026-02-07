

# EMERALD PAINTS — ROUND 2 FIXES — COMPLETE IMPLEMENTATION PLAN

## Overview

This plan addresses 12 major fixes across 11 files, focusing on:
1. Deleting the StickyHeader completely
2. Hero section cleanup (remove badge, fix padding, strengthen subheadline)
3. CTA text replacement site-wide → "Check My Eligibility"
4. Color scheme simplification (headings from blue → near-black #1E293B)
5. Quiz page redesign (dark background, remove red banner, green progress)
6. Mobile optimization
7. Trust badges section update (use uploaded logos, remove text-based badges)

**Files to Modify**: 11 files
**Files to Delete**: 1 file (StickyHeader.tsx)
**New Assets to Copy**: 3 logos (Benjamin Moore, BEHR, Angi Certified Pro)

---

## PHASE 0: COPY NEW LOGO ASSETS

Copy uploaded logos to assets folder:
- `user-uploads://image-10.png` → `src/assets/logo-benjamin-moore.png`
- `user-uploads://image-11.png` → `src/assets/logo-behr.png`
- `user-uploads://image-12.png` → `src/assets/logo-angi.png`

---

## FIX 1: DELETE STICKY HEADER

### Delete File
- **File**: `src/components/StickyHeader.tsx` — DELETE ENTIRELY

### Update Index.tsx
- **File**: `src/pages/Index.tsx`
- Remove import: `import StickyHeader from "@/components/StickyHeader";`
- Remove component: `<StickyHeader />`

---

## FIX 2: HERO SECTION CLEANUP

### File: `src/components/HeroSection.tsx`

### 2A: DELETE "Spring 2025" Badge (Lines 26-38)
Remove the entire urgency badge div:
```tsx
// DELETE THIS BLOCK (lines 26-38)
<div className="flex justify-center mb-6">
  <span className="...">Spring 2025 Special — Limited Availability</span>
</div>
```

### 2B: DELETE Social Proof Counter (Lines 101-107)
Remove:
```tsx
// DELETE THIS BLOCK
<p className="mt-4 text-xs text-white/60" style={{...}}>
  🏠 127 Colorado homes transformed this year
</p>
```

### 2C: FIX Headline Padding and Container
Change container (line 21) from:
```tsx
<div className="relative z-10 container mx-auto px-4 pt-16 pb-12 sm:pt-20 sm:pb-16 min-h-screen flex flex-col justify-center">
```
To:
```tsx
<div className="relative z-10 container mx-auto px-3 pt-10 pb-12 sm:pt-14 sm:pb-16 min-h-screen flex flex-col justify-center items-center text-center">
```

Remove `max-w-3xl` from the headline wrapper (line 25):
```tsx
// Change from:
<div className="max-w-3xl mx-auto">
// To:
<div className="w-full max-w-2xl mx-auto">
```

### 2D: FIX Headline Text Size (Lines 42-43)
Change from `text-[28px]` to `text-[26px]`:
```tsx
<h1 className="text-[26px] sm:text-4xl lg:text-5xl text-white leading-[1.15] mb-6 sm:mb-8" ...>
```

### 2E: STRENGTHEN Subheadline (Lines 62-67)
Replace with stronger text shadow and gold accent for "LIMITED SPOTS AVAILABLE":
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
  {" "} — Check below to see if your zip code qualifies for a FREE estimate and 25% off your painting project.
</p>
```

### 2F: CHANGE CTA Text (Line 79)
Change from "See If I Qualify" to "Check My Eligibility":
```tsx
Check My Eligibility
```

---

## FIX 3: CTA TEXT REPLACEMENT — SITE-WIDE

Replace ALL instances across these files:

### File: `src/components/GallerySection.tsx` (Line 129)
- "See If I Qualify Now" → "Check My Eligibility"

### File: `src/components/FAQSection.tsx` (Line 87)
- "See If I Qualify Now" → "Check My Eligibility"

### File: `src/components/FinalCTASection.tsx` (Line 41)
- "See If You Qualify" → "Check My Eligibility"

### File: `src/components/FloatingCTA.tsx` (Line 36)
- "See If You Qualify" → "Check My Eligibility"

### File: `src/components/ReviewsSection.tsx` (Line 189)
- "See If You Qualify" → "Check My Eligibility"

---

## FIX 4: COLOR SCHEME — HEADINGS FROM BLUE TO NEAR-BLACK

All section headings on light backgrounds must change from `#1E3A8A` (blue) to `#1E293B` (near-black).

### File: `src/components/GallerySection.tsx`
- Line 54: Change `color: '#1E3A8A'` → `color: '#1E293B'`

### File: `src/components/ProcessSection.tsx`
- Line 44: Change `color: '#1E3A8A'` → `color: '#1E293B'`
- Line 76: Change number badge from `backgroundColor: '#2563EB'` → `backgroundColor: '#1B6B3A'`
- Line 82: Change step title `color: '#1E3A8A'` → `color: '#1E293B'`

### File: `src/components/FAQSection.tsx`
- Line 49: Change `color: '#1E3A8A'` → `color: '#1E293B'`
- Line 66: Change accordion trigger `color: '#1E3A8A'` → `color: '#1E293B'`

### File: `src/index.css`
Update CSS variable for secondary to near-black (line 18-19):
```css
/* Secondary - Near-black for headings on light backgrounds */
--secondary: 215 28% 17%;        /* #1E293B */
```

---

## FIX 5: GALLERY SECTION — THUMBNAIL SELECTION RING

### File: `src/components/GallerySection.tsx` (Lines 101-105)
Change selected ring from blue `#2563EB` to green `#1B6B3A`:
```tsx
className={`rounded-lg overflow-hidden transition-all duration-300 flex-shrink-0 bg-muted min-h-[44px] border-2 ${
  index === currentIndex
    ? "border-[#1B6B3A] ring-2 ring-[#1B6B3A] ring-offset-2 shadow-lg"
    : "border-transparent opacity-50 hover:opacity-100"
}`}
```

---

## FIX 6: TRUST BADGES SECTION — USE IMAGE LOGOS

### File: `src/components/TrustBadgesSection.tsx`

Complete rewrite to use the uploaded logos instead of text-based badges:

```tsx
import logoBbb from "@/assets/logo-bbb.png";
import logoHomeadvisor from "@/assets/logo-homeadvisor-elite.png";
import logoBenjaminMoore from "@/assets/logo-benjamin-moore.png";
import logoBehr from "@/assets/logo-behr.png";
import logoAngi from "@/assets/logo-angi.png";

const TrustBadgesSection = () => {
  const badges = [
    { src: logoBbb, alt: "BBB A+ Rated" },
    { src: logoBenjaminMoore, alt: "Benjamin Moore" },
    { src: logoBehr, alt: "BEHR" },
    { src: logoAngi, alt: "Angi Certified Pro" },
    { src: logoHomeadvisor, alt: "HomeAdvisor Elite Service" },
  ];

  // Double the badges for seamless loop
  const allBadges = [...badges, ...badges];

  return (
    <section className="py-6 bg-white border-y border-border overflow-hidden">
      <p className="text-center text-xs uppercase tracking-widest mb-4 font-medium" style={{ color: '#1E293B' }}>
        Trusted & Certified
      </p>
      <div className="flex w-max animate-scroll">
        {allBadges.map((badge, index) => (
          <div
            key={`${badge.alt}-${index}`}
            className="flex-shrink-0 flex items-center justify-center px-8 sm:px-12 min-w-[140px] sm:min-w-[180px]"
          >
            <img
              src={badge.src}
              alt={badge.alt}
              className="h-12 sm:h-16 w-auto object-contain"
              loading="lazy"
              decoding="async"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustBadgesSection;
```

Key changes:
- Remove all text-based badges
- Use only image logos (BBB, Benjamin Moore, BEHR, Angi, HomeAdvisor)
- Remove grayscale/opacity filters — show logos in full color
- Title text color changed from `text-secondary` → `#1E293B`

---

## FIX 7: QUIZ PAGE — COMPLETE REDESIGN

### File: `src/pages/QualifyPage.tsx`

### 7A: DELETE Red "People Checking" Banner (Lines 46-58)
Remove the entire red urgency banner:
```tsx
// DELETE THIS ENTIRE BLOCK
<div className="inline-flex items-center gap-2 text-white text-xs font-bold px-4 py-2 rounded-full mb-4 shadow-xl border-2 border-white/50"
  style={{ background: 'linear-gradient(135deg, #DC2626 0%, #EF4444 100%)' }}>
  ...57 people checking availability right now
</div>
```

### 7B: CHANGE Background from Watercolor to Dark Slate
Change the background (lines 28-36) from watercolor image to dark solid:
```tsx
{/* Background - Dark Slate */}
<div className="fixed inset-0 z-0" style={{ backgroundColor: '#0F172A' }} />
```

### 7C: UPDATE Header Text Styling (Lines 63-66)
Change from `text-secondary` to explicit colors for visibility on dark:
```tsx
<h1 className="text-xl sm:text-2xl font-bold text-white mb-3 leading-relaxed">
  See If You Qualify for the
  <br />
  <span style={{ color: '#1B6B3A' }}>Home Refresh Program</span>
</h1>
<p className="text-base text-white/70">
  Takes less than 30 seconds
</p>
```

### 7D: UPDATE Footer Styling (Lines 81-89)
Change footer for dark background context:
```tsx
<footer className="w-full py-4 px-4" style={{ backgroundColor: 'rgba(255,255,255,0.05)', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
  <div className="container mx-auto">
    <div className="flex items-center justify-center gap-2 text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>
      <Shield className="w-3.5 h-3.5" style={{ color: '#1B6B3A' }} />
      Your information is secure and will only be used to contact you about your painting project
    </div>
  </div>
</footer>
```

---

## FIX 8: QUIZ COMPONENT — COLOR UPDATES

### File: `src/components/Quiz.tsx`

### 8A: Timeline Disqualification Screen (Lines 579-582)
Change blue icon background to green:
```tsx
// Change from:
className="w-14 h-14 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center"
<Calendar className="w-7 h-7 text-blue-600" />

// To:
className="w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center"
style={{ backgroundColor: 'rgba(27, 107, 58, 0.1)' }}
<Calendar className="w-7 h-7" style={{ color: '#1B6B3A' }} />
```

### 8B: Option Card Icons (Lines 328-331)
Ensure ALL icons use consistent green color when not selected:
- Change various `accentColor` references to consistently use `text-primary` (#1B6B3A)

### 8C: Progress Dots Already Correct
Progress dots on line 368-369 already use `bg-primary` which is green — no change needed.

---

## FIX 9: MOBILE OPTIMIZATION

### Apply Across All Sections:

### Container Padding
- Change `px-4` → `px-3` on hero container
- Keep `px-4` on other sections (they're fine)

### Section Vertical Padding
- **GallerySection** (line 43): Keep `py-16 lg:py-24` but add `py-12` for mobile
  - Change to: `py-12 lg:py-20`
- **ProcessSection** (line 33): Change to `py-12 lg:py-20`
- **FAQSection** (line 37): Change to `py-12 lg:py-20`
- **FinalCTASection** (line 8): Change to `py-12 lg:py-20`
- **ReviewsSection** (line 97): Keep `py-12 sm:py-16 lg:py-24` (already optimized)

---

## FIX 10: FINAL CTA SECTION CLEANUP

### File: `src/components/FinalCTASection.tsx`

### Remove Date Reference (Lines 27-29)
Change headline from "Before The Home Refresh Program Closes" to simpler:
```tsx
<h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-6 max-w-3xl mx-auto leading-tight">
  Don't Wait — Lock In Your{" "}
  <span style={{ color: '#F5C518' }}>25% Discount</span> Today
</h2>
```

---

## SUMMARY TABLE

| # | File | Changes |
|---|------|---------|
| 1 | `StickyHeader.tsx` | DELETE FILE |
| 2 | `Index.tsx` | Remove StickyHeader import and component |
| 3 | `HeroSection.tsx` | Delete badge, social proof; fix padding; strengthen subheadline; change CTA text |
| 4 | `GallerySection.tsx` | Change heading color; change selected ring color; change CTA text |
| 5 | `ProcessSection.tsx` | Change heading color; change number badges to green |
| 6 | `FAQSection.tsx` | Change heading color; change CTA text |
| 7 | `FinalCTASection.tsx` | Change CTA text; update headline |
| 8 | `FloatingCTA.tsx` | Change CTA text |
| 9 | `ReviewsSection.tsx` | Change CTA text |
| 10 | `TrustBadgesSection.tsx` | Complete rewrite with image logos |
| 11 | `QualifyPage.tsx` | Delete red banner; change to dark background |
| 12 | `Quiz.tsx` | Change timeline icon colors from blue to green |
| 13 | `index.css` | Update --secondary to #1E293B |

---

## NEW ASSETS TO COPY

| Source | Destination |
|--------|-------------|
| `user-uploads://image-10.png` | `src/assets/logo-benjamin-moore.png` |
| `user-uploads://image-11.png` | `src/assets/logo-behr.png` |
| `user-uploads://image-12.png` | `src/assets/logo-angi.png` |

---

## VERIFICATION CHECKLIST

| # | Check | Expected |
|---|-------|----------|
| 1 | Page starts with hero | NO sticky header |
| 2 | Hero | NO "Spring 2025" badge |
| 3 | Hero | NO social proof counter |
| 4 | Hero headline | `text-[26px]` mobile, tight padding (`px-3`) |
| 5 | Hero subheadline | Triple text shadow, "LIMITED SPOTS AVAILABLE" in gold |
| 6 | ALL CTAs | Say "Check My Eligibility" |
| 7 | ALL CTAs | Green `#1B6B3A` |
| 8 | Light section headings | Near-black `#1E293B` (NOT blue) |
| 9 | Process number badges | Green `#1B6B3A` (NOT blue) |
| 10 | Gallery selected ring | Green `#1B6B3A` (NOT blue) |
| 11 | Trust badges | Image logos only (BBB, Benjamin Moore, BEHR, Angi, HomeAdvisor) |
| 12 | Trust badges | Full color (NO grayscale) |
| 13 | Quiz page | NO red "people checking" banner |
| 14 | Quiz page | Dark background `#0F172A` |
| 15 | Quiz icons | All green `#1B6B3A` |
| 16 | Mobile padding | `py-12` sections, `px-3` hero |
| 17 | No scroll animations | All content visible immediately |

