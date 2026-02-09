

## Summary
Fix the headline color from gold to black, make quiz option icons filled by default, and increase the quiz box shadow for more prominence.

---

## Changes Overview

### 1. Headline Color Change
**File: `src/pages/QualifyPage.tsx`**

The gold color on the "Home Refresh Program" headline is not ideal. Change it to black/dark slate with a subtle text effect:
- Color: `#1e293b` (dark slate, matching the first headline)
- Add a subtle drop shadow to make it pop

### 2. Fill Icons by Default
**File: `src/components/Quiz.tsx`**

Currently icons only fill when selected. Change to:
- Icons are always filled with a semi-transparent fill
- Use `fill="currentColor"` with reduced opacity so the icon shape remains visible
- Maintain contrast between selected and unselected states

### 3. Quiz Card Shadow Enhancement
**File: `src/index.css`**

Add a more dramatic shadow to the `.quiz-card-glass` class to make the quiz box pop out significantly more from the background.

---

## Technical Details

### QualifyPage.tsx Changes

```tsx
// Lines 66-74: Change gold to dark slate with text effect
<h2 
  className="text-[28px] sm:text-3xl font-extrabold mb-2 leading-tight"
  style={{ 
    color: '#1e293b',
    textShadow: '0 2px 4px rgba(0,0,0,0.1)'
  }}
>
  Home Refresh Program
</h2>
```

### Quiz.tsx Changes - OptionCard Icon

```tsx
// Lines 328-334: Always fill icons, use opacity to maintain visibility
<Icon
  className={`w-5 h-5 transition-colors duration-200 ${
    selected ? "text-primary-foreground" : accentColor
  }`}
  fill="currentColor"
  fillOpacity={selected ? 1 : 0.2}
  strokeWidth={2}
/>
```

### index.css Changes - Quiz Card Shadow

```css
/* Line 144-152: Add prominent shadow to quiz-card-glass */
.quiz-card-glass {
  background: linear-gradient(
    180deg, 
    hsl(0 0% 100% / 0.98) 0%, 
    hsl(220 14% 98% / 0.95) 100%
  );
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  box-shadow: 
    0 25px 80px -12px rgba(0, 0, 0, 0.25),
    0 12px 40px -8px rgba(0, 0, 0, 0.15),
    0 0 0 1px rgba(27, 107, 58, 0.15);
}
```

---

## Files to Modify

1. `src/pages/QualifyPage.tsx` - Headline color and text effect
2. `src/components/Quiz.tsx` - Icons filled by default
3. `src/index.css` - Enhanced quiz card shadow

---

## Result

- "Home Refresh Program" headline in dark slate with subtle shadow to pop
- All quiz option icons are filled by default (with 20% opacity fill)
- When selected, icons become fully filled with contrasting color
- Quiz box has a much more prominent shadow, making it stand out clearly on the watercolor background

