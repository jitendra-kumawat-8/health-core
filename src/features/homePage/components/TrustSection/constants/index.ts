export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Ramesh Iyer",
    role: "Son of Patient",
    text: "Booked a Doctor at Home visit for my father after his chest pain episode. The doctor arrived within the hour, did a full check-up, and referred us for diagnostics the same day. Saved us a stressful hospital trip.",
  },
  {
    id: "2",
    name: "Anjali Deshmukh",
    role: "Patient",
    text: "After my knee surgery I needed daily Nursing Care at home for wound dressing and injections. The same nurse came every morning for three weeks — punctual, gentle, and very professional. Recovery was so much easier at home.",
  },
  {
    id: "3",
    name: "Sunita Patil",
    role: "Daughter of Patient",
    text: "When my father had a severe stroke, the hospital asked us to shift him home with ICU-level monitoring. Ashokam set up a full ICU at Home — ventilator, monitors, round-the-clock nursing — all within 24 hours. The doctors coordinated everything seamlessly.",
  },
];

export const TRUST_POINTS = [
  "Verified and licensed doctors",
  "Experienced healthcare professionals",
  "HIPAA compliant and secure",
  "24/7 availability and support",
];
