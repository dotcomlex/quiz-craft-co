

# EMERALD PAINTS — ROUND 5 UPDATES PLAN

## Overview

This plan implements 5 key updates:
1. Quiz page headline rewrite with news-style qualifying angle + logo placement
2. Process section language updates (remove "Jose" → use "We/We'll") 
3. Process section step descriptions updated for qualification angle
4. Replace finished home image with painters action shot (AI-generated)
5. Copy white Emerald Paints logo and place elegantly above quiz headline

**Files to Modify**: 3 files
**New Assets**: 2 images (logo + action shot)

---

## UPDATE 1: QUIZ PAGE — NEWS-STYLE HEADLINE OPTIONS

### File: `src/pages/QualifyPage.tsx`

Here are 3 headline options with qualifying/news angle:

**OPTION A (Recommended):**
```
Quick Question — Is Your Zip Code Eligible?

This New Program Is Helping Colorado Homeowners Save 25% On Their Painting Project
```

**OPTION B:**
```
Could Your Home Qualify?

Colorado's Home Refresh Program Is Saving Homeowners 25% On Professional Painting
```

**OPTION C:**
```
Breaking: Limited Spots Available

The Home Refresh Program Is Helping Colorado Homeowners Save 25% On Their Painting
```

### Proposed Implementation (Option A):

```tsx
{/* Logo - elegant sizing with proper spacing */}
<img 
  src={emeraldLogo}
  alt="Emerald Paints"
  className="h-8 sm:h-10 w-auto mx-auto mb-6"
  style={{ filter: 'brightness(1.1)' }}
/>

{/* Pre-headline question */}
<p 
  className="text-sm sm:text-base text-white/80 uppercase tracking-widest mb-3 font-medium"
  style={{ textShadow: '0 1px 2px rgba(0,0,0,0.5)' }}
>
  Quick Question — Is Your Zip Code Eligible?
</p>

{/* Main headline */}
<h1 
  className="text-[24px] sm:text-3xl font-extrabold text-white mb-3 leading-tight"
  style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}
>
  This New Program Is Helping Colorado Homeowners Save{" "}
  <span style={{ 
    color: '#F5C518',
    textShadow: '0 0 20px rgba(245, 197, 24, 0.5), 0 0 40px rgba(245, 197, 24, 0.3)'
  }}>
    25%
  </span>{" "}
  On Their Painting Project
</h1>
```

### Subheadline — Updated for Action:

```tsx
<p 
  className="text-sm text-white/70 leading-relaxed max-w-md mx-auto"
  style={{ textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}
>
  <span style={{ color: '#F5C518', fontWeight: 600 }}>Limited Spots Available</span>
  {" "} — Homeowners across Colorado are taking advantage. Click below to see if you qualify for a FREE estimate and 25% off.
</p>
```

---

## UPDATE 2: WHITE LOGO PLACEMENT

### Copy Logo Asset:
- **Source**: `user-uploads://ChatGPT_Image_Feb_8_2026_01_43_44_PM.png`
- **Destination**: `src/assets/emerald-logo-white.png`

### Logo Styling:
- Height: `h-8` on mobile, `h-10` on larger screens
- Margin bottom: `mb-6` (24px) — enough breathing room without pushing content down
- Centered with `mx-auto`
- White PNG displays naturally on dark `#020617` background

---

## UPDATE 3: PROCESS SECTION — LANGUAGE UPDATES

### File: `src/components/ProcessSection.tsx`

**Replace "Jose" references with "We/We'll"** and update for qualification angle:

```tsx
const steps = [
  {
    icon: MessageSquare,
    number: "1",
    title: "Answer Quick Questions",
    description: "Tell us about your project so we can check your availability and prepare your estimate.",
  },
  {
    icon: CalendarCheck,
    number: "2",
    title: "Free In-Home Estimate",
    description: "If you qualify, we'll schedule a 100% free in-home estimate to walk through your project and discuss colors.",
  },
  {
    icon: FileText,
    number: "3",
    title: "Clear, Upfront Price",
    description: "No hidden fees, no surprises. You know exactly what to expect before we start.",
  },
  {
    icon: Paintbrush,
    number: "4",
    title: "We Handle Everything",
    description: "We handle all the prep, painting, and cleanup. You just enjoy the transformation.",
  },
];
```

**Key changes:**
- Step 1: Added "check your availability" to reinforce qualifying angle
- Step 2: Changed "Jose comes" → "If you qualify, we'll schedule" — emphasizes conditional benefit
- Steps 3-4: Already use "we" — no changes needed

---

## UPDATE 4: REPLACE IMAGE WITH PAINTERS ACTION SHOT

### Generate AI Image:

**Prompt**: "Professional residential painters team of 2-3 people actively painting the exterior of a Colorado home, realistic photography style, painters on ladders with brushes and rollers, sunny day, warm lighting, high quality, no text overlays, horizontal 16:9 aspect ratio"

### Save to: `src/assets/painters-action-shot.webp`

### Update ProcessSection.tsx:

```tsx
import paintersAction from "@/assets/painters-action-shot.webp";

// In the JSX (replace finishedHome):
<div className="max-w-4xl mx-auto mt-12">
  <img
    src={paintersAction}
    alt="Professional painters actively working on a Colorado home"
    className="w-full aspect-video object-cover rounded-2xl shadow-xl"
    loading="lazy"
    decoding="async"
  />
</div>
```

**Key changes:**
- Changed from `aspect-square` to `aspect-video` (16:9) for action shots
- Shows painters actively working (the process)
- Realistic look, not AI/stock feeling

---

## SUMMARY TABLE

| # | File | Change |
|---|------|--------|
| 1 | `src/assets/emerald-logo-white.png` | NEW - Copy white logo |
| 2 | `src/assets/painters-action-shot.webp` | NEW - AI generate action shot |
| 3 | `src/pages/QualifyPage.tsx` | Add logo + rewrite headline + update subheadline |
| 4 | `src/components/ProcessSection.tsx` | Update step descriptions (remove Jose, add qualifying) |
| 5 | `src/components/ProcessSection.tsx` | Replace image with action shot |

---

## EXECUTION ORDER

1. Copy white Emerald Paints logo to assets
2. Generate painters action shot via AI
3. Update QualifyPage.tsx with logo + new headline/subheadline
4. Update ProcessSection.tsx with new step descriptions + action shot image

---

## VERIFICATION CHECKLIST

| # | Check | Expected |
|---|-------|----------|
| 1 | Quiz page logo | White Emerald Paints logo centered above headline, h-8/h-10, mb-6 spacing |
| 2 | Quiz pre-headline | "Quick Question — Is Your Zip Code Eligible?" in uppercase tracking-widest |
| 3 | Quiz headline | News-style, "25%" in gold with glow |
| 4 | Quiz subheadline | "Limited Spots Available" gold + "Homeowners are taking advantage" |
| 5 | Process step 1 | "...check your availability and prepare your estimate" |
| 6 | Process step 2 | "If you qualify, we'll schedule..." (no Jose) |
| 7 | Process image | Painters action shot, aspect-video, realistic look |
| 8 | Mobile spacing | Logo doesn't push content down too much |

