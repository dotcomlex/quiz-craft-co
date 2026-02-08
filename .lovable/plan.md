
## What’s actually creating the “dead space”
Based on your latest screenshot and the current `HeroSection.tsx`, the extra “push-down” feeling is mostly coming from **the logo block**, not just small padding tweaks:

- **Logo height on mobile is large**: `h-36` = 144px (before headline even starts)
- **Top padding still exists**: `pt-4` = 16px
- **There’s also logo→headline spacing**: `mb-2` = 8px
- Net effect: even with reduced padding, the headline can’t move up much because the logo consumes a lot of vertical real estate.

Also, the thin white divider/paint-can motif you see at the very top is likely **baked into the background image (`hero-bg.png`)**, so it will always “reserve” visual space at the top of the hero image even if we move content up. The correct approach is to **move the content up and reduce logo footprint**, and if needed, adjust the **background image’s object-position** so the focal area aligns better.

---

## Goal (do this in one pass, not micro-steps)
Make the hero feel less cramped while also pulling the headline higher by:
1) **Reducing the mobile logo height** (biggest win)
2) **Reducing top padding slightly**
3) **Tightening logo→headline spacing**
4) **Slightly tightening spacing below headline and above CTA** so the section stays balanced

---

## Changes to implement (single cohesive update)

### File: `src/components/HeroSection.tsx`

#### A) Reduce top padding (move everything up a bit)
- Change the content wrapper top padding:
  - `pt-4` → `pt-2`

This lifts the entire stack without making it feel jammed.

#### B) Reduce the logo’s mobile height (main fix)
- Change the logo sizing to be smaller on mobile but keep it large on bigger breakpoints:
  - From: `h-36 sm:h-44 lg:h-52`
  - To: `h-28 sm:h-40 lg:h-52`

This reduces mobile logo height from **144px → 112px** (32px gained immediately).

#### C) Tighten space below logo
- Reduce logo bottom margin:
  - `mb-2` → `mb-1`

This gains another 4px.

#### D) Rebalance spacing below headline (so it doesn’t feel overly “gappy”)
Right now the headline is `mb-8` on mobile, which can feel like extra “dead space” once we lift everything.
- Change:
  - `mb-8 sm:mb-10` → `mb-6 sm:mb-10`

This keeps desktop spacing but tightens mobile.

#### E) Slightly tighten the trust indicators gap (optional but recommended for balance)
The trust row is currently:
- `mt-10 sm:mt-12`

On mobile this is a lot.
- Change:
  - `mt-10` → `mt-8` (keep `sm:mt-12`)

---

## Optional (only if the top “ornament” still makes it feel like there’s wasted space)
If after the above changes the hero still *looks* like it has too much top space because the background image has that top divider/paint-can baked in, we should adjust the image crop:

### File: `src/components/HeroSection.tsx`
On the background `<img ... className="w-full h-full object-cover" />`
- Add an `object-position` tweak, e.g.:
  - `object-[center_30%]` (or similar)

This doesn’t change layout spacing, but it changes what part of the image is visible so the “empty” top region is minimized.

I’ll implement A–E first (they’re deterministic and layout-based), and only add the background crop tweak if you confirm the top ornament area is still dominating the perceived spacing.

---

## Expected result
- Headline moves up by roughly:
  - 8px (pt change) + 32px (logo height) + 4px (logo margin) ≈ **44px higher**
- Still keeps readable breathing room (not cramped like before)
- Less “dead space” without returning to the overly tight look

---

## Implementation checklist (so it’s not tiny iteration)
1) Update wrapper padding: `pt-2`
2) Update logo height: `h-28 sm:h-40 lg:h-52`
3) Update logo margin: `mb-1`
4) Update headline spacing: `mb-6 sm:mb-10`
5) Update trust margin: `mt-8 sm:mt-12`
6) Validate on a real phone:
   - iPhone Safari + Chrome (if possible)
   - Ensure logo still feels “brand-forward” and not too small

---

## Files to change
- `src/components/HeroSection.tsx`
