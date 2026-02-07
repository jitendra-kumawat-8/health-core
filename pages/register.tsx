import React from "react";
import { PageRenderer } from "@/src/appRenderers";
import { RegisterPageComponent } from "@/src/features/registerPage";

export default function RegisterPage() {
  return (
    <PageRenderer transparentHeader={true}>
      <RegisterPageComponent />
    </PageRenderer>
  );
}
