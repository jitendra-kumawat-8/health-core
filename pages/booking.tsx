import React from "react";
import { PageRenderer } from "@/src/appRenderers";
import { BookingPageComponent } from "@/src/features/bookingPage";

export default function BookingPage() {
  return (
    <PageRenderer transparentHeader={true}>
      <BookingPageComponent />
    </PageRenderer>
  );
}
