

# FIX: REMOVE SUBHEADLINE BACKGROUND, ADD STRONGER TEXT SHADOW

## Overview

The dark background box on the subheadline looks terrible. Removing it and adding a much stronger text shadow effect instead for readability.

**File to Modify**: 1 file

---

## CHANGE: SUBHEADLINE TEXT EFFECT

### File: `src/components/HeroSection.tsx`

**Current (ugly background box):**
```tsx
<p 
  className="text-[15px] sm:text-lg lg:text-xl text-white leading-relaxed max-w-xl mx-auto px-4 py-3 rounded-xl"
  style={{ 
    textShadow: '0 2px 4px rgba(0,0,0,0.9), 0 4px 12px rgba(0,0,0,0.7)',
    fontWeight: 500,
    backgroundColor: 'rgba(0, 0, 0, 0.45)',
    backdropFilter: 'blur(4px)'
  }}
>
```

**New (strong text shadow only, no background):**
```tsx
<p 
  className="text-[15px] sm:text-lg lg:text-xl text-white leading-relaxed max-w-xl mx-auto px-1"
  style={{ 
    textShadow: '0 1px 2px rgba(0,0,0,1), 0 2px 4px rgba(0,0,0,0.95), 0 4px 8px rgba(0,0,0,0.9), 0 8px 16px rgba(0,0,0,0.8), 0 0 40px rgba(0,0,0,0.7)',
    fontWeight: 600
  }}
>
```

**What this does:**
- **Removes**: `backgroundColor`, `backdropFilter`, `px-4 py-3 rounded-xl`
- **Adds**: Multi-layered heavy text shadow (5 layers) with near-black opacity
- **Increases**: Font weight from 500 to 600 for better visibility
- **Reverts padding**: Back to `px-1` (no box padding)

The 5-layer shadow creates a thick dark "halo" around the text that makes it readable on any background brightness without the ugly box.

---

## VERIFICATION

| Check | Expected |
|-------|----------|
| Subheadline | NO background box, text has heavy dark shadow halo |
| Readability | Text clearly visible even on bright mountain areas |
| Clean look | No dark rectangle, just text with shadow |

