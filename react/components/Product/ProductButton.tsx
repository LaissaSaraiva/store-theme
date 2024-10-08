import React from "react";
import { useCssHandles } from "vtex.css-handles";
import { ProductButtonProps } from "./interfaces";

const PRODUCT_BUTTON_HANDLES = [
  "productButtonWrapper",
  "productButton",
] as const;

export const ProductButton: React.FC<ProductButtonProps> = ({
  children,
  onButtonClick,
}) => {
  const { handles } = useCssHandles(PRODUCT_BUTTON_HANDLES);
  return (
    <div className={handles.productButtonWrapper}>
      {children}
      <button className={handles.productButton} onClick={onButtonClick}>
        Comprar
      </button>
    </div>
  );
};
