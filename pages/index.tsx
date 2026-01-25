import React from "react";
import { PageRenderer } from "@/src/appRenderers";
import { HomePageComponent } from "@/src/features/homePage";

export default function Home() {
  return (
    <PageRenderer transparentHeader={true}>
      <HomePageComponent />
    </PageRenderer>
  );
}
