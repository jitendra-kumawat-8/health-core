import {
  MedicalServices,
  HealthAndSafety,
  Accessibility,
  Healing,
  MonitorHeart,
  Favorite,
} from "@mui/icons-material";
import { SvgIconProps } from "@mui/material";

export interface PricingItem {
  label: string;
  price: string;
}

export interface ServicesPageService {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<SvgIconProps>;
  pricing?: PricingItem[];
}

export const SERVICES_PAGE_SERVICES: ServicesPageService[] = [
  {
    id: "doctor-visit",
    title: "Doctor Visit",
    description:
      "Expert doctors visit your home for consultations, check-ups, and follow-up care.",
    icon: MedicalServices,
    pricing: [
      { label: "General Practitioner", price: "₹1,499" },
      { label: "Physician", price: "₹2,999" },
    ],
  },
  {
    id: "nursing-care",
    title: "Nursing Care",
    description:
      "Professional nursing services for post-operative, chronic, and daily medical care at home.",
    icon: HealthAndSafety,
    pricing: [
      { label: "Injections (30 mins)", price: "₹499" },
      { label: "Foleys Catheter", price: "₹999" },
      { label: "Ryles Tube", price: "₹999" },
    ],
  },
  {
    id: "physiotherapy",
    title: "Physiotherapy",
    description:
      "At-home physiotherapy sessions for rehabilitation, mobility, and pain management.",
    icon: Accessibility,
    pricing: [
      { label: "One Session", price: "₹599" },
    ],
  },
  {
    id: "dresser",
    title: "Dresser",
    description:
      "Trained dressers for daily wound care, injections, and post-surgical dressing changes.",
    icon: Healing,
    pricing: [
      { label: "Small Dressing", price: "₹299" },
      { label: "Large Dressing", price: "₹499" },
    ],
  },
  {
    id: "icu-at-home",
    title: "ICU at Home",
    description:
      "Full ICU setup at home — ventilator, monitors, and round-the-clock nursing support.",
    icon: MonitorHeart,
  },
  {
    id: "care-and-wellness",
    title: "Care and Wellness",
    description:
      "Ongoing health monitoring, regular follow-ups, preventive check-ups, and holistic wellness support.",
    icon: Favorite,
  },
];

