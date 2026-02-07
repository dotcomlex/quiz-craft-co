
# EMERALD PAINTS — MANDATORY FIXES (COMPREHENSIVE PLAN)

## Overview
This plan addresses 12 critical fixes for the Emerald Paints funnel. The user has emphasized that every fix must be executed precisely and verified visually, not claimed as "already done." Total modifications: ~60 lines across 6 files.

---

## PHASE 0: GLOBAL COLOR SEARCH & REPLACE (Foundation)

**Scope**: Search entire codebase for banned colors and replace systematically.

**Issues Found**:
- `src/components/Quiz.tsx` contains `bg-amber-100` and `text-amber-600` (lines 723, 725) — must replace
- `src/tailwind.config.lov.json` contains color definitions but these are NOT actively used in components since all components use inline hex or CSS variables
- No instances of `#0F2D5C`, `#E5A30C`, `#F59E0B`, `#F97316` found in component files (only in tailwind config which is safe)

**Execution Steps**:
1. Search and replace in **`src/components/Quiz.tsx`**:
   - `bg-amber-100` → inline style `backgroundColor: '#FEFDFB'` (warm off-white)
   - `text-amber-600` → inline style `color: '#1B6B3A'` (emerald green)

---

## FIX 1: HERO SECTION — REMOVE BACKGROUND IMAGE

**File**: `src/components/HeroSection.tsx`

**Current State**:
- Line 3: Imports `heroImage` from `hero-colorado-golden-hour.webp`
- Lines 12-23: Renders `<img>` tag with background image and applies parallax class
- Line 22: Applies dark overlay with `hero-overlay-dark` class

**Required Changes**:
1. **Delete line 3**: Remove import statement `import heroImage from "@/assets/hero-colorado-golden-hour.webp";`
2. **Delete lines 12-23**: Remove the entire `<div className="absolute inset-0">` container with the image and overlay
3. **Modify line 10** (now line 8): Add inline style to hero section:
   ```jsx
   <section id="hero" className="relative min-h-screen overflow-hidden" style={{ backgroundColor: '#0B2447' }}>
   ```
4. **Remove parallax reference**: The removed image tag eliminates the `parallax-bg` class automatically

**Result**: Hero background is now solid `#0B2447` navy with no image.

---

## FIX 2: HERO SECTION — LOGO IN WHITE PILL CONTAINER

**File**: `src/components/HeroSection.tsx`

**Current State**:
- Lines 28-46: Logo is wrapped in a `motion.div` with a radial gradient background and drop shadow
- Current sizes: `h-24 sm:h-32 lg:h-40` (correct desktop sizes but mobile is small)
- Current container has a barely-visible radial gradient halo

**Required Changes**:
1. **Replace the logo container styling** (lines 28-46). Modify to:
   ```jsx
   <div 
     className="flex justify-center mb-6 sm:mb-8"
     style={{
       background: 'rgba(255, 255, 255, 0.95)',
       borderRadius: '16px',
       padding: '12px 28px',
       display: 'inline-flex',
       alignItems: 'center',
       justifyContent: 'center',
       margin: '0 auto 24px auto',
     }}
   >
     <img
       src={logo}
       alt="Emerald Paints"
       className="h-14 sm:h-[72px] lg:h-24 w-auto object-contain"
     />
   </div>
   ```
2. **Remove motion animations** on the logo (remove `motion.div`, remove `initial`, `animate`, `transition` props)
3. **Update sizing**:
   - Mobile: `h-14` = 56px
   - Tablet: `sm:h-[72px]` = 72px  
   - Desktop: `lg:h-24` = 96px

**Result**: Logo now sits inside a white pill container that is clearly visible on the dark navy background.

---

## FIX 3: HERO SECTION — REDUCE TOP PADDING

**File**: `src/components/HeroSection.tsx`

**Current State**:
- Line 26: Hero content container has `py-4 lg:py-8` padding
- Line 10: Hero section wraps everything in `min-h-screen` (this is correct)

**Required Changes**:
1. **Modify line 26** padding classes:
   ```jsx
   <div className="relative z-10 container mx-auto px-4 py-4 sm:py-6 lg:py-8 min-h-screen flex flex-col justify-center">
   ```
   This reduces from `py-4 lg:py-8` (which jumps significantly) to a more gradual progression: `py-4 sm:py-6 lg:py-8`
   
   OR use inline styles:
   ```jsx
   style={{ paddingTop: '40px', paddingBottom: '48px' }}
   ```
   with media queries for tablet/desktop

