

## Problem
The headline at 26px is wrapping across 5 lines on mobile, making it feel cramped and less impactful.

## Options

### Option A: Reduce Text Size (Recommended)
Reduce the headline from 26px to 22px on mobile. This will allow more words per line and reduce wrapping to approximately 3-4 lines.

**Change:**
```text
text-[26px] → text-[22px]
```

### Option B: Shorten the Headline
Keep the size but make the copy shorter:
- Current: "The Home Refresh Program Is Helping Colorado Homeowners Save 25% On Their Painting Project"
- Shorter: "Colorado Homeowners Are Saving 25% On Their Painting Project"

## Recommended Solution
I recommend **Option A** - reducing the text size to 22px. This keeps your full message while fitting better on mobile screens.

## Implementation

**File to Modify**: `src/components/HeroSection.tsx`

### Change: Reduce headline text size (Line 36)

**Current:**
```tsx
className="text-[26px] sm:text-4xl lg:text-5xl text-white leading-[1.15] mb-6 sm:mb-8 text-left"
```

**New:**
```tsx
className="text-[22px] sm:text-4xl lg:text-5xl text-white leading-[1.15] mb-6 sm:mb-8 text-left"
```

## Expected Result
- Headline will fit in approximately 3-4 lines instead of 5
- Desktop sizes remain unchanged (36px/48px)
- Text remains readable and impactful

