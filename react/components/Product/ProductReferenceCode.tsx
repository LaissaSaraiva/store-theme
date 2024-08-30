import React from "react";
import { useCssHandles } from "vtex.css-handles";
import { ProductProps } from "./index";

const PRODUCT_REF_HANDLES = ["productReferenceCode"] as const;

export const ProductReferenceCode: React.FC<ProductProps> = ({
  productReferenceCode,
}) => {
  const { handles } = useCssHandles(PRODUCT_REF_HANDLES);
  return (
    <span className={handles.productReferenceCode}>{productReferenceCode}</span>
  );
};
