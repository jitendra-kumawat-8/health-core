import {
  LocalHospital,
  Healing,
  Science,
  LocalPharmacy,
  Assignment,
  HealthAndSafety,
} from "@mui/icons-material";

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType;
}

export const SERVICES: Service[] = [
  {
    id: "doctor-at-home",
    title: "Doctor at Home",
    description: "Expert doctors visit your home for consultations and check-ups",
    icon: LocalHospital,
  },
  {
    id: "nursing-care",
    title: "Nursing Care",
    description: "Professional nursing services for post-operative and chronic care",
    icon: Healing,
  },
  {
    id: "diagnostics",
    title: "Diagnostics at Home",
    description: "Lab tests and diagnostic services delivered to your doorstep",
    icon: Science,
  },
  {
    id: "medicine-delivery",
    title: "Medicine Delivery",
    description: "Prescribed medications delivered quickly and safely",
    icon: LocalPharmacy,
  },
  {
    id: "follow-ups",
    title: "Follow-ups & Care Coordination",
    description: "Continuous care coordination and follow-up consultations",
    icon: Assignment,
  },
  {
    id: "health-monitoring",
    title: "Health Monitoring",
    description: "Regular health check-ups and preventive care services",
    icon: HealthAndSafety,
  },
];
