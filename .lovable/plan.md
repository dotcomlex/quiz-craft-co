
## Goal
Remove the “dead space” at the bottom of the Hero. Right now, the Hero is forced to be viewport-height even when the content is much shorter, which creates an unavoidable empty area below the trust indicators.

## Root cause (confirmed in code)
In `src/components/HeroSection.tsx` there are **two** `min-h-screen` declarations:

1) On the `<section>`:
```tsx
<section id="hero" className="relative min-h-screen overflow-hidden">
```

2) On the content container:
```tsx
<div className="... min-h-screen flex flex-col items-center text-center">
```

Even after reducing `pb-*`, `min-h-screen` keeps the hero at least 100vh, so the empty space remains.

## Fix strategy
Stop forcing the hero to be full viewport height. Let it size to its content, with intentional top/bottom padding only.

This will immediately remove the large bottom gap without needing to “fight” spacing utilities.

---

## Implementation steps

### 1) Remove `min-h-screen` from the hero section wrapper
**File:** `src/components/HeroSection.tsx`

**Change:**
- From:
  ```tsx
  <section id="hero" className="relative min-h-screen overflow-hidden">
  ```
- To:
  ```tsx
  <section id="hero" className="relative overflow-hidden">
  ```

### 2) Remove `min-h-screen` from the hero content container
**File:** `src/components/HeroSection.tsx`

**Change:**
- From:
  ```tsx
  <div className="relative z-10 container mx-auto px-3 pt-8 pb-2 sm:pt-12 sm:pb-4 min-h-screen flex flex-col items-center text-center">
  ```
- To:
  ```tsx
  <div className="relative z-10 container mx-auto px-3 pt-8 pb-2 sm:pt-12 sm:pb-4 flex flex-col items-center text-center">
  ```

### 3) (Optional, only if you still want a “hero feel” without huge empty space)
If the hero becomes “too short” on some devices, add a modest minimum height instead of full screen:
- Add on the `<section>`:
  ```tsx
  className="relative overflow-hidden min-h-[520px] sm:min-h-[600px]"
  ```
This keeps a strong hero presence while avoiding giant blank space on taller phones.

I will only apply this optional step if the hero looks cramped after removing `min-h-screen`.

---

## Verification checklist (what you should see)
- The hero background image ends shortly after the trust indicators.
- No large empty area below the trust row.
- Spacing above the logo and between elements remains as currently tuned.
- On mobile (375–428px), the hero feels tight and conversion-focused.

---

## Technical notes (why padding changes alone didn’t work)
As long as `min-h-screen` exists on the hero container, **there will always be leftover vertical space** whenever the content height is less than the viewport height. Reducing bottom padding can’t remove that forced height, it can only slightly change where within that 100vh block the content sits.

Removing `min-h-screen` is the correct structural fix.