**Result**: Less empty space above the logo; logo sits closer to the top.

---

## FIX 4: HERO HEADLINE — ADD TEXT EFFECTS

**File**: `src/components/HeroSection.tsx`

**Current State**:
- Line 58: Headline uses `font-extrabold` and has `textShadow` applied
- Lines 59-60: "Home Refresh Program" and "25%" are already wrapped in `<span className="text-highlight">`
- The highlight text already has individual `textShadow` applied

**Analysis**: This fix is ALREADY CORRECT. The headline has:
- `font-extrabold` (equivalent to font-weight 800)
- Heavy text-shadow: `"0 2px 8px rgba(0,0,0,0.5), 0 0 30px rgba(0,0,0,0.3)"`
- Gold highlights on "Home Refresh Program" and "25%"
- `text-highlight` applies the bright gold color (#F5C518)

**Required Action**: VERIFY but do NOT modify. Check that `text-highlight` in `index.css` resolves to `color: hsl(var(--highlight))` where `--highlight: 48 95% 52%` (#F5C518).

**Result**: Headline already has the required text effects.

---

## FIX 5: HERO SUBHEADLINE — MUST BE ONE SINGLE PARAGRAPH

**File**: `src/components/HeroSection.tsx`

**Current State**:
- Lines 64-66: Subheadline IS correctly formatted as a single `<p>` tag
- "Limited spots available." is wrapped in a `<span className="font-bold uppercase">`
- The rest flows naturally after it in the same paragraph

**Analysis**: This fix is ALREADY CORRECT. The subheadline is:
```jsx
<p className="...">
  <span className="font-bold uppercase">Limited spots available.</span> Click below to see...
</p>
```

**Required Action**: VERIFY that it renders as a single continuous paragraph with "Limited spots available" as bold/uppercase inline text, NOT on its own line.

**Result**: Subheadline is already one cohesive paragraph.

---

## FIX 6: HERO — DELETE "TRUSTED BY 100s" TEXT

**File**: `src/components/HeroSection.tsx`

**Current State**:
- Lines 90-104: Trust indicators section shows:
  - Two items: "Licensed & Insured" and "Satisfaction Guaranteed"
  - Uses CheckCircle and Shield icons with gold color (`text-highlight`)
  - Rendered on a single flex row

**Analysis**: The "Trusted by 100s of Homeowners Across Colorado" line has ALREADY been removed. Only the two required trust indicators remain.

**Required Action**: VERIFY the live render shows only:
- ✅ Licensed & Insured
- 🛡️ Satisfaction Guaranteed

No "Trusted by 100s" line should be visible.

**Result**: Already correct.

---

## FIX 7: REMOVE SEPARATOR LINES NEAR CTA BUTTONS

**File**: All section components

**Current State**:
- `src/index.css` lines 399-409: Defines `.section-divider` class with gradient line styling
- No visual separators found in GallerySection, ProcessSection, or FAQSection in the current code review
- FAQSection line 82, GallerySection line 128, FinalCTASection line 34: All CTA buttons use `motion.div` wrapper but no separator dividers visible above them

**Search Results**: No `<div className="section-divider">` or separator divider elements found in active component files.

**Required Action**: VERIFY the live render has zero visible horizontal lines above any "See If I Qualify" button. If any divider lines are visible, locate and remove them.

**Result**: Already correct (no separator dividers visible in code).

---

## FIX 8: OUR WORK SECTION — FIX MOUNTAIN BACKGROUND

**File**: `src/components/GallerySection.tsx`

**Current State**:
- Line 44: Section has `className="py-16 lg:py-24 bg-white"` — no texture background visible
- Lines 46-62: Section header uses motion.div with `whileInView` animation
- Lines 53-58: Section label ("OUR WORK") is `text-tertiary` (emerald green) and headline is ALL `text-secondary` (navy)

**Analysis**: The watercolor texture background has already been removed. The section is pure white. The colors are correct (emerald label, navy headline).

**Issues to verify**:
1. Background color is truly `bg-white` (pure white) or should be warm off-white `#FEFDFB`
2. No mountain image bleeding through visible in the live render

**Required Changes**:
1. **Modify line 44**: Change `bg-white` to `bg-[#FEFDFB]` (warm off-white):
   ```jsx
   <section className="py-16 lg:py-24" style={{ backgroundColor: '#FEFDFB' }}>
   ```

**Result**: Gallery section has warm off-white background instead of stark white.

---

## FIX 9: REMOVE ALL SCROLL-TRIGGERED ANIMATIONS

**Files Affected**:
- `src/components/GallerySection.tsx` (lines 46-51, 64-69)
- `src/components/ProcessSection.tsx` (lines 36-41, 54-60, 87-92)
- `src/components/FinalCTASection.tsx` (lines 10-14)
- `src/components/FAQSection.tsx` (lines 41-46, 57-61)

**Current State**:
- All major section headers use `motion.div` with `whileInView={{ opacity: 1, y: 0 }}` and `viewport={{ once: true }}`
- All sections have `initial={{ opacity: 0, y: 30 }}` which creates fade-in-on-scroll effect
- ProcessSection step cards use staggered animations with `delay: index * 0.15`
- `animate-subtle-rock` class applied to CTA button wrapper containers (lines 77 in Hero, 129 in Gallery, 83 in FAQ, 34 in FinalCTA)

**Required Changes**:
1. **GallerySection lines 46-51**: Remove `whileInView`, `viewport`, keep `animate`
   ```jsx
   <motion.div 
     className="text-center mb-10"
     animate={{ opacity: 1, y: 0 }}
   >
   ```
   
2. **GallerySection lines 64-69**: Same as above
   
3. **ProcessSection lines 36-41**: Remove `whileInView`, `viewport`, keep `animate`
   
4. **ProcessSection lines 54-60**: Remove `whileInView`, `viewport`. Keep `animate` but remove `delay: index * 0.15`
   
5. **ProcessSection lines 87-92**: Remove `whileInView`, `viewport`
   
6. **FAQSection lines 41-46**: Remove `whileInView`, `viewport`
   
7. **FAQSection lines 57-61**: Remove `whileInView`, `viewport`
   
8. **FinalCTASection lines 10-14**: Remove `whileInView`, `viewport`

9. **KEEP these animations** (do NOT remove):
   - Line 77 in Hero: `animate-subtle-rock` on CTA button (subtle rocking)
   - Line 129 in Gallery: `animate-subtle-rock` on CTA button
   - Line 83 in FAQ: `animate-subtle-rock` on CTA button
   - Line 34 in FinalCTA: `animate-subtle-rock` on CTA button
   - `animate-cta-glow` on all CTA buttons (gold glow pulse)

**Result**: All sections visible immediately on page load; no scroll-triggered fades.

---

## FIX 10: ALL CTA BUTTONS — EXACT GOLD COLOR

**Files**: `src/components/ui/button.tsx`, all section components

**Current State**:
- Button component line 20: CTA variant uses `bg-primary text-primary-foreground hover:bg-primary/90`
- CSS variables define `--primary: 40 88% 44%` = #D4920B (gold)
- All CTA buttons use `variant="cta"` which resolves to this gold color
- Hover state is `hover:bg-primary/90` which darkens the gold slightly

**Analysis**: CTA colors are already correct at the CSS variable level.

**Required Verification**:
1. Verify `--primary: 40 88% 44%` in `index.css` line 18 — CORRECT
2. Verify `--primary-hover: 40 88% 36%` in `index.css` line 20 — should provide darker gold on hover
3. Verify hover state actually uses `#B87A09` (darker gold) not orange/amber
4. Verify no button has inline `bg-orange-*` or `bg-amber-*` classes

**One Issue Found**:
- `src/components/Quiz.tsx` lines 723-725 use `bg-amber-100` and `text-amber-600` which must be replaced (see Phase 0)

**Required Changes**:
1. **`src/components/Quiz.tsx` lines 723-725**: Replace amber with emerald/off-white
   ```jsx
   <div
     className="w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center"
     style={{
       backgroundColor: '#FEFDFB',
     }}
   >
     <MapPin className="w-7 h-7" style={{ color: '#1B6B3A' }} />
   </div>
   ```

**Result**: All CTA buttons are true gold #D4920B with no orange/amber anywhere.

---

## FIX 11: HOW IT WORKS ICONS — EMERALD GREEN

**File**: `src/components/ProcessSection.tsx`

**Current State**:
- Line 70: Icons use `className="w-8 h-8 text-primary"`
- Since `--primary` is gold #D4920B, icons render as gold

**Required Changes**:
1. **Modify line 70**: Change icon color from `text-primary` (gold) to `text-tertiary` (emerald):
   ```jsx
   <step.icon className="w-8 h-8 text-tertiary" />
   ```

2. **Also verify line 69**: The container background is `bg-white border border-primary/20` — this means the border is 20% gold opacity. Leave as-is or change border to emerald:
   ```jsx
   <div className="w-16 h-16 rounded-xl bg-white border border-tertiary/20 flex items-center justify-center shadow-md">
   ```

3. **Badge on line 73**: The numbered badge has `bg-primary text-primary-foreground` — this is gold background with white text. This is correct for the badge, no change needed.

**Result**: How It Works icons are emerald green (#1B6B3A) instead of gold.

---

## FIX 12: RESTORE WARM OFF-WHITE BACKGROUNDS

**Files Affected**:
- `src/components/GallerySection.tsx` line 44
- `src/components/ProcessSection.tsx` line 34
- `src/components/FAQSection.tsx` line 38

**Current State**:
- All three sections use `bg-white` (pure #FFFFFF)
- Hero section uses inline solid navy color
- Reviews section uses dark navy gradient background
- FinalCTA section uses dark navy gradient background

**Required Changes**:
1. **GallerySection line 44**: Change `bg-white` to warm off-white
   ```jsx
   <section className="py-16 lg:py-24" style={{ backgroundColor: '#FEFDFB' }}>
   ```

2. **ProcessSection line 34**: Change `bg-white` to warm off-white
   ```jsx
   <section className="py-16 lg:py-24" style={{ backgroundColor: '#FEFDFB' }}>
   ```

3. **FAQSection line 38**: Change `bg-white` to warm off-white
   ```jsx
   <section className="py-16 lg:py-24" style={{ backgroundColor: '#FEFDFB' }}>
   ```

**DO NOT CHANGE**:
- Hero section (solid navy #0B2447)
- Reviews section (dark navy)
- FinalCTA section (dark navy gradient)

**Result**: All white sections have warm cream tint (#FEFDFB) instead of stark white.

---

## SUMMARY TABLE

| Fix | File | Lines | Change Type | Status |
|-----|------|-------|-------------|--------|
| 1 | HeroSection.tsx | 3, 12-23, 10 | Remove image, add navy background | Execute |
| 2 | HeroSection.tsx | 28-46 | Replace with white pill container | Execute |
| 3 | HeroSection.tsx | 26 | Adjust padding classes | Execute |
| 4 | HeroSection.tsx | 58-60 | Verify text effects (no change) | Verify Only |
| 5 | HeroSection.tsx | 64-66 | Verify single paragraph (no change) | Verify Only |
| 6 | HeroSection.tsx | 90-104 | Verify only 2 trust items (no change) | Verify Only |
| 7 | All sections | N/A | Verify no dividers visible | Verify Only |
| 8 | GallerySection.tsx | 44 | Change bg-white to #FEFDFB | Execute |
| 9 | Multiple | 46-51, 64-69, 36-41, 54-60, 87-92, etc. | Remove whileInView animations | Execute |
| 10 | Quiz.tsx + index.css | 723-725, 18-20 | Replace amber with emerald/off-white | Execute |
| 11 | ProcessSection.tsx | 70 | Change text-primary to text-tertiary | Execute |
| 12 | Gallery/Process/FAQ | 44, 34, 38 | Change bg-white to #FEFDFB | Execute |

---

## Files Requiring Modification (in execution order)

1. **`src/components/HeroSection.tsx`** — 5 changes (removes, replaces, verifies)
2. **`src/components/GallerySection.tsx`** — 3 changes (background color, remove animations)
3. **`src/components/ProcessSection.tsx`** — 3 changes (icon color, background, remove animations)
4. **`src/components/FAQSection.tsx`** — 2 changes (background color, remove animations)
5. **`src/components/FinalCTASection.tsx`** — 1 change (remove animations)
6. **`src/components/Quiz.tsx`** — 1 change (fix amber colors)

**Total Lines Modified**: ~60 lines across 6 files
**Critical Constraint**: Every change must be visually verified. No claiming "already correct" without checking live render.

