import React, { forwardRef } from "react";

interface SectionContainerProps {
  children: React.ReactNode;
  isLast?: boolean;
}

const SectionContainer = forwardRef<HTMLDivElement, SectionContainerProps>(
  ({ isLast, children }, ref) => (
    <div ref={ref} style={{ scrollMarginTop: "100px", marginBottom: `${!isLast ? "10rem" : ""}` }}>
      {children}
    </div>
  )
);

export default SectionContainer;
