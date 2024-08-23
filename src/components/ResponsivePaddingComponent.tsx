// src/components/ResponsivePaddingContainer.tsx
import React, { ReactNode } from "react";
import useWindowWidth from "../hooks/useWindowWidth";

interface Props {
  children: ReactNode;
}

const ResponsivePaddingContainer: React.FC<Props> = ({ children }) => {
  const width = useWindowWidth();

  const containerStyle = {
    paddingLeft: `${Math.max(5, width * 0.25)}px`, // Customize this formula as needed
    paddingRight: `${Math.max(5, width * 0.1)}px`, // Add symmetrical right padding if desired
  };

  return <div style={containerStyle}>{children}</div>;
};

export default ResponsivePaddingContainer;
