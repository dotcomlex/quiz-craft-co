

## Summary
Add 6 new before/after transformation images to the gallery carousel and mix them with the existing 8 images for a total of 14 gallery items, creating a varied showcase of interior, exterior, and specialty painting work.

---

## New Images to Add

| Image | Description | Suggested Alt Text |
|-------|-------------|-------------------|
| Dark gray + yellow door | Two-story exterior transformation | "Exterior home transformation with dark gray siding and yellow accent door" |
| Sage green + blue door | Ranch home restoration | "Ranch home exterior painting with sage green and navy blue door" |
| Deck/fence staining | Wood restoration | "Deck and fence staining transformation from weathered gray to rich cedar" |
| Craftsman porch | Historic home refresh | "Craftsman home porch and exterior painting restoration" |
| Two-story beige/gray | Modern neutral makeover | "Two-story home exterior painting in modern neutral tones" |
| Interior hallway | Bright interior refresh | "Interior hallway painting transformation with white walls and coral accent" |

---

## Implementation Steps

### 1. Copy uploaded images to src/assets

Copy all 6 images with descriptive filenames:
- `gallery-exterior-dark-gray.webp`
- `gallery-exterior-sage-green.webp`
- `gallery-deck-staining.webp`
- `gallery-craftsman-porch.webp`
- `gallery-exterior-neutral.webp`
- `gallery-interior-hallway.webp`

### 2. Update GallerySection.tsx

**A) Add new imports (after existing imports, lines 7-14):**
```typescript
import galleryExteriorDarkGray from "@/assets/gallery-exterior-dark-gray.webp";
import galleryExteriorSageGreen from "@/assets/gallery-exterior-sage-green.webp";
import galleryDeckStaining from "@/assets/gallery-deck-staining.webp";
import galleryCraftsmanPorch from "@/assets/gallery-craftsman-porch.webp";
import galleryExteriorNeutral from "@/assets/gallery-exterior-neutral.webp";
import galleryInteriorHallway from "@/assets/gallery-interior-hallway.webp";
```

**B) Update projects array with mixed order (lines 19-28):**

New mixed order (alternating interior/exterior/specialty for variety):
1. galleryExteriorDarkGray (NEW - exterior)
2. galleryPainting1 (existing - kitchen)
3. galleryDeckStaining (NEW - deck)
4. galleryPainting2 (existing - living room)
5. galleryCraftsmanPorch (NEW - craftsman)
6. galleryPainting3 (existing - kitchen)
7. galleryExteriorSageGreen (NEW - ranch)
8. galleryPainting4 (existing - bedroom)
9. galleryInteriorHallway (NEW - interior)
10. galleryPainting5 (existing - exterior)
11. galleryExteriorNeutral (NEW - two-story)
12. galleryPainting6 (existing - bathroom)
13. galleryPainting7 (existing - deck/fence)
14. galleryPainting8 (existing - trim/siding)

---

## Updated Projects Array

```typescript
const projects = [
  { image: galleryExteriorDarkGray, alt: "Exterior home transformation with dark gray siding and yellow accent door" },
  { image: galleryPainting1, alt: "Kitchen painting transformation with fresh colors" },
  { image: galleryDeckStaining, alt: "Deck and fence staining transformation from weathered gray to rich cedar" },
  { image: galleryPainting2, alt: "Interior living room painting before and after" },
  { image: galleryCraftsmanPorch, alt: "Craftsman home porch and exterior painting restoration" },
  { image: galleryPainting3, alt: "Kitchen walls fresh paint makeover" },
  { image: galleryExteriorSageGreen, alt: "Ranch home exterior painting with sage green and navy blue door" },
  { image: galleryPainting4, alt: "Bedroom accent wall painting" },
  { image: galleryInteriorHallway, alt: "Interior hallway painting transformation with white walls and coral accent" },
  { image: galleryPainting5, alt: "Exterior home painting transformation" },
  { image: galleryExteriorNeutral, alt: "Two-story home exterior painting in modern neutral tones" },
  { image: galleryPainting6, alt: "Bathroom painting refresh" },
  { image: galleryPainting7, alt: "Deck and fence staining before and after" },
  { image: galleryPainting8, alt: "Exterior trim and siding painting" },
];
```

---

## Files Modified
- Copy 6 images to `src/assets/`
- `src/components/GallerySection.tsx` - add imports and update projects array

---

## Result
- Gallery expands from 8 to 14 images
- New images are interspersed throughout (not grouped at end)
- Varied content: exterior transformations, interior work, deck staining
- Carousel thumbnails will be scrollable horizontally

