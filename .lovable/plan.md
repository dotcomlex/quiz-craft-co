

# FIX: REVERT QUIZ PAGE + IMPROVE PROCESS SECTION FLOW

## Overview

I made changes to the wrong page. The quiz page headline needs to be reverted back to its original simpler style, and the Process section step descriptions need to flow better.

**Good news:** The HeroSection (homepage) already has the correct news-style headline with the qualifying angle.

**Files to Modify**: 2 files

---

## FIX 1: REVERT QUIZ PAGE HEADLINE

### File: `src/pages/QualifyPage.tsx`

Revert the header section back to the simpler original style:

**Current (WRONG - too busy):**
```
Quick Question — Is Your Zip Code Eligible?
This New Program Is Helping Colorado Homeowners Save 25% On Their Painting Project
Limited Spots Available — Homeowners across Colorado are taking advantage...
```

**Revert back to:**
```tsx
{!quizStarted && (
  <>
    {/* Logo - keep this, it looks good */}
    <img 
      src={emeraldLogo}
      alt="Emerald Paints"
      className="h-8 sm:h-10 w-auto mx-auto mb-6"
      style={{ filter: 'brightness(1.1)' }}
    />

    <h1 
      className="text-[28px] sm:text-3xl font-extrabold text-white mb-3 leading-tight"
      style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}
    >
      See If You Qualify for the
    </h1>
    <h2 
      className="text-[28px] sm:text-3xl font-extrabold mb-4 leading-tight"
      style={{ 
        color: '#F5C518',
        textShadow: '0 0 20px rgba(245, 197, 24, 0.5), 0 0 40px rgba(245, 197, 24, 0.3), 0 2px 4px rgba(0,0,0,0.3)'
      }}
    >
      Home Refresh Program
    </h2>
    <p 
      className="text-sm text-white/60 tracking-wide"
      style={{ textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}
    >
      Takes less than 30 seconds
    </p>
  </>
)}
```

**Note:** Keep the logo — that was a good addition. Just revert the headline and subheadline back to the simpler original.

---

## FIX 2: PROCESS SECTION — BETTER FLOW

### File: `src/components/ProcessSection.tsx`

The current step descriptions are awkward. Here's improved copy that flows naturally:

```tsx
const steps = [
  {
    icon: MessageSquare,
    number: "1",
    title: "Answer Quick Questions",
    description: "Tell us about your project so we can check your eligibility and prepare your estimate.",
  },
  {
    icon: CalendarCheck,
    number: "2",
    title: "Free In-Home Estimate",
    description: "If you qualify, we'll schedule a 100% free in-home estimate to walk through your project and discuss colors.",
  },
  {
    icon: FileText,
    number: "3",
    title: "Clear, Upfront Price",
    description: "No hidden fees, no surprises. You know exactly what to expect before we start.",
  },
  {
    icon: Paintbrush,
    number: "4",
    title: "We Handle Everything",
    description: "We handle all the prep, painting, and cleanup. You just enjoy the transformation.",
  },
];
```

**Key change:**
- Step 1: Changed "check your availability" → "check your eligibility" — this flows better with the qualifying angle and makes more sense

Steps 2-4 are already good. No mentions of "Jose" remain.

---

## SUMMARY

| # | File | Change |
|---|------|--------|
| 1 | `src/pages/QualifyPage.tsx` | Revert headline back to simple "See If You Qualify for the Home Refresh Program" style |
| 2 | `src/components/ProcessSection.tsx` | Step 1: "availability" → "eligibility" |

---

## VERIFICATION CHECKLIST

| # | Check | Expected |
|---|-------|----------|
| 1 | Homepage headline | "The Home Refresh Program Is Helping Colorado Homeowners Save 25%..." (already correct) |
| 2 | Homepage subheadline | "Limited Spots Available — Check below..." (already correct) |
| 3 | Quiz page headline | "See If You Qualify for the Home Refresh Program" (simple, gold glow) |
| 4 | Quiz page subheadline | "Takes less than 30 seconds" (simple) |
| 5 | Quiz page logo | White Emerald Paints logo above headline (keep this) |
| 6 | Process step 1 | "...check your eligibility and prepare your estimate" |
| 7 | No "Jose" mentions | All steps use "we/we'll" |

