

## Summary
Fix the quiz page visibility issues including the yellow headline contrast, tighten headline spacing, further reduce grid opacity, fill the quiz option icons, add a subtle shadow to make the quiz card more prominent, and change "3 to 4 Months" back to "Not sure" for the timeline option.

---

## Changes Overview

### 1. Yellow Headline Visibility
**File: `src/pages/QualifyPage.tsx`**

The gold/yellow "Home Refresh Program" headline is hard to read on the light watercolor background. Solution:
- Add a darker text shadow and slight stroke effect
- Use a darker gold shade (`#C9A000` instead of `#F5C518`) for better contrast on light backgrounds

### 2. Reduce Headline Spacing
**File: `src/pages/QualifyPage.tsx`**

Current spacing is too much:
- Change `mb-3` to `mb-1` on first headline
- Change `mb-4` to `mb-2` on second headline (gold one)

### 3. Further Reduce Grid Opacity
**File: `src/components/ui/grid-background.tsx`**

Grid lines at 0.06 opacity are still too prominent:
- Reduce from `0.06` to `0.03` for barely-visible subtle lines

### 4. Fill Quiz Option Icons
**File: `src/components/Quiz.tsx`**

Icons are currently outline-only. Change to filled versions:
- `Home` → stays (already has fill option via styling)
- `Building` → use `Building2` or add `fill="currentColor"`
- `ArrowLeftRight` → add fill
- `HelpCircle` → add fill
- `Zap`, `Calendar`, `CalendarClock`, `Clock` → add fill styling

The solution: Use `strokeWidth={1.5}` combined with `fill="currentColor"` and appropriate opacity, OR use the icon's `fill` prop where available.

### 5. Make Quiz Card More Prominent
**File: `src/components/Quiz.tsx`**

Add stronger shadow and border to make the quiz box stand out:
- Add a stronger box shadow
- Increase border opacity from `border-primary/20` to `border-primary/30`
- Add slight scale or padding increase

### 6. Timeline Option: Change "3 to 4 Months" back to "Not sure"
**File: `src/components/Quiz.tsx`**

- Change the label from "3 to 4 Months" to "Not sure"
- Update `getTimelineLabel()` to return "Not sure" instead of "3 to 4 months"

---

## Technical Details

### QualifyPage.tsx Changes

```tsx
// Lines 60-65: Tighter spacing on first headline
<h1
  className="text-[28px] sm:text-3xl font-extrabold mb-1 leading-tight"
  style={{ color: '#1e293b', textShadow: '0 1px 3px rgba(255,255,255,0.5)' }}
>
  See If You Qualify for the
</h1>

// Lines 66-74: Darker gold with stronger shadow, tighter spacing
<h2 
  className="text-[28px] sm:text-3xl font-extrabold mb-2 leading-tight"
  style={{ 
    color: '#B8960B',
    textShadow: '0 1px 2px rgba(0,0,0,0.3), 0 0 0 1px rgba(0,0,0,0.05)'
  }}
>
  Home Refresh Program
</h2>
```

### grid-background.tsx Changes

```tsx
// Lines 15-17: Reduce opacity from 0.06 to 0.03
backgroundImage: `
  linear-gradient(rgba(30, 41, 59, 0.03) 1px, transparent 1px),
  linear-gradient(90deg, rgba(30, 41, 59, 0.03) 1px, transparent 1px)
`,
```

### Quiz.tsx Changes

**Filled icons (OptionCard component, lines 327-332):**
```tsx
<Icon
  className={`w-5 h-5 transition-colors duration-200 ${
    selected ? "text-primary-foreground" : accentColor
  }`}
  fill={selected ? "currentColor" : "none"}
  strokeWidth={2}
/>
```

**Quiz card prominence (line 361):**
```tsx
<div className="quiz-card-glass rounded-2xl shadow-2xl p-5 sm:p-6 w-full border-2 border-primary/30">
```

**Timeline option label change (lines 461-467):**
```tsx
<OptionCard
  icon={Clock}
  label="Not sure"
  selected={data.timeline === "not-sure"}
  onClick={() => handleTileSelect("timeline", "not-sure")}
  accentColor="text-muted-foreground"
/>
```

**getTimelineLabel update (lines 214-215):**
```tsx
case "not-sure":
  return "Not sure";
```

---

## Files to Modify

1. `src/pages/QualifyPage.tsx` - Headline colors and spacing
2. `src/components/ui/grid-background.tsx` - Grid opacity reduction
3. `src/components/Quiz.tsx` - Icon fills, card prominence, timeline label

---

## Result

- Yellow "Home Refresh Program" headline visible with darker gold and shadow
- Headlines closer together (less awkward spacing)
- Grid lines barely visible but still present
- Quiz option icons filled for better visibility
- Quiz card more prominent with stronger shadow and border
- Timeline option says "Not sure" instead of "3 to 4 Months"

