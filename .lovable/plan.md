

## Summary
Make the hero section feel more spacious and less cramped by increasing vertical spacing between elements and improving line-height for better readability.

---

## Current Spacing Issues

| Element | Current | Issue |
|---------|---------|-------|
| Top padding | `pt-4` (16px) | Too tight at top |
| Logo bottom margin | `mb-1` (4px) | Almost no gap to headline |
| Headline line-height | `leading-[1.15]` | Lines feel squeezed together |
| Headline bottom margin | `mb-6` (24px) | Could use more breathing room |
| Content wrapper margin | `mb-4` (16px) | Minimal gap before CTA |

---

## Recommended Changes

**File**: `src/components/HeroSection.tsx`

### 1. Increase top padding (Line 22)
`pt-4` → `pt-6` (16px → 24px)

### 2. Add more space below logo (Line 31)
`mb-1` → `mb-4` (4px → 16px)

### 3. Increase headline line-height (Line 36)
`leading-[1.15]` → `leading-[1.25]` (more breathing room between lines)

### 4. Increase space below headline (Line 36)
`mb-6` → `mb-8` (24px → 32px)

### 5. Increase content wrapper bottom margin (Line 26)
`mb-4` → `mb-6` (16px → 24px)

---

## Visual Comparison

```text
BEFORE (cramped):
┌─────────────────────────┐
│ [LOGO]                  │  ← 4px gap
│ Ready To Transform Your │
│ Home? The Home Refresh  │  ← Tight 1.15 line-height
│ Program Is Giving...    │
│ 25% Off Any Painting    │
│ Project                 │  ← 24px gap
│ LIMITED SPOTS...        │
│                         │
│ [  CHECK ELIGIBILITY  ] │
└─────────────────────────┘

AFTER (breathing room):
┌─────────────────────────┐
│                         │  ← More top padding
│ [LOGO]                  │
│                         │  ← 16px gap
│ Ready To Transform Your │
│                         │
│ Home? The Home Refresh  │  ← 1.25 line-height
│                         │
│ Program Is Giving...    │
│                         │
│ 25% Off Any Painting    │
│ Project                 │
│                         │  ← 32px gap
│ LIMITED SPOTS...        │
│                         │
│ [  CHECK ELIGIBILITY  ] │
└─────────────────────────┘
```

---

## Specific Code Changes

```text
Line 22: pt-4 → pt-6
Line 26: mb-4 → mb-6
Line 31: mb-1 → mb-4
Line 36: leading-[1.15] → leading-[1.25], mb-6 → mb-8
```

---

## Alternative: Reduce font size instead
If you'd prefer to keep the current spacing but reduce density:
- Reduce headline from `text-[24px]` to `text-[22px]`
- This naturally creates more white space per line

---

## Files Modified
- `src/components/HeroSection.tsx`

