import React from "react";
import { useCssHandles } from "vtex.css-handles";
import { ProductButtonProps } from "./interfaces";

const PRODUCT_BUTTON_HANDLES = [
  "productButtonWrapper",
  "productButton",
] as const;

export const ProductButton: React.FC<ProductButtonProps> = ({ children }) => {
  const { handles } = useCssHandles(PRODUCT_BUTTON_HANDLES);
  console.log(children, "children");
  return (
    <div className={handles.productButtonWrapper}>
      {children}
      <button className={handles.productButton}>Comprar</button>
    </div>
  );
};
