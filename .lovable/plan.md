

## Summary
Update the quiz page with a new watercolor mountain background image, adjust headline colors for visibility on the lighter background, and update quiz option labels for project type and timeline questions.

---

## Changes Overview

### 1. Background Image Update
**File: `src/pages/QualifyPage.tsx`**

- Replace the dark slate background (`#020617`) with the uploaded watercolor mountain image
- Keep the grid overlay but make the lines subtle (reduce opacity from 0.4 to ~0.15) so they're visible but not overwhelming on the light background
- Adjust the emerald glow to work on the lighter background

### 2. Headline Color Adjustments
**File: `src/pages/QualifyPage.tsx`**

Since the background will now be light/warm-toned, the headlines need to change from white to dark colors:
- "See If You Qualify for the" - Change from white to dark navy/slate (`#1e293b`)
- "Home Refresh Program" - Keep gold (`#F5C518`) but with darker shadow for contrast
- "Takes less than 30 seconds" - Change from white/60 opacity to dark muted color

### 3. Grid Background Component Update
**File: `src/components/ui/grid-background.tsx`**

- Reduce grid line opacity from 0.4 to 0.15 for subtle visibility on light background
- Adjust the emerald glow to be softer and work with light backgrounds

### 4. Quiz Option Label Changes
**File: `src/components/Quiz.tsx`**

**Project Type (Step 1):**
- Change "Not Sure Yet" to "Other"

**Timeline (Step 2):**
- "Right Away" stays but internal label should say "ASAP" 
- "Within 30 Days" stays the same
- "1 to 3 Months" changes to "1 to 2 Months"
- "Not Sure Yet" changes to "3 to 4 Months" (this triggers the disqualification flow)

### 5. Footer Update
**File: `src/pages/QualifyPage.tsx`**

- Update footer styling for visibility on the light background
- Change text and background colors to work with watercolor image

---

## Technical Details

### QualifyPage.tsx Changes

```tsx
// Line 25: Replace solid color with watercolor image
<div 
  className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: 'url(watercolor-image-path)' }}
/>

// Lines 56-58: Dark headline instead of white
<h1
  className="text-[28px] sm:text-3xl font-extrabold mb-3 leading-tight"
  style={{ color: '#1e293b', textShadow: '0 1px 3px rgba(255,255,255,0.5)' }}
>

// Lines 71-73: Dark muted subtext
<p 
  className="text-sm tracking-wide"
  style={{ color: '#64748b' }}
>

// Lines 87-102: Update footer for light background
<footer 
  className="w-full py-4 px-4"
  style={{ 
    backgroundColor: 'rgba(0,0,0,0.05)', 
    borderTop: '1px solid rgba(0,0,0,0.1)' 
  }}
>
  <div style={{ color: 'rgba(0,0,0,0.5)' }}>
```

### grid-background.tsx Changes

```tsx
// Lines 14-18: Reduce grid opacity
backgroundImage: `
  linear-gradient(rgba(30, 41, 59, 0.12) 1px, transparent 1px),
  linear-gradient(90deg, rgba(30, 41, 59, 0.12) 1px, transparent 1px)
`,

// Lines 21-24: Softer emerald glow
background: 'radial-gradient(circle at 50% 40%, rgba(27, 107, 58, 0.08) 0%, rgba(27, 107, 58, 0.03) 25%, transparent 50%)',
```

### Quiz.tsx Label Changes

```tsx
// Line 414: Change "Not Sure Yet" to "Other"
label="Other"

// Line 199-200: Update getProjectTypeLabel
case "not-sure":
  return "Other";

// Lines 442-443: Change "Right Away" label to "ASAP"
label="ASAP"

// Lines 456-457: Change "1 to 3 Months" to "1 to 2 Months"
label="1 to 2 Months"

// Lines 463-464: Change "Not Sure Yet" to "3 to 4 Months"
label="3 to 4 Months"

// Lines 207-218: Update getTimelineLabel function
case "asap":
  return "ASAP";
case "1-3-months":
  return "1 to 2 months";
case "not-sure":
  return "3 to 4 months";
```

---

## Files to Modify

1. `src/pages/QualifyPage.tsx` - Background, headline colors, footer
2. `src/components/ui/grid-background.tsx` - Subtle grid lines
3. `src/components/Quiz.tsx` - Option labels for project type and timeline

---

## Result

- Watercolor mountain background creates warm, inviting atmosphere
- Grid lines remain visible but subtle (not overwhelming)
- Headlines visible with dark text on light background
- Gold "Home Refresh Program" still pops with adjusted shadow
- Project type: "Other" instead of "Not Sure Yet"
- Timeline options: ASAP, Within 30 Days, 1-2 Months, 3-4 Months
- Selecting "3 to 4 Months" triggers the existing disqualification flow

