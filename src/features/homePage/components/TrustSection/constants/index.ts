export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    role: "Patient",
    text: "The doctor arrived within 2 hours and provided excellent care. Highly recommend their services!",
  },
  {
    id: "2",
    name: "Michael Chen",
    role: "Family Member",
    text: "Professional, caring, and efficient. Made it so easy to get medical care for my elderly mother.",
  },
  {
    id: "3",
    name: "Priya Sharma",
    role: "Patient",
    text: "The follow-up care and coordination was outstanding. Felt well taken care of throughout.",
  },
];

export const TRUST_POINTS = [
  "Verified and licensed doctors",
  "Experienced healthcare professionals",
  "HIPAA compliant and secure",
  "24/7 availability and support",
];
