import { Phone, AccessTime } from "@mui/icons-material";

export interface ContactMethod {
  id: string;
  icon: React.ComponentType;
  label: string;
  value: string;
  description?: string;
}

export const CONTACT_METHODS: ContactMethod[] = [
  {
    id: "phone",
    icon: Phone,
    label: "Phone",
    value: "+91 85277 23628",
    description: "Call us anytime",
  },
  {
    id: "availability",
    icon: AccessTime,
    label: "Availability",
    value: "24×7",
    description: "We're always here for you",
  },
];
