
## FIX: REMOVE EXCESSIVE BOTTOM PADDING IN HERO SECTION

### Problem
The hero section now has too much bottom padding (`pb-8 sm:pb-12`) which pushes the trust indicators down with a large gap below them. Since we removed `justify-center` and aligned everything to the top, the bottom padding is no longer needed to maintain spacing.

### Solution
Reduce bottom padding to minimal value so the section ends right after the trust indicators.

**File to Modify**: `src/components/HeroSection.tsx`

---

### CHANGE: REDUCE BOTTOM PADDING

**Line 22 - Current:**
```tsx
className="relative z-10 container mx-auto px-3 pt-8 pb-8 sm:pt-12 sm:pb-12 min-h-screen flex flex-col items-center text-center"
```

**New:**
```tsx
className="relative z-10 container mx-auto px-3 pt-8 pb-2 sm:pt-12 sm:pb-4 min-h-screen flex flex-col items-center text-center"
```

**Changes:**
- Reduce `pb-8` to `pb-2` (mobile) - from 32px to 8px bottom padding
- Reduce `sm:pb-12` to `sm:pb-4` (tablet+) - from 48px to 16px bottom padding

This will eliminate the excessive white space below the trust indicators while maintaining minimal padding for clean spacing.

---

### VERIFICATION

| Check | Expected |
|-------|----------|
| Hero bottom space | Minimal gap below trust indicators, no excessive white space |
| Logo position | Still tight at top |
| Overall hero height | More compact, fits better on mobile viewport |
