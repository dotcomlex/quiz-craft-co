

## Summary
Update the FAQ section with 6 new questions and replace the BBB logo with the new transparent-background version.

---

## Changes

### 1. Replace BBB Logo
**File**: Copy new logo and update import

- Copy `user-uploads://image-17.png` to `src/assets/logo-bbb.png` (replacing the existing file)
- The TrustBadgesSection already imports from this path, so no code changes needed there

### 2. Update FAQ Content
**File**: `src/components/FAQSection.tsx`

Replace the current 4 FAQs (lines 12-33) with the new 6 FAQs:

| # | Question | Answer |
|---|----------|--------|
| 1 | What does the free estimate include? | We come to your home, walk through every detail of the project with you, assess surface conditions, help you explore color and finish options, and give you a clear, detailed quote with no hidden fees. It's completely free, no pressure, and no obligation. |
| 2 | What services do you offer? | We handle it all. Interior painting, exterior painting, commercial painting, deck and fence staining, and more. Whether it's one accent wall, your entire home, or a commercial property, we've got you covered. |
| 3 | Can you help me pick colors and finishes? | Absolutely. Choosing the right color can feel overwhelming, and that's exactly why we walk you through it. We help you pick colors, sheens, and finishes that match your style, your lighting, and your home's architecture. You'll never feel like you're guessing. |
| 4 | Are you licensed and insured? | Yes. Emerald Paints is fully licensed and insured in Colorado, including liability and workers' compensation. Your home and property are completely protected. |
| 5 | What areas do you serve? | We serve Denver, Colorado Springs, and all surrounding areas including Aurora, Lakewood, Arvada, Westminster, Thornton, Littleton, Centennial, Commerce City, Brighton, and more. Enter your zip code in our form to confirm coverage. |
| 6 | How long does a typical paint job take? | It depends on the scope. A single room can usually be done in a day. A full interior typically takes 3 to 5 days. Exteriors run about 3 to 7 days depending on size and prep work. We'll give you a clear timeline during the estimate so there are no surprises. |

Also update the comment on line 11 to reflect 6 FAQs instead of 4.

---

## Technical Details

```text
FAQSection.tsx changes:
┌─────────────────────────────────────────────────────────────┐
│ Lines 11-33: Replace faqs array                             │
│ - Change from 4 FAQs to 6 FAQs                              │
│ - Update comment: "6 FAQs for comprehensive coverage"       │
│ - New questions added:                                      │
│   • "What services do you offer?"                           │
│   • "Can you help me pick colors and finishes?"             │
└─────────────────────────────────────────────────────────────┘
```

---

## Files Modified
- `src/assets/logo-bbb.png` (replaced with new transparent logo)
- `src/components/FAQSection.tsx` (updated FAQ content)

