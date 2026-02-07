export const GENDER_OPTIONS = [
  { value: "Male", label: "Male" },
  { value: "Female", label: "Female" },
  { value: "Other", label: "Other" },
];

export interface RegisterFormData {
  fullName: string;
  phoneNumber: string;
  email: string;
  gender: string;
  areaOfOperation: string;
  medicalId: string;
}
