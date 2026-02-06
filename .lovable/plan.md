

# Emerald Paints Complete Funnel Page Build

## Overview

Transform the existing 14er Renovation funnel into a complete Emerald Paints LLC funnel landing page. This involves updating every component with new branding, colors, copy, images, and quiz flow tailored for a painting business serving Denver, Colorado (50-mile radius).

---

## Phase 1: Asset Setup and Brand Foundation

### 1.1 Copy Uploaded Images to Project Assets

| Source File | Destination |
|-------------|-------------|
| `logo_transparent.png` | `src/assets/emerald-paints-logo.png` |
| `house_high_quality.webp` | `src/assets/hero-emerald-house.webp` |
| 8 uploaded gallery images | `src/assets/gallery-painting-*.webp` |

### 1.2 Update CSS Variables (index.css)

Replace the 14er warm amber/slate palette with the Emerald Paints navy/emerald/gold palette:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 215 30% 15%;
  --hero: 215 60% 14%;           /* Deep Navy #0B2447 */
  --hero-foreground: 0 0% 98%;
  --primary: 40 88% 44%;         /* Warm Gold CTA #D4920B */
  --primary-foreground: 0 0% 100%;
  --primary-hover: 40 88% 36%;
  --secondary: 215 60% 14%;      /* Deep Navy */
  --secondary-foreground: 0 0% 98%;
  --tertiary: 150 55% 28%;       /* Emerald Green #1B6B3A */
  --tertiary-foreground: 0 0% 100%;
  --muted: 215 15% 95%;
  --muted-foreground: 215 12% 45%;
  --highlight: 48 95% 52%;       /* Bright Gold #F5C518 for offers */
  --highlight-foreground: 215 30% 15%;
  --success: 150 55% 28%;        /* Emerald for success states */
  --success-foreground: 0 0% 100%;
  /* ... other variables remain similar */
}
```

---

## Phase 2: Mobile Optimization Requirements

### Critical Mobile-First Standards (Applied Throughout)

All components will follow these rules:

| Requirement | Implementation |
|-------------|----------------|
| **Minimum text size** | All body text uses `text-base` (16px) minimum |
| **Tap targets** | All buttons have `min-h-[44px]` and adequate padding |
| **Full-width CTAs on mobile** | All CTA buttons use `w-full sm:w-auto` |
| **Number keyboard on ZIP** | Input uses `inputMode="numeric"` pattern (already exists) |
| **No horizontal scroll** | All sections use `overflow-hidden` where needed |
| **Input fields** | All inputs have `h-12` (48px) minimum height |

---

## Phase 3: Core Components Update

### 3.1 HeroSection.tsx

**Key Changes:**

- **Logo:** Emerald Paints logo in a **white rounded container** on dark hero background (no mix-blend-mode)
- **Hero image:** New Colorado painted home (`hero-emerald-house.webp`)
- **Strong text shadow:** Keep `hero-text-shadow-strong` for readability
- **Highlight treatment:** "25% Off" and "Home Refresh Program" use `text-highlight` class

**Headline:**
```
Finally, A Way For Colorado Homeowners To Get 25% Off Beautiful, 
Professional Painting — The Home Refresh Program Is Now Open
```

**Subheadline:**
```
Spots are filling fast. Check if your area qualifies for a free 
no-pressure estimate and 25% off professional painting before 
this program closes.
```

**Trust Indicators:**
- Licensed & Insured (CheckCircle icon)
- Satisfaction Guaranteed (Shield icon)

**Mobile CTA:** Full-width button with `w-full sm:w-auto`

### 3.2 TrustBadgesSection.tsx

**Updated Badges (text-based where images unavailable):**
- BBB (keep existing)
- Google 5-Star Reviews
- Sherwin-Williams
- Benjamin Moore
- Angi
- HomeAdvisor (keep existing)
- Licensed Colorado Contractor

### 3.3 GallerySection.tsx

**Header Updates:**
- Label: "OUR WORK"
- Title: "See What's Possible — Real Home Transformations"
- Subtitle: "From single rooms to full exteriors, we deliver flawless results that transform your home."

**Gallery Images (8 uploaded before/afters):**
1. Kitchen sage green refresh
2. Kitchen navy transformation
3. Living room accent wall
4. Bathroom painting
5. Exterior home transformation
6. Fence staining
7. Deck staining
8. Siding refresh

### 3.4 ReviewsSection.tsx

**Header Updates:**
- Title: "This Is Why Colorado Homeowners Trust Us With Their Home"
- Subtitle: "Real stories from real families who transformed their homes and their lives."

**8 Painting Testimonials:**
1. Alexa Y. — Denver (real from website)
2. Morgan J. — Aurora (real from website)
3. Robert D. — Lakewood (real from website)
4. Sarah T. — Littleton
5. James & Lisa K. — Thornton
6. Carlos M. — Westminster
7. Patricia W. — Arvada
8. David R. — Centennial

**Avatar handling:** Reuse existing avatar images (numbered avatars)

### 3.5 ProcessSection.tsx (if exists) or FAQSection.tsx

**Four Steps:**
1. Answer Quick Questions — "Tell us about your painting project..."
2. Free In-Home Estimate — "Miguel comes to your home to walk through the project..."
3. Clear, Upfront Price — "No hidden fees, no surprises..."
4. We Handle Everything — "We handle all the prep, painting, and cleanup..."

### 3.6 FAQSection.tsx

**7 Painting-Specific FAQs:**
1. What types of painting projects do you handle?
2. What does the free estimate include?
3. Are you licensed and insured?
4. What areas do you serve? (Denver + 50 miles)
5. What paint brands do you use? (Sherwin-Williams, Benjamin Moore)
6. How long does a typical paint job take?
7. Can you help with color selection?

### 3.7 FinalCTASection.tsx

- Badge: "Limited Spots Available"
- Title: "Don't Wait — Lock In Your **25% Discount** Before The Home Refresh Program Closes"
- Subtitle: "Get your free no-pressure estimate and save 25% on professional painting."
- CTA: "See If You Qualify"
- Trust line: "No obligations - Free in-home estimate - Satisfaction guaranteed"

### 3.8 Footer.tsx

- Emerald Paints logo in white container on dark background
- Copyright: "© 2025 Emerald Paints LLC. All rights reserved. Professional painting services for Colorado homeowners."

---

## Phase 4: Quiz Flow (Quiz.tsx) — Critical Updates

### 4.1 Step 1: Project Type (Painting Options)

| Option | Icon | Value |
|--------|------|-------|
| Interior Painting | Paintbrush/Home | `interior` |
| Exterior Painting | Building | `exterior` |
| Both Interior & Exterior | ArrowLeftRight | `both` |
| Not Sure Yet | HelpCircle | `not-sure` |

### 4.2 Step 2: Timeline

| Option | Icon | Value |
|--------|------|-------|
| Right Away | Zap | `asap` |
| Within 30 Days | Calendar | `30-days` |
| 1 to 3 Months | CalendarClock | `1-3-months` |
| Not Sure Yet | Clock | `not-sure` |

### 4.3 Timeline Clarification (60-day check)

Same flow — if "Not Sure Yet" selected:
- "We're currently taking projects that can start within the next 60 days. Does that work for your timeline?"
- Option 1: "Yes, that works for me" → Continue
- Option 2: "No, I need more time" → Timeline disqualification

### 4.4 Timeline Disqualification Screen (FULL DETAILS)

```text
Header Icon: Calendar (blue)
Title: "Thanks For Your Interest!"
Body: "We're focusing on projects starting within 60 days right now. 
       We'd love to help when you're ready!"

