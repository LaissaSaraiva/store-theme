import React from "react";
import { useCssHandles } from "vtex.css-handles";
import { ProductProps } from "./index";

const PRODUCT_NAME_HANDLES = ["productName"] as const;

export const ProductName: React.FC<ProductProps> = ({ productName }) => {
  const { handles } = useCssHandles(PRODUCT_NAME_HANDLES);
  return <div className={handles.productName}>{productName}</div>;
};
