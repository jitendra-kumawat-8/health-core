import React from "react";
import { Layout } from "../components/layout/Layout";

export interface PageRendererProps {
  children: React.ReactNode;
  transparentHeader?: boolean;
  showFooter?: boolean;
}

export const PageRenderer: React.FC<PageRendererProps> = ({
  children,
  transparentHeader = false,
  showFooter = true,
}) => {
  return (
    <Layout transparentHeader={transparentHeader} showFooter={showFooter}>
      {children}
    </Layout>
  );
};