Info Box:
- Save our number: (720) 447-5654
- Bookmark: emeraldpaints.com
- Reach out when your timeline is closer!

Button: "Back to Home" (links to /)
```

### 4.5 Step 3: Zip Code

- Input: `inputMode="numeric"` for number keyboard on mobile
- Validation: Colorado ZIP codes (80001-81658)
- Input height: `h-12` (48px) minimum

### 4.6 8-Second Loading Animation with Rotating Messages

```javascript
const messages = [
  `Checking availability in ${zipCode}...`,
  "Verifying service coverage...",
  "Reviewing painter schedules...",
  "Confirming project capacity...",
  "Finalizing availability check...",
];
```

Message rotation every 1.8 seconds (already set to 8 seconds total)

### 4.7 ZIP Code Disqualification Screen (FULL DETAILS)

```text
Header Icon: MapPin (amber)
Title: "We Only Serve Colorado"
Body: "Thank you for your interest in Emerald Paints! Unfortunately, 
       we currently only serve homeowners in Colorado."
Footer: "Think this is an error? Your ZIP code was: {zipCode}"
```

### 4.8 Step 4: Contact Form

**Header:**
- Emoji: 🎉
- Title: "Congrats! Your Area ({zipCode}) Qualifies For The Home Refresh Program!"
- Subtitle: "Enter your info below to claim your free estimate and lock in your 25% discount."

**Form Fields (all with min h-12):**
- Name (User icon)
- Phone with formatting (Phone icon, `inputMode="tel"`)
- Email (Mail icon)

**Submit Button:** "Get My Free Estimate" (orange gradient, full-width on mobile)

**Testimonial:** 
"Just finished our exterior with Emerald Paints — would definitely recommend!" — Carlos M., Westminster

**Trust Footer:**
- Shield icon + "Secure"
- "Licensed & Insured"
- "No spam"

### 4.9 Success Screen

- Green checkmark animation
- Title: "Awesome, {firstName}—you're all set! 🎉"
- Body: "We'll be reaching out very soon to get more details on your project and schedule your free estimate. Talk soon!"
- Link: emeraldpaints.com
- Trust footer: "Your information is secure"

### 4.10 Helper Functions Update

```typescript
const getProjectTypeLabel = (type: string): string => {
  switch (type) {
    case "interior": return "Interior painting";
    case "exterior": return "Exterior painting";
    case "both": return "Both interior & exterior";
    case "not-sure": return "Not sure yet";
    default: return "";
  }
};

