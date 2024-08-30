import React from "react";
import { useCssHandles } from "vtex.css-handles";

interface ProductWrapperProps {
  children?: React.ReactNode;
}
const PRODUCT_WRAPPER_HANDLES = ["productWrapper"] as const;

export const ProductWrapper: React.FC<ProductWrapperProps> = ({ children }) => {
  const { handles } = useCssHandles(PRODUCT_WRAPPER_HANDLES);
  return <div className={handles.productWrapper}>{children}</div>;
};
