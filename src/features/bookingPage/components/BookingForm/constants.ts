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

export const SERVICE_TYPE_OPTIONS = [
  { value: "Physiotherapy", label: "Physiotherapy" },
  { value: "Doctor Visit", label: "Doctor Visit" },
  { value: "Nursing Care", label: "Nursing Care" },
  { value: "Dresser", label: "Dresser" },
  { value: "ICU at Home", label: "ICU at Home" },
  { value: "Care and Wellness", label: "Care and Wellness" },
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
  serviceType: string;
  diagnosis: string;
  visitDate: string;
  visitTime: string;
  preferredHospital: string;
  address: string;
  phoneNumber: string;
  email: string;
  additionalNotes: string;
}
