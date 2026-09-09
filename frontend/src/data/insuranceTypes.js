import {
  UserRound,
  UsersRound,
  HeartPulse,
  Building2,
  ShieldPlus,
} from "lucide-react";

export const insuranceTypes = [
  {
    id: "individual",
    title: "Individual Health Insurance",
    description:
      "Explore health insurance options designed for individuals looking for personal healthcare protection.",
    icon: UserRound,
  },
  {
    id: "family",
    title: "Family Health Insurance",
    description:
      "Explore coverage options that can help protect multiple members of your family under suitable plans.",
    icon: UsersRound,
  },
  {
    id: "senior",
    title: "Senior Citizen Insurance",
    description:
      "Learn about health insurance options available for older adults, subject to insurer requirements.",
    icon: HeartPulse,
  },
  {
    id: "critical",
    title: "Critical Illness Insurance",
    description:
      "Explore insurance options that may provide financial benefits for specified critical illnesses.",
    icon: ShieldPlus,
  },
  {
    id: "group",
    title: "Group Health Insurance",
    description:
      "Learn about health insurance options designed for employees, organizations, and groups.",
    icon: Building2,
  },
];
