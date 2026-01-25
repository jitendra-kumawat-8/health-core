import { useRouter } from "next/router";
import { ROUTES } from "../../../../../constants/routes";

export const handleBookDoctor = (): void => {
  if (typeof window !== "undefined") {
    window.location.href = ROUTES.BOOKING;
  }
};

export const handleTalkToUs = (): void => {
  if (typeof window !== "undefined") {
    window.location.href = ROUTES.CONTACT;
  }
};
