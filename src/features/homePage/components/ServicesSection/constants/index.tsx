import { Box } from "@mui/material";
import {
  MedicalServices,
  HealthAndSafety,
  Accessibility,
  Healing,
  MonitorHeart,
  Favorite,
} from "@mui/icons-material";

export interface Service {
  id: string;
  title: string;
  description: string;
  serviceType: string;
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
      <Box className="icon-bg" sx={{ width: 48, height: 48, borderRadius: "50%", bgcolor: "#E6F2F4", display: "flex", alignItems: "center", justifyContent: "center", transition: "background-color 0.3s ease" }}>
        <MedicalServices sx={{ fontSize: 28, color: "#1F7A8C", transition: "color 0.3s ease" }} />
      </Box>
    ),
  },
  {
    id: "nursing-care",
    title: "Nursing Care",
    serviceType: "Nursing Care",
    description:
      "Professional nursing services for post-operative, chronic, and daily medical care at home",
    icon: (
      <Box className="icon-bg" sx={{ width: 48, height: 48, borderRadius: "50%", bgcolor: "#E8F5E9", display: "flex", alignItems: "center", justifyContent: "center", transition: "background-color 0.3s ease" }}>
        <HealthAndSafety sx={{ fontSize: 28, color: "#4CAF50", transition: "color 0.3s ease" }} />
      </Box>
    ),
  },
  {
    id: "physiotherapy",
    title: "Physiotherapy",
    serviceType: "Physiotherapy",
    description:
      "At-home physiotherapy sessions for rehabilitation, mobility, and pain management",
    icon: (
      <Box className="icon-bg" sx={{ width: 48, height: 48, borderRadius: "50%", bgcolor: "#FFF8E1", display: "flex", alignItems: "center", justifyContent: "center", transition: "background-color 0.3s ease" }}>
        <Accessibility sx={{ fontSize: 28, color: "#D4AF37", transition: "color 0.3s ease" }} />
      </Box>
    ),
  },
  {
    id: "dresser",
    title: "Dresser",
    serviceType: "Dresser",
    description:
      "Trained dressers for daily wound care, injections, and post-surgical dressing changes",
    icon: (
      <Box className="icon-bg" sx={{ width: 48, height: 48, borderRadius: "50%", bgcolor: "#E6F2F4", display: "flex", alignItems: "center", justifyContent: "center", transition: "background-color 0.3s ease" }}>
        <Healing sx={{ fontSize: 28, color: "#1F7A8C", transition: "color 0.3s ease" }} />
      </Box>
    ),
  },
  {
    id: "icu-at-home",
    title: "ICU at Home",
    serviceType: "ICU at Home",
    description:
      "Full ICU setup at home — ventilator, monitors, and round-the-clock nursing support",
    icon: (
      <Box className="icon-bg" sx={{ width: 48, height: 48, borderRadius: "50%", bgcolor: "#FFEBEE", display: "flex", alignItems: "center", justifyContent: "center", transition: "background-color 0.3s ease" }}>
        <MonitorHeart sx={{ fontSize: 28, color: "#EF4444", transition: "color 0.3s ease" }} />
      </Box>
    ),
  },
  {
    id: "care-and-wellness",
    title: "Care and Wellness",
    serviceType: "Care and Wellness",
    description:
      "Ongoing health monitoring, regular follow-ups, preventive check-ups, and holistic wellness support",
    icon: (
      <Box className="icon-bg" sx={{ width: 48, height: 48, borderRadius: "50%", bgcolor: "#F3E5F5", display: "flex", alignItems: "center", justifyContent: "center", transition: "background-color 0.3s ease" }}>
        <Favorite sx={{ fontSize: 28, color: "#4CAF50", transition: "color 0.3s ease" }} />
      </Box>
    ),
  },
];
