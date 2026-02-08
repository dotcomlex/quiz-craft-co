

## Summary
Reduce headline wrapping by minimizing padding and removing width constraints to allow the text to extend closer to the screen edges on mobile.

---

## Current Layout Analysis

Looking at your screenshot and the code, here are all the width constraints affecting the headline:

| Constraint | Current Value | Effect |
|------------|---------------|--------|
| Tailwind container padding | 1.5rem (24px) | Adds 24px on each side |
| Content div `px-2` | 0.5rem (8px) | Adds 8px on each side |
| `max-w-4xl` | 896px | Caps width (not an issue on mobile) |
| Subheadline `max-w-xl` + `px-1` | 576px + 4px | Only affects subheadline |

**Total padding on each side: ~32px** - that's 64px of horizontal space lost on mobile

---

## Recommended Changes

**File**: `src/components/HeroSection.tsx`

### 1. Remove container class to eliminate built-in 24px padding
Line 22: Remove `container` class or override its padding

### 2. Use minimal padding directly
Replace `container mx-auto px-2` with just `px-3` (12px each side - enough to not touch edges)

### 3. Reduce headline font size slightly (optional fallback)
If still wrapping too much, reduce from `text-[24px]` to `text-[22px]`

---

## Implementation

```text
Line 22 change:
BEFORE: className="relative z-10 container mx-auto px-2 pt-4 pb-16..."
AFTER:  className="relative z-10 px-3 pt-4 pb-16..."

This removes ~40px of total horizontal padding (24px container + 8px px-2 = 32px per side → 12px per side)
```

---

## Visual Impact

```text
BEFORE (~32px padding each side):
┌────────────────────────────────────────────┐
│         Ready To Transform Your            │
│         Home? The Home Refresh             │
│         Program Is Giving Colorado         │
│         Homeowners 25% Off Any             │
│         Painting Project                   │
└────────────────────────────────────────────┘

AFTER (~12px padding each side):
┌────────────────────────────────────────────┐
│  Ready To Transform Your Home? The         │
│  Home Refresh Program Is Giving            │
│  Colorado Homeowners 25% Off Any           │
│  Painting Project                          │
└────────────────────────────────────────────┘
```

Gains approximately 40 extra pixels of horizontal space for text, significantly reducing line breaks.

---

## Alternative: Font Size Reduction

If layout changes alone aren't enough:
- Reduce headline from `text-[24px]` to `text-[22px]`
- This provides ~8% more characters per line

---

## Files Modified
- `src/components/HeroSection.tsx`