const getTimelineLabel = (timeline: string): string => {
  switch (timeline) {
    case "asap": return "Right away";
    case "30-days": return "Within 30 days";
    case "1-3-months": return "1 to 3 months";
    case "not-sure": return "Not sure yet";
    default: return "";
  }
};
```

### 4.11 Webhook Payload

**Webhook URL:** `REPLACE_WITH_GHL_WEBHOOK_URL` (placeholder)

```javascript
const payload = {
  "contact.first_name": data.firstName,
  "contact.email": data.email,
  "contact.phone": phoneDigits,
  "contact.zip_code": data.zipCode,
  "contact.project_type": getProjectTypeLabel(data.projectType),
  "contact.timeline": getTimelineLabel(data.timeline),
  first_name: data.firstName,
  email: data.email,
  phone: phoneDigits,
  zip_code: data.zipCode,
  project_type: getProjectTypeLabel(data.projectType),
  timeline: getTimelineLabel(data.timeline),
};
```

Note: `budget_range` field removed (not applicable for painting)

### 4.12 Facebook Pixel Lead Event

```javascript
// Fire on successful form submission
if (typeof window !== 'undefined' && (window as any).fbq) {
  (window as any).fbq('track', 'Lead');
}
```

---

## Phase 5: QualifyPage.tsx Updates

- Header: "See If You Qualify for the Home Refresh Program"
- Live viewers indicator: Keep same 45-85 range
- Background: Keep existing paper mountain background

---

## Phase 6: Page Metadata (index.html)

```html
<title>Emerald Paints | 25% Off Professional Painting | Home Refresh Program | Denver Colorado</title>
<meta name="description" content="Colorado homeowners: Get 25% off professional painting through the Home Refresh Program. Free in-home estimate, licensed & insured." />
<meta name="author" content="Emerald Paints LLC" />
<meta name="keywords" content="interior painting Denver, exterior painting Colorado, house painter Denver, painting contractor Commerce City, residential painting Aurora, Emerald Paints, Home Refresh Program" />
<meta property="og:title" content="Emerald Paints | 25% Off Painting — Home Refresh Program" />
<meta property="og:description" content="Colorado homeowners: Get 25% off professional painting..." />
<link rel="canonical" href="https://emeraldpaints.com" />
```

**Pixel Placeholders:**
```javascript
fbq('init', 'REPLACE_WITH_PIXEL_ID');
```

**Lucky Orange:** Placeholder script tag

---

## Phase 7: Logo Handling (White Container Approach ONLY)

On dark backgrounds (hero, footer, dark sections):
```tsx
<div className="bg-white rounded-lg p-2">
  <img src={logo} alt="Emerald Paints" className="h-24 w-auto" />
</div>
```

**NO mix-blend-mode** — use white container approach exclusively.

---

## Technical Implementation Summary

### Files to Create

| File | Description |
|------|-------------|
| `src/assets/emerald-paints-logo.png` | Copy from uploaded logo |
| `src/assets/hero-emerald-house.webp` | Copy from uploaded hero image |
| `src/assets/gallery-painting-*.webp` | 8 gallery images from uploads |

### Files to Modify

| File | Changes |
|------|---------|
| `src/index.css` | Brand colors (navy/emerald/gold palette) |
| `src/components/HeroSection.tsx` | Complete content + branding rewrite |
| `src/components/TrustBadgesSection.tsx` | New painting industry badges |
| `src/components/GallerySection.tsx` | New images + copy |
| `src/components/ReviewsSection.tsx` | 8 new testimonials |
| `src/components/FAQSection.tsx` | 7 painting-specific FAQs |
| `src/components/FinalCTASection.tsx` | New copy (25% off, Home Refresh Program) |
| `src/components/Footer.tsx` | Emerald Paints branding |
| `src/components/Quiz.tsx` | Complete quiz flow rewrite |
| `src/pages/QualifyPage.tsx` | Header text update |
| `index.html` | Metadata + pixel placeholders |

---

## Mobile Optimization Checklist

- [ ] All text `text-base` (16px) minimum
- [ ] All buttons `min-h-[44px]`
- [ ] All inputs `h-12` (48px)
- [ ] CTAs full-width on mobile (`w-full sm:w-auto`)
- [ ] ZIP input uses `inputMode="numeric"`
- [ ] No horizontal scroll on any section
- [ ] Logo in white container on dark backgrounds

---

## Quiz Flow Screens Checklist

- [ ] Step 1: Project Type (4 painting options)
- [ ] Step 2: Timeline (4 options)
- [ ] Timeline Clarification (60-day check)
- [ ] Timeline Disqualification (full details with phone/website)
- [ ] Step 3: ZIP Code (number keyboard)
- [ ] 8-second loading with 5 rotating messages
- [ ] ZIP Disqualification (out-of-state screen)
- [ ] Step 4: Contact Form (Name/Phone/Email)
- [ ] Success Screen (with emeraldpaints.com link)
- [ ] `fbq('track', 'Lead')` fires on successful submission

