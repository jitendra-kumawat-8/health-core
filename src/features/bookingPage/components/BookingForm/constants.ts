export const ICU_TYPES = [
  { value: "General", label: "General ICU" },
  { value: "Cardiac", label: "Cardiac ICU" },
  { value: "Neuro", label: "Neuro ICU" },
  { value: "Neonatal", label: "Neonatal ICU" },
];

export const YES_NO_OPTIONS = [
  { value: "Yes", label: "Yes" },
  { value: "No", label: "No" },
];

export const ADMISSION_URGENCY_OPTIONS = [
  { value: "Immediate", label: "Immediate" },
  { value: "Within 24 hrs", label: "Within 24 hours" },
  { value: "Planned", label: "Planned" },
];

export const GENDER_OPTIONS = [
  { value: "Male", label: "Male" },
  { value: "Female", label: "Female" },
  { value: "Other", label: "Other" },
];

export const CITIES = [
  { value: "Mumbai", label: "Mumbai" },
  { value: "Delhi", label: "Delhi" },
  { value: "Bangalore", label: "Bangalore" },
  { value: "Hyderabad", label: "Hyderabad" },
  { value: "Chennai", label: "Chennai" },
  { value: "Kolkata", label: "Kolkata" },
  { value: "Pune", label: "Pune" },
  { value: "Ahmedabad", label: "Ahmedabad" },
];

export interface BookingFormData {
  patientName: string;
  patientAge: string;
  gender: string;
  diagnosis: string;
  icuType: string;
  ventilatorRequired: string;
  oxygenSupportRequired: string;
  expectedDuration: string;
  admissionUrgency: string;
  preferredHospital: string;
  preferredCity: string;
  contactName: string;
  phoneNumber: string;
  email: string;
  additionalNotes: string;
}
