## Product Requirements Document – Health Core Home Page

### 1. Objective

Build a modern, trust-focused **Home Page** for the Health Core platform inspired by on-demand home healthcare products (like doctor-at-home services).

The goal of the home page is to:

* Clearly communicate **what the product does**
* Build **trust and credibility**
* Drive users to **primary action (Book / Get Care / Contact)**

This PRD only covers the **Home Page (/) route**.

---

### 2. Target Users

* Urban patients and families
* Elder care decision makers
* Working professionals seeking quick medical help
* Non-emergency healthcare needs

---

### 3. Primary CTA

* **“Book a Doctor”** (primary)
* Secondary: “Talk to Us”, “Get Care Now”, or “Contact Support”

CTA does not need backend integration yet — UI-only.

---

### 4. Page Sections (Functional Requirements)

#### 4.1 Hero Section

* Headline conveying **home healthcare + speed**
* Supporting subtext (1–2 lines)
* Primary CTA button
* Background:

  * Either solid background color OR
  * Placeholder stock image (random stock is acceptable)

---

#### 4.2 Services Overview

Display 4–6 service cards:

* Doctor at Home
* Nursing Care
* Diagnostics at Home
* Medicine Delivery
* Follow-ups / Care Coordination

Each card:

* Icon (MUI icons)
* Title
* Short description (1 line)

---

#### 4.3 Speed & Availability Highlight

* Highlight fast response and availability
* Example:

  * “Available 24×7”
  * “Quick doctor assignment”
* Display as stat cards or horizontal highlights

---

#### 4.4 How It Works

Simple 4-step flow:

1. Book a visit
2. Doctor assigned
3. Doctor visits home
4. Diagnosis & follow-up

This section should visually guide users and reduce anxiety.

---

#### 4.5 Trust & Credibility

Include:

* “Verified doctors”
* “Experienced professionals”
* Optional placeholder testimonials (fake text allowed for now)

---

#### 4.6 Contact / App CTA

* Secondary CTA encouraging:

  * App download (UI only)
  * Contact number
* Simple and clean

---

#### 4.7 Footer

* About
* Services
* Contact
* Privacy / Terms (links can be placeholders)

---

### 5. Non-Goals

* No backend integration
* No authentication
* No real booking flow
* No CMS

---

### 6. Technical Constraints

* Framework: **Next.js 15**
* Language: **TypeScript**
* UI: **Material UI (MUI v5)**
* Styling:

  * Prefer MUI `sx`
  * Tailwind allowed but not required
* Responsive design is mandatory

---

### 7. Success Criteria

* Page is responsive across screen sizes
* Clear visual hierarchy
* CTA is immediately visible
* Code is modular and readable
