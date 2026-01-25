## UI / UX Design Document – Ashokam Homecare Home Page

### 1. Design Philosophy

* Calm, clinical, trustworthy
* Minimal visual noise
* Healthcare-first tone
* Avoid aggressive marketing visuals

Use **background colors and spacing** instead of heavy imagery.
If images are used, use **generic healthcare stock images**.

---

### 2. Layout Structure

Page layout (top to bottom):

1. HeroSection
2. ServicesSection
3. SpeedHighlightsSection
4. HowItWorksSection
5. TrustSection
6. CTASection
7. Footer

Each section should be a **separate React component**.

---

### 3. Visual Style

#### Colors

* Primary: Blue / Teal medical tones
* Backgrounds:

  * Light neutral (grey-50 / grey-100)
  * Alternating sections with subtle contrast
* CTA buttons: Solid primary color

Avoid gradients initially.

---

#### Typography

* Use MUI Typography variants:

  * h1 / h2 for section titles
  * body1 / body2 for descriptions
* Line length should be readable (max-width applied)

---

### 4. Section-Level UX Details

#### 4.1 Hero Section

* Full-width section
* Left-aligned content (desktop)
* Stack vertically on mobile
* Background:

  * Solid color OR
  * Placeholder stock image with overlay

CTA button must be immediately visible without scrolling.

---

#### 4.2 Services Section

* Grid layout
* 2 columns on mobile
* 3–4 columns on desktop
* Cards with:

  * Icon
  * Title
  * Short description

Cards should have subtle elevation.

---

#### 4.3 Speed Highlights

* Horizontal stat cards
* Big numbers or short punchy text
* Use icons sparingly

---

#### 4.4 How It Works

* Step-based layout
* Numbered steps (1–4)
* Use dividers or arrows (optional)
* Vertical stacking on mobile

---

#### 4.5 Trust Section

* Simple reassurance copy
* Optional testimonial cards (static placeholder text)
* No real logos needed yet

---

#### 4.6 CTA Section

* Contrasting background color
* Short text
* One strong CTA button

---

### 5. Component Structure (Suggested)

```
/src
  /components
    /home
      HeroSection.tsx
      ServicesSection.tsx
      SpeedHighlights.tsx
      HowItWorks.tsx
      TrustSection.tsx
      CTASection.tsx
      Footer.tsx
```

Each component:

* Typed props
* No business logic
* UI-only

---

### 6. Responsiveness Rules

* Mobile-first
* Use MUI breakpoints
* Avoid fixed heights
* Buttons must be full-width on mobile

---

### 7. Accessibility

* Proper heading hierarchy
* Buttons must be keyboard-accessible
* Sufficient color contrast

---

### 8. Cursor Instructions

When generating code:

* Use **TypeScript**
* Use **MUI components**
* Keep styles inside `sx`
* Avoid overengineering
* Prefer readability over abstraction
