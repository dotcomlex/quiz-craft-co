

## Summary
Reduce the dead space above the logo and below it to bring the headline higher up on mobile.

---

## Current Spacing Values

| Element | Current Value | Location |
|---------|---------------|----------|
| Top padding | `pt-6` (24px) | Line 22 |
| Logo bottom margin | `mb-4` (16px) | Line 31 |

---

## Recommended Changes

**File**: `src/components/HeroSection.tsx`

### 1. Reduce top padding
Line 22: `pt-6` → `pt-4` (24px → 16px)

### 2. Reduce logo bottom margin
Line 31: `mb-4` → `mb-2` (16px → 8px)

---

## Visual Impact

```text
BEFORE:
┌─────────────────────────┐
│                         │  ← 24px top padding
│       [LOGO]            │
│                         │  ← 16px gap
│  Ready To Transform...  │

AFTER:
┌─────────────────────────┐
│       [LOGO]            │  ← 16px top padding
│                         │  ← 8px gap
│  Ready To Transform...  │
```

This removes 16px from the total vertical space above the headline.

---

## Files Modified
- `src/components/HeroSection.tsx`

