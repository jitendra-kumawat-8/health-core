export interface Service {
  id: string;
  title: string;
  description: string;
  serviceType: string; // matches SERVICE_TYPE_OPTIONS value
  icon: React.ReactNode;
}

export const SERVICES: Service[] = [
  {
    id: "doctor-visit",
    title: "Doctor Visit",
    serviceType: "Doctor Visit",
    description:
      "Expert doctors visit your home for consultations, check-ups, and follow-up care",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="24" fill="#E6F2F4" />
        <path
          d="M24 14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"
          fill="#1F7A8C"
        />
        <path
          d="M24 24c-4 0-8 2-8 4v2h16v-2c0-2-4-4-8-4z"
          fill="#1F7A8C"
        />
        <path d="M32 18h2v4h4v2h-4v4h-2v-4h-4v-2h4v-4z" fill="#4CAF50" />
      </svg>
    ),
  },
  {
    id: "nursing-care",
    title: "Nursing Care",
    serviceType: "Nursing Care",
    description:
      "Professional nursing services for post-operative, chronic, and daily medical care at home",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="24" fill="#E8F5E9" />
        <path
          d="M24 12l-8 8v12h16V20l-8-8z"
          fill="#4CAF50"
        />
        <rect x="22" y="18" width="4" height="10" rx="1" fill="#FFFFFF" />
        <rect x="19" y="21" width="10" height="4" rx="1" fill="#FFFFFF" />
      </svg>
    ),
  },
  {
    id: "physiotherapy",
    title: "Physiotherapy",
    serviceType: "Physiotherapy",
    description:
      "At-home physiotherapy sessions for rehabilitation, mobility, and pain management",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="24" fill="#FFF8E1" />
        <circle cx="24" cy="16" r="3" fill="#D4AF37" />
        <path
          d="M20 22h8l2 6h-4l1 8h-6l1-8h-4l2-6z"
          fill="#D4AF37"
        />
        <path
          d="M30 20c2-1 4 0 5 2"
          stroke="#B8941F"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: "dresser",
    title: "Dresser",
    serviceType: "Dresser",
    description:
      "Trained dressers for daily wound care, injections, and post-surgical dressing changes",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="24" fill="#E6F2F4" />
        <rect x="14" y="18" width="20" height="14" rx="3" fill="#1F7A8C" />
        <rect x="18" y="14" width="12" height="6" rx="2" fill="none" stroke="#4CAF50" strokeWidth="2" />
        <rect x="22" y="21" width="4" height="8" rx="1" fill="#FFFFFF" />
        <rect x="20" y="23" width="8" height="4" rx="1" fill="#FFFFFF" />
      </svg>
    ),
  },
  {
    id: "icu-at-home",
    title: "ICU at Home",
    serviceType: "ICU at Home",
    description:
      "Full ICU setup at home — ventilator, monitors, and round-the-clock nursing support",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="24" fill="#FFEBEE" />
        <rect x="13" y="16" width="22" height="16" rx="3" fill="#1F7A8C" />
        <polyline
          points="16,26 20,22 22,25 26,19 28,23 32,20"
          stroke="#4CAF50"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <circle cx="24" cy="36" r="2" fill="#EF4444" />
        <rect x="23" y="32" width="2" height="3" fill="#EF4444" />
      </svg>
    ),
  },
  {
    id: "care-and-wellness",
    title: "Care and Wellness",
    serviceType: "Care and Wellness",
    description:
      "Ongoing health monitoring, regular follow-ups, preventive check-ups, and holistic wellness support",
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="24" fill="#F3E5F5" />
        <path
          d="M24 34s-10-7.35-10-14a6 6 0 0112 0 6 6 0 0112 0c0 6.65-10 14-10 14z"
          fill="#4CAF50"
        />
        <path
          d="M22 24v-4h4v4h4v4h-4v4h-4v-4h-4v-4h4z"
          fill="#FFFFFF"
        />
      </svg>
    ),
  },
];
