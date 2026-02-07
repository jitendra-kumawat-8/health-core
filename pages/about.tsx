import React from "react";
import { PageRenderer } from "@/src/appRenderers";
import { AboutPageComponent } from "@/src/features/aboutPage";

export default function AboutPage() {
  return (
    <PageRenderer transparentHeader={true}>
      <AboutPageComponent />
    </PageRenderer>
  );
}
