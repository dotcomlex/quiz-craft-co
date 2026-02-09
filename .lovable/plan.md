
## Summary
Remove the FloatingCTA component from the landing page.

---

## Changes

### File: `src/pages/Index.tsx`

1. **Remove import** (line 3):
   - Delete: `import FloatingCTA from "@/components/FloatingCTA";`

2. **Remove component usage** (line 35):
   - Delete: `<FloatingCTA />`

---

## Optional Cleanup

The `src/components/FloatingCTA.tsx` file can be deleted since it will no longer be used. This keeps the codebase clean.

---

## Files Modified
- `src/pages/Index.tsx` - remove import and usage
- `src/components/FloatingCTA.tsx` - delete file (optional cleanup)
