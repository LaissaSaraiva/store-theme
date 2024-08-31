import React from "react";
import { useCssHandles } from "vtex.css-handles";
import { ProductImageProps } from "./interfaces";

const PRODUCT_WISHLIST_HANDLES = ["productWishlist", "iconWishlist"] as const;

export const ProductWishlist: React.FC<ProductImageProps> = ({ src }) => {
  const { handles } = useCssHandles(PRODUCT_WISHLIST_HANDLES);
  return (
    <div className={handles.productWishlist}>
      <img className={handles.iconWishlist} src={src} alt="Ícone de wishlist" />
      <span>Favoritos</span>
    </div>
  );
};
