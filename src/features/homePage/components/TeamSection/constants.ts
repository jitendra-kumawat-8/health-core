export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  description: string;
}

export const TEAM_HEADING = "The Experts Behind Your Care";
export const TEAM_SUBTEXT =
  "Our team of verified doctors, nurses, and specialists bring years of clinical experience right to your doorstep.";

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "rahul-arora",
    name: "Dr. Rahul Arora",
    role: "MD Physician & Diabetes Specialist",
    image: "/team/rahul-arora.jpeg",
    description:
      "Dr. Rahul Arora is a highly experienced MD Physician with DNB in Family Medicine, over 20 years in internal medicine, and Fellowship in Critical Care Medicine. He holds a PG Diploma in Advanced Diabetes from Harvard Medical School. He serves as Visiting Consultant at Khetrapal Hospital, Dashmesh Hospital, and Mata Roop Rani Maggo Hospital, and runs Vedanta Clinic in Shiv Nagar.",
  },
  {
    id: "aditya-saroha",
    name: "Dr. Aditya Saroha",
    role: "ICU Consultant & Critical Care Specialist",
    image: "/team/aditya-saroha.jpeg",
    description:
      "Dr. Aditya Saroha is an ICU Consultant and Critical Care Specialist with over 10 years of experience in managing critically ill patients. He focuses on evidence-based treatment, timely diagnosis, organ support, and compassionate communication with families.",
  },
  {
    id: "pawan-kumar",
    name: "Dr. Pawan Kumar",
    role: "Physiotherapist",
    image: "/team/pawan-kumar.jpeg",
    description:
      "Dr. Pawan Kumar is a skilled physiotherapist dedicated to restoring mobility and improving quality of life. With expertise in musculoskeletal rehabilitation, neurological physiotherapy, and pain management, he delivers personalized home-based treatment plans for patients of all ages.",
  },
  {
    id: "raju-jha",
    name: "Raju Jha",
    role: "Diploma in OT Technology — 10 Years Experience",
    image: "/team/raju-jha.jpeg",
    description:
      "Experienced OT professional providing hospital-level nursing and advanced dressing care at home. Skilled in post-operative dressing, bed sore management, diabetic foot ulcer care, IV cannulation, injections, catheterization, and emergency patient handling. Strict sterile technique, infection control, and patient safety ensured.",
  },
  {
    id: "sandeep-kumar",
    name: "Mr. Sandeep Kumar",
    role: "Senior Nursing Officer — 8+ Years Experience",
    image: "/team/sandeep-kumar.jpeg",
    description:
      "Mr. Sandeep Kumar is a Senior Nursing Officer with over 8 years of clinical experience across hospital and homecare settings. He specializes in patient monitoring, medication administration, wound care, and post-operative nursing — ensuring compassionate and professional care at every step.",
  },
];
