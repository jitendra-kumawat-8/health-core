import React from "react";
import { PageRenderer } from "@/src/appRenderers";
import { ServicesPageComponent } from "@/src/features/servicesPage";

export default function ServicesPage() {
  return (
    <PageRenderer transparentHeader={true}>
      <ServicesPageComponent />
    </PageRenderer>
  );
}

