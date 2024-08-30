import React from "react";
import { useCssHandles } from "vtex.css-handles";
import { ProductPriceProps } from "./interfaces";

const PRODUCT_PRICE_HANDLES = ["productPrice"] as const;

export const ProductPrice: React.FC<ProductPriceProps> = ({ price }) => {
  const { handles } = useCssHandles(PRODUCT_PRICE_HANDLES);

  const convertedPrice = Number(price);
  const formattedPrice = convertedPrice.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return <span className={handles.productPrice}>{formattedPrice}</span>;
};
