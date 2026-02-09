

## Summary
Replace the hero section background image with the new Colorado mountain landscape photo and ensure the dark gradient overlay keeps all text fully visible.

---

## Changes

### 1. Copy New Image to Assets

Copy the uploaded mountain image to the assets folder:
- **From**: `user-uploads://image-18.png`
- **To**: `src/assets/hero-mountain-new.webp`

### 2. Update HeroSection.tsx

**File**: `src/components/HeroSection.tsx`

**A) Update import (line 4):**
```typescript
// Change from:
import heroBg from "@/assets/hero-bg.png";

// Change to:
import heroBg from "@/assets/hero-mountain-new.webp";
```

The component already uses the imported `heroBg` variable and has the `hero-overlay-dark` gradient overlay, so no other changes are needed in the component.

### 3. Enhance Gradient Overlay (Optional)

**File**: `src/index.css`

The current overlay may need adjustment for the new image. I'll strengthen the gradient to ensure text remains fully visible against the brighter mountain/sky areas:

```css
.hero-overlay-dark {
  background: linear-gradient(
    to bottom,
    rgba(15, 23, 42, 0.90) 0%,      /* Darker at top for logo */
    rgba(15, 23, 42, 0.75) 30%,     /* Strong mid-section for headline */
    rgba(15, 23, 42, 0.60) 60%,     /* Gradual fade */
    rgba(15, 23, 42, 0.80) 100%    /* Darker at bottom for CTA */
  );
}
```

This increases opacity throughout (from 0.85/0.60/0.40/0.70 to 0.90/0.75/0.60/0.80) to ensure text is fully visible against the bright sky and snow-capped peaks in the new image.

---

## Files Modified
- Copy image to `src/assets/hero-mountain-new.webp`
- `src/components/HeroSection.tsx` - update import path
- `src/index.css` - strengthen gradient overlay for better text contrast

---

## Result
- New dramatic Colorado mountain landscape as hero background
- Darker gradient overlay ensures all white text and gold highlights remain fully legible
- Maintains the existing hero layout and styling

