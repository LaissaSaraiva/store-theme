import React from "react";
import { useCssHandles } from "vtex.css-handles";
import { ProductProps } from "./interfaces";

const PRODUCT_RATINGS_HANDLES = [
  "productRatings",
  "productRatingsImg",
] as const;

export const ProductRatings: React.FC<ProductProps> = ({ productRatings }) => {
  const { handles } = useCssHandles(PRODUCT_RATINGS_HANDLES);
  return (
    <div className={handles.productRatings}>
      <img
        className={handles.productRatingsImg}
        src={productRatings}
        alt="Estrelas de Avaliação Produto"
      />
    </div>
  );
};
