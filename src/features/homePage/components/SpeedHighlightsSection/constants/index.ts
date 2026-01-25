import { AccessTime, VerifiedUser, LocalHospital, Speed } from "@mui/icons-material";

export interface Stat {
  id: string;
  label: string;
  value: string;
  icon: React.ComponentType;
}

export const STATS: Stat[] = [
  {
    id: "availability",
    label: "Available 24×7",
    value: "24/7",
    icon: AccessTime,
  },
  {
    id: "response-time",
    label: "Quick Response",
    value: "< 2 hrs",
    icon: Speed,
  },
  {
    id: "verified-doctors",
    label: "Verified Doctors",
    value: "100%",
    icon: VerifiedUser,
  },
  {
    id: "experience",
    label: "Years of Experience",
    value: "10+",
    icon: LocalHospital,
  },
];
