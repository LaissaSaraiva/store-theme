import React from "react";

interface ProductWrapperProps {
  children?: React.ReactNode;
}
export const ProductWrapper: React.FC<ProductWrapperProps> = ({ children }) => {
  return <div>{children}</div>;
};
