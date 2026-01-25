import React from "react";
import { PageRenderer } from "@/src/appRenderers";
import { ContactPageComponent } from "@/src/features/contactPage";

export default function ContactPage() {
  return (
    <PageRenderer transparentHeader={true}>
      <ContactPageComponent />
    </PageRenderer>
  );
}
