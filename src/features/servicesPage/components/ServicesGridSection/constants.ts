import {
  LocalHospital,
  Healing,
  Science,
  LocalPharmacy,
  Assignment,
} from "@mui/icons-material";
import { SvgIconProps } from "@mui/material";

export interface ServicesPageService {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<SvgIconProps>;
}

export const SERVICES_PAGE_SERVICES: ServicesPageService[] = [
  {
    id: "doctor-at-home",
    title: "Doctor at Home",
    description:
      "Consult experienced doctors from the comfort of your home for non‑emergency care.",
    icon: LocalHospital,
  },
  {
    id: "nursing-care",
    title: "Nursing Care",
    description:
      "Qualified nurses for post‑operative care, chronic conditions, and recovery support.",
    icon: Healing,
  },
  {
    id: "diagnostics",
    title: "Diagnostics at Home",
    description:
      "Lab tests, sample collection, and basic diagnostics done safely at home.",
    icon: Science,
  },
  {
    id: "medicine-delivery",
    title: "Medicine Delivery",
    description:
      "Fast, reliable home delivery for your prescribed medications and refills.",
    icon: LocalPharmacy,
  },
  {
    id: "follow-up-care",
    title: "Follow‑up Care",
    description:
      "Coordinated follow‑ups so you never miss a check‑in or dosage change.",
    icon: Assignment,
  },
];

