

## Summary
Reduce headline text wrapping by extending content closer to the screen edges on mobile, while maintaining readability.

---

## Changes

**File**: `src/components/HeroSection.tsx`

### Option A: Reduce max-width constraint (Recommended)
Remove or increase the `max-w-2xl` (672px) on line 24 to allow the headline to extend further right.

**Current**: `max-w-2xl` limits content width
**Change to**: `max-w-3xl` (768px) or remove entirely

### Option B: Reduce container padding
Change `px-3` to `px-2` on line 22 to give ~4 more pixels on each side.

### Option C: Combination approach (Best results)
1. Change line 22: `px-3` → `px-2` (tighter container padding)
2. Change line 24: `max-w-2xl` → remove constraint or use `max-w-3xl`
3. Optionally reduce headline `text-[24px]` to `text-[22px]` if still wrapping

---

## Recommended Implementation

```text
Line 22: px-3 → px-2 (saves ~8px total width)
Line 24: max-w-2xl → max-w-4xl (or remove)
```

This combination will:
- Allow headline text to extend closer to the right edge
- Reduce line wrapping by utilizing more horizontal space
- Maintain proper spacing without text touching screen edges

---

## Visual Impact

```text
BEFORE (px-3, max-w-2xl):
┌─────────────────────────────────────────┐
│   Ready To Transform Your Home? The     │
│   Home Refresh Program Is Giving        │
│   Colorado Homeowners 25% Off Any       │
│   Painting Project                      │
└─────────────────────────────────────────┘

AFTER (px-2, no max-w):
┌─────────────────────────────────────────┐
│  Ready To Transform Your Home? The      │
│  Home Refresh Program Is Giving Colorado│
│  Homeowners 25% Off Any Painting Project│
└─────────────────────────────────────────┘
```

---

## Files Modified
- `src/components/HeroSection.tsx`

