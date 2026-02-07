

# EMERALD PAINTS — ROUND 4 TWEAKS IMPLEMENTATION PLAN

## Overview

This plan implements 4 visual tweaks to enhance the quiz page and How It Works section:
1. Quiz headline with gold glow text treatment
2. Emerald orb grid background on quiz page
3. Red number badges on How It Works section
4. AI-generated finished Colorado home image

**Files to Modify**: 3 files
**New Files to Create**: 1 component (GridBackground)
**New Assets to Generate**: 1 AI image

---

## TWEAK 1: QUIZ PAGE — HEADLINE TEXT TREATMENT

### File: `src/pages/QualifyPage.tsx` (Lines 21-31)

Replace the current headline with bold gold glow treatment:

```tsx
{!quizStarted && (
  <>
    <h1 
      className="text-[28px] sm:text-3xl font-extrabold text-white mb-3 leading-tight"
      style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}
    >
      See If You Qualify for the
    </h1>
    <h2 
      className="text-[28px] sm:text-3xl font-extrabold mb-4 leading-tight"
      style={{ 
        color: '#F5C518',
        textShadow: '0 0 20px rgba(245, 197, 24, 0.5), 0 0 40px rgba(245, 197, 24, 0.3), 0 2px 4px rgba(0,0,0,0.3)'
      }}
    >
      Home Refresh Program
    </h2>
    <p 
      className="text-sm text-white/60 tracking-wide"
      style={{ textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}
    >
      Takes less than 30 seconds
    </p>
  </>
)}
```

**Key changes:**
- "Home Refresh Program" is now GOLD `#F5C518` instead of green
- Added triple-layer glowing text shadow for warm premium effect
- Made headline `font-extrabold` and `text-[28px]` for more presence
- White text has subtle shadow for depth on dark background

---

## TWEAK 2: QUIZ PAGE — EMERALD ORB GRID BACKGROUND

### Create New File: `src/components/ui/grid-background.tsx`

```tsx
import React from "react";

interface GridBackgroundProps {
  children?: React.ReactNode;
  className?: string;
}

export function GridBackground({ children, className = "" }: GridBackgroundProps) {
  return (
    <div className={`relative w-full ${className}`}>
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(30, 41, 59, 0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(30, 41, 59, 0.4) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />
      
      {/* Emerald radial glow - centered */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          background: 'radial-gradient(circle at 50% 40%, rgba(27, 107, 58, 0.15) 0%, rgba(27, 107, 58, 0.05) 25%, transparent 50%)',
        }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}

export default GridBackground;
```

### Update File: `src/pages/QualifyPage.tsx`

Replace the plain dark background with the grid effect:

```tsx
import GridBackground from "@/components/ui/grid-background";

// In the return statement:
<div className="min-h-screen relative">
  {/* Background - Darker slate for contrast */}
  <div className="fixed inset-0 z-0" style={{ backgroundColor: '#020617' }} />
  
  {/* Grid + Emerald Glow overlay */}
  <div className="fixed inset-0 z-0">
    <GridBackground className="w-full h-full" />
  </div>

  {/* Content */}
  <div className="relative z-10 min-h-screen flex flex-col">
    {/* ... existing content ... */}
  </div>
</div>
```

**What this does:**
- Subtle grid lines in dark slate — adds texture and depth
- Soft emerald green radial glow centered behind quiz card — creates spotlight effect
- Background is darker `#020617` (almost black) for more dramatic contrast
- Quiz card floats on top with z-10

---

## TWEAK 3: HOW IT WORKS — RED NUMBER BADGES

### File: `src/components/ProcessSection.tsx` (Lines 74-79)

Change the number badge from green to red:

```tsx
{/* RED number badge for contrast */}
<div 
  className="absolute -top-2 -right-2 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold shadow-lg"
  style={{ backgroundColor: '#DC2626', color: '#FFFFFF' }}
>
  {step.number}
</div>
```

**Key changes:**
- Badge color: `#DC2626` (red-600) with white text
- Creates visual hierarchy: green icons + red badges = clear step numbering
- Icons remain green `#1B6B3A` — only number circles change

---

## TWEAK 4: WORK IN ACTION PHOTO — FINISHED COLORADO HOME

### Generate AI Image

Use the AI image generation tool with this prompt:

"Beautiful finished residential home in Colorado at golden hour, freshly painted exterior in warm neutral tones, immaculate landscaping, Rocky Mountains visible in background, professional real estate photography style, warm lighting, no people, 1:1 square aspect ratio"

### Save to: `src/assets/finished-colorado-home.webp`

### Update File: `src/components/ProcessSection.tsx` (Lines 91-99)

Replace the painters action shot with the new finished home image:

```tsx
import finishedHome from "@/assets/finished-colorado-home.webp";

// In the JSX:
<div className="max-w-4xl mx-auto mt-12">
  <img
    src={finishedHome}
    alt="Beautiful finished Colorado home with fresh paint"
    className="w-full aspect-square object-cover rounded-2xl shadow-xl"
    loading="lazy"
    decoding="async"
  />
</div>
```

**Key changes:**
- Image is `aspect-square` (1:1 ratio)
- Shows the RESULT, not the process — homeowners want to see what their home could look like
- Rounded corners `rounded-2xl`
- Professional real estate photography style

---

## SUMMARY TABLE

| # | File | Change |
|---|------|--------|
| 1 | `src/pages/QualifyPage.tsx` | Gold glow headline treatment |
| 2 | `src/components/ui/grid-background.tsx` | NEW FILE - Grid + emerald orb effect |
| 3 | `src/pages/QualifyPage.tsx` | Apply grid background |
| 4 | `src/components/ProcessSection.tsx` | Red number badges (line 76) |
| 5 | `src/assets/finished-colorado-home.webp` | NEW AI-generated image |
| 6 | `src/components/ProcessSection.tsx` | Replace action shot with finished home |

---

## EXECUTION ORDER

1. Generate AI image of finished Colorado home
2. Create `grid-background.tsx` component
3. Update `QualifyPage.tsx` with gold headline + grid background
4. Update `ProcessSection.tsx` with red badges + new image

---

## VERIFICATION CHECKLIST

| # | Check | Expected |
|---|-------|----------|
| 1 | Quiz headline | "Home Refresh Program" is gold `#F5C518` with warm glow |
| 2 | Quiz background | Subtle grid lines + emerald radial glow centered |
| 3 | Quiz background | Darker `#020617` base for dramatic contrast |
| 4 | Quiz card | Still white, floating on dark background with z-10 |
| 5 | Process badges | Number circles are RED `#DC2626` |
| 6 | Process icons | Still GREEN `#1B6B3A` (unchanged) |
| 7 | Work in Action | Shows beautiful finished Colorado home |
| 8 | Work in Action | Image is 1:1 square with rounded corners |


