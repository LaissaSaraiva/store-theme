import React from "react";
import { useCssHandles } from "vtex.css-handles";
import { ProductImageProps } from "./interfaces";

const PRODUCT_IMAGE_HANDLES = ["productImage", "productImg"] as const;

export const ProductImage: React.FC<ProductImageProps> = ({ src }) => {
  const { handles } = useCssHandles(PRODUCT_IMAGE_HANDLES);
  return (
    <div className={handles.productImage}>
      <img className={handles.productImg} src={src} alt="Imagem do Produto" />
    </div>
  );
};
