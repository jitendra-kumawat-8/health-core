import { Phone, Email, AccessTime } from "@mui/icons-material";

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
    value: "+1 (555) 123-4567",
    description: "Call us anytime",
  },
  {
    id: "email",
    icon: Email,
    label: "Email",
    value: "support@ashokamhomecare.com",
    description: "Send us a message",
  },
  {
    id: "availability",
    icon: AccessTime,
    label: "Availability",
    value: "24×7",
    description: "We're always here for you",
  },
];
