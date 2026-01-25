export interface Step {
  id: string;
  number: number;
  title: string;
  description: string;
}

export const STEPS: Step[] = [
  {
    id: "book",
    number: 1,
    title: "Book a Visit",
    description: "Schedule an appointment through our platform or call us directly",
  },
  {
    id: "assign",
    number: 2,
    title: "Doctor Assigned",
    description: "We assign a verified doctor based on your location and needs",
  },
  {
    id: "visit",
    number: 3,
    title: "Doctor Visits Home",
    description: "Our doctor arrives at your home at the scheduled time",
  },
  {
    id: "followup",
    number: 4,
    title: "Diagnosis & Follow-up",
    description: "Receive diagnosis, treatment plan, and ongoing care coordination",
  },
];
